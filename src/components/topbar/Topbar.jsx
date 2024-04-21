import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faChevronLeft, faChevronRight, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Topbar = () => {
    const [active , setActive] = useState(false)

    const handleActive = () =>{
        setActive(true)
    }
  return (
    <div>
        <div className="topbar">
                    <div className="prev-next-buttons">
                        <button type="button">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button type="button">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                    <Link to="/search"> <div className="search-bar">
                        <form onSubmit={(e)=> e.preventDefault()} className="spotify-search-form" action="">
                       <input 
                        type="search"
                        className={`spotify-input ${ active ? "spotify-input-active": null}`}
                        placeholder="What do you want to play?"
                        onClick={handleActive}
                        /> 
                        </form>
                    </div></Link>
                    <div className="navbar">
                        <ul>
                            <li>
                                <a href="/">Sign Up</a>
                            </li>
                        </ul>
                        <button type="button">Login</button>
                    </div>
                </div>
    </div>
  )
}

export default Topbar