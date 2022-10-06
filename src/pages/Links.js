import { useState, useEffect } from "react";

import "../global.css";
import "./links.css";

import { FiArrowLeft, FiTrash, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { deleteLink, getSavedLinks } from "../services/storeLinks";
import Modal from "../components/modal";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getSavedLinks("@encurtaLink");
      setMyLinks(result);
    }
    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);
    setMyLinks(result);
  }

  return (
    <div className="container">
      <div className="header">
        <Link to={"/"}>
          <FiArrowLeft size={38} color={"#FFF"} />
        </Link>
        <h1>Histórico</h1>
      </div>

      {myLinks.map((link) => (
        <div className="links-container" key={link.id}>
          <button className="btn-link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color={"#FFF"} />
            {link.long_url}
          </button>
          <button className="btn-trash" onClick={() => handleDelete(link.id)}>
            <FiTrash size={20} color={"#FFF"} />
          </button>
        </div>
      ))}

      {showModal && (
        <Modal closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
