import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import ImageOne from "../../assets/img01.jpg";
import ImageTwo from "../../assets/img02.jpg";
import ImageThree from "../../assets/img03.jpg";
import ImageFour from "../../assets/img04.jpg";
import ImageFive from "../../assets/img05.jpg";
import ImageSix from "../../assets/img06.jpg";
import "./slider.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "eShop purchase any product online from us, Europe",
    imgPath: ImageOne,
  },
  {
    label: "All the electronic products available here..",
    imgPath: ImageTwo,
  },
  {
    label: "Cosmatics Skin Care, food products and more",
    imgPath: ImageThree,
  },
  {
    label:
      "The best garments and textile production industries connected with us",
    imgPath: ImageFour,
  },
  {
    label: "We care about your kids, should look more cute",
    imgPath: ImageFive,
  },
  {
    label: "Order the best Nike (latest model) shoes on eShop",
    imgPath: ImageSix,
  },
];

const Slider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      className="sliderimg"
      textAlign="center"
      sx={{
        maxWidth: 1200,
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
        mx: 20,
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: "block",
                  maxWidth: 1200,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Slider;
