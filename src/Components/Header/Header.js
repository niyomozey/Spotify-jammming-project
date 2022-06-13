import React from "react"
import { connect, useSelector } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'

function Header(){
    // const history = useNavigate()
    const onClickHandle = ()=>{
        // history('/login')
        // console.log('logout')

    }
    return(
        <div className="navbar max-h-2  w-full mx-auto bg-black">
            <div className="flex-1">
                <a className="btn md:ml-14 btn-ghost normal-case text-2xl text-white">IMusic</a>
            </div>
            <div className="flex-initial ">
                <ul className="menu menu-horizontal p-0 my-2 ">
                    <li className="mt-2">
                        <Link to='/login'>
                            <button class="py-2 md:mr-14 px-6 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black"
                                onClick={()=>onClickHandle()}
                            >
                            Login
                            </button>
                        </Link>
                    </li>
                    {/* <li tabIndex="0">
                        <a>
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                        <li>
                        
                        </li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default connect()(Header)

