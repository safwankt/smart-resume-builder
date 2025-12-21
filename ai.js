module.exports = function (data) {
  return {
    name: data.name,
    role: data.role,

    summary: `Results-driven ${data.role} with hands-on experience in ${
      data.skills
    }. Proven ability to deliver high-quality solutions aligned with business goals. Optimized for ATS keyword matching.`,

    skills: data.skills
      .split(",")
      .map(skill => `• ${skill.trim()}`)
      .join("<br>"),

    experience: `• ${data.experience}<br>
• Applied industry best practices and job-specific skills from the job description
• Optimized resume content for ATS keyword scanning`
  };
};
