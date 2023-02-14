import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border: ${props => (props.active) ? '7px solid green' : 'none'};
    border-radius: 15px;
    @media(max-width: 1440px){
    width: 100px;
    height: 100px;
  }
`

const Image = ({ src, flag, left, right, count, setCount }) => {

  const [disabled, setDisabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleDragStop = (data) => {
    const rect = data?.node?.getBoundingClientRect();

    if (flag && rect.x >= left[0] && rect.x <= left[1]) {
      setActive(true);
      setCount();
      setDisabled(true);
    } else {

      if (!flag && rect.x >= right[0] && rect.x <= right[1]) {
        setActive(true);
        setCount();
        setDisabled(true);
      } else {
        setDisabled(false);
        setPosition({ x: 0, y: 0 })
      }
    }
  }

  const handleDrag = (data, e) => {
    setPosition({ x: data.x, y: data.y })
  }


  return (
    <Draggable
      position={position}
      disabled={disabled}
      onDrag={(e, data) => {
        handleDrag(data, e)
      }}
      onStop={(e, data) => {
        handleDragStop(data);
      }}>
      <div
        style={{ display: 'flex', width: 'auto', cursor: 'pointer' }}>
        <StyledImage active={active} flag={flag} src={src} />
      </div>
    </Draggable>
  )
}

export default Image