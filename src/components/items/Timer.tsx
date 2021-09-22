import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Timer: React.FC<{ seconds?: number }> = ({ seconds = 900 }) => {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    let time: number = seconds;

    const timer = setInterval(() => {
      let minutes: string | number = parseInt(`${time / 60}`, 10);
      let seconds: string | number = parseInt(`${time % 60}`, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      setTime(`00:${minutes}:${seconds}`);

      time--;

      if (time < 0) {
        time = 600;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Wrapper>{time}</Wrapper>;
};

const Wrapper = styled.span``;
