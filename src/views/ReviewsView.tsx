import { MOVIE_ENDPOINT, TV_ENDPOINT } from '@/core/constants';
import type { ReviewsResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

type Props = { // lets us use it for both movie AND tv
  kind: "movie" | "tv"; 
};

export const ReviewsView = ({ kind }: Props) => {
    
  const { id } = useParams();

  if (kind === "movie") {

    const { data } = useTmdb<ReviewsResponse>(`${MOVIE_ENDPOINT}/${id}/reviews`, {}, []);

    if (!data) {
      return <p className="text-center text-gray-400">Could not load reviews.</p>;
    }

    return (
        <section className="px-2 space-y-4">
          <h2 className="text-2xl font-bold">Reviews</h2>

          {data.results.length ? (
            data.results.slice(0, 5).map((review) => (
              <div key={review.id} className="bg-gray-800 p-5 rounded-xl shadow">
                <p className="text-sm text-gray-400 mb-2">By {review.author}</p>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">{review.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No reviews available.</p>
          )}
        </section>
      );

  } else { // TV

    const { data } = useTmdb<ReviewsResponse>(`${TV_ENDPOINT}/${id}/reviews`, {}, []);

    if (!data) {
      return <p className="text-center text-gray-400">Could not load reviews.</p>;
    }

    return (
      <section className="px-2 space-y-4">
        <h2 className="text-2xl font-bold">Reviews</h2>

        {data.results.length ? (
          data.results.slice(0, 5).map((review) => (
            <div key={review.id} className="bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-sm text-gray-400 mb-2">By {review.author}</p>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">{review.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No reviews available.</p>
        )}
      </section>
    );
  }
};
