import styled from "styled-components"

export const ScreenContainer = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 97vw;
`

export const Box = styled.div`
    background-color: #fff;
    height: 20vh;
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
    margin-top: 1vh;
    margin-left: 25vw;
    font-weight: normal;
`

export const Rectangle = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 15px;
    border: solid 1px #b8b8b8;
    border-radius: 2px;
    width: 77vw;
`

export const ImageLogo = styled.img`
    height: 20vh;
    object-fit: contain;
    display:flex;
    width: 75vw;
    justify-content: center;
    margin-bottom: 1vh;
`

export const RestaurantName = styled.div`
    color: #5cb646;
    letter-spacing: -0.39px;
    font-size: 18px;
`

export const Description = styled.div`
  font-size: 14px;
  padding-top: 1vh;
`

export const RectangleDetails = styled.div`
    display: flex;
    border: solid 1px #b8b8b8;
    border-radius: 2.5px;
    width: 85vw;
    margin: 0 0 2vh 5.5vw;
`

export const ImgProduct = styled.img`
    height: 12vh;
    width: 25vw;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2.5vw;
`

export const TitleS1 = styled.div`
    color: #e8222e;
`

export const TitleS2 = styled.h4`
    font-weight: normal;
    color: #b8b8b8;
    font-size: 12px;
`

export const TitleS3 = styled.h3`
    font-weight: normal;
`

export const ContainerProductsMap = styled.div`
  margin-bottom: 2vh;
  overflow: scroll;
`

export const AddButton = styled.div`
  width: 5vw;
  height: 2vh;
  background-color: red;
`

export const RemoveButton = styled.div`
  width: 5vw;
  height: 2vh;
  background-color: black;
`

export const SendInfo = styled.div`
  border: 1px solid black;
  width: 15vw;
  height: 3vh;
  align-self: flex-end;
  justify-self: flex-end;
  border-radius: 5px 2px;
  font-size: 12px;
  padding-left: 3px;
`

export const SpecialContainer = styled.div`
  display: flex;
  width: 57vw;
  justify-content: space-between;
`