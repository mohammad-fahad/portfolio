import React from 'react';
import project1 from '../../image/project1.png';
import project2 from '../../image/project2.png';
import project3 from '../../image/project3.png';
import Navbar from '../Header/Navbar';

const fakeData = [
    {
        name: 'Creative Agency an IT support web app', description: 'Site is responsive, it has firebase authentication and a collection of e-mails in MongoDB from where it will differentiate whether the logged in user is a guest or an admin.', Client: 'An user can order service, set a time limit, set a price and can upload an image as a sample.User can post reviews.User will be able to see their work progress through the status.', admin: 'An admin can add services and make more admins.Admin will be able to change the status of orders.', technologies: 'React.js, Base64, Swiper.js, Node.js, MongoDB, Express.js, Bootstrap, Firebase auth, Heroku', img: project1, live: "https://creative-agency-f.web.app/", github: "https://github.com/mohammad-fahad/creative-agency-client"
    },
    {
        name: 'Volunteer Network a non-profitable social activity app', description: 'A full-stack project with firebase authentication. An user can select a social activity to participate. Also they will be able schedule their tasks by add a date.', Client: 'Client can select activities with date.Clients can get a track of all selected events and can cancel any of the activity anytime.', admin: 'Admin can see all activities made by volunteers and can delete them if required.Admin can add events with images.', technologies: 'React.js, Node.js, MongoDB, ExpressJS, Bootstrap, Firebase Authentication, Heroku, React Date picker', img: project2, live: "https://volunteer-network-f.web.app/", github: "https://github.com/mohammad-fahad/volunteer-network-client"
    },
    {
        name: 'Red Onion a restaurant web app', description: 'A full-stack restaurant app where you can order your favorite food from the menu. You have options for breakfast, lunch, and dinner. And enjoy the most delicious yummy food.', Client: 'Order food from the menu. Sign Up to place orderPay online.', technologies: 'React.js, React Router, Bootstrap, Firebase Authentication', img: project3, live: "https://hot-onion-restaurant-f.web.app/", github: "https://github.com/mohammad-fahad/hot-onion-restaurent"
    }
]

const Projects = () => {
    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', height: '330vh' }}>
            <Navbar />
            <div style={{ paddingTop: '12vh' }}>

                {
                    fakeData.map(data => <div className="card mb-5 container p-2" style={{ border: 'none', background: "lightGrey", boxShadow: '7px 7px 105px white' }} >
                        <div className="row no-gutters d-flex align-items-center" >
                            <div className="col-md-3 " >
                                <img src={data.img} className="card-img img-fluid " style={{ width: '20vw' }} alt="..." />
                            </div>
                            <div className="col-md-8 ml-5">
                                <div className="card-body">
                                    <h5 className="card-title text-success" style={{ fontSize: "3rem" }}>{data.name}</h5>
                                    <p className="card-text" style={{ fontSize: "20px" }}>{data.description}</p> <br />

                                    <strong>Client:</strong> <br />
                                    <p>- {data.Client} <br /></p>

                                    {data.admin ? <div><strong>Admin:</strong> <br />
                                        <p>- {data.admin}</p> </div>

                                        : ""}

                                    <h5> Technologies Used: <br /></h5>
                                    <strong>{data.technologies}</strong>




                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <a href={data.live} target="_blank" rel="noreferrer"><button style={{ boxShadow: '7px 7px 105px white' }} className="btn btn-secondary mr-5 pr-5 pl-5">LIVE</button></a>
                            <a href={data.github} target="_blank" rel="noreferrer"><button style={{ boxShadow: '7px 7px 105px white' }} className="btn btn-secondary pr-5 pl-5">GitHub</button></a>
                        </div>
                    </div >)
                }
            </div >
        </div>
    );
};

export default Projects;