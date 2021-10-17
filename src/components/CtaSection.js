import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "./SectionHeader";
import Button from "@material-ui/core/Button";
import { Link } from "./../util/router.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}px`,
    textAlign: "center",
  },
}));

function CtaSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" justify="center" spacing={5}>
          <Grid item={true} xs={12} md="auto">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
            />
          </Grid>
          <Grid item={true} xs={12} md="auto">
            <Button
              variant="contained"
              size="large"
              color={props.buttonColor}
              component={Link}
              to={props.buttonPath}
            >
              {props.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default CtaSection;
