'use client';

import { useSearchParams } from 'next/navigation';
import ProductGrid from './ProductGrid';
import Sidebar from './Sidebar';

export default function HomeContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const minPrice = parseInt(searchParams.get('min') || '0');
  const maxPrice = parseInt(searchParams.get('max') || '1000');
  const search = searchParams.get('search')?.toLowerCase() || '';

  return (
    <div className="flex bg-blue-500 flex-1 px-4 md:px-8 lg:px-16 py-6 gap-4">
      <Sidebar />
      <ProductGrid 
        category={category}
        minPrice={minPrice}
        maxPrice={maxPrice}
        search={search}
      />
    </div>
  );
}
