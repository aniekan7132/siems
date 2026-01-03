import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const AuthLayout = () => {
  return (
    <Box h="100dvh" w="100dvw">
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
