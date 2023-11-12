import styled from "styled-components"
import plus from "./plus_icn.svg"
import minus from "./minus_icn.svg"
import close from "./cancel_icn.svg"

const CartItemContainer = styled.div`
    padding-top: 2.5rem;
    display: grid;
    grid-template-columns: 20% 30% 20% 20% 10%;
`

const InfoContainer = styled.div`
    display: grid;
    grid-template-rows: 50% 25% 25%;
`
const Name = styled.h1`
    color: #1B2437;
font-family: "Open Sans";
font-size: 3.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.04rem;
overflow: hidden;
`

const SizeContainer = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
`

const Size = styled.p`
    color: #1B2437;
font-family: "Muli";
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: normal;
overflow: hidden;
`

const SizeValue = styled.p`
    color: #8E8E93;
font-family: "Muli";
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
overflow: hidden;
`

const ColorContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 15% 70%;
`

const Color = styled.p`
    color: #1B2437;
font-family: "Muli";
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: normal;
overflow: hidden;
`
const BlueBox = styled.div`
    width: 1.6rem;
    margin-top: 1.6rem;
height: 1.6rem;
flex-shrink: 0;
border-radius: 0.2rem;
background-color: #1B2437;
`

const GoldBox = styled.div`
    width: 1.6rem;
height: 1.6rem;
margin-top: 1.6rem;
flex-shrink: 0;
border-radius: 0.2rem;
background-color: #F3C623;
`

const QuantityContainer = styled.div`
    margin-top: 11.4rem;
    display: grid;
    grid-template-columns: auto auto auto;
`

const QuantityButton = styled.button`
    width: 4.4rem;
height: 4.4rem;
flex-shrink: 0;
border-radius: 1.6rem;
border: 2px solid #D1D1D6;
background-color: white;
margin-left: 2.5rem;
margin-top: 1.0rem;
`

const Quantity = styled.p`
    color: #D1D1D6;
text-align: center;
font-family: "Muli";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Prize = styled.p`
    color: #1B2437;
font-family: "Open Sans";
font-size: 3.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.04rem;
margin-left: 5.5rem;
margin-top: 12.0rem;
`

const StyledImage = styled.img`
    margin-left: 3.5rem;
margin-top: 7.0rem;
`

const Close = styled.img`
    margin-right: 2.5rem;
margin-top: 12.0rem;
`

const CartItem = ({image, name, size, HasBlue, HasGold, prize}) => {return(
    <CartItemContainer>
        <StyledImage src={image} />
        <InfoContainer>
            <Name>{name}</Name>
            <SizeContainer>
                <Size>Size </Size><SizeValue>{size}</SizeValue>
            </SizeContainer>
            <ColorContainer>
                <Color>Color </Color>
                {HasBlue ? <BlueBox /> : null}
                {HasGold ? <GoldBox /> : null}
            </ColorContainer>
        </InfoContainer>
        <QuantityContainer>
            <QuantityButton><img src={minus} alt="" /></QuantityButton>
            <Quantity>1</Quantity>
            <QuantityButton><img src={plus} alt="" /></QuantityButton>
        </QuantityContainer>
        <Prize>$ {prize}</Prize>
        <Close src={close} alt="" />
    </CartItemContainer>)
}

export default CartItem