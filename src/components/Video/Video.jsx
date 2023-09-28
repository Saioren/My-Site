import React from 'react';
import './Video.css';

export default function Video ({ video }) {
    return (
        <div className='video'>
            <video src={video}></video>
        </div>
    );
}