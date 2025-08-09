import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='video-div'>
            <h1 className='video-h'>{title}</h1>
            <p className='video-p'>{overview}</p>

            <div className='btn-div'>
                <button className='video-btn-play'> ▶ Play</button>
                <button className='video-btn-info'>More Info</button>

            </div>
        </div>

    )
}

export default VideoTitle;
