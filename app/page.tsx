import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer"; 

function Root() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col mt-7 justify-between">
      <Header />
      <App />
      <Footer />
    </div>
  );
}

export default Root;
