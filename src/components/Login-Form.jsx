import { useState } from "react";
import Input from "./Input";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    login(formData)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@mail.com"
        label="Email:"
      />
      <Input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="******"
        label="Password:"
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;