import React, { useState, forwardRef } from "react";
import { Box, Button, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

interface Arrowprops {
  onClick?: () => void;
}

const MotionBox = motion(
  forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
    <Box ref={ref} {...props} />
  ))
);

const slideToTopVariant = {
  hidden: { y: "10vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const CustomPrevArrow: React.FC<Arrowprops> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      position="absolute"
      right="120px"
      bottom="-85px"
      padding="3px 30px"
      transform="translateY(-50%)"
      zIndex="2"
      cursor="pointer"
      backgroundColor="#F9F7F4"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "black" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        ></path>
      </svg>
    </Button>
  );
};

const CustomNextArrow: React.FC<Arrowprops> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      position="absolute"
      right="20px"
      bottom="-85px"
      padding="3px 30px"
      transform="translateY(-50%)"
      zIndex="2"
      cursor="pointer"
      backgroundColor="#F9F7F4"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "black" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </Button>
  );
};

const Opening = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    beforeChange: (current, next) => setActiveIndex(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // Carousel images
  const images = [
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg",
  ];

  return (
    <>
      <MotionBox
        ref={ref}
        fontFamily="Poppins"
        flex="1"
        display="flex"
        flexDirection="column"
        fontWeight="bold"
        fontSize="md"
        textAlign="center"
        padding="50px 0px"
        letterSpacing="2px"
        variants={slideToTopVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        <Box marginBottom="24px">
          <p className="font-[12px]">DEAR MR-MRS-MS,</p>
          <p className="font-[12px]">Family & Friends</p>
        </Box>
        <Box
          fontFamily="Butler"
          padding="24px 0"
          fontSize="32px"
          lineHeight="1.2"
          fontWeight="light"
        >
          <h2>
            Welcome to <br /> Tiffany & Jared&apos;s <br />
            Wedding Website
          </h2>
        </Box>
        <Box
          fontSize="18px"
          fontStyle="italic"
          marginBottom="18px"
          fontWeight="normal"
          paddingX="50px"
          fontFamily="Butler"
          letterSpacing="normal"
          className="!font-light"
        >
          Together with joyful hearts and the grace of God, we joyfully announce
          the upcoming of our marriage.
        </Box>
      </MotionBox>
      <Box marginTop="30px" className="slider-container" paddingBottom="80px">
        <Slider {...sliderSettings}>
          {images.map((url, index) => (
            <Box
              key={index}
              height="490px"
              backgroundImage={`url(${url})`}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="8px"
              width="auto"
              transition="transform 1s linear"
              transform={index - 1 === activeIndex ? "scale(1.1)" : "scale(1)"}
            >
              {" "}
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Opening;
