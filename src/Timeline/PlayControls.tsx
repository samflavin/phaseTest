import React, { useState } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};

export const PlayControls = ({ time, setTime }: PlayControlsProps) => {
  // TODO: implement time <= maxTime

  const [userInput, setUserInput] = useState(time);

  console.log('userInput', userInput)
  const onTimeChange = 
    (e: React.ChangeEvent<HTMLInputElement>) => {

const inputString = e.target.value.replace(/^0+/, '')

      if(inputString){
        setUserInput(parseInt(inputString))
      }
  
    };

  const handleKeyDown =
    (e: any) => {
      //console.log(e.key)
      if(e.key === 'Enter'){
        setTime(Number(userInput));
    
    }
    if( e.key === 'ArrowUp' || e.key === 'ArrowDown' ) {
      e.target.select()
    }
    if( e.key === 'Escape') {
      setUserInput(time)
      setTime(time)
    }
    if(e.key === '-') {
      setUserInput(0)
    }
 
  }

  const handleClick =
    (e: any) => {
      e.target.select()
        if(e.target.value && Number(e.target.value) !== time  ) {
          setTime(Number(userInput));
        }
  }

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => e.target.select()
  
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    if(Number(e.target.value) !== time){
      setTime(userInput)
    }
  }




  return (
    <div
      className="flex items-center justify-between border-b border-r border-solid border-gray-700 
 px-2"
      data-testid="play-controls"
    >
      <fieldset className="flex gap-1">
        Current
        <input
          className="bg-gray-700 px-1 rounded"
          type="number"
          data-testid="time"
          min={0}
          max={2000}
          step={10}
          value={userInput}
          onChange={onTimeChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </fieldset>
      -
      <fieldset className="flex gap-1">
        <input
          className="bg-gray-700 px-1 rounded"
          type="number"
          data-testid="max-time"
          min={100}
          max={2000}
          step={10}
          defaultValue={2000}
        />
        Duration
      </fieldset>
    </div>
  );
};