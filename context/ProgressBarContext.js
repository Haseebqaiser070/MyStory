import React, { createContext, useState, useContext } from 'react';

// Create a context
const ProgressBarContext = createContext();

// Create a provider component
export const ProgressBarProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [timePassed, setTimePassed] = useState(0);

  const restartProgress = () => {
    setProgress(0);
    setTimePassed(0);
  };

  return (
    <ProgressBarContext.Provider value={{ progress, setProgress, timePassed, setTimePassed, restartProgress }}>
      {children}
    </ProgressBarContext.Provider>
  );
};

// Custom hook to use the ProgressBar context
export const useProgressBar = () => useContext(ProgressBarContext);
