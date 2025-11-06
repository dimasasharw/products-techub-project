import { Link } from "react-router-dom";
import {
  MegaMenuDropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { fetchCategories } from "@/helpers";
import { useQuery } from "@tanstack/react-query";

export function NavBar() {
  const { data } = useQuery<any>({
    queryKey: ["product-categories"],
    queryFn: () => fetchCategories(),
  });

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Techub Commerce
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <MegaMenuDropdown toggle={<>Categories</>}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 max-w-[400px]">
            {data &&
              data?.length > 0 &&
              data?.map((item: any) => (
                <li>
                  <a
                    href={`/categories/${item?.slug}`}
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
          </div>
        </MegaMenuDropdown>
        <NavbarLink as={Link} href="#">
          Home
        </NavbarLink>
        <NavbarLink href="/brands">Brands</NavbarLink>
        <NavbarLink href="/all-products" className="text-nowrap">
          All Products
        </NavbarLink>
        {/* <NavbarLink href="#">Categories</NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
}
