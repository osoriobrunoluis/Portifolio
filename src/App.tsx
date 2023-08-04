import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    if (savedDarkMode === "true" ){
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <ThemeProvider theme={{ isDarkMode }}>
        <h5 className={isDarkMode ? "Dark" : "Ligth"} onClick={toggleDarkMode}>
          {isDarkMode ? "Light" : "Dark"}
        </h5>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
