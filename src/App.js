import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./components/Analytics/Analytics";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import Quiz from "./components/Quiz/Quiz";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:id',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/analytics',
          element: <Analytics></Analytics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
