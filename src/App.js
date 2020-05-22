import React, {Component} from 'react';
import './App.css';
import Char from "./Char/Char";
import Validation from "./Validation/Validation";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleRemoveChar = this.handleRemoveChar.bind(this);

    }

    handleOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    handleRemoveChar = (charIndex) => {
        const listChars = [...this.state.inputValue.split("")] || [];
        listChars.splice(charIndex,1);
        const result2 = listChars.join('');
        this.setState({
            inputValue: result2
        })
    };


    render() {
        // const listChars = this.state.inputValue || [];
        const listChars = this.state.inputValue.split("") || [];

        return (
            <div className="App">
                <h1>Hi soy peche! </h1>
                <input type="text" onChange={this.handleOnChange} value={this.state.inputValue}/>
                <p>{this.state.inputValue.length}</p>
                <Validation size={this.state.inputValue.length} />
                <div>
                {listChars.map( (value, index) => {
                    return <Char click={() =>this.handleRemoveChar(index)} key={index} value={value} />
                })}
                </div>

            </div>
        );
    }


}

export default App;
