import styled from "styled-components"

export const Feed = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 97vw;
    font-family: Roboto;
    overflow-x: hidden;
`

export const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.div`
    margin: 5px;
`

export const TitleTextS3 = styled.div`
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

export const SearchImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.959rem 0 0;
    object-fit: contain;
`

export const InputRestaurante = styled.input`
    border: none;
    border-width: 0px;
    opacity: 0.5;
    font-size: 16px;
`

export const Filtro = styled.div`
    display: flex;
    width: 90vw;
    padding: 15px 20px 30px;
    overflow-x: scroll;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
    display: none;
    }
`

export const SearchText = styled.div`
    padding-right: 25px;
    
    &:hover {
        color: #e8222e;
    }
`

export const RestaurantCard = styled.div`
`

export const Rectangle2 = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    width: 90vw;
    justify-content: center;
    margin: 10px;
`

export const ImageLogo = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
`

export const RestaurantName = styled.div`
    margin-left: 15px;
    color: #e8222e;
    letter-spacing: -0.39px;
    font-size: 18px;
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DeliveryTime = styled.div`
    margin: 15px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Shipping = styled.div`
    margin: 15px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`