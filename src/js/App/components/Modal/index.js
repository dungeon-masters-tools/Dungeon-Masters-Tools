import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
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
                    {title}
                    {detailImg}
                    {description}
                    {info}
                </div>
                <button onClick={close}>close</button>
            </div>

            <div className="c-overlay" onClick={close}/>
           </div>,
            modalRoot
        );
    }
}
