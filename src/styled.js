import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Text = styled.div`
  transition: color 1s, background-color 1s;
  height: 50px;
  width: 300px;
  background-color: #0d6efd66;
  color: transparent;
  line-height: 50px;
  text-align: center;
  font-size: 45px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
  border-radius: 15px;
  :hover{
    background-color: transparent;
    color: black;
  }
`

export const Title = styled.div`
  display: flex;
  text-shadow: 2px 2px #f8f9fa;
  color: #212529;
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
  border: ${props => props.selected ? '4px solid #0d6efd' : '0px solid #0d6efd'} ;
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
    background-color: #00c0e7;
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
  width: 130px;
  height: auto;
  z-index: 999999;
`

export const MonthName = styled.div`
display: flex;
color: #212529;
width: auto;
font-size: 45px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: bold;
align-items: center;
justify-content: center;
text-shadow: 2px 2px #f8f9fa;
`

export const MonthImg = styled.img`
  max-height: 270px;
  border-radius: 45px;
`