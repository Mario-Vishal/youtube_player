import './VideoItem.css';


const VideoItem = ({video,onVideoSelect}) => {

    

    return(
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title+" video palyed here!"} />
            <div className="content">
                <div className="header title">
                {video.snippet.title}
                </div>
                
            </div>
            
        </div>
    )
};



export default VideoItem;