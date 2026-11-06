import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

import posts from "./data/posts.json";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <section className="articles-section" id="articles">
          <div className="section-heading">
            <div>
              <span className="section-label">THE JOURNAL</span>
              <h2>Explore our <span>stories.</span></h2>
              <p>Thoughtful reads for your next big idea.</p>
            </div>

            <div className="article-count">
              {filteredPosts.length} STORIES
            </div>
          </div>

          <SearchBar search={search} setSearch={setSearch} />

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <BlogList
            posts={filteredPosts}
            onReadMore={setSelectedPost}
          />
        </section>

        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
            <div
              className="article-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedPost(null)}
              >
                ✕
              </button>

              <img src={selectedPost.image} alt={selectedPost.title} />

              <span className="section-label">
                {selectedPost.category}
              </span>

              <h2>{selectedPost.title}</h2>

              <p className="modal-meta">
                By {selectedPost.author} · {selectedPost.date} · {selectedPost.readTime}
              </p>

              <p>{selectedPost.excerpt}</p>

              <p>
                Every great idea begins with curiosity. Understanding
                new perspectives helps us explore opportunities,
                develop better skills and create meaningful experiences.
                Keep learning, stay creative and turn your ideas into action.
              </p>

              <button
                className="primary-button"
                onClick={() => setSelectedPost(null)}
              >
                Back to articles
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;