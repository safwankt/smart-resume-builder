document.getElementById("resumeForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    role: role.value,
    skills: skills.value,
    experience: experience.value,
    jobdesc: jobdesc.value
  };

  const res = await fetch("http://localhost:5000/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  document.getElementById("output").innerHTML = `
    <h3>${result.name}</h3>
    <p><strong>Target Role:</strong> ${result.role}</p>
    <p><strong>Professional Summary:</strong><br>${result.summary}</p>
    <p><strong>Skills:</strong><br>${result.skills}</p>
    <p><strong>Experience:</strong><br>${result.experience}</p>
  `;
});
