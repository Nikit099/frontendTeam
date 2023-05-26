import "./style/App.css"
import Choice from "./pages/choice/Choice"
import Registr from "./pages/registr/Registr"
import Setting from "./pages/setting/Setting"
import { Route, Routes } from "react-router-dom"
import Main from "./pages/main/Main"

function App() {
  return (
    <div>
      {/* <Registr /> */}
      {/* <Setting /> */}

      <Routes>
        <Route path="/" element={<Choice />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
