import React from "react";
import "./header.css";
import "7.css/dist/7.css";

function Header(){
    
    return(
        <>
                <div className="head flex items-center p-3.5">
                <div class="title-bar">
                    <div class="title-bar-text"><b><i>Abayyy</i></b></div>
                        <div class="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                
                <ul role="menubar">
                    <li role="menuitem" tabindex="0"><a href="/">Home</a></li>
                        <li role="menuitem" tabindex="0"><a href="/blog">Blog</a></li>
                        <li role="menuitem" tabindex="0"><a href="/projects">Projects</a></li>
                        <li role="menuitem" tabindex="0"><a href="/help">Help</a></li>
                    </ul>
                </div>
        </>
    )
}

export default Header;