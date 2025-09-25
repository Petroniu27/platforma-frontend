import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PreviousPageButton.css'; // asigură-te că acest fișier există în același folder

export default function PreviousPageButton() {
  const navigate = useNavigate();

  function handlePrevious() {
    navigate(-1);
  }

  return (
    <button
      className="previous-page-button"
      onClick={handlePrevious}
      aria-label="Go to previous page"
    >
      ← Previous Page
    </button>
  );
}
