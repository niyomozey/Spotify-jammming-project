import React, { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',top: 0,left: 0,right: 0,bottom: 0,
        background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6))"
      },
  content: {
    top: '50%',left: '50%',right: 'auto',bottom: 'auto',marginRight: '-50%',transform: 'translate(-50%, -50%)',background : '#404142'
  },
};

function PlaylistItem(props) {
    const dispatch = useDispatch()
    const { id, snapshot_id, name, uri, tracks, images } = props.item
    const data = useSelector((state) => state)
    const navigate = useNavigate()
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
    //   function afterOpenModal() {
    //     subtitle.style.color = '#f00';
    //   }
    
      function closeModal() {
        setIsOpen(false);
      }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        const displayName = e.target.name.value
        const email = e.target.email.value
        navigate(`/space`, { state: { 
            playlistId: id, 
            playlist_uri: uri,
            user:{
                displayName: displayName,
                email: email
            }
         } })

    }
    const HandleClick = () => {
        if (props.isPublic) {
            console.log('redirect to dashboard')
            // navigate(`/space`,{state:{playlistId: id, playlist_uri: uri}})
            // navigate(`/modal`, { state: { playlistId: id, playlist_uri: uri } })
            openModal()
        } else {
            console.log('div clicked')
            dispatch({ type: "GET_SONG", payload: props.item })
            console.log(data)
        }
    }
    
    return (
        <div className="flex-col rounded m-8 h-64 w-48 bg-zinc-800 hover:cursor-pointer">
            <div  onClick={() => HandleClick()}>
                <div className="h-40 w-40 pt-4  mx-auto">
                    <img className="h-40 w-40 rounded " src={images[0].url} />
                </div>
                <div className="h-40 w-40 mx-auto">
                    <h1 className="text-white pt-8 ">{name}</h1>
                </div>
            </div>            

            {/* --------------------Modal-------------------- */}
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container w-[500px] flex flex-row shadow-xl rounded">
                    <div className="w-1/3 mt-4 justify-item-center ">
                        <img className="h-40 w-40 rounded-full " src={images[0].url} />
                        <h1 className="text-gray-400 text-2xl text-center py-2">{name}</h1>
                    </div>
                    {/* <form class="bg-white border shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                        <p className="font-bold text-center text-xl font-sans pb-12">To continue, Login to IMusic</p>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="text"
                                required
                                placeholder="Username" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="******************" />  
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form> */}
                    <div className="w-2/3">
                        <h1 className="text-white text-2xl text-center py-2">Join {name} session</h1>
                        <form onSubmit={HandleSubmit} class="px-8 pt-6 pb-8 mb-4">
                            <div class="mb-2">
                                <label class="block text-white text-sm font-bold mb-2" for="password">
                                    Display Name
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="name" />  
                            </div>
                            <div class="mb-2">
                                <label class="block text-white text-sm font-bold mb-2" for="username">
                                    Email
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                    placeholder="Email" />
                            </div>
                            
                            <div class="flex items-center justify-between">
                                <button class="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
                                    Join
                                </button>
                                <button class="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closeModal}>close</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </Modal>
        </div>
    )
}
export default connect()(PlaylistItem)

