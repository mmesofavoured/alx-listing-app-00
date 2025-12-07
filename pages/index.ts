import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Mountain View",
    "Beachfront",
    "Pet Friendly",
    "Luxury",
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="h-[60vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Find your favorite place here!
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* FILTER SECTION */}
      <div className="max-w-7xl mx-auto px-4 my-6 flex gap-3 flex-wrap">
        {filters.map((f) => (
          <span
            key={f}
            className="px-4 py-2 bg-gray-100 rounded-full shadow cursor-pointer hover:bg-gray-200"
          >
            {f}
          </span>
        ))}
      </div>

      {/* LISTING SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.name}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-500">
                {property.address.city}, {property.address.country}
              </p>

              <p className="mt-2 font-bold text-blue-600">
                ${property.price}/night
              </p>

              <p className="text-yellow-500 mt-1">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
