
import React, { useState } from 'react';
import spotifylogo from '../images/Spotify Logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faSearch, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faChevronLeft, faChevronRight, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <a href="/">
                        <img src={spotifylogo} alt="Logo" />
                    </a>
                </div>

                <div className="navigation">
                    <ul>
                        <li>
                            <a href="/">
                                <div className="nav-items">
                                    <FontAwesomeIcon icon={faHome} />
                                    <span>Home</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="nav-items">
                                    <FontAwesomeIcon icon={faSearch} />
                                    <span>Search</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="nav-items">
                                    <FontAwesomeIcon icon={faBook} />
                                    <span>Your Library</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navigation">
                    <ul>
                        <li>
                            <a href="">

                                <div className="nav-items">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>Create Playlist</span>
                                </div>

                            </a>
                        </li>
                        <li>

                            <a href="">

                                <div className="nav-items">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>Liked Songs</span>
                                </div>

                            </a>
                        </li>

                    </ul>
                </div>

                <div className="policies">
                    <ul>
                        <li>
                            <a href="/">Cookies</a>
                        </li>
                        <li>
                            <a href="/">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar