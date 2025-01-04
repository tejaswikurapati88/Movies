import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Popular from './components/Popular'
import Upcoming from './components/Upcoming'
import TopRated from './components/TopRated'
import NotFound from './components/NotFound'
import MovieDetails from './components/MovieDetails'
import SearchMovie from './components/SearchMovie'
import './App.css'

// write your code here
const App = () => {
  return (
  <div className="bg-container">
    <Header />
    <Routes>
      <Route exact path="/" element={<Popular/>} />
      <Route exact path="/top-rated" element={<TopRated/>} />
      <Route exact path="/upcoming" element={<Upcoming/>} />
      <Route exact path="/movie-details/:id" element={<MovieDetails/>} />
      <Route exact path="/searchMovies/:movieName" element={<SearchMovie/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </div>
)}

export default App
