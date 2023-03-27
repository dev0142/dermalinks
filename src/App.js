import "./App.css";
import Header from "./components/Header";
import WelcomeBanner from "./components/WelcomeBanner";
import AuthenticBar from "./components/AuthenticBar";
import WhoAmI from "./components/WhoAmI";
import Services from "./components/Services";
import AreaOfService from "./components/AreaOfService";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <WelcomeBanner />
      <AuthenticBar />
      <WhoAmI />
      <Services />
      <AreaOfService />
      <Testimonials />
    </>
  );
}

export default App;
