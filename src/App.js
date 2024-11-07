import MainLayout from "./components/MainLayout";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Landing />
      </MainLayout>
    </div>
  );
}

export default App;
