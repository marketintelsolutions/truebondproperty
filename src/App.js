import MainLayout from "./components/MainLayout";
import AllProperties from "./pages/AllProperties";
import Buy from "./pages/Buy";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rent from "./pages/Rent";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import Services from "./pages/Services";

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
      path: "/about-us",
      element: (
        <MainLayout>
          <About />
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
    {
      path: "/services",
      element: <MainLayout>
        <Services />
      </MainLayout>,
    },
    {
      path: "/blog",
      element: <MainLayout>
        <Blog />
      </MainLayout>,
    },
    {
      path: "blog/:id",
      element: <MainLayout><BlogItem /></MainLayout>,
    },
    {
      path: "/contact",
      element: <MainLayout>
        <Contact />
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
