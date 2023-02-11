import { GlobalStyles } from "../../styles/GlobalStyles";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";
import theme from '../../styles/themes/defaultTheme';
import AsideBar from "../asideBar";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";

export default function App() {
  return (
    <>
      <BrowserRouter>

          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
              <AsideBar />
              <Routes />
            </Container>
            <Footer />
          </ThemeProvider>

      </BrowserRouter>
    </>
  );
}


