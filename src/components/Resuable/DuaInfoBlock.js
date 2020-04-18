import React from 'react';
import Heading from './Heading';


export default function DuaInfoBlock({heading}) {
    console.log(heading)
    return (
        <section className=" my-4 py-4 bg-theme">
            <div className="container">
                <Heading title = {heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                      deserunt officia dolorem inventore natus. Quam quasi iure, doloribus architecto tempora reiciendis ipsa molestias repudiandae quae quidem maiores numquam alias ducimus omnis. Dignissimos, illo modi.sum dolor, sit amet consectetur adipisicing elit. Earum nesciunt dolores dolorum ratione quasi excepturi odit esse laboriosam soluta temporibus vitae minima possimus inventore suscipit voluptatem sint debitis, molestias delectus, in perferendis voluptates fuga. Iusto delectus architecto hic. Rerum delectus magnam eaque laudantium, dolor nam reiciendis rem natus error illum laboriosam vitae quidem consequatur atque in, quod et quasi itaque vel iusto tenetur? Exercitationem, iure? Maiores ducimus quisquam aliquid distinctio sapiente laudantium vitae quos quia, dolores, ratione molestiae corrupti, dignissimos eum nemo velit tempora totam id provident quam e 
                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark">
                        <img className="card-img-top" src="https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="image goes here"/>
                        <div className="card-body">
                            <h5 className="card-title text-success">Just click photos</h5>
                            <p className="card-text text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque sit saepe, maxime exercitationem quisquam neque vitae aut numquam. </p>
                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
