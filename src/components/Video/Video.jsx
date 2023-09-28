import React from 'react';
import './Video.css';
import { Video as VideoModel } from '../../video.jsx'

export default function Video (video){
    return <div className='video'>
        <video  src={video.video}></video>
    </div>
}