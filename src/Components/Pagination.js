import "../styles.css";
const Pagination = ({ page, numberofPage, onClickFn }) => {
  return (
    <div style={{ width: "100%", height: "35px", position: "absolute" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          position: "relative",
          top: "20px"
        }}
      >
        {Array(numberofPage)
          .fill(0)
          .map((el, i) => {
            return (
              <div
                className={`dot ${page === i + 1 ? "active" : ""}`}
                key={i}
                onClick={() => onClickFn(i + 1)}
              >
                {i + 1}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
