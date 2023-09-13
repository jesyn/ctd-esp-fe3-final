import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Link } from "@mui/material";

const GeneralFooter = () => {
  return (
    <Box
      component={"footer"}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      borderTop={"1px solid #eaeaea"}
      sx={{ backgroundColor: "#000" }}
    >
      <Link
        href="https://jm-portfolio-jesyn.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        display={"flex"}
        flexGrow={1}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#fff"}
        sx={{ textDecoration: "none" }}
      >
        Powered by{" "}
        <Box
          ml={"0.5rem"}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Image src="/logo-black.png" alt="Logo jesy" width={60} height={60} />
        </Box>
      </Link>
    </Box>
  );
};
export default GeneralFooter;
