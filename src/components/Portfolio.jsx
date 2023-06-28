import React from "react";
import blog from "../assets/portfolio/blog.jpg";
import modern from "../assets/portfolio/modern.jpg";
import quiz from "../assets/portfolio/quiz.jpg";
import movie from "../assets/portfolio/movie.jpeg";
import todo from "../assets/portfolio/todo.jpeg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      href: "https://stirring-cannoli-d45ef8.netlify.app",
      github_repo_link: "https://github.com/HuzaizKhalidQureshi/blogapp",
    },
    {
      id: 2,
      src: movie,
      href: "https://moviesearchappvitejs.netlify.app",
      github_repo_link:
        "https://github.com/HuzaizKhalidQureshi/movie_search_app",
    },
    {
      id: 3,
      src: quiz,
      href: "https://playful-axolotl-e9ede4.netlify.app",
      github_repo_link: "https://github.com/HuzaizKhalidQureshi/quizapp",
    },
    {
      id: 4,
      src: todo,
      href: "https://snazzy-puppy-a68d4f.netlify.app",
      github_repo_link: "https://github.com/HuzaizKhalidQureshi/todolist",
    },
    {
      id: 5,
      src: modern,
      href: "https://modernbusiness.netlify.app",
      github_repo_link: "",
    },
    {
      id: 6,
      src: reactWeather,
      href: "https://viteweather.netlify.app",
      github_repo_link: "https://github.com/HuzaizKhalidQureshi/weatherapp",
    },
  ];

  const handleDemoClick = (href) => {
    window.open(href, "_blank");
  };

  const handleCodeClick = (githubRepoLink) => {
    window.open(githubRepoLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-fit text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, github_repo_link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(href)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(github_repo_link)}
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
