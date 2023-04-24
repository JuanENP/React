import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "../pages/Information";
import InformationNew from "../pages/InformationNew";
import NotFound from "../pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/information" element={<Information />} />
      <Route exact path="/information/new" element={<InformationNew />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// function App() {
//   return (
//     //componente Route renderizará la UI del componente
//     //que le digamos
//     <div>
//       <BrowserRouter>
//           <Routes>
//             <Route exact path="/information" element={<Information />} />
//             <Route exact path="/information/new" element={<InformationNew />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
