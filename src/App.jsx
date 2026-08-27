import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomeInterier from "./pages/HomeInterier";
import Menu from "./pages/Menu";
import { useTranslation } from "react-i18next";

function App() {
  const {t,i18n} = useTranslation()
  const langSelData = [
    {
      shortCase: "az",
      countryUrl: "https://cdn-icons-png.flaticon.com/128/16021/16021914.png",
      country: "Azərbaycanca",
    },
    {
      shortCase: "en",
      countryUrl: "https://cdn-icons-png.flaticon.com/128/8363/8363562.png",
      country: "English",
    },
    {
      shortCase: "ru",
      countryUrl: "https://cdn-icons-png.flaticon.com/128/4628/4628645.png",
      country: "Русский",
    },
  ];

  const [langSwitcher, setLangSwitcher] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language || "az");
    const filteredSelectedLang = langSelData.find(
    (item) => item.shortCase === selectedLang,
  );
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeInterier
            filteredSelectedLang={filteredSelectedLang}
            langSelData={langSelData}
            langSwitcher={langSwitcher}
            setLangSwitcher={setLangSwitcher}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        }
      />
      <Route
        path="/menu"
        element={
          <Menu
            filteredSelectedLang={filteredSelectedLang}
            langSelData={langSelData}
            langSwitcher={langSwitcher}
            setLangSwitcher={setLangSwitcher}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        }
      />
    </Routes>
  );
}

export default App;
