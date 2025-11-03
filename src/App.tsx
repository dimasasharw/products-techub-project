import { Button, Card } from "flowbite-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Tailwind + Flowbite + React + TS ✅
      </h1>

      <Card className="w-96 text-center">
        <h2 className="text-xl font-semibold mb-2 text-blue-100">
          K-Style Tech Test
        </h2>
        <p className="text-gray-500 mb-4">
          Kalau kamu bisa lihat ini dengan styling bagus, berarti Tailwind &
          Flowbite sudah berfungsi!
        </p>
        <Button color="red" onClick={() => alert("Flowbite works!")}>
          Klik untuk Tes
        </Button>
      </Card>
    </div>
  );
}

export default App;
