import TechStackBadge from "./TechStackBadge";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Site({
  name,
  link,
  github_link,
  summary,
  tech_stacks,
}) {
  return (
    <Accordion>
      <AccordionSummary>
        <Button href={github_link}>
          <GitHubIcon />
        </Button>
        <Button href={link}>{name}</Button>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>{summary}</Typography>

        <Box sx={{ display: "flex" }}>
          {tech_stacks.map((tech_stack, idx) => (
            <TechStackBadge
              tech_name={tech_stack.name}
              tech_icon={tech_stack.icon}
              key={idx}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
