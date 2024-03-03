import { useNavigate } from "react-router-dom";
export const Categories = () => {
  const navigate = useNavigate();
  const centerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
  };
  const handleCategoryClick = (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };
  return (
    <>
      <div className="container" style={{ marginBottom: "60px" }}>
        <h1 className="text-center">Discover more of what matters to you</h1>
        <br />
        <div className="row">
          <div className="text-center container" style={centerDiv}>
            <p
              className="btn  fw-regular rounded-pill"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              All
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              onClick={() => handleCategoryClick(1)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Technology
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              onClick={() => handleCategoryClick(2)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Business
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              onClick={() => handleCategoryClick(3)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Education
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              onClick={() => handleCategoryClick(4)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Sports
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              onClick={() => handleCategoryClick(5)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Politics
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              onClick={() => handleCategoryClick(6)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Trades
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
