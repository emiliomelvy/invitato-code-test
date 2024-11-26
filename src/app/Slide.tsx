"use client";

import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const slideToTopVariant = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Slide: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundImages = [
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <MotionBox
      flex="1"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      background={`linear-gradient(
        rgba(50, 48, 48, 0.5), 
        rgba(50, 48, 48, 0.5)
      ), url('${backgroundImages[currentIndex]}')`}
      backgroundPosition="center"
      backgroundSize="cover"
      padding="2rem"
      color="white"
      initial="hidden"
      variants={slideToTopVariant}
      animate={isOpen ? "visible" : "hidden"}
      className="relative"
    >
      <Box textAlign="center" zIndex={2}>
        <Text
          fontSize="md"
          fontFamily="Poppins"
          letterSpacing="2px"
          fontWeight="bold"
          color="#fefefe"
          marginTop="-6rem"
        >
          WEDDING ANNOUNCEMENT
        </Text>
      </Box>

      <Box textAlign="center" color="#fefefe" zIndex={2}>
        <Heading size="2xl" fontFamily="Butler" fontWeight="light">
          Tiffany &amp; Jared
        </Heading>
        <Heading
          size="md"
          fontStyle="italic"
          fontFamily="Butler"
          fontWeight="light"
          fontSize="4xl"
        >
          #TImetoshaRE
        </Heading>
      </Box>

      <Box className="slide">
        {backgroundImages.map((image, index) => (
          <Box
            key={index}
            style={{
              animationDelay: `${index * 5}s`,
              background: `linear-gradient(
                rgba(50, 48, 48, 0.5), 
                rgba(50, 48, 48, 0.5)
              ), url('${image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
        ))}
      </Box>
    </MotionBox>
  );
};

export default Slide;
