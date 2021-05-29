import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from "@material-ui/icons";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets_articleRight">
        <h4> {heading}</h4>
        <p> {subtitle} </p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2> LinkedIn News </h2>
        <InfoIcon />
      </div>
      {newsArticle(
        " Linked in reaches 100 million users",
        " TOP news --800 readers"
      )}
      {newsArticle(
        " Corona Virus Cases surge in LA ",
        " TOP news --907 readers"
      )}
      {newsArticle(
        " Donald Trump impeached for the second time ",
        " TOP news --851readers"
      )}
      {newsArticle(
        " Elon Musk becomes the richest man  ",
        " TOP news --800 readers"
      )}
      {newsArticle(
        " Vaccination roll out frustatinly slow .. ",
        " TOP news --547 readers"
      )}
    </div>
  );
};

export default Widget;
