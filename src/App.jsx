import { BrowserRouter, Routes, Route } from "react-router-dom"
import RingConfiguration from "./ring_configuration"

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<RingConfiguration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App