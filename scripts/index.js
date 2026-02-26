const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-btn",
  inactiveButtonClass: "modal__save-btn_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active"
};

const initialCards = [
  {
    name: "Gros Pitons",
    link: "https://images.unsplash.com/photo-1520115736066-2190b58a4b9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Archer's Bay",
    link: "https://images.unsplash.com/photo-1674098871778-90120697b694?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bathsheba Beach",
    link: "https://images.unsplash.com/photo-1671979846445-a6ee7dc09465?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ragged Point",
    link: "https://images.unsplash.com/photo-1676469042178-85b4a6e1b832?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hunte's Gardens",
    link: "https://images.unsplash.com/photo-1730660338791-8d63548efc75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Accra Beach",
    link: "https://images.unsplash.com/photo-1741606369274-6730b6fb6051?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dover Gardens",
    link: "https://images.unsplash.com/photo-1610670885249-d1597521dfea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-btn");
const editProfileFormEl = editProfileModal.querySelector("#edit-profile-form");
const editProfileUsernameInput =
  editProfileModal.querySelector("#username-input");
const editProfileDescriptionInput =
  editProfileModal.querySelector("#describe-input");

const newPostBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostSave = newPostModal.querySelector(".modal__save-btn");
const newPostClose = newPostModal.querySelector(".modal__close-btn");
const newPostFormEl = newPostModal.querySelector("#new-post-form");
const newPostImageLink = newPostModal.querySelector("#image-input");
const newPostCaptionInput = newPostModal.querySelector("#caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const previewModal = document.querySelector("#preview-modal");
const previewModalClose = previewModal.querySelector(".modal__close-btn");
const previewImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsContainer = document.querySelector(".cards__container");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;

    openModal(previewModal);
  });

  return cardElement;
}

const handleEsc = (evt) => {
  if (evt.key === 'Escape') {
    const modalIsOpen = document.querySelector('.modal_is-opened');
    if (modalIsOpen) {
      closeModal(modalIsOpen);
    }
  }
}

const handleOverlayClick = (evt) => {
  if (evt.target.classList.contains('modal')) {
    closeModal(evt.currentTarget);
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener('keydown', handleEsc);
  modal.addEventListener('mousedown', handleOverlayClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener('keydown', handleEsc);
  modal.removeEventListener('mousedown', handleOverlayClick);
}

editProfileBtn.addEventListener("click", function () {
  editProfileUsernameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  resetValidation(editProfileFormEl, [editProfileUsernameInput, editProfileDescriptionInput], config);
  openModal(editProfileModal);
});

editProfileClose.addEventListener("click", () => {
  closeModal(editProfileModal);
});

previewModalClose.addEventListener("click", () => {
  closeModal(previewModal);
});

newPostBtn.addEventListener("click", () => {
  const inputList = Array.from(newPostFormEl.querySelectorAll(config.inputSelector));

  resetValidation(newPostFormEl, inputList, config);

  openModal(newPostModal);
});

newPostClose.addEventListener("click", () => {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileUsernameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileFormEl.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  const newPostValues = {
    name: newPostCaptionInput.value,
    link: newPostImageLink.value,
  };

  const cardEl = getCardElement(newPostValues);
  cardsContainer.prepend(cardEl);

  newPostFormEl.reset();
  disableBtn(newPostSave, config);

  closeModal(newPostModal);
};

newPostFormEl.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach((item) => {
  const cardEl = getCardElement(item);
  cardsContainer.append(cardEl);
});
