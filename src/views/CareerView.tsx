import { ImageGrid } from "@/components";
import type { CreditsResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { Outlet, useParams } from "react-router-dom";

export const CareerView = () => {

    const { id } = useParams();
    const { data } = useTmdb<CreditsResponse>(`https://api.themoviedb.org/3/person/${id}/combined_credits`, {}, []); // Get data from TMDB

    if (!data) {
      return <p className="text-center text-gray-400">Could not load images.</p>;
    }

    const gridData = data.cast.map((result, index) => ({ // Map will go through every item in the array
        imagePath: result.poster_path, // In case they don't have an image
        id: index, 
        primaryText: result.character,
        secondaryText: "",
    }));

    return (
        <div className="p-10">
            <Outlet />
                <ImageGrid results={gridData} />
        </div>
    );
}