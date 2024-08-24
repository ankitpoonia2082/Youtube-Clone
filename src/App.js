import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideosContainer from './Components/bodyComponents/VideosContainer';
import Body from './Components/Body';
import WatchPage from "./Components/WatchPage";


/** App Structor...
 * 
 * Header
 * Body
 *    Sidebar
 *      Menu Item Links 
 *            eg. Home,
 *                Shorts,
 *                Subscriptions
 *      
 *    Main Container
 *      Filter Links
 *      Container
 *            Videos Card
 * Footer
 */



function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element: <VideosContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      },
    ],
  }
]);

export default App;
