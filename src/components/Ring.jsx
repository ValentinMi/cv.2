import React from "react";
import { Box, Flex } from "@chakra-ui/core";

const Ring = () => {
  return (
    <Flex position="absolute" justify="center" align="center">
      <Box
        className="Ring"
        borderStyle="solid"
        borderWidth="5px"
        borderColor="#fff"
        borderRadius="50%"
        width="600px"
        height="600px"
      />
    </Flex>
  );
};

export default Ring;
