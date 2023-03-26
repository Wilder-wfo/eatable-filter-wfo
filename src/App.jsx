import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/Login-Form";
import SignupForm from "./components/Signup-Form";
import { colors } from "./styles/colors";

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.pink[400]};
  }
`;
function App() {
  const [showLogin, setShowLogin] = useState(true);
  function handleClick(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <div>
      <h1>Welcome to Eatable Filters</h1>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <CustomLink onClick={handleClick}>
        {showLogin ? "Create Account" : "Login"}
      </CustomLink>
    </div>
  );
}

export default App;