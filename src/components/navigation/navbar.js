import React from "react"
import styled from "styled-components"

const StyledList = styled.ul`
    overflow-x: hidden;
    padding: 0;
    list-style-type: none;
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    gap: 10rem;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: #1B2437;
    line-height: 3.26rem;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 2.4rem;
`

const NavBar = () => {
    return(<>
    <StyledList>
        <li><StyledLink href="#">Home</StyledLink></li>
        <li><StyledLink href="#">Shop</StyledLink></li>
        <li><StyledLink href="#">Blog</StyledLink></li>
        <li><StyledLink href="#">Contact</StyledLink></li>
    </StyledList>
    </>)
}

export default NavBar