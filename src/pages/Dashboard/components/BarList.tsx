"use client";

import { BarList, type BarListData, useChart } from "@chakra-ui/charts";
import { Flex } from "@chakra-ui/react";
import ChartHeader from "./ChartHeader";

interface BarListProps {
  text: string;
}

export default function BarListComponent({ text }: BarListProps) {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Private", value: 720 },
      { name: "Public", value: 414 },
    ],
    series: [{ name: "name", color: "blue.100" }],
  });

  return (
    <Flex
      direction="column"
      gap="24px"
      py="24px"
      px="16px"
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius="16px"
      w="100%"
    >
      <ChartHeader text={text} />

      <BarList.Root chart={chart}>
        <BarList.Content>
          <BarList.Bar />
          <BarList.Value />
        </BarList.Content>
      </BarList.Root>
    </Flex>
  );
}
