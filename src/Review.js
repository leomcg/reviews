import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  function checkNumber(number) {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  }

  function handleNextClick() {
    setIndex((ind) => checkNumber(ind + 1));
  }

  function handlePreviousClick() {
    setIndex((ind) => checkNumber(ind - 1));
  }

  function handleRandomClick() {
    const ind = Math.floor(Math.random() * people.length);
    if (index === ind) {
      setIndex(checkNumber(ind + 1));
    } else {
      setIndex(ind);
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handlePreviousClick} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleNextClick} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandomClick} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
