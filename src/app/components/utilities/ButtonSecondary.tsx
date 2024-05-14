import "../../globals.css";
import SearchIcon from "../icons/SearchIcon";

export default function ButtonSecondary() {
  return (
    <button>
      <div className="auto-added-frame-button pb-1">
        <div className="state-layer">
          <span className="label-text">جست و جو</span>
          <SearchIcon />
        </div>
      </div>
    </button>
  );
}
