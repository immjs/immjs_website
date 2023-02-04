import * as React from "react";

export const Preconnect: React.FC = function Preconnect() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" key="preconnect_googleapis" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" key="preconnect_gstatic" />
    </>
  );
}

export const Fonts: React.FC = function Preconnect() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" key="load_font_space_mono" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" key="load_font_dotgothic16" rel="stylesheet" />
    </>
  );
}
