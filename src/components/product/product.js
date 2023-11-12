import Rating from "../rating/rating"
import styled from "styled-components"
import { faHeart as regularHeart } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Popup from "reactjs-popup";
import CartItem from "../cart item/cart-item";
import Image1 from "../../item1.png"
import Image2 from "../../item2.png"
import BigProductImage from "./product_image.png"
import SmallProductImage1 from "./product_image (1).png"
import SmallProductImage2 from "./Bitmap.png"
import SmallProductImage3 from "./Bitmap (1).png"
import SmallProductImage4 from "./Bitmap (2).png"
import SmallProductImage5 from "./Bitmap (3).png"

const Tag = styled.p`
    border-radius: 1rem;
    font-family: "Muli";
    font-size: 1.4rem;
    line-height: 3.2rem;
    letter-spacing: 0rem;
    text-align: center;

    width:9.6rem;
    height: 3.2rem;
    background-color: #E5E5EA;
`

const Hearth = styled(FontAwesomeIcon)`
    border-radius: 2rem;
    color: #EDA3B5;
`

const StyledButton = styled.button`
    border: none;
    border-radius: 2rem;
    color: #EDA3B5;
    width: 4.4rem;
    height: 4.4rem;
`

const TagContainer = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
`

const ProductName = styled.h1`
    font-family: "Open Sans";
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 6.5rem;
    letter-spacing: 0.04000000059604645rem;
    text-align: left;

`

const ReviewContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
`
const NumberReviews = styled.p`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 2.5rem;
    letter-spacing: 0px;
    text-align: left;
    color: #1B2437;
    margin-bottom: 2.5rem;

`
const InfoButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`

const PrimaryInfoButton = styled.button`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: center;
    color: #EDA3B5;
    border: none;
    border-bottom: 1px;
    color: #EDA3B5;
    background-color: white;

`

const SeconderyInfoButton = styled.button`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: center;
    color: #1B2437;
    background-color: white;
    border: none;

`

const InfoText = styled.p`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0px;
    text-align: left;
    color: #8E8E93;

`

const SizeAndColorContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`
const SizeTextContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
`

const SizeTextBlack = styled.div`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: left;
    color: #1B2437;
`

const SizeTextPink = styled.div`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: left;
    color: #EDA3B5;
`

const SizeButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 1rem;
`

const SecondarySizeButtons = styled.button`
    width: 6.8rem;
    height: 4.4rem;
    border: 0.2rem;
    background-color: white;
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: center;
    color: #1B2437;
`

const PrimarySizeButtons = styled.button`
    width: 6.8rem;
    height: 4.4rem;
    border: 0.2rem;
    background-color: #EDA3B5;;
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: center;
    color: white;
`
const SizeContainer = styled.div`
    display:grid;
    grid-template-columns: auto;
`
const ColorContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
`

const ColorBoxHighlighter = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.5rem;
    border: 0.4rem solid #1B2437;
    margin-bottom: 2.5rem;
`

const SingleColorBoxContainer = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.9rem;
    margin-bottom: 2.5rem;
`


const PrimaryColorBox = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    background-color: #1B2437;
`

const SecondaryColorBox = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    background-color: #127681;
`

const ThirdColorBox = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    background-color: #32E0C4;;
`

const ColorBoxContainer = styled.div`
    display:grid;
    grid-template-columns: 20% 20% 60%;
`

const ColorText = styled.p`
    font-family: "Muli";
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0px;
    text-align: left;
    color: #1B2437;
`

const CostContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 3%;
`

const CostText = styled.div`
    font-family: "Open Sans";
    font-size: 3.4rem;
    font-weight: 400;
    line-height: 4.6rem;
    letter-spacing: 0.04000000059604645rem;
    text-align: left;
`

const PrimaryButton = styled.button`
    background-color: #EDA3B5;
    font-family: "Muli";
    font-size: 2rem;
    line-height: 2.3rem;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 1rem;
    color: white;
    border-color: #EDA3B5;
`

const SecondaryButton = styled.button`
    background-color: white;
    font-family: "Muli";
    font-size: 2rem;
    line-height: 2.3rem;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 1rem;
    color: #EDA3B5;
    border-color: #EDA3B5;
`

const ModalContainer = styled.div`
width: 114rem;
height: 60rem;
flex-shrink: 0;
border-radius: 1.6rem;
background: #FFF;
`

const ModalNavigationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
`
const ActiveModalNavigationButton = styled.button`
    color: #1B2437;
text-align: center;
font-family: "Muli";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: white;
border-left: none;
border-right: none;
border-top:none;
border-bottom: 0.1rem #EDA3B5;
`

