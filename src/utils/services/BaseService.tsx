import type { PostgrestError } from '@supabase/supabase-js';

import type { BaseType, QueryOptions, RelationshipOption } from '../../types/BaseType';
import { createClient } from '../supabase/client';

export class SupabaseService<T extends BaseType> {
  public supabase: ReturnType<typeof createClient>;
  private table: string;
  private primaryKey: string = 'id';

  constructor(tableName: string, primaryKey?: string) {
    this.supabase = createClient();
    this.table = tableName;
    this.primaryKey = primaryKey || 'id';
  }

  private buildRelationshipString(relationship: RelationshipOption, is_filtered: boolean): string {
    let relationStr = relationship.table + ((relationship?.join_column !== undefined) ? `:${relationship.join_column}` : '') + ((relationship.join_method ?? '') || (relationship.is_inner_join_filter && is_filtered ? '!inner' : ''));

    // Add field selection if specified
    if (relationship.select?.length) {
      relationStr += `(${relationship.select.join(',')}`
    } else {
      relationStr += '(*'
    }

    // Add nested relationships if they exist
    if (relationship.nested?.length) {
      relationship.nested.forEach(nested => {
        relationStr += `,${this.buildRelationshipString(nested, is_filtered)}`;
      });
    }

    relationStr += ')';

    return relationStr;
  }

  private buildQuery(options?: QueryOptions) {
    const selectFields = options?.select?.join(',') || '*';

    //check for all filters are undefined
    if (options?.filter && Object.values(options.filter).every(value => value === undefined || value === null || value === '')) {
      options.filter = undefined;
    }

    const relationshipStrings = options?.relationships?.map(rel =>
      this.buildRelationshipString(rel, options?.filter !== undefined)
    ).join(',');

    const count = options?.include_count ? 'exact' : undefined;

    let query = this.supabase.from(this.table).select(
      relationshipStrings ? `${selectFields},${relationshipStrings}` : selectFields, { count }
    );

    // Add filters
    if (options?.filter) {
      Object.entries(options.filter).forEach(([key, value]) => {
        if (value === undefined) return;

        if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
          // Handle array of objects
          query = query.in(key, value);
        }
        else if (typeof value === 'object' && value !== null) {
          // Handle special operators like gt, lt, etc.
          Object.entries(value).forEach(([operator, operandValue]) => {
            query = query.filter(key, operator, operandValue);
          });
        }
        else if (typeof value === 'string' && value.length === 36 && value.includes('-') && key.includes('_id')) {
          query = query.eq(key, value);
        }
        else if (typeof value === 'string' && value.includes(',')) {
          query = query.in(key, value.split(','));
        }
        else if (typeof value === 'string') {
          query = query.ilike(key, `%${value}%`);
        }
        else {
          query = query.eq(key, value);
        }
      });
    }

    //Add in query
    if (options?.in) {
      Object.entries(options.in).forEach(([key, value]) => {
        if (value === undefined) return;

        query = query.in(key, value);
      });
    }

    //Add match
    if (options?.match) {
      Object.entries(options.match).forEach(([key, value]) => {
        if (value === undefined) return;

        if (typeof value === 'string') {
          query = query.match({ [key]: `%${value}%` });
        }
        else {
          query = query.match({ [key]: value });
        }
      });
    }

    // Add sorting
    if (options?.sort?.length) {
      options.sort.forEach(({ column, ascending = true }) => {
        query = query.order(column, { ascending });
      });
    }

    // Add pagination
    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(options.offset, (options.offset + (options.limit || 10)) - 1);
    }

    return query;
  }

  async findOne(id: string, options?: QueryOptions): Promise<T | undefined> {
    const { data, error } = await this.buildQuery(options).eq(this.primaryKey, id).single();

    if (error) throw error;

    return data as unknown as T;
  }

  async find(options?: QueryOptions): Promise<T[]> {
    const { data, error } = await this.buildQuery(options);

    if (error) throw error;

    return data as unknown as T[];
  }

  async findPageCustomize(options?: QueryOptions): Promise<{ data: T[]; totalRecords: number }> {
    if (options && options.include_count === undefined) {
      options.include_count = true;
    }

    const { data, error, count } = await this.buildQuery(options);

    if (error) throw error;

    return { data: data as unknown as T[], totalRecords: count ?? 0 };
  }
  async findPage(page: number, pageSize: number, request: Partial<T>): Promise<{ data: T[]; totalRecords: number }> {

    const options: QueryOptions = {
      limit: pageSize,
      offset: (page - 1) * pageSize,
      filter: request,
      include_count: true
    }

    const { data, error, count } = await this.buildQuery(options);

    if (error) throw error;

    return { data: data as unknown as T[], totalRecords: count ?? 0 };
  }

  async create(item: Partial<T>): Promise<{ data: T | null; error: PostgrestError | null }> {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert(item)
      .select()
      .single();

    return { data: data, error };
  }

  async update(id: string, item: Partial<T>): Promise<{ data: T | null; error: PostgrestError | null }> {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(item)
      .eq(this.primaryKey, id)
      .select()
      .single();

    return { data, error };
  }

  async delete(id: string): Promise<{ data: T[] | null; error: PostgrestError | null }> {
    const { data, error } = await this.supabase
      .from(this.table)
      .delete()
      .eq(this.primaryKey, id);

    return { data, error };
  }

}
