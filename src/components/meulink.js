import { Link } from "react-router-dom";

import "./meulink.css";

export default function MeusLinks() {
  return (
    <div className="mlinks">
      <Link to={"/links"} className="btn-links">
        Meus links
      </Link>
    </div>
  );
}
