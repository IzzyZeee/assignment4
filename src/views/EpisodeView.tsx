import { Button, OtherImageGrid } from "@/components";
import { TV_ENDPOINT } from "@/core/constants";
import type { SeasonResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { FaArrowLeft } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const EpisodeView = () => {

    const { id } = useParams();
    const { number } = useParams();
    const navigate = useNavigate();

    const { data } = useTmdb<SeasonResponse>(`${TV_ENDPOINT}/${id}/season/${number}`, { page: 1 }, [id]); // Get data from TMDB

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

    const gridData = data.episodes.map((result) => ({ // Map will go through every item in the array
        id: result.id,
        imagePath: result.still_path,
        primaryText: result.name ?? 'Untitled',
        secondaryText: result.air_date ?? 'No date available',
    }));

    return (
        <div className="p-10">
            <Outlet />
                <OtherImageGrid results={gridData} />
        </div>
    );
}