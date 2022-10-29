import { Box } from "@mui/material";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading width={200} height={200} type="spin" color="DodgerBlue" />
    </Box>
  );
};

export default Loading;
