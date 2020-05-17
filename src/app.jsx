import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Lessons: [],

          }

        }
    // componentDidMount(){
    //     this.getlesson()
    // }

    }
    render() {
        return (
            <H1>Educate Me</H1>
            <button onClick = {Login}>
                Login
            </button>
        )
    }
}

export default App;