import React from "react";
import './Body.css';

function  Body(){
    return(
        <div className="body">
            <div className="container">
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
                <div className="body2">
                    <div className="card">
                        <div class="scroll-wrapper">
                            <nav className="tabs">
                                <a href="#" className="green">Create an HTTP Server</a>
                                <a href="#">Write Tests</a>
                                <a href="#">Read and Hash a File</a>
                                <a href="#">Streams Pipeline</a>
                                <a href="#">Work with Threads</a>
                            </nav>
                        </div>
                        <div class="scroll-wrapper">
                            <div className="code">
                                <pre>
 {`
 1  // streams.mjs
 2  import { createReadStream, createWriteStream } from 'node:fs';
 3  import { pipeline } from 'node:stream/promises';
 3  import { createGzip } from 'node:zlib';
 4
 5  // ensure you have a \`package.json\` file for this test!
 6  await pipeline(
 7  createReadStream('package.json'),
 8  createGzip(),
 9  createWriteStream('package.json.gz')
 10 );
 11 // run with \`node streams.mjs\`  
 `}
                                </pre>
                            </div>
                        </div>
                        <div className="cardFooter">
                            <p>
                                JavaScript
                            </p>
                            <button className="cardFooterBtn">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                &nbsp;Copy to clipboard
                            </button>
                        </div>
                    </div>
                    <p className="description3">
                        Learn more what Node.js is able to offer with our <span class="highlight">Learning materials.</span>
                    </p>
                </div>
            </div>
        </div>
    )
    
}

export default Body;