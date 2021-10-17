import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      image:
        "https://files.secure.website/wscfus/10639594/28914186/undraw-quick-chat-re-bit5.svg",
    },
    {
      title: "Testimonials",
      description:
        "Display beautiful user testimonials using flexicards, you can control all the aspects of the card using the admin area to create a look that accentuates your brand, no more boring white cards!",
      image:
        "https://files.secure.website/wscfus/10639594/28914192/undraw-feedback-h2ft.svg",
    },
    {
      title: "Pricing tables",
      description:
        "Administer prices on the fly without having to access your website backend, all from google sheets, you update the sheet and the card updates!",
      image:
        "https://files.secure.website/wscfus/10639594/28914194/undraw-online-payments-luau.svg",
    },
    {
      title: "A lot more...",
      description:
        "The use cases are only limited by your imagination, if you have a sheet of data, we have the card designer to help you make it stand out, be it anything from feedbacks to sales items we have the solution thats just right for you and allows for rapid non technical management of information.",
      image:
        "https://files.secure.website/wscfus/10639594/28914195/undraw-setup-wizard-re-nday.svg",
    },
    {
      title: "Explore",
      description:
        "We offer a time limited trial for all the cards, and you dont need a credit card to register for the trial, take us for a spin, we will have you hooked on the possibilities.",
      image:
        "https://files.secure.website/wscfus/10639594/28914199/undraw-online-popularity-re-nm0s.svg",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
