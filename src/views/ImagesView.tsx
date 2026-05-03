import { ImageGrid } from "@/components";
import type { ImagesResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { Outlet, useParams } from "react-router-dom";

export const ImagesView = () => {

    const { id } = useParams();
    const { data } = useTmdb<ImagesResponse>(`https://api.themoviedb.org/3/person/${id}/images`, {}, []); // Get data from TMDB

    if (!data) {
      return <p className="text-center text-gray-400">Could not load images.</p>;
    }

    const gridData = data.profiles.map((result, index) => ({ // Map will go through every item in the array
        imagePath: result.file_path ? `https://image.tmdb.org/t/p/w500${result.file_path}` : null, // In case they don't have an image
        id: index,
        primaryText: "",
        secondaryText: "",
    }));

    return (
        <div className="p-10">
            <Outlet />
                <ImageGrid results={gridData} />
        </div>
    );
}