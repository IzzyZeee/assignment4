import { Link, SearchBar } from '@/components';
import { useState } from 'react';


export const Header = () => {
  const [search, useSearch] = useState('');

  return (
    <header>
      <nav className="items-center flex gap-4 p-4 bg-zinc-800">
        <div>
            <div className="mr-2">
              <h1 className="text-3xl font-bold text-teal-500">TMDB</h1>
              <h1 className="text-2xl font-bold text-white-900">Explorer</h1>
            </div>
          </div>
       
          <Link to="/movies/now_playing">Movies</Link>
          <Link to="/tv/airing_today">TV</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/genres/movie/28">Genre</Link>
          <Link to="/genres/search">Search</Link>
          <div className="ml-auto">
            <SearchBar value={search} onChange={useSearch} ></SearchBar>
          </div>
      </nav>
    </header>
  );
};