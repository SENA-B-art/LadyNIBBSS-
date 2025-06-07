function submitComment() {
  const commentBox = document.getElementById('commentBox');
  const commentsList = document.getElementById('commentsList');

  const comment = commentBox.value.trim();
  if (comment === "") {
    alert("Please enter a comment before submitting.");
    return;
  }

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  commentDiv.textContent = comment;

  commentsList.prepend(commentDiv);
  commentBox.value = ""; // clear box
}
