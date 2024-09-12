import  { useState, useEffect } from "react";

type RulerProps = {
  duration: number;
  setTime: (duration: number) => void;


};



export const Ruler = ({duration, setTime}: RulerProps) => {
  // TODO: implement mousedown and mousemove to update time and Playhead position

  
   const [mouseDown, setMouseDown] = useState(Boolean);


    useEffect(() => {
      const handleMouseUp = () => {
      setMouseDown(false)
      };

      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);

  function handleMove(e:any) {
    if(!mouseDown){
      return
    } else {
      setTime(e.clientX - 316) 
    }
  }
  

  return (
  
    <div
      className="px-4 py-2 min-w-0 
      border-b border-solid border-gray-700 
      overflow-x-auto overflow-y-hidden"
      data-testid="ruler" 
      style={{userSelect: 'none'}}

    >
      <div className={`ruler h-6 rounded-md bg-white/25`}
            style={{width:  `${duration}px`, userSelect: 'text'}}
             onMouseUp={() => { 
              setMouseDown(false)}}
             onMouseDown={()=>{
               setMouseDown(true)}}
              onMouseMove={(e) => { 
                handleMove(e)}}        

      ></div>
    </div>
  );
};
