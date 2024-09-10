import  { useState } from "react";

type RulerProps = {
  duration: number;
  setTime: (duration: number) => void;


};



export const Ruler = ({duration, setTime}: RulerProps) => {
  // TODO: implement mousedown and mousemove to update time and Playhead position

  const [mouseDown, setMouseDown] = useState(false);

  const handleDrag =
    (e: any) => {
      if(!mouseDown) {      
        return
      }
      e.preventDefault()
      setTime(e.clientX - 316)  
    
  }


  return (
  
    <div
      className="px-4 py-2 min-w-0 
      border-b border-solid border-gray-700 
      overflow-x-auto overflow-y-hidden"
      data-testid="ruler" 

    >
      <div className={`h-6 rounded-md bg-white/25`}
            style={{width:  `${duration}px`}}
            onMouseUp={() => {  
              setMouseDown(false)}}
            onMouseDown={()=>{
              setMouseDown(true)}}
            onMouseMove={handleDrag}
             onMouseLeave={()=>{
              setMouseDown(false)}}

      ></div>
    </div>
  );
};
