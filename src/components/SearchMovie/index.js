import './index.css'
import Reference from '../Reference'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const SearchMovie = ()=> {
  const [searchedMovie, setSearchedMovie]= useState([])
  const {movieName}= useParams()

  useEffect(()=>{
    const getSearchedMovie = async () => {
  
      const API_KEY = '2581c66d8acbc83a55280e2cdcb9b34c'
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1`
      const imageUrlStart = 'https://image.tmdb.org/t/p/w500/'
      const response = await fetch(url)
      const fetchedSearchData = await response.json()
      const {results} = fetchedSearchData
      const formatedSearchData = results.map(eachSearch => ({
        posterPath: eachSearch.poster_path,
        posterUrl: imageUrlStart + eachSearch.poster_path,
        title: eachSearch.original_title,
        voteAverage: eachSearch.vote_average,
        id: eachSearch.id,
      }))
      setSearchedMovie(formatedSearchData)
    }

    getSearchedMovie()

  })
  

  

    return (
      <div className="bg-popular-cont">
        <ul className="data-cont">
          {searchedMovie.map(eachMove => (
            <Reference key={eachMove.id} movie={eachMove} />
          ))}
        </ul>
      </div>
    )
  
}
export default SearchMovie
