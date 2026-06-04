import { z } from 'zod';

export const productSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  sku: z.string(),
  quantity: z.number(),
  unit: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const productsSchema = z.array(productSchema);
export type Product = z.infer<typeof productSchema>;
