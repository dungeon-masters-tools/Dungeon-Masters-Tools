import React from 'react';
import Modal from '../Modal';


export default class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
        };

        this.toggleModal = (event) => {
            this.setState({
                showModal: !this.state.showModal,
            });
        }
    }

    render() {
        const {    
            title,
            subtitle,
            detailImg,
            description,
            info,
            tags,
        } = this.props;

        return (
            <div>
                <div className="c-card" onClick={this.toggleModal}>
                    <div className="o-aspect o-aspect--4x3">
                        <img src={detailImg} alt=""/>
                    </div>
                    <div className="c-card__heading">
                        <span className="c-card__title">{title}</span>
                    </div>
                </div>
                {this.state.showModal &&
                    <Modal
                        title={title}
                        subtitle={subtitle}
                        detailImg={detailImg}
                        description={description}
                        info={info}
                        tags={tags}
                        close={this.toggleModal}
                    />
                }
            </div>
        )
    }
}
