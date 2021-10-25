import React, { useState } from "react";
// import '../sass/flip.css'
const FlipCard2 = ({
  Name,
  Title,
  Price,
  Description,
  Goto,
  Photo,
  flipTitleSize,
  flipTitleColor,
  FlipNameColor,
  FlipNameSize,
  FlipCardColor,
  FlipPriceColor,
  FlipPriceSize,
  FlipDescriptionColor,
  FlipDescriptionSize,
  FlipButtonColor,
  FlipButtonTextColor,
  FlipFont,
}) => {
  const [active, setActive] = useState(false);
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div
        className="cardContainerr inactive"
        style={{ fontFamily: `${FlipFont}` }}
      >
        <div
          className={`cardd ${active ? "activee" : ""}`}
          onClick={() => setActive(!active)}
        >
          <div className="sidee frontt">
            <div>
              <img src={Photo} alt="" className="img" />
            </div>
            <div
              className="infoo"
              style={{
                fontSize: `${flipTitleSize}px`,
                color: `${flipTitleColor}`,
                textAlign: "center",
              }}
            >
              <h2>{Title}</h2>
            </div>
          </div>
          <div
            className="sidee backk"
            style={{
              backgroundColor: `${FlipCardColor}`,
            }}
          >
            <div className="infoo">
              <h2
                style={{
                  fontSize: `${FlipNameSize}px`,
                  color: `${FlipNameColor}`,
                }}
              >
                {Name}
              </h2>
              <p
                className="price"
                style={{
                  fontSize: `${FlipPriceSize}px`,
                  color: `${FlipPriceColor}`,
                }}
              >
                {Price}
              </p>
              <div className="reviewss">
                <svg
                  fill="#FFC324"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#FFC324"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#FFC324"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#FFC324"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#FFC324"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path d="M0 0h24v24H0V0z" id="a" />
                  </defs>
                  <clipPath id="b">
                    <use overflow="visible" />
                  </clipPath>
                  <path
                    clip-path="url(#b)"
                    d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                  />
                </svg>
                <p>23 Reviews</p>
              </div>
              <p
                className="product-detailss"
                style={{
                  fontSize: `${FlipDescriptionSize}px`,
                  color: `${FlipDescriptionColor}`,
                }}
              >
                {Description === undefined
                  ? ""
                  : readMore === false
                  ? Description.slice(0, 100)
                  : Description}
                <span>
                  {Description === undefined ? (
                    ""
                  ) : Description.length < 100 ? (
                    ""
                  ) : readMore === true ? (
                    ""
                  ) : (
                    <button onClick={() => setReadMore(true)}>Read More</button>
                  )}
                </span>
              </p>
              <a href={`${Goto}`} target="">
                <div
                  className="btnn"
                  style={{
                    background: `${FlipButtonColor}`,
                    color: `${FlipButtonTextColor}`,
                  }}
                >
                  <h4>Learn More</h4>
                  <svg
                    fill="#333"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                    <path d="M0-.25h24v24H0z" fill="none" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard2;
