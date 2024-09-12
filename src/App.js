import Body from './Components/Body';
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import VideosContainer from './Components/bodyComponents/VideosContainer';
import SearchVideosContainer from './Components/bodyComponents/SearchVideosContainer';
import WatchPage from "./Components/WatchPage";
import LiveVideosContainer from './Components/bodyComponents/LiveVideoContainer';
import WatchLivePage from './Components/WatchLive';


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
      {
        path: '/search',
        element: <SearchVideosContainer />
      },
      {
        path: '/live',
        element: <LiveVideosContainer />
      },
      {
        path: '/Watchlive',
        element: <WatchLivePage />
      },
    ],
  }
]);

export default App;
