import { supabase } from '@/shared/lib/supabaseClient';
import { productsSchema } from '../model/schema';

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return productsSchema.parse(data);
};
