import styled from "styled-components"
import FaceBookIcon from "./facebook-f.svg"
import InstagramIcon from "./instagram.svg"
import TwitterIcon from "./twitter.svg"

const StyledFacebook = styled.img`
    width: 2.87rem;
    height: 2.4rem;
`

const StyledInstagram = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`

const StyledTwitter = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`

const SocialMedia = ({className}) => {
    return(<div className={className}>
    <StyledInstagram src={InstagramIcon} alt="" />
    <StyledTwitter src={TwitterIcon} alt="" />
    <StyledFacebook src={FaceBookIcon} alt="" />
    </div>)
}

export default SocialMedia