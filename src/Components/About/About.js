import React from 'react';
import profile from '../../image/profile.jpg'
import resume from '../../image/resume.pdf';
import Navbar from '../Header/Navbar';

const About = () => {
    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', height: "150vh" }}>
            <Navbar />
            <div className="d-flex align-items-center ml-5" style={{ background: 'rgba(0, 0, 0, 0.0)', marginTop: "13vh" }}>
                <div className="col-md-5 ">
                    <img className="img-fluid" style={{ boxShadow: '7px 7px 105px white' }} src={profile} alt="" />
                </div>
                <div className="col-md-6 ">
                    <h1 className="text-left" style={{ fontSize: '4rem' }}>Hello there I'm <br /><span> Mohammad Fahad</span> </h1>
                    <p style={{ fontSize: '25px' }}>
                        I am an ambitious problem solver with a passion for online businesses, and who
                        would like to join a team of like-minded developers. I have much
                        experience of creating logical and innovative solutions to complex problems.
                        I am thorough and precise in everything I do, and I have a keen interest in
                        technology, mobile applications and user experience. As someone who takes
                        responsibility for my own personal development, I am continually evaluating
                        and upgrading my skills so that I can stay at the cutting edge of web
                        development. I am a natural problem solver, who has proven myself by
                        successfully completing projects for IT consultancies, software houses, web
                        design agencies, and IT departments.
                    </p>
                    <a download="Resume of Mohammad Fahad" href={resume} ><button className="btn btn-secondary" >Download My Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;