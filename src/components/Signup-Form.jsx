import { useState } from "react";
import { createUser } from "../services/user-services";
import Input from "./Input";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    createUser(formData)
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
      <Input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="John"
        label="First Name"
      />
      <Input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Doe"
        label="Last Name"
      />
      <button type="submit">Create Account</button>
    </form>
  );
};
export default SignupForm;