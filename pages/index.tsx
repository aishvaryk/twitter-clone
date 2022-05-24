import type { NextPage } from "next";
import Tweet from "../components/tweet";
import TitleBar from "../components/title-bar";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      
      <Box sx={{
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        width:"50%"
      }}>
        <Box
          className="title-bar-wrapper"
          sx={{
            height: "53px",
            width: "100%",
            zIndex: 0,
          }}
        ></Box>

        <TitleBar></TitleBar>
      </Box>
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
    </Box>
  );
};

export default Home;
