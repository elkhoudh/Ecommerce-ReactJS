import React from "react";
import LatestNewsArticle from "./LatestNewsArticle";
import styled from "styled-components";

const LatestNewsStyle = styled.div`
  .basel-blog-load-more {
    margin: 0 auto;
    border-color: #000;
    border-width: 2px;
    font-weight: 600;
    background-color: transparent;
    color: #000;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    border-radius: 0;
    border: 1px solid;
    display: flex;
    margin: 0 auto;
    width: 200px;
    justify-content: center;
    align-items: center;
    margin-bottom: 91px;
  }
`;

const LatestNews = () => {
  return (
    <LatestNewsStyle>
      <div>
        <div class="title-wrapper  basel-title-color-default basel-title-style-cross basel-title-size-default text-center vc_custom_1453814972938">
          <div class="liner-continer">
            {" "}
            <span class="left-line" />
            <h4 class="title">
              LATEST NEWS
              <span class="title-separator">
                <span />
              </span>
            </h4>{" "}
            <span class="right-line" />
          </div>
        </div>
        <div className="latestNews_flexparent">
          <LatestNewsArticle />
          <LatestNewsArticle />
          <LatestNewsArticle />

          <LatestNewsArticle />
          <LatestNewsArticle />
          <LatestNewsArticle />

          <LatestNewsArticle />
          <LatestNewsArticle />
          <LatestNewsArticle />
        </div>
        <a href="#" className="btn basel-blog-load-more">
          Load more posts
        </a>
      </div>
    </LatestNewsStyle>
  );
};

export default LatestNews;
