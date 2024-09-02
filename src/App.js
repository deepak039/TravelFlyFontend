import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from "./utils/aapStore";

import Header from './component/Header';
import Hero from './component/Hero';
import Category from './component/Category';
import WhyThis from './component/WhyThis';
import Footer from './component/Footer';
import Destination from './component/Destination';
import Sign from "./component/Sign";
import Search from "./component/Search";
import CreateBlog from './component/CreateBlog';
import BlogList from './component/BlogList';
import BlogDetail from './component/BlogDetail';
import EditBlog from './component/EditBlog';
import ErrorPage from './component/ErrorPage'; // Import the ErrorPage component

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />, // Specify the ErrorPage component for this route
      children: [
        {
          path: "/", // This is the default path
          element: <Sign />,
        },
        {
          path: "/home",
          element: (
            <>
              <Hero />
              <Category />
              <WhyThis />
            </>
          ),
        },
        {
          path:"/blog",
          element:<BlogList/>
        },
        {
          path:"/blog/create",
          element:<CreateBlog/>
        },
        {
          path:"/blogs/:id",
          element:<BlogDetail/>
        },
        {
          path:"/blog/edit/:id",
          element:<EditBlog/>
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/destination/:location/:type",
          element: <Destination />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
