import { Link, Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="p-4 bg-white shadow sticky top-0 flex gap-4 z-10">
        <Link to="/" className="text-blue-600 hover:underline">
          Products
        </Link>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
