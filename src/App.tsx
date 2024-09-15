import { useState } from "react";
import { WindowState } from "./state";
import Navbar from "./components/layout/navbar";
import CodeWindow from "./components/window/code_editor";
import SpriteWindow from "./components/window/sprite_editor";

import "./App.css";

export default function App() {
  const [selectedWindow, setWindow] = useState(WindowState.Code);

  let window;
  switch (selectedWindow) {
    case WindowState.Code:
      window = <CodeWindow />;
      break;
    case WindowState.Sprite:
      window = <SpriteWindow />;
      break;
  }

  return (
    <>
      <Navbar selectedWindow={selectedWindow} setWindow={setWindow} />
      <div className="d-flex flex-row">{window}</div>
    </>
  );
}
