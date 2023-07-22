const API_KEY = "?api_key=89205fa9-50a7-45c3-b47f-ee0059378a3c";
const API_URL = "https://project-1-api.herokuapp.com";
const commentsEndpoint = "/comments";

// Constructing the full URL with the API key
const commentsUrl = `${API_URL}${commentsEndpoint}?api_key=${API_KEY}`;

// Getting comments from the API
const getComments = () => {
  axios
    .get(commentsUrl)
    .then((response) => {
      if (response.status !== 200) {
        // Handle unsuccessful API response here
        console.error("Error fetching comments: Unexpected status code", response.status);
        return;
      }

      const comments = response.data;
      console.log(comments)
      if (!comments || !Array.isArray(comments)) {
        // Check if the commentsData is valid and an array
        console.error("Error fetching comments: Invalid response format");
        return;
      }
      const parentElement = document.querySelector(".pastComment");


      // Clear the existing comments in the parent element
      parentElement.innerHTML = "";

      // Loop through each comment and create the HTML elements to display them
      comments.forEach((comment) => {
        const renderElement = document.createElement("div");
        renderElement.classList.add("renderComment");
        parentElement.appendChild(renderElement);

        // Create profile container for the image
        const profileContainer = document.createElement("div");
        profileContainer.className = "renderComment__profile";
        renderElement.appendChild(profileContainer);

        //creating an avatar image
        const profileImg = document.createElement("img");
        profileImg.classList.add("profile");
        profileContainer.appendChild(profileImg);


        // Create details container for the comment
        const detailsContainer = document.createElement("div");
        detailsContainer.className = "renderComment__details";
        renderElement.appendChild(detailsContainer);

        // Create the delete button for the comment
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => handleDeleteComment(comment.id)); // Pass the comment ID to the delete function
        renderElement.appendChild(deleteButton);

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
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
};

// Render the comments when the page loads
getComments();


// Handle the deletion of a comment
function handleDeleteComment(commentId) {
  // Make a DELETE request to the API to delete the comment
  axios
    .delete(`${API_URL}/comments/${commentId}?api_key=${API_KEY}`)
    .then((response) => {
      console.log("Comment successfully deleted:", response.data);

      // Update the 'comments' array to remove the deleted comment
      commentId = commentId.filter((comment) => comment.id !== commentId);

      // Re-render the comments without the deleted comment
      renderComments();
    })
    .catch((error) => {
      console.error("Error deleting comment:", error);
      alert("Error deleting comment. Please try again later.");
    });
}



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
    comment: comment,
  };

  //posting the new comments to api 
  axios
    .post(commentsUrl, newComment)
    .then((response) =>{
  
    comment.unshift(newComment)

    // Clear the input values
    nameInput.value = "";
    commentInput.value = "";
  
})


  // Render all the comments with the new comment included
  renderComments();

  // Scroll to the top of the comments section
  parentElement.scrollTop = 0;
}

// Render the existing comments when the page loads


// Add an event listener to the submit button for comment submission
const submitButton = document.querySelector(".comment__button");
submitButton.addEventListener("click", handleCommentSubmission);
