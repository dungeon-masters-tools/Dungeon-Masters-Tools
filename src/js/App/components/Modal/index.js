import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Setup transitions
// import { CSSTransitionGroup } from 'react-transition-group';

const modalRoot = document.body;
export default class Modal extends React.Component {
    render() {
        const {    
            title,
            detailImg,
            description,
            info,
            close,
        } = this.props;

        return ReactDOM.createPortal(
           <div>
            <div className="c-modal">
                <div className="c-modal__inner">
                    <h1>{title}</h1>
                    <div className="o-aspect o-aspect--4x3 u-spacing-20">
                        <img src={detailImg} className="c-modal__img" alt=""/>
                    </div>
                    
                    <p>{description}</p>
                    <p>{info}</p>
                </div>
                <button className="c-close-button" onClick={close}>
                    <svg className="c-close-button__icon" viewBox="0 0 1000 1000">
                        <path d="M22.3 81.9C6.1 65.8 6 39 22.5 22.5c16.6-16.6 43.1-16.6 59.4-.2l418.1 418 418.1-418c16.1-16.1 43-16.3 59.5.2 16.6 16.6 16.6 43.1.2 59.5L559.7 500l418.1 418.1c16.1 16.1 16.3 43-.2 59.5-16.6 16.6-43.1 16.6-59.5.2L500 559.7l-418.1 418c-16.1 16.1-43 16.3-59.5-.2-16.6-16.6-16.6-43.1-.2-59.5l418.1-418-418-418.1z"/>
                    </svg>
                </button>
            </div>

            <div className="c-overlay" onClick={close}/>
           </div>,
            modalRoot
        );
    }
}
