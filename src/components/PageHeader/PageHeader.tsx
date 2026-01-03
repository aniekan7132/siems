import { Flex, Text } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
  subTitle: string;
}

export default function PageHeader({ title, subTitle }: PageHeaderProps) {
  return (
    <Flex direction="column" gap="8px">
      <Text fontWeight="600" fontSize="30px">
        {title}
      </Text>
      <Text>{subTitle}</Text>
    </Flex>
  );
}
