import { useState } from "react";

import { api } from "../services/api";

import "./home.css";
import "../global.css";

import Meulink from "../components/meulink";
import Modal from "../components/modal";
import { saveLink } from "../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
      saveLink("@encurtaLink", response.data);
      setLink("");
    } catch {
      alert("Ops! Parece que algo deu errado!");
      setLink("");
    }
  }

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src="/logo1.png" alt="logo" />
        <h1>Encurtador</h1>
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Cole seu link aqui"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={handleShortLink}>Gerar link</button>
      </div>

      <Meulink />
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
