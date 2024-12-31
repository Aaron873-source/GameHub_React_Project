import NavBar from "@/mycomponents/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Layout;
