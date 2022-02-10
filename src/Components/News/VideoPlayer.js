import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoControls = ({ playing, handlePlay, volume, handleVolume }) => {
  return (
    <div>
      <div>
        <button onClick={(e) => handlePlay(e)}>
          {playing ? "pause" : "play"}
        </button>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onInput={(e) => handleVolume(e)}
        />
      </div>
    </div>
  );
};

const VideoPlayer = () => {
  const [volume, setVolume] = useState(0);
  const [volumeBar, setVolumeBar] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  // const [videoDuration, setvideoDuration] = useState(0)

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);
    setVolumeBar(e.target.value);
  };
  const handlePlay = (e) => {
    setIsPlay(!isPlay);
  };
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
        volume={volume}
        playing={isPlay}
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
      ></VideoControls>
    </div>
  );
};

export default VideoPlayer;
