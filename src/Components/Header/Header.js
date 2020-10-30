import React from 'react';
import Navbar from './Navbar';
// import ParticlesBg from 'particles-bg';
import Particles from 'react-particles-js';
import Typical from 'react-typical';
import './header.css';


const Header = () => {
    return (
        <div style={{ height: '110vh', background: '#111', position: 'relative' }}>

            <Navbar />
            <Particles
                style={{ height: '100vh' }}
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 15,
                            "random": true
                        },
                        "move": {
                            "direction": "random",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 10
                            }
                        }
                    }
                }} />
            <div className="d-flex justify-content-center text-light" style={{ marginTop: '30vh', position: 'absolute', top: '0', right: '30%' }}>
                <div>
                    <h1 className="text-dark"><strong> <br /> <span className='text-success' style={{ fontSize: '5rem' }}>
                        <Typical
                            steps={["Hello, I'm Mohammad Fahad!", 1200, 'A Self Taught Programmer', 1200, 'A Web Developer', 1200, 'A Team Player', 1200, 'A Motivator', 1200]}
                            loop={Infinity}
                            wrapper="h1."

                        /></span> </strong></h1>
                    <h4><i><span className='text-light'>MERN stack developer</span></i></h4>
                </div>
                {/* <ParticlesBg className='bg-dark' num={200} type="square" bg={true} style /> */}

            </div>

        </div>
    );
};

export default Header;