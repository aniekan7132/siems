import { Box, Text } from "@chakra-ui/react";

export default function AuthFooter() {
  return (
    <Box
      width="100%"
      position="absolute"
      bottom="0"
      left="50%"
      transform="translateX(-50%)"
      maxW="container.md"
      px={4}
    >
      <Text
        fontSize="sm"
        color="gray.600"
        textAlign="center"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        &copy;{new Date().getFullYear()} SIEMS. All rights reserved
      </Text>
    </Box>
  );
}
