import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Header from "../Header/Header";
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Auth/Login'
import Home from "../Home/Home";
import DisplayPlaylist from "../Playlist/DisplayPlaylist";
import CreatePlayList from "../CreatePlayList/CreatePlayList";

function App(){
    const isAuthenticated = true;
    // const AuthWrapper = (isAuthenticated) => {
    //     return isAuthenticated ? (
    //     <Navigate to="/dashboard" replace/>
    //     ):(<Navigate to="/login" replace/>);
    // }
    const AuthWrapper = (isAuthenticated) => {
        return isAuthenticated ? (
        <Dashboard/>
        ):(<Login/>);
    }
    return (
        <div>
            <Router>
              <Header/>
                <main>
                    <Routes>
                        {/* <Route path="/" element={<Home/>} />
                        <Route exact path="/home" element={<Home/>}/> */}
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<AuthWrapper isAuthenticated={isAuthenticated}/>} />
                        <Route path="/playlists" element={<DisplayPlaylist/>}/>
                        <Route path="/create-playlist" element={<CreatePlayList/>}/>
                        {/* <Route
                            path="*"
                            element={
                            <div>
                                <h2>404 Page not found</h2>
                            </div>
                            }
                        />  */}
                    </Routes>
                </main>
            </Router>
        </div>
    )
}

export default connect()(App)
