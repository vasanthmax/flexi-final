import React, { useState } from "react";
import Star from "../assets/star.png";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
const NormalCard = ({
  Photo,
  Ratings,
  Name,
  Position,
  Title,
  Review,
  Companylogo,
  Service,
  cardColor,
  avatarShape,
  nameColor,
  nameSize,
  positionColor,
  positionSize,
  titleSize,
  titleColor,
  reviewSize,
  reviewColor,
  serviceColor,
  serviceSize,
  fontname,
}) => {
  const [readMore, setReadMore] = useState(false);
  const Stars = [];
  const star = Ratings === undefined ? "" : Ratings.slice(0, 1);
  console.log(star);
  for (let i = 0; i < parseInt(star); i++) {
    Stars.push(<img className="star-row" src={Star} alt="" />);
  }
  return (
    <div className="normal-card">
      <Card
        className="card-act"
        style={{ background: `${cardColor}`, fontFamily: `${fontname}` }}
      >
        <CardContent className="card-content">
          {Photo === undefined ? (
            ""
          ) : Photo === "" ? (
            ""
          ) : (
            <div className="avatar-shape">
              <img
                src={Photo}
                alt=""
                className="avatar-shape"
                style={{
                  borderRadius: `${
                    avatarShape === "Round"
                      ? "50%"
                      : avatarShape === "Square"
                      ? "0%"
                      : "10%"
                  }`,
                }}
              />
            </div>
          )}
          <div className="rating">{Stars}</div>
          <Typography
            variant="h3"
            style={{ color: `${nameColor}`, fontSize: `${nameSize}px` }}
          >
            {Name}
          </Typography>
          <Typography
            variant="h4"
            style={{ fontSize: `${positionSize}px`, color: `${positionColor}` }}
          >
            {Position}
          </Typography>
          <Typography
            variant="h3"
            style={{ fontSize: `${titleSize}px`, color: `${titleColor}` }}
          >
            {Title}
          </Typography>
          {Review === "" ? (
            ""
          ) : (
            <Typography
              style={{ fontSize: `${reviewSize}px`, color: `${reviewColor}` }}
            >
              {Review === undefined
                ? ""
                : readMore === false
                ? Review.slice(0, 100)
                : Review}
              <span>
                {Review === undefined ? (
                  ""
                ) : Review.length < 100 ? (
                  ""
                ) : readMore === true ? (
                  ""
                ) : (
                  <button onClick={() => setReadMore(true)}>Read More</button>
                )}
              </span>
            </Typography>
          )}
          {Companylogo === "" ? (
            ""
          ) : (
            <div className="logo">
              <img src={Companylogo} alt="" />
            </div>
          )}
          <Typography
            className="review"
            style={{ fontSize: `${serviceSize}px`, color: `${serviceColor}` }}
          >
            {Service === undefined ? "" : `Review for ${Service}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NormalCard;
