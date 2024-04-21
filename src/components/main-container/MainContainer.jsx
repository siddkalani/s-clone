import React , {useState} from 'react'
import Tophit from "../images/Today's Top Hits.jpg"
import rapcavior from "../images/RapCaviar.jpg"
import allout from "../images/All Out 2010s.jpg"
import rock from "../images/Rock Classics.jpg"
import chill from "../images/Chill Hits.jpg"
import viva from "../images/Viva Latino.jpg"
import piano from "../images/Peaceful Piano.jpg"
import deep from "../images/Deep Focus.jpg"
import study from "../images/Instrumental Study.jpg"
import beats from "../images/Beats to think to.jpg"
import Focus from "../images/Focus Flow.jpg"
import Reading from "../images/Reading Adventure.jpg"
import bengaluru from "../images/The Sound of Bengaluru.jpg"
import chennai from "../images/The Sound of Chennai.jpg"
import delhi from "../images/The Sound of Delhi.jpg"
import hyderabad from "../images/The Sound of Hyderabad.jpg"
import kolkata from "../images/The Sound of Kolkata.jpg"
import mumbai from "../images/The Sound of Mumbai.jpg"
import workday from "../images/Workday Lounge.jpg"
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from "react-icons/fa";
import { faHome, faSearch, faBook, faChevronLeft, faChevronRight, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    const [active , setActive] = useState(false)

    const handleActive = () =>{
        setActive(true)
    }
    return (
       <div>
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
                        type=""
                        className={`spotify-input ${ active ? "spotify-input-active": null}`}
                        placeholder="What do you want to play?"
                        onClick={handleActive}
                        /> 
                        <button className="search-btn" type="submit">
                            <div><FaSearch color='white' size={20}/></div>
                        </button>
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
        <div>
            <div className="main-container">

                <div className="spotify-playlists">
                    <h2>Spotify Playlists</h2>

                    <div className="list">
                        <div className="item">
                            <img src={Tophit} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Today's Top Hits</h4>
                            <p>Olivia Rodrigo is on top of the Hottest 50!</p>
                        </div>

                        <div className="item">
                            <img src={rapcavior} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>RapCaviar</h4>
                            <p>New Music from Cardi B, Megan Thee Stallion an...</p>
                        </div>

                        <div className="item">
                            <img src={allout} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>All out 2010s</h4>
                            <p>The biggest spmgs pf tje 2010s.</p>
                        </div>

                        <div className="item">
                            <img src={rock} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Rock Classics</h4>
                            <p>Rock Legends & epic songs that continue to...</p>
                        </div>

                        <div className="item">
                            <img src={chill} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Chill Hits</h4>
                            <p>Kick back to the best new and recent chill hits</p>
                        </div>

                        <div className="item">
                            <img src={viva} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Viva Latino</h4>
                            <p>Today's top Latin hits elevando nuestra...</p>
                        </div>



                        <div className="item">
                            <img src={allout} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>All out 80s</h4>
                            <p>The biggest songs of the 1980s. Cover: Michael...</p>
                        </div>
                    </div>
                </div>

                <div className="spotify-playlists">
                    <h2>Focus</h2>
                    <div className="list">
                        <div className="item">
                            <img src={piano} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Peaceful Piano</h4>
                            <p>Peaceful piano to help you slow down, breath...</p>
                        </div>

                        <div className="item">
                            <img src={deep} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Deep Focus</h4>
                            <p>Keep calm and focus with ambient and post-...</p>
                        </div>

                        <div className="item">
                            <img src={study} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Instrumental Study</h4>
                            <p>Focus with soft study music in the background.</p>
                        </div>



                        <div className="item">
                            <img src={Focus} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Focus Flow</h4>
                            <p>Uptempo instrumental hip hop beats</p>
                        </div>

                        <div className="item">
                            <img src={beats} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Beats to think to</h4>
                            <p>Focus with melodic techno and tech house.</p>
                        </div>

                        <div className="item">
                            <img src={Reading} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Reading Adventure</h4>
                            <p>Scores and soundtracks for daring quests, epic...</p>
                        </div>

                        <div className="item">
                            <img src={workday} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>Workday Lounge</h4>
                            <p>Lounge and chill out music for your workday</p>
                        </div>
                    </div>
                </div>

                <div className="spotify-playlists">
                    <h2>Sound of India</h2>
                    <div className="list">
                        <div className="item">
                            <img src={mumbai} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>The Sound of Mum...</h4>
                            <p>The songs that define, unite and distinguish...</p>
                        </div>

                        <div className="item">
                            <img src={kolkata} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>The Sound of Kolka...</h4>
                            <p>The songs that define, unite and distinguish...</p>
                        </div>

                        <div className="item">
                            <img src={delhi} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>The Sound of Delhi...</h4>
                            <p>The songs that define, unite and distinguish...</p>
                        </div>

                        <div className="item">
                            <img src={bengaluru} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>The Sound of Ben...</h4>
                            <p>The songs that define, unite and distinguish...</p>
                        </div>

                        <div className="item">
                            <img src={chennai} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>The Sound of Chen...</h4>
                            <p>The songs that define, unite and distinguish...</p>
                        </div>

                        <div className="item">
                            <img src={hyderabad} />
                            <div className="play">
                                <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                            </div>
                            <h4>The Sound of Hyde...</h4>
                            <p>The songs that define, unite and distinguish...</p>
                        </div>


                    </div>

                </div>

            </div>
        </div>
        </div>

    )
}

export default MainContainer