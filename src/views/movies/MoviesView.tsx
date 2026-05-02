import { Link, Outlet } from "react-router-dom";

export const MoviesView = () => {
    
        return (
            <div>
                <div className="flex justify-center p-4 bg-zinc-950">
                    <Link to="/movies/now_playing"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Now Playing
                    </Link>
                    <Link to="/movies/popular"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Popular
                    </Link>
                    <Link to="/movies/upcoming"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Upcoming
                    </Link>
                    <Link to="/movies/top_rated"
                    className="px-6 py-3 rounded-md transition-all duration-200 bg-zinc-800 text-white-900 m-1 hover:bg-zinc-900">
                        Top Rated
                    </Link>
                </div>

                <Outlet />
            </div>
        )

}