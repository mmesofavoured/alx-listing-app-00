const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>

      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b pb-6 mb-6"
        >
          <div className="flex items-center mb-3">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">⭐ {review.rating}</p>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
