function modalOpenClose() {
  const modalTitles = document.querySelectorAll(".modal-title");

  modalTitles.forEach((modalTitle) => {
    modalTitle.onclick = () => {
      const modalCard = modalTitle.nextElementSibling;
      modalCard.classList.toggle("open");
    };
  });
}
modalOpenClose();
