import styled from "styled-components";

export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 97vw;
`
export const Logo = styled.img`
  display: flex;
  width: 25vw;
  margin: 5vh 0 5vh 38vw;
`

export const Box = styled.div`
  background-color: #fff;
  height: 8vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  width: 100vw;
  display: flex;
  align-items:center;
`

export const Back = styled.img`
  width: 8vw;
  height: 3vh;
  padding-left: 7vw;
`

export const Title = styled.h4`
  margin-left: 40vw;
  font-weight: normal;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 68vh;
  margin-left: 3vw;
  margin-top: 2vh;
` 

export const Rectangle = styled.div`
  border: 1px solid #b8b8b8;
  border-radius: 2px;
  height: 8vh;
  width: 93vw;
  display: flex;
`

export const FieldName = styled.p`
  color: #b8b8b8;
  font-family: Roboto;
  margin-top: -15px;
  margin-left: 20px;
  padding: 6px;
  background-color: #fff;
  font-size: 12px;
`

export const InputField = styled.input`
  height: 3vh;
  margin-left: -45px;
  margin-top: 23px;
  border: none;
  border-width: 0px;
  opacity: 0.5;
  font-size: 16px;
  width: 80vw;
  color: #aaa;

  &:focus{
    opacity: 1;
    color: black;
  }

  &:valid{
    opacity: 1;
    color: black;
  }
`

export const InputCpf = styled.input`
  height: 3vh;
  margin-left: -35px;
  margin-top: 23px;
  border: none;
  border-width: 0px;
  opacity: 0.5;
  font-size: 16px;
  width: 80vw;
`

export const InputConfirmation = styled.input`
  height: 3vh;
  margin-left: -65px;
  margin-top: 23px;
  border: none;
  border-width: 0px;
  opacity: 0.5;
  font-size: 16px;
  width: 80vw;
`

export const Confirm = styled.div`
  background-color: #e8222e;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`

export const ShowHide = styled.img`
  height: 3vh;
  margin: 23px;
`