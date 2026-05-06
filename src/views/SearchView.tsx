import { ImageGrid, Pagination, SearchBar } from '@/components';
import { MULTISEARCH_ENDPOINT } from '@/core/constants';
import type { MultiSearchResponse } from '@/core/types';
import { useDebounce, useTmdb } from '@/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchResults({ query, page, onPageChange }: { query: string; page: number; onPageChange: (p: number) => void }) {
  const navigate = useNavigate();
  const { data } = useTmdb<MultiSearchResponse>(
    MULTISEARCH_ENDPOINT,
    { query, page, include_adult: false },
    [query, page],
  );

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  const gridData = data.results.map((result) => {
    const imagePath =
      result.media_type === 'person' ? result.profile_path ?? null : result.poster_path ?? null;
    return {
      id: result.id,
      imagePath,
      secondaryText: result.media_type,
    };
  });

  if (!data.results.length) {
    return <p className="text-center text-gray-400">No search results found</p>;
  }

  return (
    <>
      <ImageGrid
        results={gridData}
        onClick={(clickedId) => {
          const hit = data.results.find((r) => r.id === clickedId);
          if (!hit) return;
          if (hit.media_type === 'movie') navigate(`/movie/${hit.id}`);
          else if (hit.media_type === 'tv') navigate(`/tv/${hit.id}`);
          else navigate(`/person/${hit.id}`);
        }}
      />
      <Pagination page={page} maxPages={data.total_pages} onClick={onPageChange} />
    </>
  );
}

export const SearchView = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState<number>(1);
  const debouncedQuery = useDebounce(query, 500);
  const { data } = useTmdb<MultiSearchResponse>(MULTISEARCH_ENDPOINT, { query: debouncedQuery, page }, [debouncedQuery, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.profile_path,
    primaryText: result.name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-10 space-y-5">
      <SearchBar value={query} onChange={setQuery} />
      <ImageGrid results={gridData} />
      {data.results.length ? (
        <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
      ) : (
        <p className="text-center text-gray-400">No search results found</p>
      )}
    </section>
  );
};
