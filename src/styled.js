import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Text = styled.div`
  display: flex;
  width: auto;
  font-size: 45px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
`

export const Title = styled.div`
  display: flex;
  text-shadow: 4px 4px black;
  color: white;
  width: auto;
  font-size: 60px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  text-align: center;
`

export const StyledImg = styled.img`
  width: 440px;
  height: 290px;
  opacity: ${props => props.disabled ? 0.4 : 1};
  transition-duration: 0.5s;
  transition-delay: 0ms;
  border: ${props => props.selected ? '4px solid #e37bd2' : '0px solid #e37bd2'} ;
  border-radius: 15px;
  cursor: ${props => props.disabled ? 'auto' : 'pointer'};
  :hover{
    transform: ${props => props.disabled ? 'none' : 'scale(1.05)'};
  }
  @media(max-width: 1440px){
    width: 352px;
    height: 232px;
  }
  @media(max-width: 1200px){
    width: 282px;
    height: 186px;
  }
`

export const EndMessage = styled.div`
  font-size: 70px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  position: fixed;
  right: 30px;
  bottom: 300px;
  height: auto;
  color: white;
  text-shadow: 4px 4px black;
`

export const MiniMashaImg = styled.img`
  position: fixed;
  right: 0px;
  bottom: 0;
  width: 300px;
  height: auto;
  @media(max-width: 1440px){
    width: 240px;
  }
  @media(max-width: 1200px){
    width: 192px;
  }
`

export const MashaImg = styled.img`
  position: fixed;
  right: 150px;
  bottom: 0;
  width: 300px;
  height: auto;
  @media(max-width: 1440px){
    width: 240px;
    right: 90px;
  }
  @media(max-width: 1200px){
    width: 192px;
    right: 75px;
  }
`

export const MashaOkWrong = styled.img`
  position: fixed;
  right: 0px;
  bottom: 0;
  width: 400px;
  height: auto;
  @media(max-width: 1440px){
    width: 350px;
    right: 40px;
  }
  @media(max-width: 1200px){
    width: 300px;
    right: 35px;
  }
`

export const MashaGame = styled.img`
  height: 300px;
  width: auto;
  @media(max-width: 1440px){
    height: 250px;
  }
  @media(max-width: 1120px){
    height: 200px;
  }
`

export const MashaMain = styled.img`
  position: fixed;
  right: -10px;
  bottom: 0;
  width: 650px;
  height: auto;
  @media(max-width: 1600px){
    width: 550px;
  }
  @media(max-width: 1440px){
    width: 450px;
  }
  @media(max-width: 1200px){
    width: 350px;
  }
`

export const AnswerImg = styled.img`
  position: fixed;
  right: 15px;
  bottom: 250px;
  width: 250px;
  height: auto;
  @media(max-width: 1440px){
    width: 200px;
    right: 0;
  }
  @media(max-width: 1200px){
    width: 160px;
  }
`

export const StyledButton = styled.button`
  font-size: 40px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  background-color: white;
  color: black;
  width: 100%;
  border: none;
  margin-bottom: 35px;
  border-radius: 25px;
  :hover{
    background-color: lightgreen;
    color: black;
  }
  @media(max-width: 1440px){
    font-size: 30px;
  }
  @media(max-width: 1200px){
    font-size: 20px;
  }
`

export const Autor = styled.div`
  padding: 0 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  font-size: 18px;
  background-color: #878787b2;
`

export const MainMenuButton = styled.img`
  padding: 0 10px;
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  width: 100px;
  height: auto;
  z-index: 999999;
`

export const MonthName = styled.div`
display: flex;
color: #0c05a0;
width: auto;
font-size: 30px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: bold;
align-items: center;
justify-content: center;
`

export const MonthImg = styled.img`
  max-height: 270px;
`