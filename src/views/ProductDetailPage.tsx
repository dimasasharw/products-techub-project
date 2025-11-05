import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Rating,
  Badge,
  RatingStar,
  Card,
  Spinner,
} from "flowbite-react";

import { fetchProductDetail } from "../helpers/fetchingHelpers";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data, isLoading } = useQuery<any>({
    queryKey: ["product-detail", id],
    queryFn: () => fetchProductDetail(Number(id)),
  });

  const dataDetail = useMemo(() => data ?? {}, [data]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="xl" color="info" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white h-full w-full p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div className="flex flex-col items-center">
            <img
              src={
                selectedImage ||
                dataDetail?.thumbnail ||
                dataDetail?.images?.[0]
              }
              alt={dataDetail?.title}
              className="w-full max-w-md rounded-2xl shadow-md transition-transform duration-300 bg-white hover:scale-105"
            />

            <div className="flex gap-3 mt-4 flex-wrap justify-center">
              {dataDetail?.images?.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumbnail-${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 bg-white rounded-xl object-cover cursor-pointer border-2 ${
                    selectedImage === img
                      ? "border-purple-600"
                      : "border-transparent"
                  } transition-all duration-200`}
                />
              ))}
            </div>
          </div>

          {/* Right: dataDetail Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                {dataDetail?.title}
              </h2>

              <p className="text-gray-500 mb-4">{dataDetail?.brand}</p>

              <div className="flex items-center gap-2 mb-4">
                <Rating>
                  <RatingStar filled={true} />
                  <p className="ml-1 text-sm text-gray-600">
                    {dataDetail?.rating?.toFixed(1)} / 5
                  </p>
                </Rating>
                <Badge color="success">{dataDetail?.availabilityStatus}</Badge>
              </div>

              <p className="text-xl font-bold text-purple-700 mb-4">
                ${dataDetail?.price}
                <span className="text-sm text-gray-400 ml-2 line-through">
                  $
                  {(
                    dataDetail?.price *
                    (1 + dataDetail?.discountPercentage / 100)
                  )?.toFixed(2)}
                </span>
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {dataDetail?.description}
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>
                  <span className="font-semibold">Category:</span>{" "}
                  {dataDetail?.category}
                </li>
                <li>
                  <span className="font-semibold">SKU:</span> {dataDetail?.sku}
                </li>
                <li>
                  <span className="font-semibold">Warranty:</span>{" "}
                  {dataDetail?.warrantyInformation || "-"}
                </li>
                <li>
                  <span className="font-semibold">Shipping:</span>{" "}
                  {dataDetail?.shippingInformation || "-"}
                </li>
                <li>
                  <span className="font-semibold">Return Policy:</span>{" "}
                  {dataDetail?.returnPolicy || "-"}
                </li>
              </ul>

              <Button color="purple" className="w-full md:w-auto">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        {dataDetail?.reviews && dataDetail?.reviews?.length > 0 && (
          <div className="flex flex-col mt-12 items-center justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Customer Reviews
            </h3>

            <div className="flex flex-wrap gap-4 items-center px-[5rem]">
              {dataDetail?.reviews?.map((review: any, idx: number) => (
                <Card key={idx} className="border border-gray-100 shadow-sm ">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{review.reviewerName}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Rating>
                      {[...Array(5)]?.map((_, i) => (
                        <RatingStar key={i} filled={i < review.rating} />
                      ))}
                    </Rating>
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
