document.getElementById("toggleButton").addEventListener("click", function() {
    console.log("Button clicked!"); // Add this line for debugging
    const currentColor = document.body.style.backgroundColor;
    if (currentColor === "rgb(34, 34, 34)") {
        document.body.style.backgroundColor = "#f4f4f4"; // Light color
    } else {
        document.body.style.backgroundColor = "#222222"; // Dark color
    }
});
