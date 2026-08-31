import "./skeleton.css";

const Skeleton = ({ width = "100%", height = "1em", radius = 4, style, className = "" }) => (
  <span
    className={`skeleton ${className}`}
    style={{ width, height, borderRadius: radius, ...style }}
  />
);

export default Skeleton;
