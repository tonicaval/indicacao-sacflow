'use client';
import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export const ConfettiComponents = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={2000} height={2700} className='stick top-40' />;
};
