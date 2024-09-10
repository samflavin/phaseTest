// type TracklistProps = {
//   duration: number;
//   setTime: (duration: number) => void;
//   trackPercentage: number;
//   setTrackPercentage: (trackPercentage: number) => void;
//   keyframePercentage: number
//   setKeyframePercentage: (keyframePercentage: number) => void;

// };

export const TrackList = () => {
  // TODO: implement scroll sync with `KeyframeList`


  // const handleMasterScroll = (e) => {
  //   let slave = e.target.parentNode.querySelector(".slave");
  //   let master = e.target;
  //   let height = master.scrollHeight - master.clientHeight;
  //   let percentage = (master.scrollTop / height) * 100;
  //   let slaveHeight = slave.scrollHeight - slave.clientHeight;
  //   let newSlavePosition = Math.ceil((master.scrollTop / height) * slaveHeight);
  //   setMasterPercentage(percentage);
  //   slave.scroll({
  //     top: newSlavePosition
  //   });
  // };

  return (
    <div
      className="grid grid-flow-row auto-rows-[40px]
      border-r border-solid border-r-gray-700 
      overflow-auto"
      data-testid="track-list"
    >
      <div className="p-2">
        <div>Track A</div>
      </div>
      <div className="p-2">
        <div>Track B</div>
      </div>
      <div className="p-2">
        <div>Track C</div>
      </div>
      <div className="p-2">
        <div>Track D</div>
      </div>
      <div className="p-2">
        <div>Track E</div>
      </div>
      <div className="p-2">
        <div>Track F </div>
      </div>
      <div className="p-2">
        <div>Track G</div>
      </div>
      <div className="p-2">
        <div>Track H</div>
      </div>
      <div className="p-2">
        <div>Track I </div>
      </div>
      <div className="p-2">
        <div>Track J</div>
      </div>
    </div>
  );
};
