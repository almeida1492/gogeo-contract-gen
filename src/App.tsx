import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { DocumentPreview } from "./DocumentPreview";
import { Form } from "./Form";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { IData } from "./types";
import wip from "./assets/wip.jpg";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState<IData>();

  const handleSubmit = (data: IData) => {
    setData(data);
    navigate("/");
  };

  return (
    <div className="App">
      <Layout hasData={!!data}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/add" element={<Form onSubmit={handleSubmit} />} />
          <Route
            path="/edit"
            element={<Form values={data} onSubmit={handleSubmit} />}
          />
          <Route
            path="/wip"
            element={
              <>
                <img src={wip} alt="wip" />
              </>
            }
          />
          <Route path="/preview" element={<DocumentPreview data={data} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
