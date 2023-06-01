import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VideoDisplay() {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // Make a GET request to fetch the video URL from the server
        axios.get('/api/video')
            .then(response => {
                setVideoUrl(response.data.url);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Video Display</h2>
            {videoUrl ? (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <p>No video found.</p>
            )}
        </div>
    );
}

export default VideoDisplay;
