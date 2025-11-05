import {
  Card as FlowbiteCard,
  Button,
  Rating,
  RatingStar,
} from "flowbite-react";

type ProductCardProps = {
  item: {
    id?: number;
    thumbnail?: string;
    title?: string;
    price?: number;
    rating?: number;
  };
  onClick?: () => void;
  width: number;
  height: number;
};

export default function Card({
  item,
  onClick,
  width,
  height,
}: ProductCardProps) {
  return (
    <FlowbiteCard
      onClick={onClick}
      className="cursor-pointer hover:shadow-lg shadow-md overflow-hidden flex flex-col"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="w-full h-[100%] flex items-center justify-center overflow-hidden">
        <img
          src={item?.thumbnail}
          alt={item?.title}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-125"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center justify-between h-full">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 line-clamp-2">
          {item?.title}
        </h5>
        {item?.price && item?.rating && (
          <div className="flex flex-col">
            <div className="flex items-center">
              <Rating>
                {[...Array(5)].map((_, i) => (
                  <RatingStar
                    key={i}
                    filled={i < Math.round(Number(item?.rating))}
                  />
                ))}
              </Rating>
              <span className="ml-2 text-sm font-medium text-gray-600">
                {item?.rating?.toFixed(1)}
              </span>
            </div>
            <div className="flex items-stretch justify-between">
              <span className="text-xl font-bold text-gray-900">
                ${item?.price}
              </span>
              <Button
                size="xs"
                color="cyan"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    </FlowbiteCard>
  );
}
