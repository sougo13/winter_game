import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { animalsCount1 } from '../data'
import { CardBlock, EndMessage, MashaOkWrong, MiniMashaImg, Title } from '../styled'
import GameItem from './gameItem'

const AnimalsCount = () => {

  const [masha, setMasha] = useState(false);
  const [answerType, setAnswerType] = useState(0);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleAnswer = (result) => {
    drawMasha();
    if (result) {
      setAnswerType(1);
      setCount(count + 1);
    } else {
      setAnswerType(0);
    }
  }

  const drawMasha = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setMasha(true);
    const tmp = setTimeout(() => {
      setMasha(false);
    }, 5000)
    setTimer(tmp);
  }

  return (
    <CardBlock style={{ minHeight: '100vh' }}>
      <Title style={{ width: 'fit-content', margin: 'auto' }}>
        Посчитай животных
      </Title>
      <Card style={{ width: '100%', background: '#fac5f1d5' }}>
        <CardBody >
          {animalsCount1.length === count
            ? < React.Fragment>
              <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
                <img src='../photos/orig.gif' width='50%' />
              </div>
              <EndMessage>
                Молодец!
              </EndMessage>
              <MiniMashaImg src='../photos/miniMasha.png' />
            </React.Fragment>
            : <React.Fragment>
              {false
                ? < React.Fragment>
                  <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
                    <img src='../photos/orig.gif' width='50%' />
                  </div>
                  <EndMessage>
                    Молодец!
                  </EndMessage>
                  <MiniMashaImg src='../photos/miniMasha.png' />
                </React.Fragment>
                : <Col sm='12'>
                  {animalsCount1.map(animal => {
                    return (
                      <Row key={animal.id} style={{ borderBottom: '5px solid #a3849e' }} className='justify-content-center'>
                        <GameItem handleAnswer={handleAnswer} src={animal.src} count={animal.count} />
                      </Row>
                    )
                  })}
                </Col>
              }
              {masha
                ? answerType
                  ? <MashaOkWrong src='../photos/mashaOk.png' />
                  : <MashaOkWrong src='../photos/mashaWrong.png' />
                : <MiniMashaImg src='../photos/miniMasha.png' />
              }
            </React.Fragment>
          }
        </CardBody>
      </Card>
    </CardBlock>
  )
}

export default AnimalsCount