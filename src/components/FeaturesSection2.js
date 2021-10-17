import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(4)}px`,
  },
  imageWrapper: {
    margin: "0 auto",
    maxWidth: 570,
    width: "100%",
    "& > img": {
      width: "100%",
    },
  },
  row: {
    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(2)}px`,
    },
  },
}));

function FeaturesSection2(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Flexible",
      description:
        "Update the details on the go, from anywhere to your website at the speed of light.",
      icon: ChatIcon,
      iconColor: "primary.main",
    },
    {
      title: "Low Code",
      description: "Embed once and repurpose multiple times.",
      icon: VideogameAssetIcon,
      iconColor: "secondary.main",
    },
    {
      title: "So Simple your pet can do it!",
      description:
        "Update your website like a pro without having to ever tinker with code.",
      icon: PetsIcon,
      iconColor: "#00d1b2",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={8}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <figure className={classes.imageWrapper}>
              <img src={props.image} alt="" />
            </figure>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            {items.map((item, index) => (
              <Grid
                className={classes.row}
                item={true}
                container={true}
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
                key={index}
              >
                <Grid item={true} xs="auto">
                  <Box
                    color={item.iconColor}
                    display="flex"
                    justifyContent="center"
                    fontSize={70}
                    width={70}
                    height={70}
                  >
                    <item.icon fontSize="inherit" />
                  </Box>
                </Grid>
                <Grid item={true} xs={true}>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
