import React from 'react'
import '../assets/css/contentright.css'

export function ContentRight(){
    return (
        <>
            <div className="content-right">
                <div className="main-content">
                    <h3 className="content-title">adobe express</h3>
                    <p className="content-intro">Enhance your creative content. Even faster</p>
                    <p className="content-paragraph">Stand out even more with one-click animations, quick social clips, and effortless on-brand designs.</p>
                    <button className="content-button-right">Get Adobe Express free</button>
                    <div>
                        <img src="https://www.adobe.com/homepage/media_139be9b691dfff09c550356dc1482cd8a94b2d2fe.png?width=2000&format=webply&optimize=medium" alt="" className="content-image" />
                    </div>
                </div>
            </div>
        </>
    )
}