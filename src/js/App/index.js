
import React from 'react';
import Card from './components/Card';
import Data from '../projects.json';

const FuckButt = Data.projects.map((item, index) => {
    console.log(index);
})


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="o-layout">
                <div className="o-laybout__main">
                    <img src="http://satyr.io/300x300/242424" alt=""/>
                    <h1>Main Content</h1>
                    <p>Small paragraph about me that explains who i am, what i do and maybe a side hobby or some fun fact about me.</p>
                    <ul>
                        <li><a href="#">social link</a></li>
                        <li><a href="#">social link</a></li>
                        <li><a href="#">social link</a></li>
                        <li><a href="#">social link</a></li>
                    </ul>
                </div>
                <div className="o-laybout__side">
                    <div className="c-menu">
                        {
                            Data.projects.map((project, index) => {
                                return (
                                    <Card
                                        key={index}
                                        tite={project.title}
                                        cardImgg={project.cardImg}
                                        detailImg={project.detailImg}
                                        description={project.description}
                                        info={project.info}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
