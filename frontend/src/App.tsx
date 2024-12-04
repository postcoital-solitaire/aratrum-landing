import {Navigate, Route, Routes} from "react-router-dom";
import RootPage from "./pages/RootPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootPage />} path="/" />
      <Route element={<Navigate to="/" />} path="/*" />
    </Routes>
  );
}

export default App
