import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavBar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Techub Commerce
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          Home
        </NavbarLink>
        <NavbarLink href="/brands">Brands</NavbarLink>
        <NavbarLink href="/all-products">All Products</NavbarLink>
        <NavbarLink href="#">Categories</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
