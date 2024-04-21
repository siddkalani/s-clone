import React, { useEffect, useState } from 'react'

import "./App.css"
import spotifyy from "./spotify.svg"

const App = (props) => {
  const CLIENT_ID = "c3cfe05296734b91b08b0509ae312fed"
  const CLIENT_SECRET = "be5f887bf89f43b497b69efdab69d041"
  const [token, setToken] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [image, setImages] = useState([])
  const [ExternalUrl , setExternalUrl] = useState([])
  const [track , setTrack] = useState([])
  
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
      .then(data => { return (data.tracks.items[0].id)})
    // console.log(data)
    //get req using search to get all albums of artist
    var returnTrack = await fetch("https://api.spotify.com/v1/tracks/" + trackID, searchParameters)
      .then(response => response.json())
      .then(data => {return setTrack([data])})
      console.log(track)
      // const sidd = returnTrack()
    // //display those albums to user

  }
  return (
    <div> 
      <div className="main">
      <div className='navbar'>
         <div className='logo'><img src={spotifyy} alt="" /></div>
        <form className="search-bar">
          <input 
          type="search" 
          onChange={e => setSearchInput(e.target.value)}  
          name="search" 
          pattern=".*\S.*" 
          required />
          <button onClick={search} className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
        </div>
        <div className="s-card">
          
          {track.map((element)=>{
            return <div key={element.id} className=""> 
            <audio src={element.preview_url} controls></audio> 
            </div>
          })}
          

        </div>
        
        </div>
      </div>
    
  )
}

export default App