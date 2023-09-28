 
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import videos from '../../videos.json';
import Video from './Video/Video.jsx';
import ChevronLeft from '../../src/images/left-arrow-5.svg';
import ChevronRight from '../../src/images/right-arrow-in.svg';
 
const classes = [
  "video-left",
  "video-center",
  "video-right"
];
  
 
export default function Projects() {
 
  const slideShowRef = useRef(null);
 
  useEffect(() => {
    if (slideShowRef.current) {
      for (let i = 0; i < 3; i++) {
        const element = createVideoElement(videos[i]);
        element.classList.add(classes[classes.length - 1 - i]);
        const firstChild = slideShowRef.current.children[0];
        if (firstChild) {
          firstChild.insertAdjacentElement("afterend", element);
        }
      }
    }
  }, [videos]);
 
  function createVideoElement(video) {
    const element = document.createElement("div");
    element.className = "video video-right";
  
    const videoElement = document.createElement("video");
    videoElement.src = video && video.video ? video.video : "";
    videoElement.controls = true;
  
    element.appendChild(videoElement);
  
    return element;
  }
}

function SlideShow() {
  const slideShowRef = useRef(null);

  function Previous() {
    if (slideShowRef.current) {
      const children = slideShowRef.current.getElementsByClassName('video');
      if (children) {
        const lastChild = children[children.length - 1];
        slideShowRef.current.removeChild(lastChild);
 
        for (let i = 0; i < classes.length; i++) {
          const currentChild = children[i];
          for (let j = classes.length; j >= 0; j--) {
            if (currentChild.classList.contains(classes[j])) {
              currentChild.classList.remove(classes[j]);
              currentChild.classList.add(classes[j + 1]);
            }
          }
        }
        const newChild = createVideoElement(videos[0]);
        newChild.classList.add(classes[0]);
        slideShowRef.current.children[0].insertAdjacentElement('afterend', newChild);
      }
    }
  }
 
  function Next() {
    if (slideShowRef.current) {
      const children = slideShowRef.current.getElementsByClassName("video");
      if (children) {
        const firstChild = children[0];
       
        slideShowRef.current.removeChild(firstChild);
 
        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];
 
          for (let j = 0; j < classes.length; j++) {
            if (currentChild.classList.contains(classes[j])) {
              currentChild.classList.remove(classes[j]);
              currentChild.classList.add(classes[j - 1]);
            }
          }
        }
 
        const newChild = createVideoElement(videos[0]);
        newChild.classList.add(classes[classes.length - 1]);
        slideShowRef.current.children[
          slideShowRef.current.children.length - 1
        ].insertAdjacentElement("beforebegin", newChild);
      }
    }
  }
 
  return (
    <>
      <div className='project-div-wrap'>
        <div ref={slideShowRef} className='project-info'>
          <h1>MY PROJECTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore magni necessitatibus vitae perspiciatis rerum, cum facilis quo distinctio aliquid nulla voluptates quisquam impedit maiores eveniet vero! Nam quibusdam totam corrupti.</p>
        </div>
        <div className='project-div'>
        <button onClick={Previous} className='icon-button'>{ChevronLeft}</button>
            <button onClick={Next}  className='icon-button'>{ChevronRight}</button>
          <div className='project-wheel'>
            <Video video={videos[0]}/>
            <Video video={videos[0]}/>
            <Video video={videos[0]}/>
            <Video video={videos[0]}/>
            <Video video={videos[0]}/>
          </div>
          <div className='project-name'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ab debitis repudiandae necessitatibus molestiae ipsa consequuntur vitae illo sint incidunt tempora nobis quas odit repellat corporis, pariatur cupiditate. Explicabo, mollitia.</p>
          </div>
        </div>
      </div>
    </>
  );
}
