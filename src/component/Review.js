import React, { useState } from "react";

const ReviewPanel = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: "Great product!", reactions: { thumbsUp: 10, thumbsDown: 2 } },
    { id: 2, text: "Could be better", reactions: { thumbsUp: 5, thumbsDown: 8 } },
    // Add more initial reviews here if needed
  ]);

  const [newReview, setNewReview] = useState("");

  const handleReaction = (reviewId, reactionType) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              reactions: {
                ...review.reactions,
                [reactionType]: review.reactions[reactionType] + 1,
              },
            }
          : review
      )
    );
  };

  const handleNewReview = () => {
    if (newReview.trim() === "") return;
    const newReviewObj = {
      id: reviews.length + 1,
      text: newReview,
      reactions: { thumbsUp: 0, thumbsDown: 0 },
    };
    setReviews([...reviews, newReviewObj]);
    setNewReview("");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Reviews</h1>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 mb-4">
            <p className="mb-2">{review.text}</p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <button
                  className="flex items-center text-green-500"
                  onClick={() => handleReaction(review.id, "thumbsUp")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{review.reactions.thumbsUp}</span>
                </button>
                <button
                  className="flex items-center text-red-500"
                  onClick={() => handleReaction(review.id, "thumbsDown")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 13l-4 4m0 0l-4-4m4 4V7m0 8a8 8 0 110-16 8 8 0 010 16z"
                    />
                  </svg>
                  <span>{review.reactions.thumbsDown}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <textarea
          className="border p-2 w-full mb-4"
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleNewReview}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewPanel;
