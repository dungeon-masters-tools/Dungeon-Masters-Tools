
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
                    <div className="c-intro">
                        <div className="c-logo">
                            <div className="c-logo__inner">S</div>
                        </div>
                        <h1 className="c-intro__headline">Steve Lockhorst</h1>
                        <p className="c-intro__body">Front End Developer with a focus on  high performance using HTML5, CSS and Javascript.</p>
                        <div className="c-intro__social">
                                <a href="https://www.linkedin.com/in/steven-lockhorst-6b740a94/">
                                    LinkedIn
                                </a>

                                <a href="https://github.com/swlockhorst">
                                    GitHub
                                </a>
                            
                                <a href="https://twitter.com/Swlockhorst">
                                    Twitter
                                </a>
                        </div>
                    </div>
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
