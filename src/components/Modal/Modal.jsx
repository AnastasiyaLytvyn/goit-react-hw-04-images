import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalWindow>
          <img src="" alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
