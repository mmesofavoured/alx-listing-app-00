const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border">
      <h3 className="text-2xl font-semibold mb-4">
        ${price} <span className="text-sm text-gray-500">/ night</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Check-in</label>
          <input
            type="date"
            className="border rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Check-out</label>
          <input
            type="date"
            className="border rounded-md p-2 w-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">
          Total payment: <strong>${price * 7}</strong>
        </p>
      </div>

      <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
