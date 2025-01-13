document.querySelectorAll(".read-btn").forEach(button => {
  button.addEventListener("click", function () {
    const bookFileName = this.parentElement.getAttribute("data-book");
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write(
      `<iframe src="${bookFileName}" width="100%" height="100%" style="border:none;"></iframe>`
    );
  });
});
