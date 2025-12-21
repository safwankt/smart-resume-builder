export async function generateResume(data) {
  const res = await fetch("http://localhost:5000/api/resume/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
