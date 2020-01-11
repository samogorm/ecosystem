import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './../../atoms/button/index';
import { Times } from './../../libraries/icons/index';

import './styles.scss';

const Modal = ({ id, title, content, actionButton, actions, toggled }) => {
  const [isOpen, setIsOpen] = useState(toggled);

  return (
    <div id={`modal-${id}`} className={isOpen ? 'modal modal--open' : 'modal'}>
      <div className="modal__title">
        <h3>{ title }</h3>
        <button className="modal__close" onClick={() => setIsOpen(false)}>
          <Times />
        </button>
      </div>
      <div className="modal__content">
        { content }
      </div>
      <div className="modal__footer">
        <div className="modal__buttons">
          {actionButton && (actionButton)}
          <Button
            label="Cancel"
            colour="light"
            action={() => setIsOpen(false)}
          />
        </div>
        { actions.length > 0 && (
          <div className="modal__actions">

          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

Modal.defaultProps = {
  toggled: false,
  actionButton: null,
  actions: false
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
};
