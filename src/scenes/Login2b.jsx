import { useContext, useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    
    url("https://i.pinimg.com/originals/38/c7/36/38c7362c452eadc5c46389ca4b9009b8.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// url("https://thumbs.dreamstime.com/b/organic-farmer-vegetables-around-cutting-board-frame-raw-top-view-vegetarian-food-concept-95424761.jpg")

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: transparent;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  /* &: disabled{
      color: green;
      cursor: not-allowed;
  } */
    
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color:red;
`

const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);
const [credentials, setCredentials] = useState({
    username:undefined,
    password:undefined,
})
const {loading, error, dispatch} =useContext(AuthContext)
const navigate = useNavigate()
const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
};

//   const handleClick = (e) => {
//     e.preventDefault();
//     login(dispatch, { username, password });
//   };
const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
          type = "text"
          placeholder="username"
          id = "username"
        //    onChange={(e) => setUsername(e.target.value)}/>
          onChange = {handleChange}/>
          <Input 
          placeholder="password" 
          type = "password"
        //   onChange={(e) => setPassword(e.target.value)}/>
          onChange = {handleChange}/>
          <Button onClick={handleClick} disabled={loading}>LOGIN</Button>
          {error && <Error>{error.message}</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;