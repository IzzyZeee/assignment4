import { ButtonGroup, ImageGrid, Pagination } from '@/components';
import { MOVIE_TRENDING_ENDPOINT, TV_TRENDING_ENDPOINT } from '@/core/constants';
import type { MoviesResponse, TvsResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const TrendingView = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const interval = searchParams.get('interval') || 'day';

  const [kind, setKind] = useState<'movie' | 'tv'>('movie'); // determine if it's movie or tv
  // const endpoint = kind === 'movie' ? MOVIE_TRENDING_ENDPOINT : TV_TRENDING_ENDPOINT;
  // const { data } = 
  //   kind === 'movie' ? 
  //     useTmdb<MoviesResponse | TvsResponse>(`${endpoint}/${interval}`, { page, time_window: interval }, [page, interval, kind])
  //     : useTmdb<TvsResponse>(`${TV_TRENDING_ENDPOINT}/${interval}`, { page, time_window: interval }, [page, interval, kind]);
  const { data } = useTmdb<MoviesResponse | TvsResponse>(
    `${kind === 'movie' ? MOVIE_TRENDING_ENDPOINT : TV_TRENDING_ENDPOINT}/${interval}`,
    { page },
    [page, interval, kind]
  );
  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: ('original_title' in result ? result.original_title : result.name) ?? 'Untitled',
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5 mb-14">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Now Playing</h1>
        <ButtonGroup
          value={kind}
          options={[
            { label: 'Movies', value: 'movie' },
            { label: 'TV', value: 'tv' },
          ]}
          onClick={(value) => {
            setKind(value as 'movie' | 'tv');
            setPage(1); // resets page when switching
          }}
        />
        <ButtonGroup
          value={interval}
          options={[
            { label: 'Today', value: 'day' },
            { label: 'Week', value: 'week' },
          ]}
          onClick={(value) => setSearchParams({ interval: value })}
        />
      </div>
      <ImageGrid results={gridData} onClick={(id) => navigate(kind === 'movie'? `/movie/${id}/credits` : `/tv/id/${id}/seasons`)} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};




