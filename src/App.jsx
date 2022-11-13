import "./App.css";
import Banner from "./components/Banner";
import Community from "./components/Community";
import Header from "./components/Header";
import Membership from "./components/Membership";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Programs />
      <Membership />
      <Testimonials />
      <Community />
    </div>
  );
}

export default App;
