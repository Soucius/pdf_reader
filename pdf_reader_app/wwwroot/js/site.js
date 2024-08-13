document.getElementById("pdfForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const file = document.getElementById("pdfFile").files[0];
    formData.append("file", file);

    const response = await fetch("/api/pdf/upload", {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    document.getElementById("pdfContent").innerText = result.content;
});