import { useState } from "react"
import Rating from "../rating/rating"
import styled from "styled-components"

const SecondaryButton = styled.input`
    background-color: white;
    font-family: "Muli";
    font-size: 2rem;
    line-height: 2.3rem;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 1rem;
    color: #EDA3B5;
    border-color: #EDA3B5;
    width: 16rem;
height: 5.9614rem;
flex-shrink: 0;
float:left;

`

const ReviewTitle = styled.h1`
  color: #1B2437;
font-family: "Open Sans";
font-size: 3.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.04rem;
`

const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: 15%;
`

const ReviewFormContainer = styled.div`
  margin-top: 3.9rem;
  margin-bottom: 5.2rem;
  margin-left: 11.3rem;
  margin-right: 11.3rem;
  padding-left: 2.5rem;
`

const ReviewForm = styled.form`
  display: grid;
  grid-template-rows: 20% 40% 10%;
  gap: 5%;
  min-height: 60rem;
  padding-top: 2.5rem;
`

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 10%;
  min-height: 9.2543rem;
  
`

const InputContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 60%;
  gap: 0rem;
  width: 60.4rem;
min-height: 9.2543rem;
`

const MessageContainer = styled.div`
display: grid;
grid-template-rows: 10% 90%;
height: 18.6867rem;
flex-shrink: 0;
width: 100%;
`

const StyledLable = styled.label`
  color: #1B2437;
font-family: "Mulish";
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const StyledInput = styled.input`
  width: 50.4rem;
height: 5.0443rem;
flex-shrink: 0;
border-radius: 0.8rem;
border: 2px solid #E5E5EA;
::placeholder{
  color: #C7C7CC;
  font-family: "Mulish";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
`

const StyledTextArea = styled.textarea`
  width: 106.2rem;
height: 15.0182rem;
flex-shrink: 0;
border-radius: 0.8rem;
border: 2px solid #E5E5EA;
resize: none;
::placeholder{
  color: #C7C7CC;
font-family: "Mulish";
font-size: 1.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

const ReviewContainer = styled.div`
  width: 106.2rem;
height: 19.5rem;
flex-shrink: 0;
border-radius: 0.8rem;
background: #E5E5EA;
margin-top: 5rem;
margin-left: 15rem;
margin-right: 15rem;
`

const ReviewInfoContainer = styled.p`
  color: #8E8E93;
font-family: "Mulish";
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Message = styled.p`
color: #8E8E93;
font-family: "Mulish";
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: normal;`

let reviewId = 0



const Review = () => {
  const [reviews, setReviews] = useState([])

const [formData, setFormData] = useState({
  filledStars: 0,
  username: "",
  email: "",
  message: ""
});

const handleChange = (event) => {
  console.log(event)
  const { name, value } = event.target;
  setFormData(() => ({ ...formData, [name]: value }));
};

const handleStars = (stars) => {
  setFormData(() => ({ ...formData, filledStars: stars }));
}

const handleSubmit = (event) => {
  event.preventDefault();
  setReviews([...reviews, {id: reviewId++, filledStars: formData.filledStars, username: formData.username, email: formData.email, message: formData.message}])
  console.log(reviews)
};
  return(
<>
    <ReviewFormContainer>
    <ReviewTitle>Review</ReviewTitle>
    <RatingContainer>
    <Rating filledStars={formData.filledStars} changeStars = {true} getStars={handleStars} />
    </RatingContainer>
    <ReviewForm onSubmit={handleSubmit}>
      <InputsContainer>
      <InputContainer>
      <StyledLable>
        Name
      </StyledLable>
      <StyledInput type="text" name="username" placeholder="Type name..." value={formData.username} onChange={handleChange} />
      </InputContainer>
      <InputContainer>
      <StyledLable>
        Email
      </StyledLable>
      <StyledInput type="email" name="email" placeholder="Type email..." value={formData.email} onChange={handleChange} />
      </InputContainer>
      </InputsContainer>
      <MessageContainer>
      <StyledLable>
        Message:
      </StyledLable>
      <StyledTextArea type="text" name="message" placeholder="Type message..." value={formData.message} onChange={handleChange} />
      </MessageContainer>
      <SecondaryButton type="submit" value="Add Review" />
    </ReviewForm>
    </ReviewFormContainer>
    {reviews.map(review => (
      <ReviewContainer key={review.id}>
        <ReviewInfoContainer>
        {review.username} {"<"}{review.email}{">"}
        </ReviewInfoContainer>
        <RatingContainer>
        <Rating filledStars={review.filledStars} />
        </RatingContainer>
        <Message>
          {review.message}
        </Message>
      </ReviewContainer>
    ))}
    </>
)   
}
export default Review