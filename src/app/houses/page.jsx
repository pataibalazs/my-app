import Item from "../components/HouseItem";
import { products } from "../data/houses";

const Houses = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-11/12 mt-10">
        <div className="bg-white w-full">
          <div className="mx-auto max-w-5xl lg:text-center">
            <p className="mt-2 text-md font-bold tracking-tight text-red-600">
              Típusházaink
            </p>
            <p className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Készen állsz az új otthonodra?
            </p>
          </div>

          {/* Render all houses */}
          <div className="flex flex-col gap-20 mt-10">
            {Object.entries(products).map(([slug, product]) => (
              <Item key={slug} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Houses;
