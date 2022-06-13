import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom'
import Spotify from "../../util/Spotify";


function PlaylistSpace(props) {
    const location = useLocation()
    const { playlistId, playlist_uri, user } = location.state

    console.log(' location :', playlistId,user)
    useEffect(() => {
        async function fetchData() {
            const response = await Spotify.followPlaylist(playlistId)
            console.log(response)
            const users = await Spotify.getTracks(`https://api.spotify.com/v1/playlists/${playlistId}`)
            console.log('users: ', users)
        }
        fetchData()
    }, [])
    
    return (
        <div className="h-96">
            <h1>Hello space</h1>
            
        </div>
    )
}
export default connect()(PlaylistSpace)