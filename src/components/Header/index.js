import {IoSearchOutline} from 'react-icons/io5'
import {Link, useNavigate} from 'react-router-dom'
import './index.css'
import {useState} from 'react'

const Header = ()=> {
  const [movieName, setMoviesName]= useState('')
  const onSearchChange = event => {
    setMoviesName(event.target.value)
  }
  const navigate= useNavigate()

  const onSearch = () => {
    if (movieName !== '') {
      console.log(movieName)
      navigate(`/searchMovies/${movieName}`)
      //return <Navigate to={`/searchMovies/${movieName}`} />
    }
  }
    
  return (
      <div className="header-cont">
        <Link className="link" to="/">
          <h1 className="header-name">movieDB</h1>
        </Link>
        <div className="content-cont">
          <Link to="/">
            <button
              type="button"
              className="nav-buttons"
            >
              Popular
            </button>
          </Link>
          <Link to="/top-rated">
            <button type="button" className="nav-buttons">
              Top Rated
            </button>
          </Link>
          <Link to="/upcoming">
            <button type="button" className="nav-buttons">
              Upcoming
            </button>
          </Link>
        </div>

        <div className="search-cont">
          <div className="search-bar-con">
            <input
              type="search"
              onChange={onSearchChange}
              value={movieName}
              className="search-bar"
            />
          </div>

          <button
            type="button"
            onClick={onSearch}
            className="search-button"
          >
            <IoSearchOutline className="search-icon" />
          </button>
        </div>
      </div>
    )
  
}

export default (Header)
