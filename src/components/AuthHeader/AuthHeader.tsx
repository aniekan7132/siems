import { Flex, Image, Text } from "@chakra-ui/react";
import Logo from "@/assets/images/crs-logo.svg";

interface AuthHeaderProps {
  heading: string;
  subtext?: string;
}

export default function AuthHeader({ heading, subtext }: AuthHeaderProps) {
  return (
    <Flex direction="column" gap="32px" alignItems="center">
      <Image src={Logo} alt="Logo" w={{ base: "100px", md: "144px" }} />

      <Flex direction="column" textAlign="center" gap="8px">
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="semibold"
          color="black"
        >
          {heading}
        </Text>
        {subtext && (
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
            {subtext}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}
