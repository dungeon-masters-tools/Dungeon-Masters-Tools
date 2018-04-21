import React from 'react';


export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <a href="" className="c-card__anchor">
                <div className="c-card">
                    <div className="o-aspect o-aspect--4x3">
                        <img src="http://satyr.io/400x300/242424" alt=""/>
                    </div>
                </div>
            </a>
        )
    }
}
