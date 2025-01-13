/* document.querySelectorAll(".read-btn").forEach(button => {
  button.addEventListener("click", function () {
    const bookFileName = this.parentElement.getAttribute("data-book");
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write(
      `<iframe src="${bookFileName}" width="100%" height="100%" style="border:none;"></iframe>`
    );
  });
}); */

document.querySelectorAll(".read-btn").forEach(button => {
      button.addEventListener("click", function () {
        const bookFileName = this.parentElement.getAttribute("data-book");
        const viewerURL = `viewer.html?file=${encodeURIComponent(bookFileName)}`;
        window.open(viewerURL, "_blank"); // Open the viewer in a new tab
      });
    });
