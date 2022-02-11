import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoControls from "./VideoControls";

const VideoPlayer = () => {
  const [volume, setVolume] = useState(0);
  const [volumeBar, setVolumeBar] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);
    setVolumeBar(e.target.value);
  };
  const handlePlay = (e) => {
    setIsPlay(!isPlay);
  };
  const handleMute = () => {
    setMuted(!muted);
  };
  return (
    <div className="videoplayer">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
        width="650px"
        height="400px"
        volume={volume}
        playing={isPlay}
        muted={muted}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              showinfo: 0,
              rel: 0,
              modestbranding: 1,
              iv_load_policy: 3,
              fs: 0,
            },
          },
        }}
      ></ReactPlayer>
      <VideoControls
        playing={isPlay}
        handlePlay={handlePlay}
        volume={volumeBar}
        handleVolume={handleVolume}
        handleMute={handleMute}
        muted={muted}
      ></VideoControls>
    </div>
  );
};

export default VideoPlayer;
