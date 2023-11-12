import styled from "styled-components"

const StyledParagraph = styled.p`
    font-size: 1.6rem;
    font-family: "Muli";
    line-height: 1.87rem;
    color: #8E8E93;
`

const FooterColumn = ({className, children}) => {const elements = children.split(",")
    return<div className={className}>
    <h1>{elements[0]}</h1>
    {console.log(elements.shift())}
    {elements.map(x => (
        <StyledParagraph key={x}>{x}</StyledParagraph>
    ))}
</div>}

export default FooterColumn