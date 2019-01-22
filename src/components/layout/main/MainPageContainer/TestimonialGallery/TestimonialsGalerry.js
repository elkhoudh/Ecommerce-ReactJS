import React from "react";
import styled from "styled-components";
import TestimonialMessage from "./TestimonialMessage";
import TestimonialPartner from "./TestimonialPartner";
import TestimonialRightGalerry from "./TestimonialRightGalerry";

const TestimonialStyle = styled.div``;

const TestimonialsGalerry = () => {
  return (
    <TestimonialStyle>
      <div className="testimonial_flexparent">
        <div>
          <TestimonialMessage />
        </div>
        {/* rightSide */}
        <div>
          <TestimonialRightGalerry />
        </div>
      </div>
      <TestimonialPartner />
    </TestimonialStyle>
  );
};

export default TestimonialsGalerry;
