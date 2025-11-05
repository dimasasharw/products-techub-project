import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export default function BaseLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="p-4 bg-white shadow sticky top-0 z-10">
        <NavBar />
      </nav>

      <main className="h-full overflow-x-hidden p-2 sm:p-10 bg-red-200">
        <Outlet />
      </main>
    </div>
  );
}
