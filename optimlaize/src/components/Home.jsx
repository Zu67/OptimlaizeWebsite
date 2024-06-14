import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Optimlaize</h1>
            <h2 class="font-weight-light">Manage your money like it’s yours</h2>
            <p>
              Revolutionize the quantitative experience by leveraging modern technology
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <h3 class="font-weight-light">A passion for understanding money</h3>
          <h4 class="font-weight-light">Our comprehensive suite of professional services caters to a diverse clientele, ranging from casual investors to investment gurus</h4>
          <ul>
            <li>Renovation and restoration</li>
            <li>Continuous Support</li>
            <li>App Access</li>
          </ul>
          <h3 class="font-weight-light">An array of resources</h3>
          <h4 class="font-weight-light">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.</h4>
          <h5>Portfolio Explorer</h5>
          <ul>
            <li>Understand exactly what’s in your portfolio</li>
            <li>Track performance beyond return percentage</li>
          </ul>
          <h5>Études Newsletter</h5>
          <ul>
            <li>A world of thought-provoking articles</li>
            <li>Case studies that celebrate architecture</li>
            <li>Exclusive access to design insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;