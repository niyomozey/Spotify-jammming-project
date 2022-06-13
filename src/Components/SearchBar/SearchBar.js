import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);

        this.state = {term:''}
    }
    
    search(){
        this.props.onSearch(this.state.term);
    }
    handleTermChange(event){
        this.setState({term : event.target.value});
    }
 render(){
     return(
        <div className="md:ml-44 pt-16">
            <input className='rounded-full py-2 px-4 text-center' placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
            <button className="rounded-xl py-2 px-4 ml-2 bg-orange-700 text-white" onClick={this.search}>SEARCH</button>
        </div>
     )
 }
}

export default SearchBar;

