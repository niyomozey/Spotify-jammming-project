import React,{ useEffect, useState} from "react"
import { connect } from "react-redux"
import Spotify from "../../util/Spotify"

function Playback(){
    useEffect(async()=>{
        // async function getPlaylist(){
            const url = 'https://api.spotify.com/v1/tracks'
            const result = await Spotify.getTracks(url)
            console.log(result)
        // }
        // getPlaylist()
    },[])
    return(
        <div>
            <h1>................Playback.........................</h1>

        </div>
    )
}

export default connect()(Playback)