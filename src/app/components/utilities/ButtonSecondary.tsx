import "../../globals.css";
import SearchIcon from "../icons/SearchIcon";

export default function ButtonSecondary() {
  return (
    <button>
      <div className="auto-added-frame-button">
        <div className="state-layer">
          <div className="label-text">جست و جو</div>
          <SearchIcon />
        </div>
      </div>
    </button>
  );
}
