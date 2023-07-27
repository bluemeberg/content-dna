import React, { useEffect, useState } from "react";
import {
  youtubeDataAPIInstacne,
  youtubeGeneralAPI,
  youtubeOauthAPI,
} from "../api/axios";
import { convertToShortNumber } from "../ustils/FortmatNumber";
import "./ChannelModal.css";
import ChannelThumbnail from "./ChannelThumbnail";
import ChannelTitle from "./ChannelTitle";
const ChannelModal = (props) => {
  console.log(props);
  console.log(props.unknownChannelSelected);
  const [channelDes, setChannelDes] = useState("");
  const getChannelInfo = async () => {
    const result = await youtubeDataAPIInstacne.get("/channels", {
      params: {
        key: youtubeGeneralAPI,
        part: "snippet",
        id: props.unknownChannelSelected.channelID,
      },
    });
    console.log(result.data.items[0].snippet.description);
    setChannelDes(result.data.items[0].snippet.description);
  };
  useEffect(() => {
    getChannelInfo();
  }, []);
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
            <div className="modal_channel">
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
                  구독자{" "}
                  {convertToShortNumber(
                    props.unknownChannelSelected.channelSubscribeCount
                  )}
                </div>
              </ChannelTitle>
            </div>
            <div className="channelDescription">{channelDes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelModal;
