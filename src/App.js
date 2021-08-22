import "./App.css";
import NavBar from "./components/NavBar";
import DottedLineSection from "./components/DottedLineSection";
import VideoSection from "./components/VideoSection";
import CardSection from "./components/InfoCard";
import MainPanel from "./components/MainPanel";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <MainPanel />
      <DottedLineSection />
      <VideoSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
