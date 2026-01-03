import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header userName="Dan Charles" avatarUrl="/assets/images/avatar.svg" />
      <Sidebar />
      <Box
        p={4}
        position="absolute"
        top="80px"
        left={{ base: "64px", lg: "240px" }}
        w={{ base: "calc(100% - 64px)", lg: "calc(100% - 240px)" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
