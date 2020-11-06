import React from 'react';
import '../App.css';
import { Button } from './pages/Button';
import './Mainpage.css';

function Mainpage (){
    return (
        <div className='main-container'>
            <video src='/videos/video.mp4' autoPlay loop muted />
            <div className='main-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                   Welcome
                </Button>
            </div>
        </div>
    );
}

export default Mainpage;