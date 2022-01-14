import styled from "styled-components";


export const ScreenContainer = styled.div`
  border: 1px solid grey;
  width: 22.5rem;
  height: 30rem;
  padding: 0 0 8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

 

  p{
    width: 22.5rem;
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;


  }
`

export const InputsContainer = styled.div`
  width: 22.5rem;
  height: 40rem;
  padding: 0 0 11.5rem;

`

export const SignUpButtonContainer = styled.div`
width: 80vw;
max-width: 450px;
margin: 10px;

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