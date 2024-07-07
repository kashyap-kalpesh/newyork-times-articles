import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ArticlesList from './components/AcrticlesList';
import SingleArticle from './components/SingleArticle'
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ArticlesList/>,
  },
  {
    path: "/single",
    element: <SingleArticle/>,
  },
]);

function App() {
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
