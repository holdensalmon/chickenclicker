import React, { Component } from 'react';

import Gradient from '../gradient';

class Schedule extends Component {
    render(){
        return (
            <div className="schedule">
                <h1 className="schedule__title">My Title</h1>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule;