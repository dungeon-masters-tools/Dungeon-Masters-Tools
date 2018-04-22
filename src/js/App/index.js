
import React from 'react';
import Card from './components/Card';
import Data from '../projects.json';

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
                    <img src="" alt=""/>
                    <h1>Steven Lockhorst</h1>
                    <p>Front End Developer with a focus on  high performance using HTML5, CSS and Javascript.</p>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/steven-lockhorst-6b740a94/">
                                LinkedIn
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/swlockhorst">
                                GitHub
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://twitter.com/Swlockhorst">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="o-laybout__side">
                    <div className="c-menu">
                        {
                            Data.projects.map((project, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={project.title}
                                        cardImg={project.cardImg}
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
