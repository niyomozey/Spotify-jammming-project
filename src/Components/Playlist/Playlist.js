import React from "react"
import './Playlist.css';
import TrackList from  '../TrackList/TrackList'

export default class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
    this.props.onNameChange(event.target.value)
    console.log('input value: '+event.target.value);
  }
  render(){
    return(
      <div className="Playlist">
        <input defaultValue="New Playlist" onChange={this.handleNameChange}/>
        {/* <!-- Add a TrackList component --> */}
        <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playlistTracks}/>
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}


