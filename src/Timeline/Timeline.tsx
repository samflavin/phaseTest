import { useState } from "react";
import { Playhead } from "./Playhead";
import { Ruler } from "./Ruler";
import { TrackList } from "./TrackList";
import { KeyframeList } from "./KeyframeList";
import { PlayControls } from "./PlayControls";

export const Timeline = () => {
  // FIXME: performance concerned
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [trackPercentage, setTrackPercentage] = useState(0);
  const [keyframePercentage, setKeyframePercentage] = useState(0);

  return (
    <div>
      <header>{time}</header>
    <div
      className="relative h-[300px] w-full grid grid-cols-[300px_1fr] grid-rows-[40px_1fr] 
    bg-gray-800 border-t-2 border-solid border-gray-700"
      data-testid="timeline"
    >
      
      <PlayControls time={time} setTime={setTime} duration={duration} setDuration={setDuration} />
      <Ruler  duration={duration} setTime={setTime} />
      <TrackList  trackPercentage={trackPercentage} setTrackPercentage={setTrackPercentage} keyframePercentage={keyframePercentage} setKeyframePercentage={setKeyframePercentage} />
      <KeyframeList duration={duration} trackPercentage={trackPercentage} setTrackPercentage={setTrackPercentage} keyframePercentage={keyframePercentage} setKeyframePercentage={setKeyframePercentage} />
      <Playhead time={time} />
    </div>
    </div>

  );
};
