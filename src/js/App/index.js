
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
                <div className="o-layout__main">
                    <div className="c-intro">
                        
                        <h1 className="c-intro__headline">Steve Lockhorst</h1>
                        <p className="c-intro__body">Front End Developer who loves good UI. Currently at Haven Agency doing work for some of the biggest names in the gaming and entertainment worlds.</p>
                        <div className="c-intro__social">
                            <a href="https://www.linkedin.com/in/steven-lockhorst-6b740a94/">
                                <svg className="c-icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></svg>
                            </a>
                            <a href="https://github.com/swlockhorst">
                                <svg className="c-icon" viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M704 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm640 0q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm160 0q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zm224-176q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z'
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
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
