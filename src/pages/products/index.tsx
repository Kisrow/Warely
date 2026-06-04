import { useQuery } from '@tanstack/react-query';
import { Alert } from 'antd';

import { getProducts } from '@/entities/product/api/getProducts';
import { ProductTable } from '@/widgets/products-table/ProductTable';

export const ProductsPage = () => {
  const {
    data = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (error) return <Alert type="error" description="Не удалось загрузить товары" />;

  return (
    <>
      <ProductTable products={data} loading={isPending} />
    </>
  );
};
