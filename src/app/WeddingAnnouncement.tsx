"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionText = motion(Text);

const MotionButton = motion(Button);

const WeddingAnnouncement = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play().catch(() => {
        console.log("User interaction required to play audio");
      });
    }
  }, []);

  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const bounceVariant = {
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      id="page"
      display="flex"
      height="100vh"
      overflow="hidden"
      backgroundColor="transparent"
    >
      {/* Left Side */}
      <Box
        flex="2"
        display="flex"
        flexDirection="column"
        backgroundImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
        pr={5}
        position="relative"
        borderRight="8px"
        borderColor="gray.200"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
          opacity: 0.7,
        }}
      >
        {/* Background Music */}
        <audio id="myAudio" ref={audioRef} className="hide" src="/bg-sound.mp3">
          Your browser does not support the audio element.
        </audio>

        {/* Announcement */}
        <Box position="relative" zIndex={1} backdropFilter="blur(4px)" p={6}>
          <MotionText
            fontSize="md"
            fontWeight="bold"
            mb={2}
            letterSpacing="2px"
            fontFamily="Poppins"
            variants={slideUpVariant}
            initial="hidden"
            animate="visible"
          >
            WEDDING ANNOUNCEMENT
          </MotionText>
          <Heading
            size="2xl"
            fontFamily="Butler"
            fontWeight="light"
            fontSize="7xl"
            textTransform="uppercase"
            paddingTop="32px"
            initial="hidden"
            animate="visible"
          >
            Tiffany &amp;
          </Heading>
          <Heading
            size="2xl"
            mb={4}
            fontFamily="Butler"
            fontWeight="light"
            fontSize="7xl"
            textTransform="uppercase"
            variants={slideUpVariant}
            initial="hidden"
            animate="visible"
          >
            Jared
          </Heading>
          <MotionText
            mt={4}
            fontStyle="italic"
            fontSize="lg"
            fontWeight="light"
            variants={slideUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
            diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada."
            <br />— Sapardi Djoko Damono
          </MotionText>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        flex="1"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection="column"
        backgroundImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920')"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
        pl={8}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        }}
      >
        {/* Announcement */}
        <Box textAlign="center" zIndex={1}>
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

        <Box textAlign="center" color="#fefefe" zIndex={1}>
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

        {/* Button */}
        <Box zIndex={1}>
          <MotionButton
            fontStyle="italic"
            fontFamily="Newsreader"
            fontWeight="light"
            paddingX="40px"
            borderRadius={0}
            color="#1A1B1D"
            background="#F9F7F4"
            variants={bounceVariant}
            animate="animate"
          >
            Open
          </MotionButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WeddingAnnouncement;
