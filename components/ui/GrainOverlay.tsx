interface GrainOverlayProps {
  opacity?: number;
  blendMode?: string;
  className?: string;
}

export default function GrainOverlay({
  opacity = 0.07,
  blendMode = "overlay",
  className = "",
}: GrainOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        filter: "url(#grain-filter)",
        mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"],
        opacity,
      }}
    />
  );
}
