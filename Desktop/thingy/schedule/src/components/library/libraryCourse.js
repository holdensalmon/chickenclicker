import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render(){
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {Icon('fas fa-check-circle', 'library-course__icon') }

                {/* {Icon('fas fa-plus-circle', 'library-course__action') } */}
                <div className="library-course__description">
                    <label>Daddy Description</label>
                    <p>dad is that you? oh my gosh! i thought I would never hear from you again! this is so insane! I can't beleive this is happening!</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;