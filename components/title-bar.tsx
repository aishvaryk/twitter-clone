import { Box, Typography } from "@mui/material";

function TitleBar() {
    const pageTitle = "Home";
    return (<Box className="title-bar-wrapper" sx={{
        height:"53px",
        width: "50%",
        display: "flex",
        alignItems: "center",
        px:2,
        zIndex:1,
        position:"fixed",
        overflowY:"clip",
        backgroundColor: "white",
        opacity:0.92


    }}>
        <Typography variant="h2" sx={{
            fontSize:"20px",
            opacity:1
        }}><strong>{pageTitle}</strong></Typography>
    </Box>
    )
}

export default TitleBar;