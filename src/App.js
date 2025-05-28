import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';
import SearchPage from './components/SearchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            
            <MainContainer />
          </>
        ),
      },
      {
        path: "/watch",
        element: (
          <>
            
            <Watchpage />
          </>
        ),
      },
      {
        path: "/results",
        element: (
          <>
            
            <SearchPage />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <div className="w-full h-full bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
