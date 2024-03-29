import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import Login from "./pages/registration/Login";
import { ChakraProvider, ColorModeProvider, CSSReset, extendTheme } from "@chakra-ui/react"
import "./css/app.css"
import Home from "./pages/home/Home";
import Friends from "./pages/friends/Friends";
import Groups from "./pages/groups/Groups";
import Profile from "./pages/profile/Profile";

if(!localStorage.getItem("chakra-ui-color-mode")) {
  localStorage.setItem("chakra-ui-color-mode", "light");
}

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `SFProDisplay-Regular, Helvetica, Arial, sans-serif`,
      body: `SFProDisplay-Regular, Helvetica, Arial, sans-serif`,
    },
  })

  return (
      <ChakraProvider>
        <ColorModeProvider theme = {theme}>
          <CSSReset />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ColorModeProvider>
      </ChakraProvider>
  );
}

export default App;
