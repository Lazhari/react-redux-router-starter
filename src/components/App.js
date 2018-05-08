import React, { Component } from 'react';

import Header from './Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1 className="text-center">
                        React, Redux and React Router
                    </h1>
                </div>
            </div>
        );
    }
}

export default App;
