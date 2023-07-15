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

      const heading =document.createElement("h2")
      heading.classList.add("heading");
      heading.innerText = "SHOWS"
      showContainer.appendChild(heading);

      
    
      shows.forEach((show) => {
        const party__wrapper = document.createElement("div");
        party__wrapper.classList.add("party__wrapper");

        const heading__date =document.createElement("h3")
        heading__date.classList.add("heading__date");
        heading__date.innerText = "DATE"
        party__wrapper.appendChild(heading__date);
        console.log(heading__date);

        const party__date = document.createElement("p");
        party__date.classList.add("party__date");
        party__date.innerText = show.date;
        party__wrapper.appendChild(party__date);

        const heading__venue =document.createElement("h3")
        heading__venue.classList.add("heading__venue");
        heading__venue.innerText = "VENUE"
        party__wrapper.appendChild(heading__venue);
        console.log(heading__venue);
      
        const party__venue = document.createElement("p");
        party__venue.classList.add("party__venue");
        party__venue.innerText = show.venue;
        party__wrapper.appendChild(party__venue);

        const heading__location =document.createElement("h3")
        heading__location.classList.add("heading__location");
        heading__location.innerText = "LOCATION"
        party__wrapper.appendChild(heading__location);
        console.log(heading__location);
      
        const party__location = document.createElement("p");
        party__location.classList.add("party__location");
        party__location.innerText = show.location;
        party__wrapper.appendChild(party__location);
      
        showContainer.appendChild(party__wrapper);
      });