import React,{ useEffect,useState } from "react";
import { connect, useSelector } from "react-redux";
import Spotify from "../../util/Spotify";

function Tracks(){
    const { tracks } = useSelector((state)=> state.songReducer)
    const [track , setTrack] = useState([]);
    const [playIcon, setPlayIcon] = useState('hidden')
    useEffect(async()=>{
            // function fetchData()
            if(tracks){
            console.log("tracks trigged",tracks.href)
            const result = await Spotify.getTracks(tracks.href)
            console.log("-------------->",result.items)
            setTrack(result.items)
            console.log('track update: ',track)
            console.log('type of : ',typeof(track))
            }
    }, [tracks])
    const onPlay = (url)=>{
        // window.location.replace('https://www.kindacode.com');
        // window.location.href = 'https://www.kindacode.com'
        window.open(url, '_blank');
    }
    console.log('first tracklist:',track)
    return(
        <div>
            {
                track.map((element)=>{
                     return(
                         <div onMouseLeave={()=> setPlayIcon('hidden')} onMouseEnter={()=> setPlayIcon('absolute')}  onClick={()=> onPlay(element.track.preview_url)} className="w-5/6 my-2 flex hover:bg-zinc-900 hover:cursor-pointer flex-row mx-auto rounded-xl bg-zinc-800 text-white">
                            <div className="py-4 px-4 w-[100px] sticky">
                                {/* <i style={{
                                    display: playIcon != 'hidden'? 'block': 'none',
                                    position: playIcon}}  className='fa fa-play ml-4 mt-5 border hidden bg-orange-700 p-2 rounded-full'></i> */}
                                <img  style={{borderRadius:"50%",height:"60px",width:"60px"}} src={element.track.album.images[1].url}/>
                            </div>
                            <div className="py-4">
                                <h1>{element.track.name}</h1>
                                <h2 className="text-gray-500">{element.track.artists.map((artist)=>artist.name+',')}</h2>
                            </div>
                        </div>
                     )
                })
            }
        </div>
    )
}


export default connect()(Tracks)