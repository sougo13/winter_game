import React, { useState } from 'react';
import styled from 'styled-components';
import { shuffle } from '../App';

const Container = styled.div`
  display: flex;
  margin: 25px 0; 
  width: auto;
  opacity: ${props=>props.disable ? '0.5' : '1'};
`

const AnswersBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
  padding: 10px;
`

const Answer = styled.div`
  width: 80px;
  height: 80px;
  font-size: 45px;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  border: 3px solid green;
  border-radius: 15px;
  cursor: ${props=>props.disable ? 'auto' : 'pointer'};
  :hover{
    background-color: ${props=>props.disable ? 'auto' : 'lightgreen'};;
  }
`

export const StyledImg = styled.img`
  border-radius: 15px;
  width: 550px;
  height: 350px;
  @media(max-width: 1440px){
    width: 352px;
    height: 232px;
  }
  @media(max-width: 1200px){
    width: 282px;
    height: 186px;
  }
`

const arr = ['1', '2', '5'];


const GameItem = ({ src, count, handleAnswer }) => {

  const [disable, setDisable] = useState(false);

  const handleClick = (elem, count) => {
    if (!disable) {
      if (elem === count) {
        handleAnswer(true);
        setDisable(true);
      }
      else
        handleAnswer(false);
    }
  }

  return (
    <Container disable={disable}>
      <StyledImg src={src} />
      <AnswersBlock>
        {arr.map(elem => {
          return <Answer disable={disable} key={Answer + elem} onClick={() => handleClick(elem, count)}>{elem}</Answer>
        })}
      </AnswersBlock>
    </Container>
  )
}

export default GameItem