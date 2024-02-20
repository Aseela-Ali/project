import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './components/Upload/upload';
import BlogDetails from './components/Home/BlogDetails';
import NotFound from './NotFound';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import RecipeSearch from './components/Recipes/Recipes';
import { useState } from 'react';
import List from './components/Home/list';

function App() {
  const [category, setCategory] = useState("mealType");

  return (
    <Router>
      <div className="App">
        <Navbar setCategory={setCategory} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/RecipeSearch">
              <RecipeSearch category={category} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
