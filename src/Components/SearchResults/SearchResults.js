import React from "react";
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

export default class SearchResults extends React.Component{
  render(){
    return(
      <div className="SearchResults shadow-2xl flex flex-col mx-auto py-3 rounded-lg">
        <h2 className="text-left w-full py-4 text-2xl text-white">Results</h2>
        <TrackList onAdd={this.props.onAdd} isRemoval={false} tracks={this.props.SearchResults}/>
      </div>
    )
  }
}



