import { Text, Flex, Link } from "@chakra-ui/react";

interface BreakDownProps {
  title: string;
  numberCount: string;
  background: string;
  titleColor: string;
  numberColor: string;
  backgroundBtn: string;
}

export default function BreakdownCard({
  title,
  numberCount,
  background,
  titleColor,
  numberColor,
  backgroundBtn,
}: BreakDownProps) {
  return (
    <Flex
      direction={"column"}
      gap={"16px"}
      alignItems={"center"}
      py="33px"
      rounded="lg"
      background={background}
    >
      <Text mb={2} fontSize="14px" fontWeight="500" color={titleColor}>
        {title}
      </Text>
      <Text fontWeight="600" fontSize="30px" color={numberColor}>
        {numberCount}
      </Text>
      <Link
        href="#"
        paddingX="12px"
        paddingY="12px"
        fontSize="14px"
        color="white"
        background={backgroundBtn}
        borderRadius="8px"
        w="max-content"
        textDecoration="none"
        outline="none"
      >
        View List
      </Link>
    </Flex>
  );
}
