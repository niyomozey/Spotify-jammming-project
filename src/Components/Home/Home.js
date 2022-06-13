import React from "react";
import Header from "../Header/Header";
import DisplayPlaylist from "../Playlist/DisplayPlaylist";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import PlaylistSpace from "../Session/PlaylistSpace";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import { Footer } from "../Footer/Footer";
import CreatePlayList from "../CreatePlayList/CreatePlayList";
import UserModal from "../Playlist/UserModal";

function Home() {
    const id = useParams()
    console.log('first id: ', id)
    return (
        <>
            {/* <Signup/> */}
            <Router>
                <Header />
                <Routes>
                    <Route path="/*" element={<DisplayPlaylist onlyPublic={true} />}></Route>
                    {/* <Route path="/*" element={<CreatePlayList onlyPublic={true} />}></Route> */}
                    {/* <div className="2xl:container bg-black border-2">
                        <div className="row bg-white h-[400px]">
                            <h1>Hello world!!!</h1>
                            <h1>Landing Page......................</h1>

                        </div>
                        <div className="row min-h-[500px]">
                            <DisplayPlaylist onlyPublic={true} />
                        </div>

                    </div> */}
                   
                    <Route path="/space" element={<PlaylistSpace/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<CreatePlayList/>}/>
                    <Route path="/tracks" element={<DisplayPlaylist/>}/>
                    <Route path="/modal" element={<UserModal/>}/>
                </Routes>
                <Footer/>
            </Router>

        </>
    )
}

export default connect()(Home);