
import React from 'react';


import Card from './components/Card';
import Data from '../data/main-menu.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="o-layout">
                <div className="o-layout__main"></div>
                <div className="o-layout__side">
                    <div className="c-menu">
                        {
                            Data.projects.map((project, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        cardImg={project.cardImg}
                                        detailImg={project.detailImg}
                                        description={project.description}
                                        info={project.info}
                                        tags={project.tags}
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
