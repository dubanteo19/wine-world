import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ConfigProvider } from "antd";
import { red } from "@ant-design/colors";
import { Home } from "./componets/home/Home";
import { ProductDetail } from "./pages/ProductDetail";
import { Login } from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: red[8],
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </ConfigProvider>,
);
