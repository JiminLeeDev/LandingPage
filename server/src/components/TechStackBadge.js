import { Paper, Typography } from "@mui/material";
import { useEffect } from "react";

export default function TechStackBadge({ tech_name, tech_icon }) {
  return (
    <Paper
      elevation={1}
      sx={{
        m: "1% 1%",
        p: "1% 1%",
        height: "15px",
        lineHeight: "15px",
      }}
    >
      <Typography sx={{ display: "inline" }} fontSize="15px" lineHeight="15px">
        {tech_name}
      </Typography>

      <img src={tech_icon} alt="이미지가 없어요..ㅠㅠ" height="15px" />
    </Paper>
  );
}
