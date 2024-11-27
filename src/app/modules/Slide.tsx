"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { Box, Heading, Text, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(
  forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
    <Box ref={ref} {...props} />
  ))
);

const slideToTopVariant = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Slide: React.FC<{ isOpen: boolean; onScrollToBegin: () => void }> = ({
  isOpen,
  onScrollToBegin,
}) => {
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
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      height="full"
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
      <Box textAlign="center" zIndex={2} marginTop="10rem">
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

      <Box
        fontFamily="Poppins"
        fontSize="sm"
        zIndex={2}
        display="flex"
        alignItems="center"
        gap={2}
        marginLeft="auto"
        onClick={onScrollToBegin}
      >
        <p>SCROLL TO BEGIN</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
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
