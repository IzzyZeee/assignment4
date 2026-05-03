import { Button, ImageGrid, Pagination } from "@/components";
import { TV_ENDPOINT } from "@/core/constants";
import type { SeasonsResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const SeasonsView = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useTmdb<SeasonsResponse>(`${TV_ENDPOINT}/${id}`, { page: 1 }, [id]); // Get data from TMDB

    if (!data) { // If the data doesn't exist (fake loading screen lol)
        return (
            <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Trying to fetch data...</h1>
                <Button onClick={() => navigate(-1)}>
                    <div className="flex items-center">
                        <FaArrowLeft className="mr-2"/>Back
                    </div>
                </Button>
            </main>
        )
    }

    const gridData = data.seasons.map((result) => ({ // Map will go through every item in the array
        id: result.id,
        seasonNumber: result.season_number,
        imagePath: result.poster_path,
        primaryText: result.name ?? 'Untitled',
        secondaryText: result.air_date ?? 'No date available',
    }));

    return (
        <div className="p-10">
            <Outlet />
                <ImageGrid results={gridData} 
                    // onClick={(id) => navigate(`/tv/id/${id}/season/${data.season_number}`)} 
                    onClick={(seasonId) => {
                        const season = gridData.find(s => s.id === seasonId);
                        navigate(`/tv/id/${id}/season/${season?.seasonNumber}`);
                    }} 
                />
        </div>
    );

}