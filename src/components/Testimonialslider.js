import React from "react";
import testimonial_1 from "./Testimonial-1_Jessica_Brian.jpg";
import iron_man from "./testimonialImages/iron_man.jpg"
import natasha_romannof from "./testimonialImages/natasha_romannof.jpg"
import peter_parker from "./testimonialImages/peter_parker.jpg"


import "./Testimonialslider.css";

export default function Testimonialslider() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4">
              <div className="mo_testimonialslider_card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                <div className="mo_testimonialslider_card_img">
                  <img src={natasha_romannof} alt="Testimonial profile" />
                </div>
                <h5>Natashas Romanoff</h5>
                <span>Stalingrad, Russia</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mo_testimonialslider_card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                <div className="mo_testimonialslider_card_img">
                  <img src={iron_man} alt="Testimonial profile" />
                </div>
                <h5>Iron Man</h5>
                <span>Avengers Tower, USA</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mo_testimonialslider_card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                <div className="mo_testimonialslider_card_img">
                  <img src={peter_parker} alt="Testimonial profile" />
                </div>
                <h5>Peter Parker</h5>
                <span>Queens, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4">
              <div className="mo_testimonialslider_card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                <div className="mo_testimonialslider_card_img">
                  <img src={testimonial_1} alt="Testimonial profile" />
                </div>
                <h5>Jessica Brian</h5>
                <span>Florisa, USA</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mo_testimonialslider_card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                <div className="mo_testimonialslider_card_img">
                  <img src={peter_parker} alt="Testimonial profile" />
                </div>
                <h5>Jessica Brian</h5>
                <span>Florisa, USA</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mo_testimonialslider_card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                <div className="mo_testimonialslider_card_img">
                  <img src={testimonial_1} alt="Testimonial profile" />
                </div>
                <h5>Jessica Brian</h5>
                <span>Florisa, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
