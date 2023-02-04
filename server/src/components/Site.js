import TechStackBadge from "./TechStackBadge";

export default function Site({ name, link, summary, tech_stacks }) {
  return (
    <div style={{ textDecoration: "none" }} href={link}>
      <div>
        {name}:{summary}
      </div>
      <div>
        {tech_stacks.map((name, idx) => (
          <TechStackBadge tech_name={name} key={idx}></TechStackBadge>
        ))}
      </div>
    </div>
  );
}
