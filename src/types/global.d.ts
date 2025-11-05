type ResultPagination<T = any> = {
  limit: number;
  products: Array<T>;
  skip: number;
  total: number;
};
