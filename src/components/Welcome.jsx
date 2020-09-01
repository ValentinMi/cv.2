import React from "react";
import { Flex, Text, Button } from "@chakra-ui/core";
import Ring from "./Ring";

const Welcome = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      w="100%"
      h="100vh"
      textAlign="center"
      bg="#252934"
      color="white"
      position="relative"
      overflow="hidden"
      px={1}
    >
      <Text fontSize="4xl" m={1}>
        Bonjour, je suis
        <span style={{ color: "#E31B6D", marginLeft: "10px" }}>
          Valentin Misiaszek
        </span>
        .<br />
        Je suis développeur full-stack.
      </Text>

      <Button
        variant="outline"
        variantColor="teal"
        rightIcon="arrow-down"
        color="white"
        size="lg"
        borderColor="white"
        mt={3}
      >
        Découvrez moi !
      </Button>
      <Ring />
    </Flex>
  );
};

export default Welcome;
