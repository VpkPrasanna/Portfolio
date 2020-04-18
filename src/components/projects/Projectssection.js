import React from "react"

export default function Projectssection() {
  return (
    <section className="row px-3 my-4">
      <div className="col-10 col-sm-10 mx-auto">
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/2454803/pexels-photo-2454803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-warning btn-block">Click Me</button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning btn-block">Click Me</button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/1580469/pexels-photo-1580469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning btn-block">Click Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
