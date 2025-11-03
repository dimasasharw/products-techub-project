import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function ProductListPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">List Page ✅</h1>

      <Card className="w-96 text-center">
        <h2 className="text-xl font-semibold mb-2 text-blue-100">
          K-Style Tech Test
        </h2>
        <p className="text-gray-500 mb-4">
          Kalau kamu bisa lihat ini dengan styling bagus, berarti Tailwind &
          Flowbite sudah berfungsi!
        </p>
        <Button color="red" onClick={() => navigate("/detail")}>
          Details
        </Button>
      </Card>
    </div>
  );
}
