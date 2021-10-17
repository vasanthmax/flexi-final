import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiNormalApiGet } from '../action/NormalCardget';
import Tabletop from 'tabletop';
import Card from '../components/Card';
import Papa from 'papaparse'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const NormalCardGet = () => {
  const location = new URLSearchParams(window.location.search).get('id');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FlexiNormalApiGet(location));
  }, [location]);

  const selector = useSelector(
    (state) => state.normalgetReducer.normalcard?.data
  );

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

  console.log(selector);

  return (
    <div className='normal-page'>
      {data.length > 0 ? (
        selector.scrolltype === 'Vertical' ? (
          <div className='normal-card'>
            {data.map((ch) => {
              return (
                <div className='col'>
                  <Card
                    Name={ch[selector.namekey]}
                    Photo={ch[selector.photokey]}
                    Review={ch[selector.reviewkey]}
                    Title={ch[selector.titlekey]}
                    Ratings={ch[selector.ratingskey]}
                    Companylogo={ch[selector.logokey]}
                    Service={ch[selector.servicekey]}
                    Position={ch[selector.positionkey]}
                    cardColor={selector.cardcolor}
                    avatarShape={selector.avatarshape}
                    nameColor={selector.namecolor}
                    nameSize={selector.namesize}
                    positionColor={selector.positioncolor}
                    positionSize={selector.positionsize}
                    titleColor={selector.titlecolor}
                    titleSize={selector.titlesize}
                    reviewColor={selector.reviewcolor}
                    reviewSize={selector.reviewsize}
                    serviceColor={selector.servicecolor}
                    serviceSize={selector.servicesize}
                    fontname={selector.fontname}
                  ></Card>
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
                  <Card
                    Name={ch[selector.namekey]}
                    Photo={ch[selector.photokey]}
                    Review={ch[selector.reviewkey]}
                    Title={ch[selector.titlekey]}
                    Ratings={ch[selector.ratingskey]}
                    Companylogo={ch[selector.logokey]}
                    Service={ch[selector.servicekey]}
                    Position={ch[selector.positionkey]}
                    cardColor={selector.cardcolor}
                    avatarShape={selector.avatarshape}
                    nameColor={selector.namecolor}
                    nameSize={selector.namesize}
                    positionColor={selector.positioncolor}
                    positionSize={selector.positionsize}
                    titleColor={selector.titlecolor}
                    titleSize={selector.titlesize}
                    reviewColor={selector.reviewcolor}
                    reviewSize={selector.reviewsize}
                    serviceColor={selector.servicecolor}
                    serviceSize={selector.servicesize}
                    fontname={selector.fontname}
                  ></Card>
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

export default NormalCardGet;
