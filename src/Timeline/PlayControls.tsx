import React, { useCallback, useState } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};

export const PlayControls = ({ time, setTime }: PlayControlsProps) => {
  // TODO: implement time <= maxTime

  const [userInput, setUserInput] = useState(time);

  const onTimeChange = useCallback(
    (e:any) => {    
    setUserInput(e.target.value.replace(/^0+/, ''))
   if(e.nativeEvent.data == undefined || typeof(e.nativeEvent.data) !== 'string') {
    setTime(e.target.value.replace(/^0+/, ''))
   }

    },
    [setTime],
  );

 

  const handleKeydown = useCallback(
    (e:any) => {
      console.log('in key down', e.target.value)
      if (e.keyCode == 13 || e.keyCode == 38 || e.keyCode == 40  ) { 
        setTime(userInput)
      }
     
    },
    [setTime],
  );

   const handleBlur = useCallback(
    (e:any) => {  
      setTime(e.target.value)
     
    },
    [setTime],
  );

  // const handleSelect = useCallback(  
  //   (e: React.ChangeEvent<HTMLInputElement>) => {  

  //     console.log(' in select,', e.target.value)
  //      setUserInput(Number(e.target.value.replace(/^0+/, '')))
  //     setTime(userInput)
     
  //   },
  //   [setTime],
  // );

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => e.target.select()

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
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeydown}
      
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
          onFocus={handleFocus}
        />
        Duration
      </fieldset>
    </div>
  );
};
