import styled from 'styled-components'
import logo from './logo.svg'

const Image = styled.img`
    padding-top: 2.5rem;
`

const Title = styled.p`
    padding-left: 2rem;
    font-size: 2.4rem;
    font-family: 'Open Sans';
`

const Logo = ({className}) => {
    console.log(className)
    return(<div className={className}>
    <Image src={logo} alt="" />
    <Title>Clay Shop</Title>
    </div>
    
    )
}

export default Logo