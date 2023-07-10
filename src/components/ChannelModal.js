import React from "react";
import "./ChannelModal.css";
const ChannelModal = (props) => {
  console.log(props);
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span
            className="modal-close"
            onClick={() => props.setModalOpen(false)}
          >
            X
          </span>
          <img className="modal__poster-img" alt="modal-img" />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>
            </p>
            <h2 className="modal__title"></h2>
            <p className="modal__overview">평점 : </p>
            <p className="modal__overview"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelModal;
