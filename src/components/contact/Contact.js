import React from 'react'
import Heading from "../Resuable/Heading"



export default function Contact() {
    return (
        <div>
            <section className="py-3">
                <Heading title ="Contact us"/>
                <div className="col-10 col-sm-8 mx-auto">
                    <form action = "https://formspree.io/v.prasannakumar1998@gmail.com" method = "POST">
                        <div className="from-group py-3">
                            <input className="form-control" type="text" name= "name" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="from-group py-3">
                            <input className="form-control" type="email" name= "email" id="name" placeholder="Your Email"/>
                        </div>
                        <div className="from-group py-3">
                            <input className="form-control" type="text" name= "mobile" id="name" placeholder="Your Number"/>
                        </div>
                        <div className="from-group py-3">
                            <textarea className="form-control" type="text" name= "desc " id="name" placeholder="Description"/>
                        </div>

                        <button type="submit" className= "btn btn-outline-info btn-block">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
