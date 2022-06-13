import React from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter as Router , Routes,  Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import DisplayPlaylist from "../Playlist/DisplayPlaylist";


function Dashboard(){
    return (
        
        <div>
            <h1>Dashboard</h1>
                <Link to="/playlists">View Playlists</Link>
            {/* <Routes> */}
                {/* <main> */}
                    {/* <Routes> */}
                        {/* <Route path="/playlists" element={<DisplayPlaylist/>}/> */}
                    {/* </Routes> */}
                {/* </main> */}
            {/* </Routes> */}
        </div>
    )
}

export default connect()(Dashboard)