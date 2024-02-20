import React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import './home.css'; // Import your CSS file for styling

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <section id="home">
      <div className="home-content">
        <h1 className="home-title">Explore delicious recipes from around the world!</h1>
        <p className="home-description">
          Welcome to our culinary hub, where flavors from around the world meet to inspire your kitchen adventures.
          Explore a collection of mouthwatering recipes, expert tips, and culinary insights. From easy weekday meals
          to gourmet delights, our blog is your go-to resource for all things food. Join us on a journey of taste and
          discovery as we celebrate the art of cooking together!
        </p>
      </div>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    </section>
  );
};

export default Home;
