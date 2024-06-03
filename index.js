document.addEventListener("DOMContentLoaded", function() {
    const generateNameButton = document.getElementById("generateNameButton");
    const nameDisplay = document.getElementById("nameDisplay");

    generateNameButton.addEventListener("click", function() {
        fetch("/generate-name")
            .then(response => response.json())
            .then(data => {
                nameDisplay.textContent = `Your name is ${data.name}`;
            })
            .catch(error => console.error("Error:", error));
    });
});
