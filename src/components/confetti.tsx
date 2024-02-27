'use client';
import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export const ConfettiComponents = () => {
  const { width, height } = useWindowSize();
  return <Confetti confettiSource={{x: 0, y: 1000, w: 2000, h:1000}} width={2000} height={2700} numberOfPieces={6000} initialVelocityY={300} run={true} recycle={false} className='stick top-40' />;
};
