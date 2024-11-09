import MainLayout from "./components/MainLayout";
import AllProperties from "./pages/AllProperties";
import Buy from "./pages/Buy";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rent from "./pages/Rent";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      ),
    },
    {
      path: "/all-properties",
      element: <MainLayout>
        <AllProperties />
      </MainLayout>,
    },
    {
      path: "/buy",
      element: <MainLayout>
        <Buy />
      </MainLayout>,
    },
    {
      path: "/rent",
      element: <MainLayout>
        <Rent />
      </MainLayout>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <MainLayout>
        <Landing />
      </MainLayout> */}
    </div>
  );
}

export default App;
