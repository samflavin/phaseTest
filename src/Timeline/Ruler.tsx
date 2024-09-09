type RulerProps = {
  duration: number;
  setTime: (duration: number) => void;


};



export const Ruler = ({duration, setTime}: RulerProps) => {
  // TODO: implement mousedown and mousemove to update time and Playhead position

  const handleDrag =
    (e: any) => {
      // console.log(e.movementX)
      // console.log(e)
      setTime(e.clientX - 316)
   
  }

  return (
  
    <div
      className="draggable-container px-4 py-2 min-w-0 
      border-b border-solid border-gray-700 
      overflow-x-auto overflow-y-hidden"
      data-testid="ruler"
      //onClick={handleClick}
      //onMouseDown={handleMouseDown}
      //onMouseMoveCapture={handleDrag}
      onMouseDownCapture={handleDrag}
    >
      <div className={`h-6 rounded-md bg-white/25`}
            style={{width:  `${duration}px`}}
      ></div>
    </div>
  );
};
