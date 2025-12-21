import { register } from "../services/auth";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(e.target.email.value, e.target.password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Register</button>
    </form>
  );
}
