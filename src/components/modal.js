import '../components-style/modal.css';

import {FiClipboard, FiX} from 'react-icons/fi';


export default function Modal ({closeModal, content}) {

  async function copyLink () {
    await navigator.clipboard.writeText(content.link)
  }


  return (
    <div className='modal-container'>
      <h2>Link encurtado</h2>
      <button className='btn-modal-link' onClick={copyLink}>
        {content.link}
        <FiClipboard/>
      </button>
      <button className='close-w' onClick={closeModal}>
        <FiX/>
      </button>
    </div>
  )
}