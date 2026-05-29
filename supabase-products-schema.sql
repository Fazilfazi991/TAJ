create table if not exists public.products (
  id text primary key,
  source text not null check (source in ('default', 'custom')),
  category text not null,
  product_name text not null,
  image_src text not null default '',
  is_deleted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_products_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at
before update on public.products
for each row execute function public.set_products_updated_at();

alter table public.products enable row level security;

drop policy if exists "Allow public product reads" on public.products;
create policy "Allow public product reads"
on public.products for select
to anon
using (true);

drop policy if exists "Allow dashboard product inserts" on public.products;
create policy "Allow dashboard product inserts"
on public.products for insert
to anon
with check (true);

drop policy if exists "Allow dashboard product updates" on public.products;
create policy "Allow dashboard product updates"
on public.products for update
to anon
using (true)
with check (true);

drop policy if exists "Allow dashboard product deletes" on public.products;
create policy "Allow dashboard product deletes"
on public.products for delete
to anon
using (true);
