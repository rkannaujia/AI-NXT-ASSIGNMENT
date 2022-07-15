
import chatImgae from "./img/chat.jpg";
export default function VideoCapture(){
    function startHandler() {
        let video = document.getElementById("video");
        let audio = document.getElementById("audio");
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          })
          .then(stream => {
            window.localStream = stream;
            video.srcObject = stream;
            audio.srcObject = stream;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      function stopVideo() {
        let video = document.getElementById("video");
        let audio = document.getElementById("audio");
        window.localStream.getVideoTracks()[0].stop();
        video.src = '';
        window.localStream.getAudioTracks()[0].stop();
        audio.src = '';
      
      }
    
    return(<>
    
    <h1>Video Streaming</h1>
    <div className="video-container">
        
        <div className="video-item">
        <video controls={true} id="video" playsInline="" autoplay="" />
        <audio id="audio" class="audiostream" autoplay="" />
        <div className="videobutton">
        <button onClick={startHandler}>Capture</button>
        <button onClick={stopVideo}>Stop</button>
        </div>
        </div>
        <div className="image-item">
            <img src={chatImgae} />
        </div>
        </div >
    </>)
}