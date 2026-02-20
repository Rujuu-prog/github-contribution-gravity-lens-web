import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GitHub Contribution Gravity Lens";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0533 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #a78bfa, #c084fc, #e879f9)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.2,
              textAlign: "center",
              padding: "0 40px",
            }}
          >
            GitHub Contribution
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #c084fc, #e879f9, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Gravity Lens
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#a1a1aa",
              marginTop: "16px",
              textAlign: "center",
              padding: "0 80px",
            }}
          >
            Visualize your GitHub contributions with gravitational lensing effects
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
