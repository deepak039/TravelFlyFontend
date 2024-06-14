// import logo from './logo.svg';

// import pin from './img/pin.png'

// import './style.css';
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
import appStore from "./utils/aapStore";

import Header from './component/Header';
import Hero from './component/Hero';
import Category from './component/Category';
import WhyThis from './component/WhyThis';
import Footer from './component/Footer';
import Destination from './component/Destination';
import Sign from "./component/Sign";
import Search from "./component/Search";

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
      children: [
        {
          path: "/", // This is the default path
          element: <Sign />,
        },
        {
          path: "/home",
          element: (
            <>
              <Search/>
              <Category />
              <WhyThis />
            </>
          ),
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
