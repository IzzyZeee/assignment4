import { Link } from '@/components';

export const Header = () => {
  return (
    <header>
      <nav className="items-center flex gap-4 p-4 bg-zinc-800">
        <div>
            <div className="mr-2">
              <h1 className="text-3xl font-bold text-teal-500">TMDB</h1>
              <h1 className="text-2xl font-bold text-white-900">Explorer</h1>
            </div>
          </div>
        <Link to="/now-playing">Now Playing</Link>
        <Link to="/trending?interval=day">Trending</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
};