import React, { useRef } from "react";
import EachButton from "./EachButton";

const list = [
  "All",
  "Python",
  "Favorites",
  "Classical Music",
  "Web Development",
  "Bollywood Hits",
  "Streaming",
  "Data Science",
  "Fitness",
  "Rahman",
  "Yoga and Meditation",
  "Quantum Physics",
  "Machine Learning",
  "Indie Films",
  "Gardening",
  "Art and Design",
  "Jazz Music",
  "Tech Innovations",
  "Mindfulness",
  "World Cinema",
  "History and Culture",
  "Digital Marketing",
  "Travel and Adventure",
  "DIY Projects",
  "Science Fiction",
  "Gourmet Cooking",
  "Wildlife Conservation",
  "Astrophysics",
  "True Crime",
  "E-sports and Gaming",
  "Entrepreneurship",
  "Mental Health",
];


const Buttonlist = () => {
  const scrollContainer = useRef(null);
  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex mx-[20px]">
      <button onClick={scrollLeft}>&lt;</button>
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto sm:m-2 md:mx-4 md:my-3 no-scrollbar "
        style={{ scrollBehavior: "smooth" }}
      >
        {list.map((item, key) => (
          <EachButton key={key} name={item} />
        ))}
      </div>
      <button onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default Buttonlist;
