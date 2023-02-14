import React, { useState, useRef, useEffect } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { natural, } from '../data';
import { CardBlock, EndMessage, MashaGame, MiniMashaImg, Title } from '../styled';
import Image from './image';

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Nature = () => {

  const [images, setImages] = useState([]);
  const [left, setLeft] = useState([0, 0]);
  const [right, setRight] = useState([0, 0])
  const [count, setCount] = useState(0);

  const okColumnRef = useRef(null);
  const wrongColumnRef = useRef(null);

  useEffect(() => {

    setImages(shuffle(natural));

    const rectok = okColumnRef?.current.getBoundingClientRect();
    setLeft([rectok.x, rectok.x + rectok.width])

    const rectwrong = wrongColumnRef?.current.getBoundingClientRect();
    setRight([rectwrong.x, rectwrong.x + rectwrong.width])
  }, [])

  const counter = () => {
    setCount(count + 1);
  }

  return (
    <CardBlock style={{ minHeight: '100vh' }}>
      <Title style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto' }}>
        Природу я люблю, природу берегу!
      </Title>
      <Card style={{ width: '100%', height: '85vh', background: '#fac5f1d5' }}>
        <CardBody style={{ paddingBottom: '5px' }}>
          {natural.length === count
            ? < React.Fragment>
              <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
                <img src='../photos/orig.gif' width='50%' />
              </div>
              <EndMessage>
                Молодец!
              </EndMessage>
              <MiniMashaImg src='../photos/miniMasha.png' />
            </React.Fragment>
            : <Col xs='12' style={{ height: '100%' }}>
              <Row style={{ height: '100%' }}>

                <Col xs='3' style={{ borderRight: '2px solid' }}>
                  <Row style={{ height: '100%', position: 'relative' }} className='align-items-end'>
                    <div ref={okColumnRef} style={{ position: 'absolute', height: '100%', width: '100%' }} />
                    <MashaGame src='../photos/mashaOk.png'></MashaGame>
                  </Row>
                </Col>

                <Col xs='6' >
                  <Row
                    style={{ height: '100%' }}
                    className='justify-content-center align-items-end'>

                    {images.map((item, index) => {
                      return (
                        <Image
                          key={`Image${index}`}
                          src={item.src}
                          flag={item.flag}
                          left={left}
                          right={right}
                          setCount={counter} />
                      )
                    })}
                  </Row>
                </Col>

                <Col xs='3' style={{ borderLeft: '2px solid' }}>
                  <Row style={{ height: '100%', position: 'relative' }} className='justify-content-end align-items-end'>
                    <div ref={wrongColumnRef} style={{ position: 'absolute', height: '100%', width: '100%' }} />
                    <MashaGame src='../photos/mashaWrong.png'></MashaGame>
                  </Row>
                </Col>

              </Row>
            </Col>}

        </CardBody>
      </Card>
    </CardBlock>
  )
}

export default Nature