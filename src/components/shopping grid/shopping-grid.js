import styled from "styled-components"
import ShoppingBag from "./shopping-bag.png"
import Search from "./search.png"

const StyledShoppingBag = styled.img`
    width: 2rem;
    height: 2.4rem;
`

const StyledSearch = styled.img`
    width: 2rem;
    height: 2.4rem;
`

const ShoppingGrid = ({className}) => {
    return(<div className={className}>
        <StyledSearch src={Search} alt="" />
        <StyledShoppingBag src={ShoppingBag} alt="" />
    </div>)
}

export default ShoppingGrid