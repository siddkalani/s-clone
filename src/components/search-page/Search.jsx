import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../SpotifyClone.css';
import Tophit from "../images/Today's Top Hits.jpg"
import icon from "./icon.svg"
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
import { faHome, faSearch, faBook, faChevronLeft, faChevronRight, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from "react-icons/fa";


const Search = (props) => {
    const [active, setActive] = useState(false)
    const handleActive = () => {
        setActive(true)
    }

    //logic
    const CLIENT_ID = "c3cfe05296734b91b08b0509ae312fed"
    const CLIENT_SECRET = "be5f887bf89f43b497b69efdab69d041"
    const [token, setToken] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [image, setImages] = useState([])
    const [ExternalUrl, setExternalUrl] = useState([])
    const [track, setTrack] = useState([])

    useEffect(() => {
        //api access token 
        var authParameters = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
        }
        fetch("https://accounts.spotify.com/api/token", authParameters)
            .then(response => response.json())
            .then(data => setToken(data.access_token))
    }, [])

    //search
    async function search(e) {
        e.preventDefault()
        // console.log("search for " + searchInput)
        //get req using search to get artist id
        var searchParameters = {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },


        }
        var trackID = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=track", searchParameters)
            .then(response => response.json())
            .then(data => { setTrack([data])})
        console.log(track)
        //get req using search to get all albums of artist
        // var returnTrack = await fetch("https://api.spotify.com/v1/tracks/" + trackID, searchParameters)
        //     .then(response => response.json())
        //     .then(data => { return setTrack([data]) })
        // console.log(track)
        // const sidd = returnTrack()
        // //display those albums to user

        //player 
        
    }

    return (
        <div>
            {/* topbar */}
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
                    <form onSubmit={(e) => e.preventDefault()} className="spotify-search-form" action="">
                        <input
                            type=""
                            className={`spotify-input ${active ? "spotify-input-active" : null}`}
                            placeholder="What do you want to play?"
                            onChange={e => setSearchInput(e.target.value)}
                            onClick={handleActive}
                        />
                        <button onClick={search} className="search-btn" type="submit">
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

            {/* maincontainer */}

            <div className="main-container">


                <div className="spotify-playlists">
                    <h2>Search result</h2>

                    {track.map((element) => {
                        return <div className="list">
                            <div className="item">
                                <img src={element.tracks.items[0].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[0].album.name}</h4>
                                <p>{element.tracks.items[0].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[0].preview_url} controls></audio>
                            </div>

                            <div className="item">
                                <img src={element.tracks.items[1].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[1].album.name}</h4>
                                <p>{element.tracks.items[1].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[1].preview_url} controls></audio>
                            </div>

                            <div className="item">
                                <img src={element.tracks.items[2].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[2].album.name}</h4>
                                <p>{element.tracks.items[2].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[2].preview_url} controls></audio>
                            </div>

                            <div className="item">
                                <img src={element.tracks.items[3].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[3].album.name}</h4>
                                <p>{element.tracks.items[3].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[3].preview_url} controls></audio>
                            </div>

                            <div className="item">
                                <img src={element.tracks.items[4].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[4].album.name}</h4>
                                <p>{element.tracks.items[4].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[4].preview_url} controls></audio>
                            </div>

                            <div className="item">
                                <img src={element.tracks.items[5].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[5].album.name}</h4>
                                <p>{element.tracks.items[5].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[5].preview_url} controls></audio>
                            </div>



                            <div className="item">
                                <img src={element.tracks.items[6].album.images[0].url} />
                                <div className="play">
                                    <FontAwesomeIcon className="fa fa-play" icon={faPlay} />
                                </div>
                                <h4>{element.tracks.items[6].album.name}</h4>
                                <p>{element.tracks.items[6].album.artists[0].name}</p>
                                <audio className="audio-src" src={element.tracks.items[6].preview_url} controls></audio> 
                            </div>
                        </div>
                    })}

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
                 {/* <div className="preview">
                
            </div> */}
            </div>
        </div>
    )
}

export default Search;