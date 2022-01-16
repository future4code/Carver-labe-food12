import styled from "styled-components";

export const DivForm = styled.div`
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
  }
`

export const StyledButton = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  cursor: pointer;
`

export const StyledInput = styled.input`
  width: 328px;
  height: 56px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 104px;
    height: 58px;
    margin: 68px 128px 16px;
    object-fit: contain;
  }
  p{
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
  }
`