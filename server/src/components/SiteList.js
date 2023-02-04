export default function SiteList({ Sites }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {Sites.map((site, idx) => (
        <li id={idx}>{site}</li>
      ))}
    </ul>
  );
}
