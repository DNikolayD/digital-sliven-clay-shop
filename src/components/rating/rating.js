import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styled from "styled-components"

const FilledStar = styled(FontAwesomeIcon)`
    color: #F4A2B6;
`

const EmptyStar = styled(FontAwesomeIcon)`
    color: #C7C7CC;
`

const StarContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
`

const Rating = ({filledStars, className, changeStars, getStars}) => {

    const [starsToFill, setStarsToFill] = new useState(filledStars)
    const handleFilledClick = (e, index) => {
        console.log(index+1)
        setStarsToFill(() => (index+1))
        getStars(index+1)
    }
    const handleEmptyClick = (e, index) => {
        console.log(index+1)
        setStarsToFill(() => (starsToFill+index+1))
        getStars(setStarsToFill+index+1)
    }
    const filledElements = [...Array(starsToFill).keys()]
    const notFilledElements = [...Array(5-starsToFill).keys()]
    return(
        <StarContainer className={className}>
        {filledElements.map((index) => (
   changeStars ?  <div onClick={(event) => handleFilledClick(event ,index)} key={index}><FilledStar icon={faStar} size="2x"  /></div> : <FilledStar key={index} icon={faStar} size="2x" /> 
   ))}
{console.log(changeStars)}
{notFilledElements.map((index) => (
   changeStars ?  <div onClick={(event) => handleEmptyClick(event ,index)} key={index}><EmptyStar icon={faStar} size="2x"  /></div> : <EmptyStar key={index} icon={faStar} size="2x" /> 
))}
        
        </StarContainer>
    )
}

export default Rating