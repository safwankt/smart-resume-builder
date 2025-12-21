import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import ATSScore from "../components/ATSScore";
import { generateResume } from "../services/api";

export default function Builder() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      resumeText: e.target.resumeText.value,
      jobDesc: e.target.jobDesc.value,
    };

    const res = await generateResume(data);
    setResume(res.optimized);
    setScore(res.atsScore);
  };

  return (
    <>
      <ResumeForm onSubmit={handleSubmit} />
      <ATSScore score={score} />
      <ResumePreview content={resume} />
    </>
  );
}
