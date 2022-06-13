import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack= this.addTrack.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
    }
  renderAction(){
    if(this.props.isRemoval){
      return <button className="border border-gray-700 rounded-full hover:bg-red-800 py-1 px-10 text-white" onClick={this.removeTrack}>Remove</button>
    }else{
      return <button className="border border-gray-700 rounded-full hover:bg-zinc-800 py-1 px-10 text-white" onClick={this.addTrack}>Add</button>
    }
  }

  addTrack(){
    this.props.onAdd(this.props.track)
  }
  removeTrack(){
    this.props.onRemove(this.props.track)
  }

  render(){
    return(
      <div className="Track  rounded bg-zinc-900 my-8">
        <div className='w-5/6 py-1 mx-auto flex flex-row'>
          <div className="Track-information w-2/3">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
          </div>
          <div className='Track-information w-1/3'>
            {this.renderAction()}
          </div>
        </div>        
      </div>
    )
  }
}
export default Track

