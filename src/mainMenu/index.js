import React, { useContext } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { GameContext } from '../App';
import { CardBlock, MashaMain, StyledButton, Title, MonthName, MonthImg } from '../styled'

const Menu = () => {

  const [context, setContext] = useContext(GameContext);

  return (
      <CardBlock style={{minHeight: '100vh'}}>
        <Title style={{ marginRight: '75px' }} className='align-self-center'>
        Говорим о зиме - В лесу с Машей
        </Title>
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
          <Col xs='3'>
            <MonthName>Декабрь</MonthName>
            <Row><MonthImg src='../photos/dec.jpg'/></Row>
          </Col>
          <Col xs='3'>
          <MonthName>Январь</MonthName>
            <Row><MonthImg src='../photos/jan.jpg'/></Row>
          </Col>
          <Col xs='3'>
          <MonthName>Февраль</MonthName>
            <Row><MonthImg src='../photos/feb.jpg'/></Row>
          </Col>
          </div>
        <Card style={{ padding: '10px', margin: 'auto', right: '70px', background: '#fac5f1d5', width: 'fit-content' }}>
          <CardBody >
            <Col xs='12'>
              {/* <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 1 })}>Природу я люблю, природу берегу!</StyledButton>
              </Row> */}
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 2 })}>Кто, где живет?</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 3 })}>Чьи следы?</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 4 })}>Посчитай животных</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton style={{marginBottom: '0'}} onClick={() => setContext({ ...context, currentGameId: 5 })}>Детеныши диких животных</StyledButton>
              </Row>
            </Col>
          </CardBody>
        </Card>
        <MashaMain src='../photos/mainMasha.png' />
      </CardBlock>
  )
}

export default Menu