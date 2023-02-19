import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage"


import { Dictionary } from "./components/Dictionary/Dictionary";
import { EngRusPage } from "./pages/EngRusPage/EngRusPage";
import { RusEngPage } from "./pages/RusEngPage/RusEngPage";
import { Results } from "./pages/ResultsPage/ResultsPage";
import { DictionariesPage } from "./pages/DictionariesPage/DictionariesPage";
import { DictionariesList } from "./pages/DictionariesPage/DictionariesList/DictionariesList";
import { RandomPage } from "./pages/RandomPage/RandomPage";
import { ChooseTranslatePage } from "./pages/ChooseTranslatePage/ChooseTranslatePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route index path="/" element={<MainPage />}/>
            <Route path="/eng-rus" element={<EngRusPage />}/>
            <Route path="/rus-eng" element={<RusEngPage />}/>
            <Route path="/random" element={<RandomPage />}/>
            <Route path="/choose-translate" element={<ChooseTranslatePage />}/>
            <Route path="/dictionaries" element={<DictionariesPage />}>
              <Route index element={<DictionariesList />}/>
              <Route path="dictionary/:dictionary_name/:dictionary_id" element={<Dictionary />}/>
            </Route>
            <Route path="/results" element={<Results />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
