
import './index.css'
import ClipLoader from "react-spinners/ClipLoader"
import {FaStar} from 'react-icons/fa'
import CastItems from '../CastItems'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const MoviesDetails = ()=> {
  const [details, setDetails] = useState({})
  const [isLoading, setisLoading]= useState(true)
  const [cast, setCast]= useState({})
  const {id} = useParams()

  useEffect(()=>{
    const getDetails = async () => {
      /*const {match} = this.props
      const {params} = match*/
      const API_KEY = '2581c66d8acbc83a55280e2cdcb9b34c'
      const imageUrlStart = 'https://image.tmdb.org/t/p/w500/'
      const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  
      const responseDetails = await fetch(detailsUrl)
      const responseCast = await fetch(castUrl)
  
      const detailsData = await responseDetails.json()
      const castData = await responseCast.json()
      const {cast} = castData
      const formattedDetails = {
        adult: detailsData.adult,
        name: detailsData.original_title,
        image: imageUrlStart + detailsData.poster_path,
        ratings: detailsData.vote_average,
        duration: detailsData.runtime,
        genre: detailsData.genres.map(eachgenre => ({
          id: eachgenre.id,
          name: eachgenre.name,
        })),
        releaseDate: detailsData.release_date,
        overview: detailsData.overview,
        backdropPath: imageUrlStart + detailsData.backdrop_path,
      }
  
      const formattedCast = cast.map(eachcast => ({
        name: eachcast.original_name,
        character: eachcast.character,
        id: eachcast.id,
        profilePath: eachcast.profile_path,
        profileImage: imageUrlStart + eachcast.profile_path,
      }))
  
      
      setDetails(formattedDetails)
      setisLoading(false)
      setCast(formattedCast)
    }
    getDetails()
  })

  

  const renderData = () => {
    const {
      adult,
      image,
      name,
      ratings,
      duration,
      genre,
      releaseDate,
      overview,
      backdropPath,
    } = details 
    const div = ratings / 2
    const rating = div.toFixed(1)
    const myStyle = {
      backgroundImage: `url(${backdropPath})`,
    }

    const hours = Math.floor(duration / 60)
    const mins = duration % 60

    const genreData = genre.map(each => each.name)
    const joinedGenre = genreData.join('/')

    return (
      <div className="bg-cont-details-cast">
        <div style={myStyle} className="movie-det-con">
          <img src={image} alt={name} className="movi-img" />
          <div className="movie-det-sub-cont">
            <div className="rating-row">
              {adult ? (
                <p className="adult">18+</p>
              ) : (
                <p className="adult">13+</p>
              )}
              <p className="det">{joinedGenre}</p>
              <p className="det">{releaseDate}</p>
              <p className="det">
                {hours}h {mins}min
              </p>
              <div className="rat-co">
                <FaStar className="star" />
                <p className="de-p">{rating}</p>
              </div>
            </div>

            <h1 className="mo-name">{name}</h1>
            <p className="det">{overview}</p>
          </div>
        </div>
        <ul className="data-cont">
          {cast.map(eachCast => (
            <CastItems key={eachCast.id} castDetails={eachCast} />
          ))}
        </ul>
      </div>
    )
  }
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loading-cont">
            
            <ClipLoader
        color='#00bfff'
        height={50} width={50}
        loading={isLoading}
        type="TailSpin"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          </div>
          
        ) : (
          renderData()
        )}
      </div>
    )
  
}
export default MoviesDetails
