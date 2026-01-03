import BreakdownCard from "./components/BreakdownCard";
import { cardDetails } from "@/constants/data";
import ChartComponent from "./components/Chart";
import BarListComponent from "./components/BarList";
import { Grid, Box, Flex, SegmentGroup } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader/PageHeader";

const Dashboard = () => {
  return (
    <Flex direction="column" gap="40px" w="full">
      <Flex justifyContent={"space-between"}>
        <PageHeader
          title="Dashboard"
          subTitle="Comprehensive System Overview"
        />
        <Box>
          <SegmentGroup.Root
            size={"sm"}
            cursor={"pointer"}
            defaultValue="React"
          >
            <SegmentGroup.Indicator background="white" />
            <SegmentGroup.Items items={["All", "LGA"]} />
          </SegmentGroup.Root>
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {cardDetails.map((item, index) => {
          return (
            <BreakdownCard
              key={index}
              title={item.title}
              numberCount={item.number}
              background={item.cardBackground}
              titleColor={item.titleColor}
              numberColor={item.numberColor}
              backgroundBtn={item.btnBg}
            />
          );
        })}
      </Grid>

      <Grid
        gap={4}
        templateColumns={{
          base: "1fr",
          xl: "1.5fr 2fr",
        }}
      >
        <ChartComponent />

        <Flex gap={4} w="full" direction={{ base: "column", sm: "row" }}>
          <BarListComponent text="Public vs Private schools" />
          <BarListComponent text="Boys vs Girls in schools" />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Dashboard;
