import { Button, ImageGrid, Pagination } from "@/components";
import type { ImagesResponse, TvsResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const TelevisionCategoriesView = () => {

    const { person_id } = useParams();
    const { data } = useTmdb<ImagesResponse>(`https://api.themoviedb.org/3/person/${person_id}/images`, {}, []); // Get data from TMDB

    if (!data) {
      return <p className="text-center text-gray-400">Could not load images.</p>;
    }

    const gridData = data.profiles.map((result) => ({ // Map will go through every item in the array
        id: result.file_path,
        width: result.width,
        height: result.height,
    }));

    return (
        <div className="p-10">
            <Outlet />
                <ImageGrid profiles={gridData} />
        </div>
    );

}