import "../../globals.css";
import SearchIcon from "../icons/SearchIcon";

export default function ButtonSecondary() {
  return (
    <button>
      <div className="auto-added-frame-button">
        <div className="state-layer">
          <p className="label-text">جست و جو</p>
          <SearchIcon />
        </div>
      </div>
    </button>
  );
}
