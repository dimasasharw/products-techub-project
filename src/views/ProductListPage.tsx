import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";

import Card from "../components/Card";

import { fetchProducts, type ProductParams } from "../helpers/fetchingHelpers";
import { getBrandLogo } from "../helpers/generalHelpers";

export default function ProductListPage() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<string | undefined>();
  const [brand, setBrand] = useState<string | undefined>();

  const limit = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const params: ProductParams = {
    limit,
    skip: (page - 1) * 12,
    category,
    brand,
  };

  const { data } = useQuery<any>({
    queryKey: ["product-list", params],
    queryFn: () => fetchProducts(params),
  });

  const productList = useMemo(() => data?.products ?? [], [data]);
  const total = useMemo(() => data?.total ?? 0, [data]);

  const brands = [
    ...new Set(productList?.map((item: any) => item.brand).filter(Boolean)),
  ] as string[];

  const brandObjects = brands.map((brand: string) => ({
    brand,
    logo: getBrandLogo(brand || ""),
  }));

  console.log({ brandObjects });

  // console.log(total / 12);
  const onPageChange = useCallback((page: number) => setPage(page), [page]);

  // const onDetailClick = useCallback(
  //   (id?: string) => {
  //     navigate(`/detail/${id}`);
  //   },
  //   [navigate]
  // );

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / limit)),
    [total]
  );

  return (
    <div className="flex flex-col min-h-screen items-center  bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-slate-400 mb-6">All Products</h1>

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
