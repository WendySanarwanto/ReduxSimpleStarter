import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBYnLPP6W4XLUBFQBoPBpGtMdyUHDtwveM';

// Create a new component. This component should produce some HTML
class App extends Component {
    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// const App = () =>{
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// };

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
