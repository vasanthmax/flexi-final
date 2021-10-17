import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  media: {
    height: 500,
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: -(theme.spacing(15) / 2),
  },
  avatarBorder: {
    borderRadius: "50%",
    padding: "7px",
    backgroundColor: "white",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection2(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://uploads.divjoy.com/pexels-14661-1125x750.jpeg",
      name: "John Smith",
      role: "Software Engineer",
    },
    {
      image: "https://uploads.divjoy.com/pexels-52739-1125x750.jpeg",
      name: "Lisa Zinn",
      role: "Software Engineer",
    },
    {
      image: "https://uploads.divjoy.com/pexels-7051-1125x750.jpeg",
      name: "Sarah Howard",
      role: "Designer",
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
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.name}
                />
                <Box p={3}>
                  <Box textAlign="center">
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection2;
