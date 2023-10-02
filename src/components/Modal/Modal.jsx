import React, { Component } from 'react';
import { ModalBox, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEscape);
  }

  handleKeyEscape = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByOverlay = evt => {
    if (evt.currentTarget !== evt.target) {
      return;
    }

    this.props.closeModal();
  };

  render() {
    const { data } = this.props;
    return (
      <Overlay onClick={this.closeByOverlay}>
        <ModalBox>
          <img src={data} alt="The same img but large" />
        </ModalBox>
      </Overlay>
    );
  }
}
