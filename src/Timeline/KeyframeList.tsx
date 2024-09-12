import { Segment } from "./Segment";

type KeyframeProps = {
  duration: number;
  // trackPercentage: number;
  // setTrackPercentage: (trackPercentage: number) => void;
  // keyframePercentage: number
  // setKeyframePercentage: (keyframePercentage: number) => void;
};
export const KeyframeList = ({ duration}: KeyframeProps) => {
  // TODO: implement scroll sync with `Ruler` and `TrackList`

  return (
    <div className="px-4 min-w-0 " data-testid="keyframe-list"
    style={{ overflowX: 'scroll' }}
    >
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
      <Segment duration={duration} />
    </div>
  );
};
