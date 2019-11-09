import React, { Component } from "react";
import ReactDOM from "react-dom";
import ClickOutside from "../click-outside";
import "./style.scss";

class Modal extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      document.body.style.overflow = "auto";
    }
  }

  render() {
    const { isOpen, close } = this.props;
    return isOpen
      ? ReactDOM.createPortal(
          <div className="M-modal-wrap">
            <ClickOutside onClickOutside={close}>
              <div className="M-modal-content">{this.props.children}</div>
            </ClickOutside>
          </div>,
          document.getElementById("modal")
        )
      : null;
  }
}

export default Modal;
