import Circle from "../../assets/icons/Circle.svg";
import Eraser from "../../assets/icons/Eraser.svg";
import Fill from "../../assets/icons/Fill.svg";
import Line from "../../assets/icons/Line.svg";
import Paintbrush from "../../assets/icons/Paintbrush.svg";
import Rectangle from "../../assets/icons/Rectangle.svg";
import DefaultSidebar from "../layout/sidebar";

function Editor() {
  return <div className="bg-dark w-100 text-light"></div>;
}

function Sidebar() {
  return (
    <DefaultSidebar>
      <div className="text-light text-center">
        <h3>Sprite Editor</h3>
        <div className="tool-grid">
          <div className="tool-icon">
            <img src={Paintbrush} />
            <p>Brush</p>
          </div>
          <div className="tool-icon">
            <img src={Eraser} />
            <p>Eraser</p>
          </div>
          <div className="tool-icon">
            <img src={Fill} />
            <p>Fill</p>
          </div>
          <div className="tool-icon">
            <img src={Line} />
            <p>Line</p>
          </div>
          <div className="tool-icon">
            <img src={Rectangle} />
            <p>Rectangle</p>
          </div>
          <div className="tool-icon">
            <img src={Circle} />
            <p>Circle</p>
          </div>
        </div>
      </div>
    </DefaultSidebar>
  );
}

export default function Window() {
  return (
    <>
      <Sidebar />
      <Editor />
    </>
  );
}
