import Logo from "../logo/logo"
import NavBar from "../navigation/navbar"
import FooterColumn from "../footer columns/footer-column"
import styled from "styled-components"
import SocialMedia from "../socail media/social-media"

const StyledFooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10rem;
`

const StyledLogo = styled(Logo)`
    display: inline-grid;
    grid-template-columns: 5% 95%;
    padding-left: 2.5rem;
`

const StyledParagraph = styled.p`
    padding-left: 2.5rem;
    font-size: 1.6rem;
    font-family: "Muli";
    line-height: 2.4rem;
    color: #8E8E93;
`

const StyledCopyrightContainer = styled.div`
    display: grid;
    grid-template-columns: 85% 15%;
    background-color: #EFEFF4;
    overflow: hidden;
    @media only screen and (min-width: 768px) {
        grid-template-columns: 60% 40%;
    }
    `

const StyledSocialMedia = styled(SocialMedia)`
    display: inline-grid;
    align-items: center;
    width: 100%;
    grid-template-columns: 10% 10% 10%;
    gap: 8rem;
`

const CopyrightParagraph = styled.p`
overflow: hidden;
    font-family: "Muli";
    font-size: 1.9rem;
    line-height: 1.9rem;
    letter-spacing: 0rem;
    text-align: left;
    padding-left:2.5rem;
    color: #8E8E93;
`

const Footer = ({className}) => {
    return(<div className={className}>
        <NavBar />
        <hr />
        <StyledFooterContainer>
        <div>
            <div><StyledLogo></StyledLogo><StyledParagraph>Fashion is a popular 
aesthetic <br /> expression at a particular time, place <br /> and in a specific context, especially in <br /> clothing, footwear, lifestyle, <br /> accessories, makeup.</StyledParagraph></div>
        </div>
        <FooterColumn>Hot links,Home,Blog,Shop,Contact</FooterColumn>
        <FooterColumn>More info,How it works,About us,Decline rules,Terms & Conditions</FooterColumn>
        <FooterColumn>Customer care,FAQ,Terms of use,Privacy Policy,Discount system</FooterColumn>
        </StyledFooterContainer>
        <StyledCopyrightContainer>
            <CopyrightParagraph>© Clay Shop all rights reserved</CopyrightParagraph>
            <StyledSocialMedia />
        </StyledCopyrightContainer>
        
    </div>)
}

export default Footer