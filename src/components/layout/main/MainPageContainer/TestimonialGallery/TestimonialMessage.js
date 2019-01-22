import React from "react";

const TestimonialMessage = () => {
  return (
    <div className="vc_column-inner">
      <div className="wpb_wrapper">
        <div className="title-wrapper  basel-title-color-black basel-title-style-cross basel-title-size-default text-center ">
          <div className="liner-continer">
            {" "}
            <span className="left-line" />
            <h4 className="title">
              WHAT THEY SAY ABOUT US
              <span className="title-separator">
                <span />
              </span>
            </h4>{" "}
            <span className="right-line" />
          </div>
        </div>
        <div
          id="carousel-1997"
          className="testimonials-wrapper"
          data-owl-carousel
          data-hide_prev_next_buttons="yes"
          data-desktop={1}
          data-desktop_small={1}
          data-tablet={1}
          data-mobile={1}
        >
          <div className="testimonials testimonials-slider testimon-style-standard testimon-columns-3 testimon-align-center owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 1112
                }}
              >
                <div className="owl-item active" style={{ width: 556 }}>
                  <div className="testimonial ">
                    <div className="testimonial-inner">
                      <div className="testimonial-avatar">
                        {" "}
                        <img
                          className="testimonial-avatar-image "
                          src="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/08/testimonial2-1-100x100.jpg"
                          width={100}
                          height={100}
                          alt="testimonial2-1"
                          title="testimonial2-1"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-rating">
                          {" "}
                          <span className="star-rating">
                            {" "}
                            <span style={{ width: "100%" }} />{" "}
                          </span>
                        </div>{" "}
                        Fringilla iaculis ante torquent a diam a vestibulum diam
                        nisi augue dictumst parturient a vestibulum tortor
                        viverra inceptos adipiscing nec a
                        ullamcorper.Ullamcorper aliquam rutrum.
                        <footer>
                          {" "}
                          John Doe <span>Happy Customer</span>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second testimonial */}
                {/* <div className="owl-item" style={{ width: 556 }}>
                  <div className="testimonial ">
                    <div className="testimonial-inner">
                      <div className="testimonial-avatar">
                        {" "}
                        <img
                          className="testimonial-avatar-image "
                          src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/08/testimonial1-100x100.jpg"
                          width={100}
                          height={100}
                          alt="testimonial1"
                          title="testimonial1"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-rating">
                          {" "}
                          <span className="star-rating">
                            {" "}
                            <span style={{ width: "100%" }} />{" "}
                          </span>
                        </div>{" "}
                        Fringilla iaculis ante torquent a diam a vestibulum diam
                        nisi augue dictumst parturient a vestibulum tortor
                        viverra inceptos adipiscing nec a
                        ullamcorper.Ullamcorper aliquam rutrum.
                        <footer>
                          {" "}
                          John Doe <span>Happy Customer</span>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev" />
              <div className="owl-next" />
            </div>
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialMessage;
