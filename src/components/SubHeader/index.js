import './index.css'
import {Link} from 'react-router-dom'

const SubHeader=()=>{
    return (
        <div className="subheader-cont">
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
    )
}

export default SubHeader