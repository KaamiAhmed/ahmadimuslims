  function openPDF(url) {
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write(
      `<iframe src="${url}" width="100%" height="100%" style="border:none;"></iframe>`
    );
  }
