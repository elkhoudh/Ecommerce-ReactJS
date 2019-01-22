import React from "react";
import "./NewsLetter.scss";
const NewsLetter = props => {
  return (
    <div
      data-vc-full-width="true"
      className="vc_row wpb_row vc_row-fluid vc_custom_1484181139705 vc_row-has-fill"
    >
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <h2
              style={{
                fontSize: "26px",
                color: "#ffffff",
                lineHeight: 1,
                textAlign: "center"
              }}
              className="vc_custom_heading font-title italic"
            >
              Connect to Basel &amp; Co.
            </h2>
            <h2
              style={{
                fontSize: "26px",
                color: "#ffffff",
                lineHeight: 1,
                textAlign: "center"
              }}
              className="vc_custom_heading font-title"
            >
              Join Our Newsletter
            </h2>
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-4 vc_col-md-4 vc_col-sm-offset-0 vc_col-xs-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element vc_custom_1484998572117 color-scheme-light">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: "center" }}>
                          Hey you, sign up it only takes a second to be the
                          first to find out about our latest news and
                          promotions…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_text_column wpb_content_element color-scheme-light">
              <div className="wpb_wrapper">
                <form
                  id="mc4wp-form-1"
                  className="mc4wp-form mc4wp-form-21436 mc4wp-form-basic"
                  method="post"
                  data-id="21436"
                  data-name="Default sign-up form"
                >
                  <div className="mc4wp-form-fields">
                    <p className="mailchimp-input-icon">
                      <label>Email address: </label>
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Your email address"
                        required=""
                      />
                    </p>
                    <p>
                      <input type="submit" value="Sign up" />
                    </p>
                    <div style={{ display: "none" }}>
                      <input
                        type="text"
                        name="_mc4wp_honeypot"
                        value=""
                        tabindex="-1"
                        autocomplete="off"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="_mc4wp_timestamp"
                      value="1546518724"
                    />
                    <input type="hidden" name="_mc4wp_form_id" value="21436" />
                    <input
                      type="hidden"
                      name="_mc4wp_form_element_id"
                      value="mc4wp-form-1"
                    />
                  </div>
                  <div className="mc4wp-response" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
