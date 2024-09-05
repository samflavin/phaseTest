import React, { useCallback, useState } from "react";

type PlayControlsProps = {
  time: number;
  setTime: (time: number) => void;
};

export const PlayControls = ({ time, setTime }: PlayControlsProps) => {
  // TODO: implement time <= maxTime

  const [userInput, setUserInput] = useState(time);

  const onTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)
      setTime(userInput);
    },
    [setTime],
  );

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => e.target.select()

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>  setUserInput(Math.round(Number(e.target.value)) );



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
          onChange={handleUserInput}
          onBlur={onTimeChange}
          onFocus={handleFocus}
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
