import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { getInitials } from "../../utils/functions";

interface HeaderProps {
  userName?: string;
  avatarUrl?: string;
}

const Header = ({
  userName = "Dan Charles",
  avatarUrl = "/assets/images/avatar.svg",
}: HeaderProps) => {
  return (
    <Box
      as="header"
      bg="blue.700"
      color="white"
      height="80px"
      width="100%"
      px={6}
      py={4}
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top={0}
      zIndex="100"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Image
            src="assets/images/crs-logo.svg"
            alt="Logo"
            boxSize="42px"
            mr={3}
          />
          <Text fontSize="lg" fontWeight="bold">
            SIEMS
          </Text>
        </Flex>

        <Flex align="center">
          <Box
            w="40px"
            h="40px"
            borderRadius="50%"
            borderWidth="1px"
            borderColor="blue.400"
            borderStyle="solid"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr={2}
          >
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={userName}
                w="40px"
                h="40px"
                objectFit="cover"
              />
            ) : (
              <Text color="white" fontWeight="bold" fontSize="sm">
                {getInitials(userName)}
              </Text>
            )}
          </Box>

          <Box textAlign="right">
            <Text fontWeight="bold" fontSize="sm">
              {userName}
            </Text>
            <Text fontSize="xs" color="white">
              Commissioner
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
