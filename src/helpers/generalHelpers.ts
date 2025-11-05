export const getBrandLogo = (brand: string) => {
  const domain = brand
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .concat(".com");

  return `https://logo.clearbit.com/${domain}`;
};
