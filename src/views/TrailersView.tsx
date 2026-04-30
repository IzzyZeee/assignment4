import { MOVIE_ENDPOINT } from "@/core/constants";
import type { CreditsResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

type Props = { // lets us use it for both movie AND tv
  kind: "movie" | "tv"; 
};

const { data } = useTmdb<CreditsResponse>(`${MOVIE_ENDPOINT}/${id}/credits`, {}, []);

export const TrailersView = ({ kind }: Props) => {
    
    const trailerVideo =
        data?.videos?.results.find((v) => v.site === 'YouTube' && v.type === 'Trailer' && v.name?.toLowerCase().includes('official')) ||
        data?.videos?.results.find((v) => v.site === 'YouTube' && v.type === 'Trailer');

  if (!data) {
    return <p className="text-center text-gray-400">Could not load trailers.</p>;
  }


  return (
    {trailerVideo && (
        <div className="aspect-video">
        <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${trailerVideo.key}`}
            title="Movie Trailer"
            allowFullScreen
        />
        </div>
    )}
  );
};
