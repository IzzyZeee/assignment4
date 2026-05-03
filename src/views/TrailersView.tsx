import { MOVIE_ENDPOINT } from "@/core/constants";
import type { CreditsResponse, MovieResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { useParams } from "react-router-dom";

type Props = { // lets us use it for both movie AND tv
  kind: "movie" | "tv"; 
};

export const TrailersView = ({ kind }: Props) => {
  
  const { id } = useParams();

  if (kind === "movie") {
    const { data } = useTmdb<MovieResponse>(`${MOVIE_ENDPOINT}/${id}/credits`, {}, []);
    
    if (!data) {
      return <p className="text-center text-gray-400">Could not load trailers.</p>;
    }

    const trailerVideo =
      data?.videos?.results.find((v) => v.site === 'YouTube' && v.type === 'Trailer' && v.name?.toLowerCase().includes('official')) ||
      data?.videos?.results.find((v) => v.site === 'YouTube' && v.type === 'Trailer');

    return (
      {trailerVideo && (
          <div className="aspect-video">
          <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${trailerVideo!.key}`}
              title="Movie Trailer"
              allowFullScreen
          />
          </div>
      )}
    );

  } else {





  }
   
  

};