const InactiveModalNavigationButton = styled.button`
    color: #D1D1D6;
text-align: center;
font-family: "Muli";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: white;
border-left: none;
border-right: none;
border-top:none;
border-bottom: 0.1rem #EFEFF4;
`

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 15%;
    gap: 70%;
`

const SmallImagesContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
`

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding-left: 12.5rem;
    padding-bottom: 3.9rem;
    padding-top: 6.2rem;
    padding-right: 10.1rem;
    @media only screen and (min-width: 768px) {
        grid-template-columns: auto;
    }
` 

const LastImage = styled.img`
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
`

const BigImage = styled.img`
    padding-left: 25.5rem;
    @media only screen and (min-width: 768px) {
        grid-template-columns: auto;
        padding-left: 10rem;
    }
`

const StyledRating = styled(Rating)`
    padding-top: 1.7rem;
`

const Product = ({className}) => {return(
    <ProductContainer className={className}>
        <div>
        <BigImage src={BigProductImage} alt="" />
        <SmallImagesContainer>
            <img src={SmallProductImage1} alt="" />
            <img src={SmallProductImage2} alt="" />
            <img src={SmallProductImage3} alt="" />
            <img src={SmallProductImage4} alt="" />
            <LastImage src={SmallProductImage5} alt="" />
        </SmallImagesContainer>
        </div>
        
        <div>
            <TagContainer>
            <Tag>Popular</Tag>
            <StyledButton><Hearth icon={ regularHeart } size="2x" /></StyledButton>
            </TagContainer>
            <ProductName>Black Valentino <br /> dress with tulle</ProductName>
            <ReviewContainer>
            <StyledRating filledStars={3} />
            <NumberReviews>123 reviews</NumberReviews>
            </ReviewContainer>
            <InfoButtonsContainer>
                <PrimaryInfoButton>Info</PrimaryInfoButton>
                <SeconderyInfoButton>Brand</SeconderyInfoButton>
                <SeconderyInfoButton>Delivery</SeconderyInfoButton>
            </InfoButtonsContainer>
            <hr />
            <InfoText>
            Dress with tulle and collar Peter Pan from REDValentino <br />
(Red Valentino). Peter Pan collar, tulle panels, sleeveless model, <br />
concealed back zipper and pleated skirt. Black colour.
            </InfoText>
            <SizeAndColorContainer>
                <SizeContainer>
                <SizeTextContainer>
                    <SizeTextBlack>Size</SizeTextBlack>
                    <SizeTextPink>Size Guide</SizeTextPink>
                </SizeTextContainer>
                <SizeButtonsContainer>
                    <SecondarySizeButtons>XS</SecondarySizeButtons>
                    <PrimarySizeButtons>S</PrimarySizeButtons>
                    <SecondarySizeButtons>M</SecondarySizeButtons>
                </SizeButtonsContainer>
                </SizeContainer>
                <ColorContainer>
                <ColorText>Color</ColorText>
                <ColorBoxContainer>
                <ColorBoxHighlighter><PrimaryColorBox /></ColorBoxHighlighter>
                <SingleColorBoxContainer><SecondaryColorBox /></SingleColorBoxContainer>
                <SingleColorBoxContainer><ThirdColorBox /></SingleColorBoxContainer>
                </ColorBoxContainer>
                </ColorContainer>
            </SizeAndColorContainer>
            <CostContainer>
                <CostText>$1315</CostText>
                <PrimaryButton>Shop Now</PrimaryButton>
                <Popup trigger=
                {<SecondaryButton>Add to cart</SecondaryButton>} 
                modal nested>
                {
                    close => (
                        <ModalContainer>
                            <ModalNavigationContainer>
                                <ActiveModalNavigationButton>Cart</ActiveModalNavigationButton>
                                <InactiveModalNavigationButton>Checkout</InactiveModalNavigationButton>
                                <InactiveModalNavigationButton>Shipping</InactiveModalNavigationButton>
                                <InactiveModalNavigationButton>Done</InactiveModalNavigationButton>
                            </ModalNavigationContainer>
                            <div>
                                <CartItem image={Image1} name={"Gucci Leather belt"} HasBlue={true} HasGold={true} size={"70 cm"} prize={"32"} />
                                <CartItem image={Image2} name={"Fendi D-frame \n gold-tone sunglasses"} HasBlue={true} HasGold={false} size={"Height: 6 cm / 2.3 in. Width: 15 cm / 5.9 in."} prize={"26"} />
                            </div>
                            <ButtonContainer>
                                <SecondaryButton onClick=
                                    {() => close()}>
                                        To Shop
                                </SecondaryButton>
                                <PrimaryButton>Continue</PrimaryButton>
                            </ButtonContainer>
                        </ModalContainer>
                    )
                }
            </Popup>
            </CostContainer>
        </div>
    </ProductContainer>)
}

export default Product