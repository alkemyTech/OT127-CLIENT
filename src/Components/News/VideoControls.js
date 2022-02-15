import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

const VideoControls = ({
  playing,
  handlePlay,
  volume,
  handleVolume,
  handleMute,
  muted,
}) => {
  return (
    <div className="videocontrols">
      <button onClick={(e) => handlePlay(e)} className="videocontrols__button">
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </button>
      <button onClick={handleMute} className="videocontrols__button">
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </button>
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onInput={(e) => handleVolume(e)}
        className="videocontrols__volumebar"
      />
    </div>
  );
};

export default VideoControls;
