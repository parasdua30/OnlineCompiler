// Add any necessary JavaScript code here
document.querySelector("button").addEventListener("click", () => {
    alert("Run button clicked!");
});

Split([".editor", ".output"], {
    sizes: [50, 50],
    minSize: 200,
    gutterSize: 10,
    cursor: "col-resize",
    direction: "horizontal",
});

Split([".stdin", ".stdout"], {
    sizes: [50, 50],
    minSize: 100,
    gutterSize: 10,
    cursor: "row-resize",
    direction: "vertical",
});
