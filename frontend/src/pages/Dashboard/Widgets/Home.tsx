import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="mt-5">Welcome, Name!</h1>
        <div className="d-flex gap-4">
          <div className="d-flex flex-column jistify-content-center">
            <h6>SERIES DE CONNEXIONS</h6>
            <div className="">
              <p className="fs-1">1</p>
            </div>
          </div>
          <div className="">
            <h6>PROGRESSION</h6>
          </div>
          <div className="">
            <h6>ACTIVITE PUBLIQUE</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
