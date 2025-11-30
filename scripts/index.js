const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
});

editProfileClose.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

newPostClose.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});
