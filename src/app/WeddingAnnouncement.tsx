"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionText = motion(Text);

const MotionButton = motion(Button);

const useAudio = () => {
  const [audio] = useState(new Audio("/bg-sound.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const WeddingAnnouncement = () => {
  const [playing, toggle] = useAudio();

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
        background={`linear-gradient(
          rgba(50, 48, 48, 0.5), 
          rgba(50, 48, 48, 0.5)
        ), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')`}
        backgroundPosition="center"
        backgroundSize="cover"
        color="white"
        pr={5}
        position="relative"
        borderRight="8px"
        borderColor="rgba(0, 0, 0, 0.24)"
      >
        {/* Announcement */}
        <Box position="relative" zIndex={1} p={6}>
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
        <div className="fixed bottom-0 left-0 flex gap-2">
          {/* <audio
            id="myAudio"
            ref={audioRef}
            className="hide"
            src="/bg-sound.mp3"
          >
            Your browser does not support the audio element.
          </audio> */}
          <Button backgroundColor="rgb(153, 122, 94)" borderRadius="full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#FFFFFF"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(255, 255, 255)" }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </Button>
          <Button backgroundColor="rgb(153, 122, 94)" borderRadius="full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#FFFFFF"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(255, 255, 255)" }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path>
            </svg>
          </Button>
        </div>
      </Box>

      {/* Right Side */}
      <Box
        flex="1"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection="column"
        background={`linear-gradient(
          rgba(50, 48, 48, 0.5), 
          rgba(50, 48, 48, 0.5)
        ), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920')`}
        backgroundPosition="center"
        backgroundSize="cover"
        padding="2rem"
        color="white"
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
            onClick={() => toggle()}
          >
            Open
          </MotionButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WeddingAnnouncement;
