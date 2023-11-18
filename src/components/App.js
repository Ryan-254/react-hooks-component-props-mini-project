import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const App = () => {
  return (
    <div>
      <Header blogName={blogData.name} />
      <About
      imageSrc={blogData.name}
      altText="blog logo"
      aboutText={blogData.about}
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;
