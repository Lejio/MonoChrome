"use client";
import Spline from '@splinetool/react-spline';

import { NavMenu } from "./NavMenu";
export default function Home() {
  return (
    <main>
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.5.7/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/f9G449DB3aYKi1AJ/scene.splinecode"></spline-viewer> */}
      <NavMenu />
      <Spline
        scene="https://prod.spline.design/NqBahw-SCQOZYJfG/scene.splinecode" 
      />
    </main>
  );
}
