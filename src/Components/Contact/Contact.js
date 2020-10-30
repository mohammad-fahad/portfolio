import React from 'react';
import Navbar from '../Header/Navbar';
import emailjs from "emailjs-com";


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "007",
                "template_itssh0g",
                e.target,
                "user_RC0MfNSoJYbT6gXWlTWfQ",
                'message'
            )
            .then(
                (result) => {
                    alert("Mail send successfully");
                    e.target.value = "";
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div className="container-fluid" style={{ background: 'rgba(0, 0, 0, 0.5)', height: '150vh' }}>
            <Navbar />
            <h1 className='text-center text-white pt-5' >Send Me an email</h1>
            <div className="container container-fluid" >
                <form action="mailto:mail.mohammadfahad@gmail.com" method="post" enctype="text/plain" className="p-5" onSubmit={sendEmail}>
                    <label for="name" className="text-light">Name</label>
                    <input type="text" name="name" className="form-control" /> <br />
                    <label for="email" className="text-light">Email</label>
                    <input type="text" name="email" className="form-control" /> <br />
                    <label for="comment" className="text-light">Comment</label>
                    <textarea type="text-box" name="message" rows="10" className="form-control" /> <br /> <br />
                    <input type="submit" value="Send" className="btn btn-success pr-5 pl-5" style={{ boxShadow: '7px 7px 105px white' }} />
                    <input type="reset" value="Reset" className="btn btn-danger ml-5 pr-5 pl-5" style={{ boxShadow: '7px 7px 105px white' }} />
                </form >
            </div>

        </div >
    );
};

export default Contact;