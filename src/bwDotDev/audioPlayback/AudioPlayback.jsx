import React from "react";

import AudioPlayer from "react-h5-audio-player";

import "./audioPlayback.css";
import "react-h5-audio-player/lib/styles.css";
import { useNavigate } from "react-router";
import HomeIcon from "../icons/HomeIcon";

function AudioPlayback() {
  const navigate = useNavigate();
  const playerRef = React.useRef(null);
  const uploadInputRef = React.useRef(null);

  const [playbackRate, setPlaybackRate] = React.useState(1);

  const handleHiddenInputClick = () => {
    uploadInputRef.current.click();
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      playerRef.current.audio.current.src = url;
      playerRef.current.audio.current.load();
    }
  };

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
    if (playerRef.current) {
      playerRef.current.audio.current.playbackRate = rate;
    }
  };

  return (
    <div className="audio-playback-container">
      <h1>Audio Playback</h1>
      <button className="button-icon button-home" onClick={() => navigate("/")}><HomeIcon /></button>

      <input
        ref={uploadInputRef}
        id="audio-upload"
        type="file"
        accept="audio/*"
        onChange={handleUploadFile}
      />
      <button onClick={handleHiddenInputClick}>Upload File</button>
      <AudioPlayer ref={playerRef} />
      <div className="playback-rate-controls">
        <button onClick={() => handlePlaybackRateChange(playbackRate - 0.01)}>
          -
        </button>
        <button onClick={() => handlePlaybackRateChange(playbackRate + 0.01)}>
          +
        </button>
        <span>Playback Rate: {playbackRate.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default AudioPlayback;
