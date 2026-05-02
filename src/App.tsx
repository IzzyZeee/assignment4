import { MainLayout } from '@/layouts/MainLayout';
import { 
  // CareerView, 
  CreditsView, 
  // EpisodesView, 
  // GenreView,   
  // ImagesView,
  MovieCategoriesView,
  MoviesView, 
  MovieView, 
  PersonView, 
  ReviewsView, 
  // SeasonsView, 
  // TelevisionView, 
  TelevisionsCategoriesView,
  TelevisionsView,
  // TrailersView, 
  TrendingView, 
  ErrorView, 
  HomeView, 
  SearchView 
} from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      
      <Route element={<MainLayout />} >

        <Route path="/movies" element={<MoviesView />}> 
          <Route path=":listKey" element={<MovieCategoriesView />} />
        </Route>

        <Route path="/movie/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView kind="movie" />}/>
          {/* <Route path="trailers" element={<TrailersView kind="movie" />}/> */}
          <Route path="reviews" element={<ReviewsView kind="movie" />}/>
        </Route>
      
        <Route path="/person/:id" element={<PersonView />}>

        </Route>

        <Route path="/tv" element={<TelevisionsView />}> 
          <Route path=":listKey" element={<TelevisionsCategoriesView />} />
        </Route>

        <Route path="/tv/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView kind="tv" />}/>
          {/* <Route path="trailers" element={<TrailersView kind="movie" />}/> */}
          <Route path="reviews" element={<ReviewsView kind="tv" />}/>
        </Route>

      </Route>

      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
