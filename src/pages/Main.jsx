import React from "react";
import { Flex } from "@chakra-ui/core";
import Welcome from "../components/Welcome";

const Main = () => {
  return (
    <Flex w="100%">
      <Welcome />
    </Flex>
  );
};

export default Main;
