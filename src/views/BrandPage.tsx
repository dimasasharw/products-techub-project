import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";

import { brandObjects } from "@/constants";

import Card from "@/components/Card";

import type { BrandType } from "@/types";

export default function BrandPage() {
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(brandObjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = brandObjects.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-slate-400 mb-20">Brands</h1>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {currentItems?.map((brand: BrandType, index: number) => (
          <Card
            key={index}
            item={brand}
            width={120}
            height={200}
            onClick={() => navigate(`/brands/${brand?.title}`)}
          />
        ))}
      </div>

      <div className="flex sticky overflow-x-auto sm:justify-center bottom-0 mt-6 z-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          showIcons
        />
      </div>
    </div>
  );
}
