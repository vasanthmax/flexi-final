import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiApiGet } from '../action/FlipCardGet';
import Tabletop from 'tabletop';
import Papa from 'papaparse'
import FlipCard from '../components/flipCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const FlipCardGet = () => {
  const location = new URLSearchParams(window.location.search).get('id');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FlexiApiGet(location));
  }, [location]);

  const selector = useSelector((state) => state.flipgetReducer.flipcard?.data);

  console.log(selector);
  useEffect(() => {
    if (selector) {
      Papa.parse(
        selector.sheetid,{
        header: true,
        download:true,  
        complete:(results) => {
          setData([...results.data]);
        }
      })
    }
  }, [selector]);
  // console.log(data);
  return (
    <div className='flip-page'>
      {data.length > 0 ? (
        selector.scrolltype === 'Vertical' ? (
          <div className='flip-card-page'>
            {data
              // .filter((ch) => ch.visiblity === 'yes')
              .map((ch) => {
                return (
                  <div className='col'>
                    <FlipCard
                      Name={ch[selector.namekey]}
                      Title={ch[selector.titlekey]}
                      Price={ch[selector.pricekey]}
                      Description={ch[selector.descriptionkey]}
                      Goto={ch[selector.gotokey]}
                      Photo={ch[selector.photokey]}
                      flipTitleSize={selector.titlesize}
                      flipTitleColor={selector.titlecolor}
                      FlipNameColor={selector.namecolor}
                      FlipNameSize={selector.namesize}
                      FlipCardColor={selector.cardcolor}
                      FlipPriceColor={selector.pricecolor}
                      FlipPriceSize={selector.pricesize}
                      FlipDescriptionColor={selector.descriptioncolor}
                      FlipDescriptionSize={selector.descriptionsize}
                      FlipButtonColor={selector.buttoncolor}
                      FlipButtonTextColor={selector.buttontextcolor}
                      FlipFont={selector.textfont}
                    ></FlipCard>
                  </div>
                );
              })}
          </div>
        ) : (
          data && (
            <OwlCarousel
              className='owl-theme'
              margin={10}
              nav
              responsiveRefreshRate={200}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                960: {
                  items: 3,
                },
                1200: {
                  items: 3,
                },
              }}
            >
              {data.map((ch) => {
                return (
                  <FlipCard
                    Name={ch[selector.namekey]}
                    Title={ch[selector.titlekey]}
                    Price={ch[selector.pricekey]}
                    Description={ch[selector.descriptionkey]}
                    Goto={ch[selector.gotokey]}
                    Photo={ch[selector.photokey]}
                    flipTitleSize={selector.titlesize}
                    flipTitleColor={selector.titlecolor}
                    FlipNameColor={selector.namecolor}
                    FlipNameSize={selector.namesize}
                    FlipCardColor={selector.cardcolor}
                    FlipPriceColor={selector.pricecolor}
                    FlipPriceSize={selector.pricesize}
                    FlipDescriptionColor={selector.descriptioncolor}
                    FlipDescriptionSize={selector.descriptionsize}
                    FlipButtonColor={selector.buttoncolor}
                    FlipButtonTextColor={selector.buttontextcolor}
                    FlipFont={selector.textfont}
                  ></FlipCard>
                );
              })}
            </OwlCarousel>
          )
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default FlipCardGet;
