import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import type { Product } from '@/entities/product/model/schema';

type ProductTableProps = {
  products: Product[];
  loading: boolean;
};

const columns: ColumnsType<Product> = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Артикул',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Количество',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Ед. изм.',
    dataIndex: 'unit',
    key: 'unit',
  },
];

export const ProductTable = ({ products, loading }: ProductTableProps) => {
  return (
    <Table<Product>
      rowKey="id"
      dataSource={products}
      columns={columns}
      loading={loading}
      pagination={{
        pageSize: 20,
      }}
    />
  );
};
