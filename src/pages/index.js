import React from 'react';
import HeroSection from './../components/HeroSection';
import FeaturesSection from './../components/FeaturesSection';
import CtaSection2 from './../components/CtaSection2';
import HeroSection2 from './../components/HeroSection2';
import FeaturesSection2 from './../components/FeaturesSection2';
import CtaSection from './../components/CtaSection';
import FaqSection from './../components/FaqSection';
import TeamBiosSection2 from './../components/TeamBiosSection2';
import NewsletterSection from './../components/NewsletterSection';
import { useDarkMode } from '../util/theme'
function IndexPage(props) {
  const darkmode = useDarkMode();
  return (
    <>
      <HeroSection
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Welcome to flexicards'
        subtitle='We help convert your google sheet data to visually stunning, clean, functional and minimalist cards.'
        image='https://files.secure.website/wscfus/10639594/28914184/undraw-experts-re-i40h.svg'
        buttonText='Get Started'
        buttonColor='primary'
        buttonPath='/auth/signin'
      />
      <FeaturesSection
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Use Cases'
        subtitle='All the features you need to make your sheet data awesome and stand out. Say good bye to the boring old google sheet grids and say hello to flexicards!'
      />
      <CtaSection2
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='What are you waiting for?'
        subtitle=''
        buttonText='Get Started'
        buttonColor='primary'
        buttonPath='/pricing'
      />
      <HeroSection2
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Administer your site on the move!'
        subtitle='You can now update prices, and manage UI by just updating the google sheet, no more logging into the webhost to tweak, add, remove a product.'
      />
      <FeaturesSection2
        bgColor='default'
        size='large'
        bgImage=''
        bgImageOpacity={1}
        image='https://files.secure.website/wscfus/10639594/28917441/sapiens.svg'
      />
      <CtaSection
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Try flexicards today!'
        subtitle='It would blow you away by its simplicity.'
        buttonText='Get Started'
        buttonColor='primary'
        buttonPath='/pricing'
      />
      <FaqSection
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Frequently Asked Questions'
        subtitle=''
      />
      <TeamBiosSection2
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Meet the Team'
        subtitle=''
      />
      <NewsletterSection
        bgColor='default'
        size='medium'
        bgImage=''
        bgImageOpacity={1}
        title='Let us send you a Card'
        subtitle='Receive our latest articles and feature updates'
        buttonText='Subscribe'
        buttonColor='primary'
        inputPlaceholder='Enter your email'
        subscribedMessage='You are now subscribed!'
      />
    </>
  );
}

export default IndexPage;
