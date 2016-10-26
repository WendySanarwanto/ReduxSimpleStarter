import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBYnLPP6W4XLUBFQBoPBpGtMdyUHDtwveM';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };

        const term = 'nvidia geforce gtx';
        YTSearch({key: API_KEY, term: term}, (videos)=>{             
            console.log(videos);
            this.setState({ videos }); 
            // this.setState({ videos: videos });
        });        
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
