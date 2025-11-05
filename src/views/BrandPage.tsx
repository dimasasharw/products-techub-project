// import { useMemo, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import Card from "../components/Card";
import { brandObjects } from "../constants/brands";
import { Pagination } from "flowbite-react";

// import { getBrandLogo } from "../helpers/generalHelpers";
// import { fetchProducts, type ProductParams } from "../helpers/fetchingHelpers";

export default function BrandPage() {
  // const [page, setPage] = useState(1);
  // const [category, setCategory] = useState<string | undefined>();
  // const [brand, setBrand] = useState<string | undefined>();

  // const limit = 194;

  // const params: ProductParams = {
  //   limit,
  //   skip: (page - 1) * 12,
  //   category,
  //   brand,
  // };

  // const { data } = useQuery<any>({
  //   queryKey: ["product-list", params],
  //   queryFn: () => fetchProducts(params),
  // });

  // const productList = useMemo(() => data?.products ?? [], [data]);
  // const total = useMemo(() => data?.total ?? 0, [data]);

  // const brands = [
  //   ...new Set(productList?.map((item: any) => item.brand).filter(Boolean)),
  // ] as string[];

  // const brandObjectss = brands.map((brand: string) => ({
  //   brand,
  //   logo: getBrandLogo(brand || ""),
  // }));

  // console.log(productList.find((item: any) => item.brand === "SpeedMaster"));

  // --- Konfigurasi Pagination ---
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(brandObjects.length / itemsPerPage);

  // Hitung index awal dan akhir untuk slice data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = brandObjects.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col h-full items-center  bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-slate-400 mb-6">Brands</h1>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {currentItems?.map((brand: any, index: number) => (
          <Card key={index} item={brand} width={120} height={200} />
        ))}
      </div>

      {/* Pagination */}
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
