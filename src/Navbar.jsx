import React from "react";
import './Navbar.css';


function Navbar(){
    return(
        <div className="nav">

            <input type="checkbox" id="menuToggle" className="menu-toggle"/>

            <label htmlFor="menuToggle" className="hamburger">☰</label>

            <a href="#" className="imageHamburger" ><img src="/nodejs.jpg" alt="log" /></a>
            <div className="sectors">
                <div className="sector1">
                    <a href="#" className="image" ><img src="/nodejs.jpg" alt="log" /></a>
                    <a href="#" className="option">Learn</a>
                    <a href="#" className="option">About</a>
                    <a href="#" className="option">Download</a>
                    <a href="#" className="option">Blog</a>
                    <a href="#" className="option">Docs</a>
                    <a href="#" className="option">Contribute ↗</a>
                    <a href="#" className="option">Certification ↗</a>
                </div>
                <div className="sector2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <p>Start typing...</p>
                        <div className="grid">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" stroke-width="2">
                                <rect x="3" y="3" width="7" height="8" rx="1"/>
                                <rect x="14" y="3" width="7" height="8" rx="1"/>
                                <rect x="14" y="14" width="7" height="8" rx="1"/>
                                <rect x="3" y="14" width="7" height="8" rx="1"/>
                            </svg>
                            <p className="K">K</p>
                        </div>
                    </button>
                    <div className="icons">
                        <div className="icon">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" stroke-width="2">
                                <circle cx="12" cy="12" r="4"/>
                                <path d="M12 2v2"/>
                                <path d="M12 20v2"/>
                                <path d="m4.93 4.93 1.41 1.41"/>
                                <path d="m17.66 17.66 1.41 1.41"/>
                                <path d="M2 12h2"/>
                                <path d="M20 12h2"/>
                                <path d="m6.34 17.66-1.41 1.41"/>
                                <path d="m19.07 4.93-1.41 1.41"/>
                            </svg>
                        </div>
                        <div className="icon">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m5 8 6 6"/>
                                <path d="m4 14 6-6 2-3"/>
                                <path d="M2 5h12"/>
                                <path d="M7 2h1"/>
                                <path d="m22 22-5-10-5 10"/>
                                <path d="M14 18h6"/>
                            </svg>
                        </div>
                        <div className="icon">
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="#E5E5E5">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Navbar;