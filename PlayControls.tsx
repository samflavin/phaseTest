import React, { useState } from "react";
//useEffect

type PlayControlsProps = {
  time: number;
  duration: number;
  setTime: (time: number) => void;
  setDuration: (duration: number) => void;
};

export const PlayControls = ({ time, setTime, duration, setDuration}: PlayControlsProps) => {
  // TODO: implement time <= maxTime

  const [userInput, setUserInput] = useState(time);
  const [userDurationInput, setUserDurationInput] = useState(duration ? duration : 100);

  const onTimeChange = 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputString = e.target.value.replace(/^0+/, '')

      if(inputString){
        setUserInput(parseInt(inputString))
      } 
    };

    const roundToTen = () => {
      const roundedInput = Math.round(userInput/10)*10
      return roundedInput
    }

    // All of the duration inputs functionaliy is kinda sudo/ half done as I felt it was redundant work from the 
    //time input challenges and didnt find time to finish up.
    const checkTimeAgainstDuration = () => {
      if(userDurationInput < time) {
        setUserInput(userDurationInput)
        setTime(userDurationInput)
      }
    }

    const onDurationChange = 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputString = e.target.value.replace(/^0+/, '')
      if(parseInt(inputString) > 6000){       
        setDuration(6000)
        setUserDurationInput(6000)
      } else{
        if(inputString){
          setUserDurationInput(parseInt(inputString))
        }
        setDuration(parseInt(inputString))
      }  
      checkTimeAgainstDuration()
    };

  const handleKeyDown =
    (e: any) => {
      if(e.key === 'Enter'){
        let roundedInput = roundToTen()
        if(roundedInput > 2000 || roundedInput > duration ) {
          roundedInput = duration
        }
        setUserInput(roundedInput)
        setTime(Number(roundedInput));
        e.target.blur()
    }
    if( e.key === 'ArrowUp' || e.key === 'ArrowDown' ) {
      setTime(Number(userInput));
      e.target.select()

    }
    if( e.key === 'Escape') {
      setUserInput(time)
      setTime(time)
    }
    if(e.key === '-') {
      setUserInput(10)
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
      const roundedInput = roundToTen() 
      setUserInput(roundedInput)
      setTime(roundedInput)
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
          value={userDurationInput}
          min={100}
          max={6000}
          step={10}
          defaultValue={2000}
          onChange={onDurationChange}

        />
        Duration
      </fieldset>
    </div>
  );
};
