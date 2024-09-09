type RulerProps = {

  duration: number;
  setDuration: (duration: number) => void;


};



export const Ruler = ({duration}: RulerProps) => {
  // TODO: implement mousedown and mousemove to update time and Playhead position
  console.log(duration)



  return (
    <div>
      {duration}
    <div
      className="px-4 py-2 min-w-0 
      border-b border-solid border-gray-700 
      overflow-x-auto overflow-y-hidden"
      data-testid="ruler"
    >
      <div className={`h-6 rounded-md bg-white/25`}
            style={{width:  `${duration}px`}}
      ></div>
    </div>
    </div>
  );
};
