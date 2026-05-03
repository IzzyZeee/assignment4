import { Button, LinkGroup } from "@/components";
import { IMAGE_BASE_URL, MOVIE_ENDPOINT, ORIGINAL_IMAGE_BASE_URL } from "@/core/constants";
import type { CreditsResponse, PersonResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { useParams, useNavigate, Outlet } from "react-router-dom";

export const PersonView = () => {

  const { id } = useParams();
  const { data } = useTmdb<PersonResponse>(`https://api.themoviedb.org/3/person/${id}`, {}, []);
  const navigate = useNavigate();
    
  if (!data) {
    return <p className="text-center text-gray-400">Could not load information.</p>;
  }

  return (

    <div className="p-6 space-y-6">
      <div className="flex gap-8">
        <img className="w-[220px] h-[330px] object-cover rounded-xl" src={`${IMAGE_BASE_URL}${data.profile_path}`} alt={data.name} />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{data.name}</h1> 
          <Button onClick={() => navigate(-1)}>
            <div className="flex items-center">
                Back
            </div>
          </Button>
          <p className="text-gray-400 flex items-center gap-2">
            <FaGlobeAmericas />
            {data.place_of_birth}
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <FaBirthdayCake />
            {data.birthday}
          </p>
          <p className="text-gray-300">{data.overview}</p>
          <p>
            {data.biography}
          </p>
          
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