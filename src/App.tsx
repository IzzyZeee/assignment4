import { MainLayout } from '@/layouts/MainLayout';
import { 
  // CareerView, 
  // CreditsView, 
  // EpisodesView, 
  // GenreView,   
  // ImagesView,
  MovieCategoriesView,
  MoviesView, 
  // MovieView, 
  // PersonView, 
  // ReviewsView, 
  // SeasonsView, 
  // TelevisionView, 
  // TelevisionsView,
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
          <Route path=":listKey" element={<MovieCategoriesView />} >
              
          </Route>
        </Route>

      </Route>

      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
