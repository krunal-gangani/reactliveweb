import React from "react";
import Heading1 from "./Heading1";
import Images from "./Images";
// here parameter props will behave like object and Card is our own custom component which has its own custom attributs(props.etc)

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc} />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <Heading1 sname={props.sname} />
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
