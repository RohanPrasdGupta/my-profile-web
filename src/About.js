import React from 'react'
import './App.css';

export const About = () => {
  return (
    <>
    <h1 className='about_name my-4 container'>WHO AM I</h1>
    <div className="container about_item ">
        
        <div className="row">
            <div className="col">
                <img className="about_image" src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81puDthMzZlUV8E7Q4shoFd_XSmNQJezrT0zSSEqtscfhiYVN1Sc8W7dlNcSZYLXDa3lLf1UXR3rAfDMVAc0DS37XrHU1Q=s1600" alt=""></img>
            </div>
            <div className="col">
                <div className="shadow p-3 mb-5 bg-white rounded my-4">
                    <h4>Currently pursuing Master's in <b>AI and IoT</b> at <b>Sirindhorn International Institute of Technology (Thammasat University)</b></h4>
                    <h5>I am open to work and for any collaborations.</h5>
                </div>
                <div className = 'container my-3'>
                <div className="row">
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">Python</div>                    
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">SQL</div>
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">REACT-JS</div>
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">C</div>
                    </div>
                    
                </div>
                {/* second row */}
                <div className="row">
                    <div className="col ">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">HTML</div>                    
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">CSS</div>
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">JavaScript</div>
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">Data structures</div>
                    </div>
                </div>
                {/* third row */}

                <div className="row">
                    <div className="col ">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">Data Analytic & Visualization</div>                    
                    </div>
                    <div className="col">
                    <div className="shadow p-3 mb-5 bg-white rounded skill_box">Machine Learning</div>
                    </div>
                </div>

                
            </div>
            </div>
                
               
                
        </div>
    </div>

    </>
  )
}
