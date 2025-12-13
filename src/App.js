import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import SignIn from "./components/SignIn";
import MainBody from "./components/MainBody";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/browse",
        element: <MainBody />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
