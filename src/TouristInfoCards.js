import React from "react";

function TouristInfoCards() {
  return (
    <div className="cards-container">
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c7/ab/93/the-university-of-glasgow.jpg?w=700&h=500&s=1"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            <span className="cards-city-name">Glasgow</span> is the most
            populous city in Scotland and the fourth-most populous city in the
            United Kingdom, as well as being the 27th largest city by population
            in Europe. In 2020, it had an estimated population of 635,640.
          </p>
          <a
            href="https://peoplemakeglasgow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://uktechnews.co.uk/wp-content/uploads/2019/10/resize.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            <span className="cards-city-name">Manchester</span> is a city in
            Greater Manchester, England, with a population of 547,627 in 2018.
            It is fringed by the Cheshire Plain to the south, the Pennines to
            the north and east and the neighbouring city of Salford to the west.
          </p>
          <a
            href="https://visitmanchester.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.amigotour.com.ua/images/uploads/6e85aa95860571afba14b98104f17207.jpg"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            <span className="cards-city-name">London</span> is the capital and
            largest city of England and the United Kingdom, with a population of
            just over 9 million. It stands on the River Thames at the head of a
            50-mile estuary down to the North Sea, and has been a major
            settlement for two millennia.
          </p>
          <a
            href="https://visitlondon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
