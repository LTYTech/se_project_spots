const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-btn");
const editProFormEl = editProfileModal.querySelector("#edit-profile-form");
const editProUsernameInput = editProfileModal.querySelector("#username-input");
const editProDescribeInput = editProfileModal.querySelector("#describe-input");

const newPostBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-btn");
const newPoFormEl = newPostModal.querySelector("#new-post-form");
const newPoImageLink = newPostModal.querySelector("#image-input");
const newPoCaptionInput = newPostModal.querySelector("#caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescribeEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProUsernameInput.value = profileNameEl.textContent;
  editProDescribeInput.value = profileDescribeEl.textContent;
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

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProUsernameInput.value;
  profileDescribeEl.textContent = editProDescribeInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}
editProFormEl.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPoImageLink.value);
  console.log(newPoCaptionInput.value);
  newPostModal.classList.remove("modal__is-opened");
}

newPoFormEl.addEventListener("submit", handleNewPostSubmit);
