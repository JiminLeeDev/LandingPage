import { Paper } from "@mui/material";
import { Stack } from "@mui/system";

export default function SiteList({ Sites }) {
  return (
    <Stack spacing={2}>
      {Sites.map((site, idx) => (
        <Paper elevation={1} id={idx}>
          {site}
        </Paper>
      ))}
    </Stack>
  );
}
