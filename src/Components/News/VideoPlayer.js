import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoControls from "./VideoControls";

//TODO Separar componentes
//TODO Darle estilos a los botones y a la barra de play y volumen
//TODO Revisar tamaños

const VideoPlayer = () => {
  const [volume, setVolume] = useState(0);
  const [volumeBar, setVolumeBar] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);
    setVolumeBar(e.target.value);
  };
  const handlePlay = (e) => {
    setIsPlay(!isPlay);
  };
  const handleMute = () => {
    setVolume(0);
  };
  const handleUnmute = () => {
    setVolume(50);
  };
  return (
    <div className="videoplayer">
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
        handleMute={handleMute}
        handleUnmute={handleUnmute}
      ></VideoControls>
    </div>
  );
};

export default VideoPlayer;
