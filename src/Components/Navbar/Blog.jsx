import React from 'react';
import HomeDogIMG from './HomePet.jpeg'
import SeniorDogIMG from './SeniorPet.jpeg'
import RescueDogIMG from './RescueDog.jpeg'
import './Blog.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Prepare Your Home for a New Pet',
      date: 'July 20, 2024',
      excerpt: 'Bringing a new pet home is exciting, but it requires preparation. Learn how to create a safe and welcoming environment for your new furry friend...',
      image: HomeDogIMG,
    },
    {
      title: 'The Benefits of Adopting a Senior Pet',
      date: 'July 15, 2024',
      excerpt: 'Senior pets can make wonderful companions. Discover the benefits of adopting an older animal and the joy they can bring into your life...',
      image: SeniorDogIMG,
    },
    {
      title: 'Tips for Training Your Rescue Dog',
      date: 'July 10, 2024',
      excerpt: 'Training a rescue dog can be challenging but rewarding. Here are some tips to help you successfully train your new canine companion...',
      image: RescueDogIMG,
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="blog-container">
      
      <h1 className="blog-title">PawsAndHome Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <img src={post.image} alt={post.title} className="blog-post-image" />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Blog;
