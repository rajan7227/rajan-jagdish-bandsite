
const API_KEY = "?api_key=89205fa9-50a7-45c3-b47f-ee0059378a3c";
const API_URL = "https://project-1-api.herokuapp.com";
const showsPageUrl = "/showdates";


//constructing the full url 
const showsUrl = `${API_URL}${showsPageUrl}${API_KEY}`;


//Getting the details to show on page 

const getShows = ()=>{
  axios
  .get(showsUrl)
  .then( (response) =>{

    const showDetails = response.data;

    console.log(showDetails)
    const showContainer = document.querySelector(".shows");
    
    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.innerText = "Shows";
    showContainer.appendChild(heading);

    const singleHeading = document.createElement("div");
    singleHeading.classList.add("singleHeading")
    showContainer.appendChild(singleHeading);

    const date = document.createElement("h3");
    date.classList.add("singleheading__date");
    date.innerText= "DATE";
    singleHeading.appendChild(date)

    const venue = document.createElement("h3");
    venue.classList.add("singleheading__venue");
    venue.innerText= "VENUE";
    singleHeading.appendChild(venue)

    const location = document.createElement("h3");
    location.classList.add("singleheading__date");
    location.innerText= "LOCATION";
    singleHeading.appendChild(location)


    
    showDetails.forEach((show) => {
      const party__wrapper = document.createElement("div");
      party__wrapper.classList.add("party__wrapper");
    
      // Date
      const dateDiv = document.createElement("div");
      dateDiv.classList.add("party__date");
      const heading__date = document.createElement("h3");
      heading__date.classList.add("h3");
      heading__date.innerText = "DATE";
      dateDiv.appendChild(heading__date);

      //converting timestamp data into readable format
      const dateObject = new Date(show.date);
      console.log(dateObject)
      const formattedDate = dateObject.toDateString();
      console.log(formattedDate)

      const party__date = document.createElement("p");
      party__date.classList.add("para__bold")
      party__date.innerText = formattedDate;
      dateDiv.appendChild(party__date);
      party__wrapper.appendChild(dateDiv);
    
      // Venue
      const venueDiv = document.createElement("div");
      venueDiv.classList.add("party__venue");
      const heading__venue = document.createElement("h3");
      heading__venue.classList.add("h3");
      heading__venue.innerText = "VENUE";
      venueDiv.appendChild(heading__venue);
      const party__venue = document.createElement("p");
      party__venue.innerText = show.place;
      venueDiv.appendChild(party__venue);
      party__wrapper.appendChild(venueDiv);
    
      // Location
      const locationDiv = document.createElement("div");
      locationDiv.classList.add("party__location");
      const heading__location = document.createElement("h3");
      heading__location.classList.add("h3");
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


  })
  .catch((error)=>{
    console.error("Error fetching show details:", error);
    console.error("Error response data:", error.response.data);
    console.error("Error status:", error.response.status);
  });
}

getShows();