import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Dashboard from "./pages/Dashboard";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <>
      <div className="p-4 block">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </div>
      <ChatBot />
    </>
  );
};

export default App;
