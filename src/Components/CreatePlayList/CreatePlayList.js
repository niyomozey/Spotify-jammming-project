import React from 'react';
// import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import Header from '../Header/Header';
import { connect } from 'react-redux'
import DisplayPlaylist from '../Playlist/DisplayPlaylist';


class CreatePlayList extends React.Component {
  constructor(props){
    super(props);
    this.state = {SearchResult:[],
                playlistTracks:[],
                playlistName:"back to life",
                private:false
    };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.publicToggleSwitch = this.publicToggleSwitch.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  }
   addTrack(track){
     let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack=> savedTrack.id===track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack=> currentTrack.id !== track.id)
    this.setState({playlistTracks:tracks});
  }
  updatePlaylistName(name){
    this.setState({playlistName: name})
  }
  publicToggleSwitch = (checked)=>{
    this.setState({private: checked})
  }
  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    console.log('before save: ',this.state.private)
    Spotify.savePlayList(this.state.playlistName,!this.state.private,trackUris).then(()=>{
      this.setState({
        playlistName:'New Playlist',
        playlistTracks: [],
        private:false
      })
    })
  }
  search(term){
    Spotify.search(term).then(searchResults=>{
      console.log('---->',searchResults);
      this.setState({SearchResult: searchResults});
    })
  }
  render(){
    return (
      <div>
      {/* <Header/> */}
      <div className="App bg-black">
        <SearchBar  onSearch={this.search}/>
        <div className="App-playlist flex flex-wrap w-5/6 mx-auto">
            <SearchResults 
              onAdd={this.addTrack} 
              SearchResults={this.state.SearchResult}
            />
            <Playlist onRemove={this.removeTrack} 
                      onNameChange={this.updatePlaylistName}
                      onToggleSwitch = {this.publicToggleSwitch}
                      playlistName={this.state.playlistName}
                      onSave={this.savePlaylist}
                      playlistTracks={this.state.playlistTracks}
            />
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(CreatePlayList)
