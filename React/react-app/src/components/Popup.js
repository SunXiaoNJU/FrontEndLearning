import React, { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (event) => {
    if (event.target.id === "popup-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {!isOpen && <button onClick={togglePopup}>显示弹窗</button>}

      {isOpen && (
        <div id="popup-overlay" onClick={handleOverlayClick}>
          <h1>这是一个弹窗</h1>
          <p>点击空白处关闭弹窗</p>
          <input placeholder="your name" />
          <button>确定</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
