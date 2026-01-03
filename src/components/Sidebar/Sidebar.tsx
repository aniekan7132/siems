import { useState } from "react";
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { navItems } from "../../utils/navItems";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [selected, setSelected] = useState(navItems[0]?.key ?? "");

  return (
    <Box
      bg="gray.50"
      w={{ base: "64px", lg: "240px" }}
      h="100%"
      borderRight="1px solid"
      borderColor="gray.200"
      transition="width 0.3s"
      zIndex={10}
      px={{ base: 2, lg: 4 }}
      py={6}
      position="fixed"
      top="80px"
      left={0}
      overflowY="auto"
    >
      <VStack align="stretch">
        {navItems.map((item, index) => {
          const isActive = selected === item.key;

          return (
            <Link
              to={item.path}
              key={item.key}
              style={{ textDecoration: "none" }}
              onClick={() => setSelected(item.key)}
            >
              <Box>
                <Flex
                  align="center"
                  gap="3"
                  px={{ base: 0, lg: 2 }}
                  py={2.5}
                  borderRadius="md"
                  bg={isActive ? "blue.400" : "transparent"}
                  color={isActive ? "white" : "black"}
                  borderLeftColor="transparent"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: isActive ? "blue.400" : "gray.100",
                    color: isActive ? "white" : "black",
                    boxShadow: isActive ? undefined : "0 0 0 2px blue.400",
                    borderLeftColor: isActive ? "transparent" : "blue.400",
                  }}
                  justify={{ base: "center", lg: "flex-start" }}
                  transition="background 0.2s, color 0.2s"
                >
                  <Icon
                    as={item.icon}
                    boxSize="20px"
                    color={isActive ? "white" : "black"}
                    borderRadius="md"
                    transition="all 0.2s ease"
                  />

                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    display={{ base: "none", lg: "block" }}
                  >
                    {item.label}
                  </Text>
                </Flex>

                {(index === 0 || index === 5) && (
                  <Box
                    h="1px"
                    w="100%"
                    bg="gray.200"
                    mt={index === 0 ? 6 : 2}
                    mb={2}
                  />
                )}
              </Box>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
}
