import { ImageTypes } from '@/types/ImageType'
import { SupabaseService } from '../services/BaseService'
export const ImageService = new SupabaseService<ImageTypes>('image', 'image_id')
