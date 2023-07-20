const shows = [
  {
    date: "Mon Sep 06 21",
    venue: "Ronald Lane",
    location: "San Francisco",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco",
  },
];    
      const showContainer = document.querySelector(".shows");

const heading = document.createElement("h2");
heading.classList.add("heading");
heading.innerText = "Shows";
showContainer.appendChild(heading);

shows.forEach((show) => {
  const party__wrapper = document.createElement("div");
  party__wrapper.classList.add("party__wrapper");

  // Date
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("party__date");
  const heading__date = document.createElement("h3");
  heading__date.innerText = "DATE";
  dateDiv.appendChild(heading__date);
  const party__date = document.createElement("p");
  party__date.classList.add("para__bold")
  party__date.innerText = show.date;
  dateDiv.appendChild(party__date);
  party__wrapper.appendChild(dateDiv);

  // Venue
  const venueDiv = document.createElement("div");
  venueDiv.classList.add("party__venue");
  const heading__venue = document.createElement("h3");
  heading__venue.innerText = "VENUE";
  venueDiv.appendChild(heading__venue);
  const party__venue = document.createElement("p");
  party__venue.innerText = show.venue;
  venueDiv.appendChild(party__venue);
  party__wrapper.appendChild(venueDiv);

  // Location
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("party__location");
  const heading__location = document.createElement("h3");
  heading__location.innerText = "LOCATION";
  locationDiv.appendChild(heading__location);
  const party__location = document.createElement("p");
  party__location.innerText = show.location;
  locationDiv.appendChild(party__location);
  party__wrapper.appendChild(locationDiv);

  // Button
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("party__button");
  const heading__button = document.createElement("button");
  heading__button.innerText = "BUY TICKETS";
  buttonDiv.appendChild(heading__button);
  party__wrapper.appendChild(buttonDiv);

  showContainer.appendChild(party__wrapper);
});
