import "./Loader.css";

// Generic spinner. Use for the homepage (bigger, with a label) and for
// single-item detail pages (small, inline). Grid/list pages use the
// skeleton components in ./Skeletons instead — see Skeletons/README below.
const Loader = ({ size = 56, fullPage = true, label }) => {
  const spinner = (
    <div className="spinnerWrap" role="status" aria-live="polite" aria-label={label || "Loading"}>
      <span className="spinner" style={{ width: size, height: size }} />
      {label && <p className="spinnerLabel">{label}</p>}
    </div>
  );

  if (!fullPage) return spinner;

  return <div className="loaderOverlay">{spinner}</div>;
};

export default Loader;
