import {Component} from 'react'
import './index.css'
import ClipLoader from "react-spinners/ClipLoader"
import Reference from '../Reference'

class Popular extends Component {
  state = {popularData: '', isLoading: true}

  componentDidMount() {
    this.getPopularData()
  }

  getPopularData = async () => {
    const API_KEY = '2581c66d8acbc83a55280e2cdcb9b34c'
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const imageUrlStart = 'https://image.tmdb.org/t/p/w500/'
    const response = await fetch(popularUrl)
    const fetchedData = await response.json()
    const {results} = fetchedData

    const formattedData = results.map(eachItem => ({
      adult: eachItem.adult,
      backdropPath: eachItem.backdrop_path,
      genreIds: eachItem.genre_ids,
      id: eachItem.id,
      originalLanguage: eachItem.original_language,
      originalTitle: eachItem.original_title,
      overview: eachItem.overview,
      popularity: eachItem.popularity,
      posterPath: eachItem.poster_path,
      posterUrl: imageUrlStart + eachItem.poster_path,
      releaseDate: eachItem.release_date,
      title: eachItem.title,
      video: eachItem.video,
      voteAverage: eachItem.vote_average,
      voteCount: eachItem.vote_count,
    }))
    this.setState({isLoading: false, popularData: formattedData})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loading-cont">
      <ClipLoader
        color='#00bfff'
        height={50} width={50}
        type="TailSpin"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )

  renderDisplayData = () => {
    const {popularData} = this.state
    return (
      <ul className="data-cont">
        {popularData.map(eachMovie => (
          <Reference key={eachMovie.id} movie={eachMovie} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-popular-cont">
        {isLoading ? this.renderLoader() : this.renderDisplayData()}
      </div>
    )
  }
}

export default Popular
