// Define an array of dummy comments with name, date, and comment content
const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Get the reference to the element that will contain the comments
const parentElement = document.querySelector(".pastComment");

// Function to render an individual comment
function renderComment(comment) {
  const renderElement = document.createElement("div");
  renderElement.classList.add("renderComment");
  parentElement.appendChild(renderElement);
}

// Function to format the date in the desired format (MM/DD/YYYY)
function formatDate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// Function to render all the comments
function renderComments() {
  // Clear the existing comments
  parentElement.innerHTML = "";

  // Loop through each comment
  comments.forEach((comment) => {
    // Create a new render element
    const renderElement = document.createElement("div");
    renderElement.classList.add("renderComment");
    parentElement.appendChild(renderElement);

    // Create profile container for the comment
    const profileContainer = document.createElement("div");
    profileContainer.className = "renderComment__profile";
    renderElement.appendChild(profileContainer);

    // Create profile image for the comment
    const profileImage = document.createElement("img");
    profileImage.className = "profile";
    profileContainer.appendChild(profileImage);

    // Create details container for the comment
    const detailsContainer = document.createElement("div");
    detailsContainer.className = "renderComment__details";
    renderElement.appendChild(detailsContainer);

    // Create the first section of details
    const firstSection = document.createElement("div");
    firstSection.className = "renderComment__first";
    detailsContainer.appendChild(firstSection);

    // Create the name element
    const nameElement = document.createElement("div");
    nameElement.className = "renderComment__name";
    nameElement.innerText = comment.name;
    firstSection.appendChild(nameElement);

    // Create the date element
    const dateElement = document.createElement("div");
    dateElement.className = "renderComment__date";
    dateElement.innerText = comment.date;
    firstSection.appendChild(dateElement);

    // Create the second section of details
    const secondSection = document.createElement("div");
    secondSection.className = "renderComment__second";
    detailsContainer.appendChild(secondSection);

    // Create the comment paragraph
    const commentParagraph = document.createElement("p");
    commentParagraph.className = "renderComment__comment";
    commentParagraph.innerText = comment.comment;
    secondSection.appendChild(commentParagraph);
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handle the submission of a new comment
function handleCommentSubmission(event) {
  event.preventDefault();

  // Get the input values for name and comment
  const nameInput = document.querySelector(".comment__profile--name");
  const commentInput = document.querySelector(".comment__profile--comment");
  const name = nameInput.value;
  const comment = commentInput.value;

  // Check if the name and comment inputs are empty
  if (name === "" || comment === "") {
    alert("Please fill in your name and comment.");
    return;
  }

  // Create a new comment object with the entered values and current date
  const newComment = {
    name: name,
    date: formatDate(new Date()),
    comment: comment,
  };

  // Add the new comment to the beginning of the comments array
  comments.unshift(newComment);

  // Clear the input values
  nameInput.value = "";
  commentInput.value = "";

  // Render all the comments with the new comment included
  renderComments();

  // Scroll to the top of the comments section
  parentElement.scrollTop = 0;
}

// Render the existing comments when the page loads
renderComments();

// Add an event listener to the submit button for comment submission
const submitButton = document.querySelector(".comment__button");
submitButton.addEventListener("click", handleCommentSubmission);
