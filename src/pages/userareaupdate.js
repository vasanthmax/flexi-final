import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Card from '../components/Card';
import { Collapse } from 'antd';
// import { Slider } from 'antd';
import FlipCard from '../components/flipCard';
import PricingCard from '../components/pricingCard';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiApiGet } from '../action/FlipCardGet';
import { FlexiNormalApiGet } from '../action/NormalCardget';
import { FlexiPricingApiGet } from '../action/PricingCardGet';
import { Link, useHistory } from 'react-router-dom';
import { UpdateCards } from '../action/updateAction';
import Papa from 'papaparse'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import FlipCard2 from '../components/flipCard2';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useDarkMode } from '../util/theme';
const { Panel } = Collapse;


const UserAreaUpdate = () => {
  const [modalopen,setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cardid = new URLSearchParams(window.location.search).get('id');
  const sheetid = new URLSearchParams(window.location.search).get('sheet');
  const cardTypeParams = window.location.pathname.split('/').pop();
  const cardTypeSelector = useSelector(
    (state) =>
      state[`${cardTypeParams.toLowerCase()}getReducer`][
        `${cardTypeParams.toLowerCase()}card`
      ]?.data
  );

  console.log(cardTypeSelector);
  useEffect(() => {
    if (cardTypeParams === 'Flip') {
      dispatch(FlexiApiGet(cardid));
    }
    if (cardTypeParams === 'Pricing') {
      dispatch(FlexiPricingApiGet(cardid));
    }
    if (cardTypeParams === 'Normal') {
      dispatch(FlexiNormalApiGet(cardid));
    }
    Papa.parse(
      sheetid.toString(),{
      header: true,
      download:true,  
      complete:(results) => {
        setSinglecard(results.data[0]);
      }
    })
  }, []);
  const [cardType, setCardType] = useState();
  if (cardTypeSelector) {
    setTimeout(() => {
      setCardType(cardTypeSelector.cardtype);
    }, 1000);
  }

  const selector = useSelector((state) => state.flipReducer.flip);
  const selectorPricing = useSelector((state) => state.pricingReducer.pricing);
  const selectorNormal = useSelector((state) => state.normalReducer.normal);

  const [cardColor, setCardColor] = useState('#ffffff');
  const options = ['Normal', 'Flip', 'Pricing'];
  const [id, setId] = useState('');
  const [singleCard, setSinglecard] = useState();
  const [keys, setkey] = useState([]);
  const AvatarShape = ['Round', 'Square', 'Rounded square'];
  const defaultShape = AvatarShape[0];
  const [avatar, setAvatarShape] = useState(defaultShape);
  const [nameColor, setnameColor] = useState('#000000');
  const [nameSize, setnameSize] = useState('21');
  const [positionColor, setpositionColor] = useState('#777777');
  const [positionSize, setpositionSize] = useState('18');
  const [titleSize, setTitleSize] = useState('21');
  const [titleColor, setTitleColor] = useState('#000000');
  const [reviewSize, setReviewSize] = useState('17');
  const [reviewColor, setReviewColor] = useState('#777777');

  const [serviceColor, setServiceColor] = useState('#000000');
  const [serviceSize, setServiceSize] = useState('14');

  const dropdown2 = [
    { keyvalue: 'Photo' },
    { keyvalue: 'Name' },
    { keyvalue: 'Title' },
    { keyvalue: 'Ratings' },
    { keyvalue: 'Position' },
    { keyvalue: 'Review' },
    { keyvalue: 'Logo' },
    { keyvalue: 'Service' },
  ];
  const flipcardDropdown = [
    { keyvalue: 'Title' },
    { keyvalue: 'Name' },
    { keyvalue: 'Price' },
    { keyvalue: 'Photo' },
    { keyvalue: 'Description' },
    { keyvalue: 'Goto' },
  ];
  const pricingDropdown = [
    { keyvalue: 'Plan Name' },
    { keyvalue: 'Plan Price' },
    { keyvalue: 'Plan Link' },
    { keyvalue: 'Plan Feature 1' },
    { keyvalue: 'Plan Feature 2' },
    { keyvalue: 'Plan Feature 3' },
    { keyvalue: 'Plan Feature 4' },
    { keyvalue: 'Plan Feature 5' },
  ];
  // FlipCard Constants
  const [Fliptitle, setFlipTitle] = useState('Title');
  const [FlipName, setFlipName] = useState('Name');
  const [FlipPhoto, setFlipPhoto] = useState(
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  );
  const [FlipPrice, setFlipPrice] = useState('$Price');
  const [FlipDescription, setFlipDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  );
  const [Goto, setGoto] = useState('https://google.com');
  //flipCardEditables
  const [FlipTitleSize, setFlipTitleSize] = useState('20');
  const [FlipTitleColor, setFlipTitleColor] = useState('#000000');
  const [FlipCardColor, setFlipCardColor] = useState('#000000');
  const [FlipNameSize, setFlipNameSize] = useState('28');
  const [FlipNameColor, setFlipNameColor] = useState('#ffffff');
  const [FlipPriceSize, setFlipPriceSize] = useState('20');
  const [FlipPriceColor, setFlipPriceColor] = useState('#ffffff');
  const [FlipDescriptionSize, setFlipDescriptionSize] = useState('12');
  const [FlipDescriptionColor, setFlipDescriptionColor] = useState('#777777');
  const [FlipButtonColor, setFlipButtonColor] = useState('#fc8f00');
  const [FlipButtonTextColor, setFlipButtonTextColor] = useState('#ffffff');

  // Pricing Card Constants
  const [PricingPlanName, setPricingPlanName] = useState('Starter');
  const [PricingPlanPrice, setPricingPlanPrice] = useState('$1');
  const [PricingPlanLink, setPricingPlanLink] = useState(
    'https://www.google.com'
  );
  const [PricingFeature1, setPricingFeature1] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature2, setPricingFeature2] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature3, setPricingFeature3] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature4, setPricingFeature4] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature5, setPricingFeature5] = useState(
    'Custom and secure business email'
  );
  //Pricing Card Editables
  const [PricingCardColor, setPricingCardColor] = useState('#ffffff');
  const [PricingPlanSize, setPricingPlanSize] = useState('20');
  const [PricingPlanColor, setPricingPlanColor] = useState('#000');
  const [PricingPriceSize, setPricingPriceSize] = useState('36');
  const [PricingPriceColor, setPricingPriceColor] = useState('#1a73e8');
  const [PricingFeatureSize, setPricingFeatureSize] = useState('14');
  const [PricingFeatureColor, setPricingFeatureColor] = useState('#616161');
  const [PricingButtonTextColor, setPricingButtonTextColor] =
    useState('#1a73e8');
  const [PricingButtonColor, setPricingButtonColor] = useState('#fff');

  if (singleCard) {
    for (let value of Object.keys(singleCard)) {
      if (keys.indexOf(value) === -1) {
        keys.push(value);
      }
    }
  }
  const [Title, setTitle] = useState('Title');
  const [Photo, setPhoto] = useState(
    'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'
  );
  const [Review, setReview] = useState('review');
  const [Name, setName] = useState('Name');
  const [Ratings, setRatings] = useState('5');
  const [Position, setPosition] = useState('Position');
  const [Service, setService] = useState('Service');
  const [Logo, setLogo] = useState(
    'https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png'
  );
  console.log(keys);
  const fontoptions = [
    'Poppins',
    'monospace',
    'Georgia',
    'Times New Roman',
    'Arial',
    'Papyrus',
  ];

  const ScrollType = ['Horizontal', 'Vertical'];
  const defaultScroll = ScrollType[0];
  const [scrollvalue, setScrollValue] = useState(defaultScroll);
  const fontdefault = fontoptions[0];
  const [fontname, Setfont] = useState(fontdefault);
  const [FlipFont, setFlipFont] = useState(fontdefault);
  const [PricingFont, setPricingFont] = useState(fontdefault);

  //FlipKeys
  const [FlipTitleKey, setFlipTitleKey] = useState('');
  const [FlipPhotoKey, setFlipPhotoKey] = useState('');
  const [FlipNameKey, setFlipNameKey] = useState('');
  const [FlipDescKey, setFlipDescKey] = useState('');
  const [FlipPriceKey, setFlipPriceKey] = useState('');
  const [FlipGotoKey, setFlipGotoKey] = useState('');

  //FlipValue
  const [FlipTitleValue, setFlipTitleValue] = useState('');
  const [FlipPhotoValue, setFlipPhotoValue] = useState('');
  const [FlipNameValue, setFlipNameValue] = useState('');
  const [FlipDescValue, setFlipDescValue] = useState('');
  const [FlipPriceValue, setFlipPriceValue] = useState('');
  const [FlipGotoValue, setFlipGotoValue] = useState('');

  //PricingKeys
  const [PricingPlanNameKey, setPricingPlanNameKey] = useState('');
  const [PricingPlanLinkKey, setPricingPlanLinkKey] = useState('');
  const [PricingPriceKey, setPricingPriceKey] = useState('');
  const [PricingFeature1Key, setPricingFeature1Key] = useState('');
  const [PricingFeature2Key, setPricingFeature2Key] = useState('');
  const [PricingFeature3Key, setPricingFeature3Key] = useState('');
  const [PricingFeature4Key, setPricingFeature4Key] = useState('');
  const [PricingFeature5Key, setPricingFeature5Key] = useState('');

  //PricingDropdownvalues
  const [PricingPlanNamevalue, setPricingPlanNamevalue] = useState('');
  const [PricingPlanLinkvalue, setPricingPlanLinkvalue] = useState('');
  const [PricingPricevalue, setPricingPricevalue] = useState('');
  const [PricingFeature1value, setPricingFeature1value] = useState('');
  const [PricingFeature2value, setPricingFeature2value] = useState('');
  const [PricingFeature3value, setPricingFeature3value] = useState('');
  const [PricingFeature4value, setPricingFeature4value] = useState('');
  const [PricingFeature5value, setPricingFeature5value] = useState('');

  //NormalCardKeys
  const [Namekey, setNameKey] = useState('');
  const [Photokey, setPhotoKey] = useState('');
  const [Reviewkey, setReviewKey] = useState('');
  const [Servicekey, setServiceKey] = useState('');
  const [Titlekey, setTitleKey] = useState('');
  const [Ratingskey, setRatingsKey] = useState('');
  const [Logokey, setLogoKey] = useState('');
  const [Positionkey, setPositionKey] = useState('');
  //NormalCardValues
  const [Namevalue, setNamevalue] = useState('');
  const [Photovalue, setPhotovalue] = useState('');
  const [Reviewvalue, setReviewvalue] = useState('');
  const [Servicevalue, setServicevalue] = useState('');
  const [Titlevalue, setTitlevalue] = useState('');
  const [Ratingsvalue, setRatingsvalue] = useState('');
  const [Logovalue, setLogovalue] = useState('');
  const [Positionvalue, setPositionvalue] = useState('');

  const saveToDatabase = () => {
    if (cardType === 'Flip') {
      const FlexiApiDetails = {
        sheetid: sheetid,
        cardtype: cardType,
        namekey: FlipNameKey,
        titlekey: FlipTitleKey,
        pricekey: FlipPriceKey,
        descriptionkey: FlipDescKey,
        photokey: FlipPhotoKey,
        gotokey: FlipGotoKey,
        namevalue: FlipNameValue,
        titlevalue: FlipTitleValue,
        pricevalue: FlipPriceValue,
        descriptionvalue: FlipDescValue,
        photovalue: FlipPhotoValue,
        gotovalue: FlipGotoValue,
        titlesize: FlipTitleSize,
        titlecolor: FlipTitleColor,
        namesize: FlipNameSize,
        namecolor: FlipNameColor,
        cardcolor: FlipCardColor,
        pricesize: FlipPriceSize,
        pricecolor: FlipPriceColor,
        descriptionsize: FlipDescriptionSize,
        descriptioncolor: FlipDescriptionColor,
        buttoncolor: FlipButtonColor,
        buttontextcolor: FlipButtonTextColor,
        textfont: FlipFont,
        scrolltype: scrollvalue,
      };
      console.log(FlexiApiDetails);
      dispatch(UpdateCards(cardid, cardType, FlexiApiDetails));
    }
    if (cardType === 'Pricing') {
      console.log('princing');
      const FlexiApiDetails = {
        sheetid: sheetid,
        cardtype: cardType,
        plannamekey: PricingPlanNameKey,
        planpricekey: PricingPriceKey,
        planlinkkey: PricingPlanLinkKey,
        planfeature1key: PricingFeature1Key,
        planfeature2key: PricingFeature2Key,
        planfeature3key: PricingFeature3Key,
        planfeature4key: PricingFeature4Key,
        planfeature5key: PricingFeature5Key,
        plannamevalue: PricingPlanNamevalue,
        planpricevalue: PricingPricevalue,
        planlinkvalue: PricingPlanLinkvalue,
        planfeature1value: PricingFeature1value,
        planfeature2value: PricingFeature2value,
        planfeature3value: PricingFeature3value,
        planfeature4value: PricingFeature4value,
        planfeature5value: PricingFeature5value,
        pricingcardcolor: PricingCardColor,
        pricingplansize: PricingPlanSize,
        princingplancolor: PricingPlanColor,
        pricingpricesize: PricingPriceSize,
        pricingpricecolor: PricingPriceColor,
        pricingbuttoncolor: PricingButtonColor,
        pricingbuttontextcolor: PricingButtonTextColor,
        pricingfeaturecolor: PricingFeatureColor,
        princingfeaturesize: PricingFeatureSize,
        pricingfont: PricingFont,
        scrolltype: scrollvalue,
      };
      console.log(FlexiApiDetails);
      dispatch(UpdateCards(cardid, cardType, FlexiApiDetails));
    }

    if (cardType === 'Normal') {
      const FlexiApiDetails = {
        sheetid: sheetid,
        cardtype: cardType,
        namekey: Namekey,
        photokey: Photokey,
        reviewkey: Reviewkey,
        titlekey: Titlekey,
        ratingskey: Ratingskey,
        logokey: Logokey,
        servicekey: Servicekey,
        positionkey: Positionkey,
        namevalue: Namevalue,
        photovalue: Photovalue,
        reviewvalue: Reviewvalue,
        titlevalue: Titlevalue,
        ratingsvalue: Ratingsvalue,
        logovalue: Logovalue,
        servicevalue: Servicevalue,
        positionvalue: Positionvalue,
        cardcolor: cardColor,
        avatarshape: avatar,
        namecolor: nameColor,
        namesize: nameSize,
        positioncolor: positionColor,
        positionsize: positionSize,
        titlecolor: titleColor,
        titlesize: titleSize,
        reviewcolor: reviewColor,
        reviewsize: reviewSize,
        servicecolor: serviceColor,
        servicesize: serviceSize,
        fontname: fontname,
        scrolltype: scrollvalue,
      };
      console.log(FlexiApiDetails);
      dispatch(UpdateCards(cardid, cardType, FlexiApiDetails));
    }
  };

  useEffect(() => {
    console.log(cardTypeSelector);
    if (cardTypeSelector && singleCard && cardType === 'Flip') {
      setTimeout(() => {
        setFlipName(singleCard[cardTypeSelector?.namekey]);
        setFlipTitle(singleCard[cardTypeSelector?.titlekey]);
        setFlipPhoto(singleCard[cardTypeSelector?.photokey]);
        setFlipPrice(singleCard[cardTypeSelector?.pricekey]);
        setGoto(singleCard[cardTypeSelector?.gotokey]);
        setFlipDescription(singleCard[cardTypeSelector?.descriptionkey]);
        setFlipTitleSize(cardTypeSelector?.titlesize);
        setFlipTitleColor(cardTypeSelector?.titlecolor);
        setFlipCardColor(cardTypeSelector.cardcolor);
        setFlipNameSize(cardTypeSelector?.namesize);
        setFlipNameColor(cardTypeSelector?.namecolor);
        setFlipPriceSize(cardTypeSelector?.pricesize);
        setFlipPriceColor(cardTypeSelector?.pricecolor);
        setFlipDescriptionSize(cardTypeSelector?.descriptionsize);
        setFlipDescriptionColor(cardTypeSelector?.descriptioncolor);
        setFlipButtonColor(cardTypeSelector?.buttoncolor);
        setFlipButtonTextColor(cardTypeSelector?.buttontextcolor);
      }, 1000);
    }

    if (cardTypeSelector && singleCard && cardType === 'Pricing') {
      setPricingPlanName(singleCard[cardTypeSelector?.plannamekey]);
      setPricingPlanPrice(singleCard[cardTypeSelector?.planpricekey]);
      setPricingPlanLink(singleCard[cardTypeSelector?.planlinkkey]);
      setPricingFeature1(singleCard[cardTypeSelector?.planfeature1key]);
      setPricingFeature2(singleCard[cardTypeSelector?.planfeature2key]);
      setPricingFeature3(singleCard[cardTypeSelector?.planfeature3key]);
      setPricingFeature4(singleCard[cardTypeSelector?.planfeature4key]);
      setPricingFeature5(singleCard[cardTypeSelector?.planfeature5key]);
      setPricingCardColor(cardTypeSelector?.pricingcardcolor);
      setPricingPlanSize(cardTypeSelector?.pricingplansize);
      setPricingPlanColor(cardTypeSelector?.princingplancolor);
      setPricingPriceSize(cardTypeSelector?.pricingpricesize);
      setPricingPriceColor(cardTypeSelector?.pricingpricecolor);
      setPricingFeatureSize(cardTypeSelector?.princingfeaturesize);
      setPricingFeatureColor(cardTypeSelector?.pricingfeaturecolor);
      setPricingButtonTextColor(cardTypeSelector?.pricingbuttontextcolor);
      setPricingButtonColor(cardTypeSelector?.pricingbuttoncolor);
    }
    if (cardTypeSelector && singleCard && cardType === 'Normal') {
      setTitle(singleCard[cardTypeSelector?.titlekey]);
      setPhoto(singleCard[cardTypeSelector?.photokey]);
      setReview(singleCard[cardTypeSelector?.reviewkey]);
      setName(singleCard[cardTypeSelector?.namekey]);
      setRatings(singleCard[cardTypeSelector?.ratingskey]);
      setPosition(singleCard[cardTypeSelector?.positionkey]);
      setService(singleCard[cardTypeSelector?.servicekey]);
      setLogo(singleCard[cardTypeSelector?.logokey]);
      setAvatarShape(cardTypeSelector?.avatarshape);
      setnameColor(cardTypeSelector?.namecolor);
      setnameSize(cardTypeSelector?.namesize);
      setpositionColor(cardTypeSelector?.positioncolor);
      setpositionSize(cardTypeSelector?.positionsize);
      setTitleSize(cardTypeSelector?.titlesize);
      setTitleColor(cardTypeSelector?.titlecolor);
      setReviewSize(cardTypeSelector?.reviewsize);
      setReviewColor(cardTypeSelector?.reviewcolor);
      setCardColor(cardTypeSelector?.cardcolor);
      setServiceColor(cardTypeSelector?.servicecolor);
      setServiceSize(cardTypeSelector?.servicesize);
    }
  }, [singleCard]);
  useEffect(() => {
    if (cardTypeSelector && singleCard && cardType === 'Flip') {
      setTimeout(() => {
        setFlipNameValue(cardTypeSelector?.namevalue);
        setFlipTitleValue(cardTypeSelector?.titlevalue);
        setFlipPhotoValue(cardTypeSelector?.photovalue);
        setFlipPriceValue(cardTypeSelector?.pricevalue);
        setFlipDescValue(cardTypeSelector?.descriptionvalue);
        setFlipGotoValue(cardTypeSelector?.gotovalue);
        setFlipNameKey(cardTypeSelector?.namekey);
        setFlipTitleKey(cardTypeSelector?.titlekey);
        setFlipPhotoKey(cardTypeSelector?.photokey);
        setFlipPriceKey(cardTypeSelector?.pricekey);
        setFlipDescKey(cardTypeSelector?.descriptionkey);
        setFlipGotoKey(cardTypeSelector?.gotokey);
      }, 2000);
    }
    if (cardTypeSelector && singleCard && cardType === 'Pricing') {
      setTimeout(() => {
        setPricingPlanNameKey(cardTypeSelector?.plannamekey);
        setPricingPlanLinkKey(cardTypeSelector?.planlinkkey);
        setPricingPriceKey(cardTypeSelector?.planpricekey);
        setPricingFeature1Key(cardTypeSelector?.planfeature1key);
        setPricingFeature2Key(cardTypeSelector?.planfeature2key);
        setPricingFeature3Key(cardTypeSelector?.planfeature3key);
        setPricingFeature4Key(cardTypeSelector?.planfeature4key);
        setPricingFeature5Key(cardTypeSelector?.planfeature5key);
        setPricingPlanNamevalue(cardTypeSelector?.plannamevalue);
        setPricingPlanLinkvalue(cardTypeSelector?.planlinkvalue);
        setPricingPricevalue(cardTypeSelector?.planpricevalue);
        setPricingFeature1value(cardTypeSelector?.planfeature1value);
        setPricingFeature2value(cardTypeSelector?.planfeature2value);
        setPricingFeature3value(cardTypeSelector?.planfeature3value);
        setPricingFeature4value(cardTypeSelector?.planfeature4value);
        setPricingFeature5value(cardTypeSelector?.planfeature5value);
      }, 2000);
    }
    if (cardTypeSelector && singleCard && cardType === 'Normal') {
      setTimeout(() => {
        setNameKey(cardTypeSelector?.namekey);
        setPhotoKey(cardTypeSelector?.photokey);
        setReviewKey(cardTypeSelector?.reviewkey);
        setServiceKey(cardTypeSelector?.servicekey);
        setTitleKey(cardTypeSelector?.titlekey);
        setRatingsKey(cardTypeSelector?.ratingskey);
        setLogoKey(cardTypeSelector?.logokey);
        setPositionKey(cardTypeSelector?.positionkey);
        setNamevalue(cardTypeSelector?.namevalue);
        setPhotovalue(cardTypeSelector?.photovalue);
        setReviewvalue(cardTypeSelector?.reviewvalue);
        setServicevalue(cardTypeSelector?.servicevalue);
        setTitlevalue(cardTypeSelector?.titlevalue);
        setRatingsvalue(cardTypeSelector?.ratingsvalue);
        setLogovalue(cardTypeSelector?.logovalue);
        setPositionvalue(cardTypeSelector?.positionvalue);
      }, 2000);
    }
  }, [singleCard, cardTypeSelector]);
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem('profile');
    if (!user) {
      history.push('/auth/signin');
    }
  }, []);
  const dark = useDarkMode();
  return (
    <>
    <div className='userarea'>
      <div className='navigation'>
        <div className='nav-left'>
          <p className='nav-title'>User Area</p>
        </div>
        <button className="button-help" onClick={() => setModalOpen(!modalopen)}>
          Help <span>i</span>
        </button>
        <ModalVideo channel='youtube' autoplay isOpen={modalopen} videoId="YykjpeuMNEk" onClose={() => setModalOpen(false)} />
      </div>
      <div className='fetch-area'>
        <label htmlFor='sheetid' style={{color:`${dark.value === true ? 'white' : 'black' }`}}>Sheet Id</label>
        <div className='fetch-input'>
          <input type='text' name='sheetid' value={sheetid} readOnly />
        </div>
      </div>
      <div className='card-type'>
        <label htmlFor='cardtype' style={{color:`${dark.value === true ? 'white' : 'black' }`}}>Card Type</label>
        <div className='card-select'>
          <Dropdown
            arrowClassName='myArrowClassName'
            arrowClosed={<span className='arrow-closed' />}
            arrowOpen={<span className='arrow-open' />}
            options={options}
            onChange={(e) => {
              setCardType(e.value);
            }}
            value={cardType}
            placeholder='Select an Card'
            disabled
          />
        </div>
      </div>
      <div className='work-area'>
        <p className='workarea-title' style={{color:`${dark.value === true ? 'white' : 'black' }`}}>Headings</p>
        <div className='headings'>
          <div className='element-section'>
            <div className='selector-section'>
              {singleCard ? (
                cardType === 'Normal' ? (
                  dropdown2.map((ch, index) => {
                    return (
                      <div className='selector'>
                        <input type='text' readOnly value={ch.keyvalue} />
                        <div className='dropdown-section'>
                          {ch.keyvalue === cardTypeSelector?.namevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Namekey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.titlevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Titlekey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.ratingsvalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Ratingskey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.positionvalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Positionkey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.servicevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Servicekey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.logovalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Logokey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.reviewvalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Reviewkey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.photovalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={Photokey}
                              placeholder='Select an option'
                            />
                          ) : (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setTitleKey(e.value);
                                  setTitlevalue(ch.keyvalue);
                                  setTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setPhotoKey(e.value);
                                  setPhotovalue(ch.keyvalue);
                                  setPhoto(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Review') {
                                  setReviewKey(e.value);
                                  setReviewvalue(ch.keyvalue);
                                  setReview(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Name') {
                                  setNameKey(e.value);
                                  setNamevalue(ch.keyvalue);
                                  setName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Ratings') {
                                  setRatingsKey(e.value);
                                  setRatingsvalue(ch.keyvalue);
                                  setRatings(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Logo') {
                                  setLogoKey(e.value);
                                  setLogovalue(ch.keyvalue);
                                  setLogo(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Position') {
                                  setPositionKey(e.value);
                                  setPositionvalue(ch.keyvalue);
                                  setPosition(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Service') {
                                  setServiceKey(e.value);
                                  setServicevalue(ch.keyvalue);
                                  setService(singleCard[e.value]);
                                }
                              }}
                              value={''}
                              placeholder='Select an option'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : cardType === 'Flip' ? (
                  flipcardDropdown.map((ch, index) => {
                    return (
                      <div className='selector'>
                        <input type='text' readOnly value={ch.keyvalue} />
                        <div className='dropdown-section'>
                          {ch.keyvalue === cardTypeSelector?.namevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={FlipNameValue}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.titlevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={FlipTitleValue}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.pricevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={FlipPriceKey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.photovalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={FlipPhotoKey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.descriptionvalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={FlipDescKey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue === cardTypeSelector?.gotovalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={FlipGotoKey}
                              placeholder='Select an option'
                            />
                          ) : (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Title') {
                                  setFlipTitleKey(e.value);
                                  setFlipTitleValue(ch.keyvalue);
                                  setFlipTitle(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Photo') {
                                  setFlipPhotoKey(e.value);
                                  setFlipPhotoValue(ch.keyvalue);
                                  setFlipPhoto(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Name') {
                                  setFlipNameKey(e.value);
                                  setFlipNameValue(ch.keyvalue);
                                  setFlipName(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Description') {
                                  setFlipDescKey(e.value);
                                  setFlipDescValue(ch.keyvalue);
                                  setFlipDescription(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Price') {
                                  setFlipPriceKey(e.value);
                                  setFlipPriceValue(ch.keyvalue);
                                  setFlipPrice(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Goto') {
                                  setFlipGotoKey(e.value);
                                  setFlipGotoValue(ch.keyvalue);
                                  setGoto(singleCard[e.value]);
                                }
                              }}
                              value={''}
                              placeholder='Select an option'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : cardType === 'Pricing' ? (
                  pricingDropdown.map((ch, index) => {
                    return (
                      <div className='selector'>
                        <input type='text' readOnly value={ch.keyvalue} />
                        <div className='dropdown-section'>
                          {ch.keyvalue === cardTypeSelector?.plannamevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingPlanNameKey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planpricevalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingPriceKey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planlinkvalue ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingPlanLinkKey}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planfeature1value ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingFeature1Key}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planfeature2value ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingFeature2Key}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planfeature3value ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingFeature3Key}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planfeature4value ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingFeature4Key}
                              placeholder='Select an option'
                            />
                          ) : ch.keyvalue ===
                            cardTypeSelector?.planfeature5value ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={PricingFeature5Key}
                              placeholder='Select an option'
                            />
                          ) : (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={keys}
                              onChange={(e) => {
                                if (ch.keyvalue === 'Plan Name') {
                                  setPricingPlanNameKey(e.value);
                                  setPricingPlanNamevalue(ch.keyvalue);
                                  setPricingPlanName(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Price') {
                                  setPricingPriceKey(e.value);
                                  setPricingPricevalue(ch.keyvalue);
                                  setPricingPlanPrice(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Link') {
                                  setPricingPlanLinkKey(e.value);
                                  setPricingPlanLinkvalue(ch.keyvalue);
                                  setPricingPlanLink(singleCard[e.value]);
                                }

                                if (ch.keyvalue === 'Plan Feature 1') {
                                  setPricingFeature1Key(e.value);
                                  setPricingFeature1value(ch.keyvalue);
                                  setPricingFeature1(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 2') {
                                  setPricingFeature2Key(e.value);
                                  setPricingFeature2value(ch.keyvalue);
                                  setPricingFeature2(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 3') {
                                  setPricingFeature3Key(e.value);
                                  setPricingFeature3value(ch.keyvalue);
                                  setPricingFeature3(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 4') {
                                  setPricingFeature4Key(e.value);
                                  setPricingFeature4value(ch.keyvalue);
                                  setPricingFeature4(singleCard[e.value]);
                                }
                                if (ch.keyvalue === 'Plan Feature 5') {
                                  setPricingFeature5Key(e.value);
                                  setPricingFeature5value(ch.keyvalue);
                                  setPricingFeature5(singleCard[e.value]);
                                }
                              }}
                              value={''}
                              placeholder='Select an option'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  'Please Select a Card Type'
                )
              ) : (
                <div>
                  {' '}
                  <div className='selector'>
                    <input type='text' readOnly />
                    <div className='dropdown-section'>
                      <Dropdown
                        arrowClassName='myArrowClassName'
                        arrowClosed={<span className='arrow-closed' />}
                        arrowOpen={<span className='arrow-open' />}
                        options={options}
                        onChange={''}
                        value={''}
                        placeholder='Select an option'
                      />
                    </div>
                  </div>
                  <div className='selector'>
                    <input type='text' readOnly />
                    <div className='dropdown-section'>
                      <Dropdown
                        arrowClassName='myArrowClassName'
                        arrowClosed={<span className='arrow-closed' />}
                        arrowOpen={<span className='arrow-open' />}
                        options={options}
                        onChange={''}
                        value={''}
                        placeholder='Select an option'
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className='editable-section'>
                {singleCard ? (
                  cardType === "Normal" ? (
                    <>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="1"
                        >
                          <Typography>Card Color</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Color&nbsp;</p>
                          <input
                            value={cardColor}
                            type="color"
                            name=""
                            id=""
                            onChange={(e) => {
                              setCardColor(e.target.value);
                            }}
                          />
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="2"
                        >
                          <Typography>Avatar Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Shape</p>
                            <Dropdown
                              options={AvatarShape}
                              onChange={(e) => {
                                setAvatarShape(e.value);
                              }}
                              value={avatar}
                              placeholder={"Select an option"}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="3"
                        >
                          <Typography>Name Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              value={nameColor}
                              type="color"
                              name=""
                              id=""
                              onChange={(e) => {
                                setnameColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(nameSize)}
                              onChange={(e) => {
                                setnameSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="4"
                        >
                          <Typography>Position Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={positionColor}
                              onChange={(e) => {
                                setpositionColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(positionSize)}
                              onChange={(e) => {
                                setpositionSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="5"
                        >
                          <Typography>Title Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={titleColor}
                              onChange={(e) => {
                                setTitleColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(titleSize)}
                              onChange={(e) => {
                                setTitleSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="6"
                        >
                          <Typography>Review Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={reviewColor}
                              onChange={(e) => {
                                setReviewColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(reviewSize)}
                              onChange={(e) => {
                                setReviewSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="7"
                        >
                          <Typography>Service Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={serviceColor}
                              onChange={(e) => {
                                setServiceColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(serviceSize)}
                              onChange={(e) => {
                                setServiceSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="8"
                        >
                          <Typography>Font Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Font</p>
                            <Dropdown
                              options={fontoptions}
                              onChange={(e) => {
                                Setfont(e.value);
                              }}
                              value={fontname}
                              placeholder={"Select an option"}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="9"
                        >
                          <Typography>Scroll Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Scroll Type</p>
                            <Dropdown
                              options={ScrollType}
                              onChange={(e) => {
                                setScrollValue(e.value);
                              }}
                              value={scrollvalue}
                              placeholder={scrollvalue}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ) : cardType === "Flip" ? (
                    <>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="1"
                        >
                          <Typography>Title Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              value={FlipTitleColor}
                              type="color"
                              name=""
                              id=""
                              onChange={(e) => {
                                setFlipTitleColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(FlipTitleSize)}
                              onChange={(e) => {
                                setFlipTitleSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="2"
                        >
                          <Typography>Card Color</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              value={FlipCardColor}
                              type="color"
                              name=""
                              id=""
                              onChange={(e) => {
                                setFlipCardColor(e.target.value);
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="3"
                        >
                          <Typography>Name Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={FlipNameColor}
                              onChange={(e) => {
                                setFlipNameColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(FlipNameSize)}
                              onChange={(e) => {
                                setFlipNameSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="4"
                        >
                          <Typography>Price Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={FlipPriceColor}
                              onChange={(e) => {
                                setFlipPriceColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>

                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(FlipPriceSize)}
                              onChange={(e) => {
                                setFlipPriceSize(e.target.innerText.toString());
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="5"
                        >
                          <Typography>Description Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={FlipDescriptionColor}
                              onChange={(e) => {
                                setFlipDescriptionColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(FlipDescriptionSize)}
                              onChange={(e) => {
                                setFlipDescriptionSize(
                                  e.target.innerText.toString()
                                );
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="6"
                        >
                          <Typography>Button Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Button Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={FlipButtonColor}
                              onChange={(e) => {
                                setFlipButtonColor(e.target.value);
                              }}
                            />
                            <p>Button Text Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={FlipButtonTextColor}
                              onChange={(e) => {
                                setFlipButtonTextColor(e.target.value);
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="7"
                        >
                          <Typography>Font Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Font</p>
                            <Dropdown
                              options={fontoptions}
                              onChange={(e) => {
                                setFlipFont(e.value);
                              }}
                              value={FlipFont}
                              placeholder={"Select an option"}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="8"
                        >
                          <Typography>Scroll Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Scroll Type</p>
                            <Dropdown
                              options={ScrollType}
                              onChange={(e) => {
                                setScrollValue(e.value);
                              }}
                              value={scrollvalue}
                              placeholder={scrollvalue}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ) : cardType === "Pricing" ? (
                    <>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="1"
                        >
                          <Typography>Card Color</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              value={PricingCardColor}
                              type="color"
                              name=""
                              id=""
                              onChange={(e) => {
                                setPricingCardColor(e.target.value);
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="2"
                        >
                          <Typography>Plan Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              value={PricingPlanColor}
                              type="color"
                              name=""
                              id=""
                              onChange={(e) => {
                                setPricingPlanColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>

                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(PricingPlanSize)}
                              onChange={(e) => {
                                setPricingPlanSize(
                                  e.target.innerText.toString()
                                );
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="3"
                        >
                          <Typography>Price Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              value={PricingPriceColor}
                              type="color"
                              name=""
                              id=""
                              onChange={(e) => {
                                setPricingPriceColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>

                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(PricingPriceSize)}
                              onChange={(e) => {
                                setPricingPriceSize(
                                  e.target.innerText.toString()
                                );
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="4"
                        >
                          <Typography>Button Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Button Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={PricingButtonColor}
                              onChange={(e) => {
                                setPricingButtonColor(e.target.value);
                              }}
                            />
                            <p>Button Text Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={PricingButtonTextColor}
                              onChange={(e) => {
                                setPricingButtonTextColor(e.target.value);
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="5"
                        >
                          <Typography>Feature Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Color</p>
                            <input
                              type="color"
                              name=""
                              id=""
                              value={PricingFeatureColor}
                              onChange={(e) => {
                                setPricingFeatureColor(e.target.value);
                              }}
                            />
                            <p>Font Size</p>
                            <Slider
                              style={{ width: "300px" }}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              defaultValue={parseInt(PricingFeatureSize)}
                              onChange={(e) => {
                                setPricingFeatureSize(
                                  e.target.innerText.toString()
                                );
                              }}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="6"
                        >
                          <Typography>Font Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Font</p>
                            <Dropdown
                              options={fontoptions}
                              onChange={(e) => {
                                setPricingFont(e.value);
                              }}
                              value={PricingFont}
                              placeholder={"Select an option"}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="7"
                        >
                          <Typography>Scroll Customize</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <p>Scroll Type</p>
                            <Dropdown
                              options={ScrollType}
                              onChange={(e) => {
                                setScrollValue(e.value);
                              }}
                              value={scrollvalue}
                              placeholder={scrollvalue}
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ) : (
                    ''
                  )
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          {singleCard ? (
            <div className='design-area'>
              {cardType === 'Normal' ? (
                <Card
                  Name={Name}
                  Photo={Photo}
                  Review={Review}
                  Title={Title}
                  Ratings={Ratings}
                  Companylogo={Logo}
                  Service={Service}
                  Position={Position}
                  cardColor={cardColor}
                  avatarShape={avatar}
                  nameColor={nameColor}
                  nameSize={nameSize}
                  positionColor={positionColor}
                  positionSize={positionSize}
                  titleColor={titleColor}
                  titleSize={titleSize}
                  reviewColor={reviewColor}
                  reviewSize={reviewSize}
                  serviceColor={serviceColor}
                  serviceSize={serviceSize}
                  fontname={fontname}
                ></Card>
              ) : cardType === 'Flip' ? (
                <FlipCard2
                Name={FlipName}
                  Title={Fliptitle}
                  Price={FlipPrice}
                  Description={FlipDescription}
                  Goto={Goto}
                  Photo={FlipPhoto}
                  flipTitleSize={FlipTitleSize}
                  flipTitleColor={FlipTitleColor}
                  FlipNameColor={FlipNameColor}
                  FlipNameSize={FlipNameSize}
                  FlipCardColor={FlipCardColor}
                  FlipPriceColor={FlipPriceColor}
                  FlipPriceSize={FlipPriceSize}
                  FlipDescriptionColor={FlipDescriptionColor}
                  FlipDescriptionSize={FlipDescriptionSize}
                  FlipButtonColor={FlipButtonColor}
                  FlipButtonTextColor={FlipButtonTextColor}
                  FlipFont={FlipFont}
                >
                </FlipCard2>
              ) : cardType === 'Pricing' ? (
                <PricingCard
                  planName={PricingPlanName}
                  planPrice={PricingPlanPrice}
                  planLink={PricingPlanLink}
                  planfeature1={PricingFeature1}
                  planfeature2={PricingFeature2}
                  planfeature3={PricingFeature3}
                  planfeature4={PricingFeature4}
                  planfeature5={PricingFeature5}
                  PricingCardColor={PricingCardColor}
                  PricingPlanColor={PricingPlanColor}
                  PricingPlanSize={PricingPlanSize}
                  PricingPriceColor={PricingPriceColor}
                  PricingPriceSize={PricingPriceSize}
                  PricingButtonColor={PricingButtonColor}
                  PricingButtonTextColor={PricingButtonTextColor}
                  PricingFeatureColor={PricingFeatureColor}
                  PricingFeatureSize={PricingFeatureSize}
                  PricingFont={PricingFont}
                ></PricingCard>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </div>
        <button className='update-button' onClick={() => saveToDatabase()}>
          Save
        </button>
      </div>
    </div>
    <div className="mobile-feature">
        <p>Mobile View Not Available</p>
      </div>
    </>
  );
};

export default UserAreaUpdate;
