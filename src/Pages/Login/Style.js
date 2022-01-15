import styled from "styled-components";


export const ScreenContainer = styled.div`
  text-align:center;
  font-family: 'Roboto', sans-serif;
  border: 1px solid grey;
  width: 22.5rem;
  height: 30rem;
  padding: 0 0 8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

 

`

export const InputsContainer = styled.div`
  
input{
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 2px solid #555;
  box-sizing: border-box;
  text-align: center;
}

`

export const SignUpButtonContainer = styled.div`
font-family: 'Roboto', sans-serif;
text-align:center;
font-size:14px;
font-weight: bold;
max-width: 450px;
margin: 15px;
cursor: pointer;

`

export const LogoImage = styled.img`
width: 6.5rem;
  height: 3.625rem;
  margin: 4.25rem 8rem 1rem;
  object-fit: contain;

` 

export const Button = styled.button`
   width: 20.5rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  background-color: #e8222e;
  cursor: pointer;
`