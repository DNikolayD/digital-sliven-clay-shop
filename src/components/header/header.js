import NavBar from '../navigation/navbar'
import React from "react"
import styled from "styled-components"
import Logo from "../logo/logo"
import SocialMedia from '../socail media/social-media'
import ShoppingGrid from '../shopping grid/shopping-grid'


const StyledLogo = styled(Logo)`
    display: inline-grid;
    grid-template-columns: 5% 95%;
    padding-left: 2.5rem;
`

const StyledHeaderLine = styled.div`
    min-width: 100vw;
    display: inline-grid;
    grid-template-columns: 40% 55% 5%;
    @media only screen and (min-width: 768px) {
        grid-template-columns: auto;
        padding-left: 30rem;
    }
`

const StyledSocialMedia = styled(SocialMedia)`
    display: inline-grid;
    align-items: center;
    width: 100%;
    grid-template-columns: 10% 10% 80%;
`

const StyledShoppingGrid = styled(ShoppingGrid)`
    display: inline-grid;
    padding-top: 2rem;
    grid-template-columns: auto auto;
    @media only screen and (min-width: 768px) {
        grid-template-columns: 5% 95%;
        padding-left: 5rem;
    }
`



const Header = () => {
    return(<>
    <StyledHeaderLine>
    <StyledLogo />
    <StyledSocialMedia />
    <StyledShoppingGrid />
    </StyledHeaderLine>
    
    <NavBar></NavBar>
    </>)
}

export default  Header