import React from "react";
import './Body.css';

function  Body(){
    return(
        <div className="body1">
            <div className="information">
                <h1>Run JavaScript Everywhere</h1>
                <p className="description">
                    Node.js® is a free, open-source, cross-platform 
                    JavaScript runtime environment that lets developers 
                    create servers, web apps, command line tools and 
                    scripts.
                </p>
                <button className="bodyBtn"> 
                    Get Node.js®
                </button>
                <button className="bodyBtn2">
                    <div className="bodyBtn2Container">
                        <p className="p1">Get security support</p>
                        <p className="p2">for EOL Node.js versions</p>
                    </div>
                </button>
                <div className="icons2">
                    <div>
                        <button className="bodyBtn3">
                            <img src="./vercel.png" alt="logo de nodesource"/>
                        </button>
                    </div>
                    <div>
                    <button className="bodyBtn3">
                        <img src="./nodesource.png" alt="logo de nodesource"/>
                    </button>
                    </div>
                    <div>
                    <button className="bodyBtn3digitalocean">
                        <img className="digitalocean" src="./digitalocean.png" alt="logo de digital ocean"/>
                    </button>
                    </div>
                    <div>
                    <button className="bodyBtn3">
                        <img className="cloudfare" src="./cloudfare.png" alt="logo de cloudfare"/>
                    </button>
                    </div>
                    <div>
                    <button className="bodyBtn3">
                        <img src="./macstadium.png" alt="logo de cloudfare"/>
                    </button>
                    </div>
                    <div>
                    <button className="bodyBtn3codemode">
                        <img className="codemode" src="./codemod.jpg" alt="logo de cloudfare"/>
                    </button>
                    </div>
                </div>
                <p className="description2">
                    Node.js is proudly supported by the partners above <span class="highlight">and more.</span>
                </p>
            </div>
        </div>
            
        
    )
    
};

export default Body;