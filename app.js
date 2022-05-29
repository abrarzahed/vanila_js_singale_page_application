/* **************************
SELECTIONS
****************************/
const seeInfo = document.querySelector(".see-info");
const addInfo = document.querySelector(".add-info");
const seeInfoBtn = document.querySelector(".see-info-btn");
const addInfoBtn = document.querySelector(".add-info-btn");
const logo = document.querySelector(".logo");
const errors = document.querySelectorAll(".error");

const modalWrapper = document.querySelector(".modal-wrapper");
const ModalContent = document.querySelector(".modal-wrapper_modal_content");
const phoneNumber = document.querySelector(".phone-number");
const inputName = document.querySelector(".name");
const email = document.querySelector(".email");
const cancelButton = document.querySelector(".cancel");
const acceptButton = document.querySelector(".accept");
const openModalBtn = document.querySelector(".modal-button__btn");
const errorPhone = document.querySelector(".error-phone");
const errorEmail = document.querySelector(".error-email");

/* **************************
FUNCTIONS
****************************/
function openModal() {
  ModalContent.classList.remove("fade-out");
  ModalContent.classList.add("fade-in");
  modalWrapper.classList.toggle("display-none");
  inputName.value = "";
  email.value = "";
  phoneNumber.value = "";
  errors.forEach((item) => item.classList.add("display-none"));
}

function closeModel() {
  ModalContent.classList.add("fade-out");
  ModalContent.classList.remove("fade-in");
  setTimeout(() => {
    modalWrapper.classList.toggle("display-none");
  }, 1000);
}

/* **************************
VALIDATION CHECKER
****************************/
const verify = function (value, element) {
  value.addEventListener("keyup", () => {
    element.classList.remove("display-none");
    if (value.classList.contains("email")) {
      if (value.value && value.value.includes("@")) {
        element.classList.add("display-none");
      } else if (value.value && !value.value.includes("@")) {
        element.textContent = "Please enter a valid email";
      } else {
        element.classList.remove("display-none");
      }
    } else if (value.classList.contains("phone-number")) {
      if (value.value && value.value.includes("0")) {
        element.classList.add("display-none");
      } else if (value.value && !value.value.includes("0")) {
        element.textContent = "Please add country code and phone number";
      } else {
        element.classList.remove("display-none");
      }
    }
  });
};
verify(email, errorEmail);
verify(phoneNumber, errorPhone);

/* **************************
EVENT LISTENERS
****************************/
logo.addEventListener("click", () => {
  addInfo.classList.add("display-none");
  seeInfo.classList.remove("display-none");
  modalWrapper.classList.add("display-none");
  addInfoBtn.classList.remove("active-link");
  seeInfoBtn.classList.add("active-link");
});

seeInfoBtn.addEventListener("click", () => {
  seeInfoBtn.classList.add("active-link");
  addInfoBtn.classList.remove("active-link");
  addInfo.classList.add("display-none");
  seeInfo.classList.remove("display-none");
  modalWrapper.classList.add("display-none");
});

addInfoBtn.addEventListener("click", () => {
  addInfoBtn.classList.add("active-link");
  seeInfoBtn.classList.remove("active-link");
  seeInfo.classList.add("display-none");
  addInfo.classList.remove("display-none");
});

openModalBtn.addEventListener("click", () => {
  openModal();
});

cancelButton.addEventListener("click", () => {
  closeModel();
});

acceptButton.addEventListener("click", () => {
  closeModel();
});
