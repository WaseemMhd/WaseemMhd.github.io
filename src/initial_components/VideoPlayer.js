import { faClose, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./videoPlayer.css";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [isPlayed, setIsplayed] = useState(false);

  const handlePlay = () => {
    setIsplayed(true);
  };

  const handleClose = () => {
    setIsplayed(false);
  };

  return (
    <div>
      {isPlayed && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            minWidth: "100%",
            minHeight: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 999,
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "60px",
              right: "60px",
              border: "none",
              background: "rgb(0, 114, 105)",
              padding: "5px 10px 2px 10px",
              zIndex: 1005,
              cursor: "pointer",
            }}
            className="close-button rounded-circle"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faClose} style={{ fontSize: "30px" }} />
          </button>
          <ReactPlayer
            playing={isPlayed}
            url={"/olympic.mp4"}
            height="100%"
            width="100%"
            onEnded={handleClose}
            style={{
              display: isPlayed ? "block" : "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 1001,
            }}
          />
        </div>
      )}
      <button
        type="button"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          border: "none",
          background: "none",
        }}
        onClick={handlePlay}
      >
        <FontAwesomeIcon
          icon={faPlayCircle}
          style={{ fontSize: "50px", color: "white" }}
        />
      </button>
    </div>
  );
};

export default VideoPlayer;
