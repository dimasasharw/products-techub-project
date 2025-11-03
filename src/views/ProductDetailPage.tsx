import { Link } from "react-router-dom";

export default function ProductDetailPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
      <p>Showing details for product ID: </p>

      <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">
        ← Back to List
      </Link>
    </div>
  );
}
