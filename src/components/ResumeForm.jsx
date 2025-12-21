export default function ResumeForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <textarea name="resumeText" placeholder="Paste your resume" required />
      <textarea name="jobDesc" placeholder="Paste job description" required />
      <button type="submit">Optimize Resume</button>
    </form>
  );
}
