import { Chart, useChart } from "@chakra-ui/charts";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import ChartHeader from "./ChartHeader";

export default function ChartComponent() {
  const chart = useChart({
    data: [
      { name: "Active", value: 400, color: "purple.400" },
      { name: "Expired", value: 400, color: "red.400" },
      { name: "Suspended", value: 400, color: "cyan.400" },
      { name: "Revoked", value: 400, color: "orange.400" },
    ],
  });

  return (
    <Flex
      direction="column"
      gap="27px"
      borderWidth={"1px"}
      borderColor={"white"}
      p="24px"
      borderRadius="16px"
      border="1px solid rgba(0,0,0,0.1)"
      boxShadow="0px 1px 4px rgba(0,0,0,0.1)"
    >
      <ChartHeader text="License Status Breakdown" />

      <Flex
        gap="40px"
        alignItems="center"
        justifyContent="center"
        p="20px"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Chart.Root boxSize="200px" chart={chart}>
          <PieChart>
            <Tooltip
              cursor={false}
              animationDuration={100}
              content={<Chart.Tooltip hideLabel />}
            />
            <Pie
              innerRadius={50}
              outerRadius={100}
              isAnimationActive={false}
              data={chart.data}
              dataKey={chart.key("value")}
              nameKey="name"
              labelLine={{ strokeWidth: 1 }}
              cornerRadius={6}
            >
              {chart.data.map((item) => (
                <Cell
                  key={item.name}
                  strokeWidth={2}
                  fill={chart.color(item.color)}
                />
              ))}
            </Pie>
          </PieChart>
        </Chart.Root>

        <Flex align="start" direction="column" gap="12px">
          {chart.data.map((item) => (
            <Flex key={item.name} direction="column">
              <Flex gap="6px" alignItems={"center"} justifyContent={"center"}>
                <Box w="6px" h="6px" bg={item.color} borderRadius="full" />
                <Flex justifyContent="space-between" gap="50px" w="180px">
                  <Text fontWeight="400" fontSize="16px" lineHeight="24px">
                    {item.name}:
                  </Text>{" "}
                  <Text fontWeight="400" fontSize="16px" lineHeight="24px">
                    {item.value}%
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
