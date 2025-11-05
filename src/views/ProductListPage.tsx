import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";

import Card from "../components/Card";

import { fetchProducts, type ProductParams } from "../helpers/fetchingHelpers";

export default function ProductListPage() {
  const navigate = useNavigate();

  const { brand, category } = useParams();

  let filterType = "";
  let filterValue = "";

  if (brand) {
    filterType = "brand";
    filterValue = decodeURIComponent(brand);
  } else if (category) {
    filterType = "category";
    filterValue = decodeURIComponent(category);
  }

  const [page, setPage] = useState(1);

  const limit = brand ? 194 : 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const params: ProductParams = {
    limit,
    skip: (page - 1) * 12,
    // category,
    // brand,
  };

  const { data } = useQuery<any>({
    queryKey: ["product-list", params],
    queryFn: () => fetchProducts(params),
  });

  const productList = useMemo(
    () =>
      brand
        ? data?.products?.filter((item: any) => item?.brand === brand)
        : data?.products
        ? data?.products
        : [],
    [data]
  );
  const total = useMemo(() => data?.total ?? 0, [data]);

  const onPageChange = useCallback((page: number) => setPage(page), [page]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / limit)),
    [total]
  );

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-50 px-12 py-10">
      <h1 className="text-3xl font-bold text-slate-400 mb-20">
        {" "}
        {filterType ? `Products by ${filterValue}` : "All Products"}
      </h1>

      <div className="flex flex-wrap min-h-[90vh] justify-center gap-6 w-full">
        {productList?.length > 0 &&
          productList?.map((item: any) => (
            <Card
              key={item?.id}
              item={item}
              width={200}
              height={320}
              onClick={() => navigate(`/detail/${item?.id}`)}
            />
          ))}
      </div>
      <div className="flex sticky overflow-x-auto sm:justify-center bottom-0 mt-6 z-10">
        {/* {totalPages > 0 && ( */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        {/* )} */}
      </div>
    </div>
  );
}
