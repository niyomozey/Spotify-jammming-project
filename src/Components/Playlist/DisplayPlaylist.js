import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Spotify from '../../util/Spotify';
import PlaylistItem from './PlaylistItem';
import Tracks from './Tracks';

function DisplayPlaylist(props) {
    const [playlist, setPlaylist] = useState([]);

    useEffect(async () => {
        const data = await Spotify.getPlayLists()
        setPlaylist(data.items)
        console.log('-----data-----:',props.onlyPublic)
    }, [])

   

    return (
        <div className={props.onlyPublic === true?'flex md:flex-col sm:flex-col bg-black':'flex md:flex-row sm:flex-col bg-black'}>
            {props.onlyPublic ? 
                (<div className="2xl:container bg-black border-2">
                    <div className="row flex flex-row bg-white h-[600px] bg-gradient-to-r from-slate-100 to-white">
                        <div className='w-1/2 m-20'>
                            <p className='text-6xl font-sans font-bold text-green-700'>IMusic</p>
                            <p className='text-4xl py-8'>Listen your favorite song with your loved ones around world. Enjoy and Feel it.</p>
                            <a href='#playlist' h className="py-2 bg-black md:mr-14 px-6 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            >Get started</a>
                        </div>
                        <div className='w-1/2'>
                            <img className='h-full w-5/6' src='/asset/headset.png' />
                        </div>
                    </div>
                </div>) : ''
            }
            <div id='playlist' className="row mx-auto min-h-[500px]  bg-black">
                <div className="w-[70%]  mx-auto justify-start">
                    <p className='py-8 text-center text-3xl text-white'>Public Playlists</p>
                </div>
                <div className="w-[70%]  mx-auto justify-center flex flex-wrap">

                    {playlist.map((element, index) => {
                        return (
                            props.onlyPublic && element.public === true ?
                                <PlaylistItem key={index} isPublic={props.onlyPublic} item={element} /> :
                                <PlaylistItem key={index} item={element} />
                        )
                    })}
                </div>
            </div>
            {props.onlyPublic ? '' :
                (<div className='w-2/4 md:pt-16 shadow-2xl border border-gray-900 mx-auto bg-black rounded-lg'>
                    <h1 className='text-white text-center py-4 text-xl'>Tracks</h1>
                    <Tracks />
                </div>)
            }
        
        </div>
    )
}

export default connect()(DisplayPlaylist);