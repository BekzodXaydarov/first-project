import { useRef } from "react";

const VideoComponent = ({ src, ...props }) => {
  const refVideo = useRef();
  const handlePlay = () => {
    if (refVideo.current.paused) {
      refVideo.current.play();
    } else {
      refVideo.current.pause();
    }
  };
  return (
    <div onClick={handlePlay} className="video-container">
        <div className="left square"/>
        <div className="right square"/>
      <video ref={refVideo} src={src} {...props} />
    </div>
  );
};

export default VideoComponent;

