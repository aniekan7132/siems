import { Text } from "@chakra-ui/react";

interface HeaderProps {
  text: string;
}

export default function ChartHeader({ text }: HeaderProps) {
  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color="black"
      lineHeight="30px"
    >
      {text}
    </Text>
  );
}
