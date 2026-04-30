import { LinkGroup } from "@/components";
import { IMAGE_BASE_URL, MOVIE_ENDPOINT, ORIGINAL_IMAGE_BASE_URL } from "@/core/constants";
import type { CreditsResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { FaCalendarAlt } from "react-icons/fa";
import { useParams, useNavigate, Outlet } from "react-router-dom";

// function personListUrl(listKey: string) { // Uses listKey to get working URL to get valid link from TMDB
//     return `https://api.themoviedb.org/3/person/${id}`;
// }

export const PersonView = () => {

  const { id } = useParams();
  const { data } = useTmdb<CreditsResponse>(`https://api.themoviedb.org/3/person/${id}/credits`, {}, []);
  const navigate = useNavigate();
    
  if (!data) {
    return <p className="text-center text-gray-400">Could not load information.</p>;
  }

  return (

    <div className="p-6 space-y-6">
      <div
        className="h-[420px] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path})`,
        }}
      />
      <div className="flex gap-8">
        <img className="w-[220px] h-[330px] object-cover rounded-xl" src={`${IMAGE_BASE_URL}${data.poster_path}`} alt={data.title} />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-gray-400 flex items-center gap-2">
            <FaCalendarAlt />
            {data.release_date}
          </p>
          <p className="text-gray-300">{data.overview}</p>
          
          <LinkGroup
            options={[
              { label: 'Images', to: 'images' },
              { label: 'Roles', to: 'career' },
            ]}
          />
        </div>
      </div>
      <Outlet />
    </div>
    );
}