import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
        //this.onInputChange.bind(this); // Important ! This will prevent `undefined` this, in line 20
    }

    render() {
        return (
            <div>
                <input type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} />
            </div>           
        );
    }

    onInputChange(event){
        let state = this.state;
        state.term = event.target.value;        
        console.log(`[DEBUG-SearchBar] - onInputChange is called. event.target.value=${state.term}`);
        this.setState(state);
    }
}

export default SearchBar;