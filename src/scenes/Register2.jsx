import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://cdn8.dissolve.com/p/D2115_120_316/D2115_120_316_1200.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
    const [attributes, setAttributes] = useState({
        username:undefined,
        password:undefined,
        email:undefined,
    })
    const handleChange = (e) => {
        setAttributes((prev) => ({...prev, [e.target.id]: e.target.value}));
    };
  return (
    <Container>
      <Wrapper>
        <Title><span>CREATE AN ACCOUNT</span></Title>
        <Form>
          {/* <Input placeholder="name" />
          <Input placeholder="last name" /> */}
          <Input placeholder="username" onChange={(e) => setAttributes.username(e.target.value)}/>
          <Input placeholder="email" type = "email" id = "email" onChange = {handleChange}/>
          <Input placeholder="password" onChange={(e) => setAttributes.password(e.target.value)}/>
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;