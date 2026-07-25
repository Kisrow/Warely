alter table public.products
drop column if exists quantity;

create table public.warehouses(
	id uuid primary key default gen_random_uuid(),
	name text not null,
	address text not null,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now()
);

create table public.stocks(
	id uuid primary key default gen_random_uuid(),
	product_id uuid not null
		references public.products(id),
	warehouse_id uuid not null
		references public.warehouses(id),
	quantity integer not null default 0,
	created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.stock_changes(
	id uuid primary key default gen_random_uuid(),
	product_id uuid not null
		references public.products(id),
	quantity integer not null,
	from_warehouse_id uuid 
		references public.warehouses(id),
	to_warehouse_id uuid
		references public.warehouses(id),
	created_at timestamptz not null default now()
);
