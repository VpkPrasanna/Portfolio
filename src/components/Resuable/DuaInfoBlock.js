import React from 'react';
import Heading from './Heading';
import {Link} from 'gatsby';


export default function DuaInfoBlock({heading}) {
    console.log(heading)
    return (
        <section className=" my-4 py-4 bg-theme">
            <div className="container">
                <Heading title = {heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                    Lorem ipLorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta harum a minima deleniti aut iste cum similique tempore! Quia alias ipsum optio soluta, consectetur cum, aliquam possimus doloribus reprehenderit in a cupiditate inventore reiciendis sit officiis. Ratione sed commodi vero animi ea cum ipsa odit, fugiat dignissimos qui ab, eius facilis iure. Non assumenda nostrum impedit rem hic vel voluptatem accusamus error laborum animi fugiat corrupti, distinctio optio ducimus molestiae commodi architecto fugit quisquam laboriosam deserunt officia dolorem inventore natus. Quam quasi iure, doloribus architecto tempora reiciendis ipsa molestias repudiandae quae quidem maiores numquam alias ducimus omnis. Dignissimos, illo modi.sum dolor, sit amet consectetur adipisicing elit. Earum nesciunt dolores dolorum ratione quasi excepturi odit esse laboriosam soluta temporibus vitae minima possimus inventore suscipit voluptatem sint debitis, molestias delectus, in perferendis voluptates fuga. Iusto delectus architecto hic. Rerum delectus magnam eaque laudantium, dolor nam reiciendis rem natus error illum laboriosam vitae quidem consequatur atque in, quod et quasi itaque vel iusto tenetur? Exercitationem, iure? Maiores ducimus quisquam aliquid distinctio sapiente laudantium vitae quos quia, dolores, ratione molestiae corrupti, dignissimos eum nemo velit tempora totam id provident quam e 
                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark">
                        <img className="card-img-top" src=" https://avatars0.githubusercontent.com/u/30804112?s=400&u=bd7583813689093fe0597e432f6782bd46e21497&v=4"alt="image goes here"/>
                        <div className="card-body">
                            <h5 className="card-title text-success">Just click photos</h5>
                            <p className="card-text text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque sit saepe, maxime exercitationem quisquam neque vitae aut numquam. Totam vel assumenda velit esse expedita ipsam laudantium dolores natus iusto?</p>
                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
