import React from 'react';
import Heading from './Heading';
import {Link} from 'gatsby'

export default function Inflblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sapiente eum corrupti sed. Sed praesentium repellendus commodi dolores aperiam nam libero nemo iusto sunt quidem. Facere, officiis! Architecto, beatae asperiores!
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg ">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
