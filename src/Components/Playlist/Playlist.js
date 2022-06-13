import React from "react"
import './Playlist.css';
import TrackList from  '../TrackList/TrackList';
import ReactSwitch from 'react-switch';

export default class Playlist extends React.Component{
  
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSwitchChange  = this.handleSwitchChange.bind(this);
    this.state={checked : true}
  }
  handleNameChange(event){
    this.props.onNameChange(event.target.value)
    console.log('input value: '+event.target.value);
  }
  handleSwitchChange = ()=>{
    this.setState({checked: !this.state.checked})
    // this.state.checked =  !this.state.checked
    this.props.onToggleSwitch(this.state.checked)
    console.log('--->',this.state.checked)
  }
  render(){
    return(
      <div className="Playlist shadow-2xl border border-gray-900 mx-auto bg-zinc-800 rounded-lg">
        <input defaultValue="New Playlist" onChange={this.handleNameChange}/>
        <div className="flex flex-row pt-4">
          <p className="text-white text-xl px-4">Private</p>
           <ReactSwitch checked={this.state.checked} onChange={this.handleSwitchChange}/>
        </div>
        {/* <div className="container">
          <div className="toggle-switch">
            <input type="checkbox" className="checkbox" 
                  name="status" id="status" />
            <label className="label" htmlFor="status">
              <span className="inner" />
              <span className="switch" />
            </label>
          </div>
        </div> */}
        {/* <!-- Add a TrackList component --> */}
        <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playlistTracks}/>
        <button className="Playlist-save bg-orange-700" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}


