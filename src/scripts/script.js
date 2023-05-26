function handleModal() {
  const buttons = document.querySelectorAll(".modal__button");
  const modalController = document.querySelector(".modal__controller");

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", function () {
      modalController.showModal();

      closeModal();
    });
  }
}

function closeModal() {
  const button = document.querySelector("#closeModal");
  const modalContainer = document.querySelector(".modal__controller");

  button.addEventListener("click", function () {
    modalContainer.close();
  });
}

function closeModalByOutlineClick() {
  const body = document.querySelector("body");

  body.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal__controller")) {
      const modal = document.querySelector(".modal__controller");
      modal.close();
    }
  });
}

handleModal();
closeModalByOutlineClick();
