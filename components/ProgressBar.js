'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const ProvidersProgress = ({ children }) => {
  return (
    <>
      <Next13ProgressBar height="3px" color="#BD2777" showOnShallow />
      {children}
    </>
  );
};

export default ProvidersProgress;