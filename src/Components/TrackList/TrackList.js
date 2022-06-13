import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component{
    render(){
        return(
            <div className="w-full">
                {this.props.tracks.map((track)=>{
                    return(
                        <Track  isRemoval={this.props.isRemoval}
                                track={track} 
                                key={track.id}
                                onAdd={this.props.onAdd}
                                onRemove={this.props.onRemove}/>
                    )                    
                })}
            </div>
        )
    }
}
export default TrackList;

