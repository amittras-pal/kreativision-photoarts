import { usePageTitle } from "./hooks/usePageTitle";
import Header from "./modules/home/components/Header";

function App() {
  usePageTitle("Home");

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
