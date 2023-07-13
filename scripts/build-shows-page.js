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


/* <article class="shows">
      <h2 class="party__title">Shows</h2>
      <div class="party__wrapper">
        <p class="party__date">date</p>
        <p class="party__venue">venue</p>
        <p class="party__location">location</p>


      </div> */


    
    
    
      const showContainer = document.querySelector(".shows");

      
    
      shows.forEach((show) => {
        const party__wrapper = document.createElement("div");
        party__wrapper.classList.add("party__wrapper");
      
        const party__date = document.createElement("p");
        party__date.classList.add("party__date");
        party__date.innerText = show.date;
        party__wrapper.appendChild(party__date);
      
        const party__venue = document.createElement("p");
        party__venue.classList.add("party__venue");
        party__venue.innerText = show.venue;
        party__wrapper.appendChild(party__venue);
      
        const party__location = document.createElement("p");
        party__location.classList.add("party__location");
        party__location.innerText = show.location;
        party__wrapper.appendChild(party__location);
      
        showContainer.appendChild(party__wrapper);
      });