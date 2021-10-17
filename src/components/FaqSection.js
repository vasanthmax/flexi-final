import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: "What is flexicards?",
      answer:
        "flexicards is a SaaS that enables you to create visually stunning informative cards from google sheet content.",
    },
    {
      question: "What can i use flexicards for?",
      answer:
        "Flexicards changes the way google sheet data is displayed on your website, no more boring grids of data, instead create a stunning card based view of your data.The possibilities are endless, feedbacks, reviews, products, sale items, listings, pricing tables to quote a few. You name it and we have a card for it. (and in case we dont we will develop one for you)",
    },
    {
      question: "Does it require me to code?",
      answer:
        "Not at all, we have templatized the product to work with any google sheet, you can learn more once you complete the onboarding video, there is a easy to use customizer available that helps you theme the cards to suite your site.",
    },
    {
      question: "What if i need more domains than your largest plan?",
      answer:
        "Reach out to us at sales@flexi.cards and we would help you with the product pricing.",
    },
    {
      question: "How do i use your Saas?",
      answer:
        "Its a simple 3 step process, 1. Map your google sheet, 2. create your card and assign the domain 3. embed the script on your site and you are done. Any changes done to the google sheet would immediately reflect on to your site. If you are using the card wall or multcard option any new row added to the sheet would be presented as a new card.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
