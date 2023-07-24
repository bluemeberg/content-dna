import React from "react";
import { convertToShortNumber } from "../ustils/FortmatNumber";
import "./ChannelModal.css";
import ChannelThumbnail from "./ChannelThumbnail";
import ChannelTitle from "./ChannelTitle";
const ChannelModal = (props) => {
  console.log(props);
  console.log(props.unknownChannelSelected);
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
          <div className="modal__content">
            <ChannelThumbnail>
              <img
                src={props.unknownChannelSelected.channelThumbnail}
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">
                {props.unknownChannelSelected.channelTitle}
              </div>
              <div className="channelSubscriber">
                {convertToShortNumber(
                  props.unknownChannelSelected.channelSubscribeCount
                )}
              </div>
            </ChannelTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelModal;
