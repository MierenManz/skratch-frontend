import { WindowState } from "../../state";

interface NavBarProps {
  setWindow(state: WindowState): void;
  selectedWindow: WindowState;
}

export default function Navbar({ selectedWindow, setWindow }: NavBarProps) {
  return (
    <ul
      className="nav nav-tabs bg-dark border-bottom border-light-subtle text-light"
      data-bs-theme="dark"
    >
      <li className="nav-item">
        <a
          href="#"
          className={`nav-link text-light ${selectedWindow === WindowState.Code ? "active" : ""}`}
          onClick={() => setWindow(WindowState.Code)}
        >
          Code
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className={`nav-link text-light ${selectedWindow === WindowState.Sprite ? "active" : ""}`}
          onClick={() => setWindow(WindowState.Sprite)}
        >
          Sprites
        </a>
      </li>
    </ul>
  );
}
