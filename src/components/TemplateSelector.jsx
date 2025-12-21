export default function TemplateSelector({ setTemplate }) {
  return (
    <div>
      <button onClick={() => setTemplate("modern")}>Modern</button>
      <button onClick={() => setTemplate("classic")}>Classic</button>
    </div>
  );
}
