// SpotifyClone.jsx

import React, { useState } from 'react';
import './SpotifyClone.css'; // Import your CSS file
import spotifylogo from './images/Spotify Logo.png'
import MainContainer from './main-container/MainContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faSearch, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faChevronLeft, faChevronRight, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar/Sidebar';
import App from './search-page/App';
import Topbar from './topbar/Topbar';
import Tracks from './Tracks';

function SpotifyClone() {

    return (
        <div>
            <BrowserRouter>

               

                    <Sidebar />

                    <Topbar />
                    <Routes>

                    <Route path='/' element={ <MainContainer />}></Route>
                    <Route path='/main' element={ <MainContainer />}></Route>
                    <Route path='/search' element={ <App />}></Route>
                    <Route path='/tracks' element={ <Tracks />}></Route>
                    {/* <div className="preview">
                <div className="text">
                    <h6>Preview of Spotify</h6>
                    <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                </div>
                <div className="button">
                    <button type="button">Sign up free</button>
                </div>
            </div> */}
                </Routes>

            </BrowserRouter>
        </div>

    );
}

export default SpotifyClone;
