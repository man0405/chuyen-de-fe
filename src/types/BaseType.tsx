export interface BaseType {
  created_at: Date;
  created_by: string;
}

export interface QueryOptions {
  select?: string[];
  filter?: Record<string, any>;
  match?: Record<string, any>;
  in?: Record<string, any>;
  sort?: { column: string; ascending?: boolean }[];
  limit?: number;
  offset?: number;
  include_count?: boolean;
  relationships?: RelationshipOption[];
}

export interface RelationshipOption {
  table: string;
  join_method?: "inner" | "left";
  join_column?: string;
  select?: string[];
  filter?: Record<string, any>;
  is_inner_join_filter?: boolean;
  sort?: { column: string; ascending?: boolean }[];
  nested?: RelationshipOption[];
}
