const BlockButton = ({ btnClass, onClick, children }) => {
  return (
    <>
      <div className="d-grid">
        <button className={`${btnClass} btn-block`} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default BlockButton;
