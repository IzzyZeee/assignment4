import { Button, ImageGrid, Pagination } from "@/components";
import type { MoviesResponse } from "@/core/types";
import { useTmdb } from "@/hooks";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export const TelevisionsView = () => {
    
        return (
            <div>
                <div className="flex justify-center p-4 bg-zinc-950">
                    <Link to="/tv/airing_today"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Now Playing
                    </Link>
                    <Link to="/tv/on_the_air"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Popular
                    </Link>
                    <Link to="/tv/popular"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Upcoming
                    </Link>
                    <Link to="/tv/top_rated"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Top Rated
                    </Link>
                </div>

                <Outlet />
            </div>
        )

}