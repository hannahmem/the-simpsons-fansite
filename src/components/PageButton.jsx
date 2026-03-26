function PageButton({ handlePrevBtn, handleNextBtn, page, text1, text2 }) {
  return (
    <div className="page-button">
      <button onClick={() => handlePrevBtn()}>{text1}</button>
      <span>Page {page}</span>
      <button onClick={() => handleNextBtn()}>{text2}</button>
    </div>
  );
}

export default PageButton;
