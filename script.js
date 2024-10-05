document.addEventListener("DOMContentLoaded", () => {
  // Array of exhibition data, each object represents an exhibition
  const exhibitions = [
    {
      title: "Ocean Depths", // The title of the exhibit
      description: "Colors beneath the sea", // Description of the exhibit
      color: "#ff4629",
      textColor: "white",
      imageUrl: "images/exhibit1.webp",
    },
    {
      title: "Color Through Time",
      description: "A journey through color in history",
      color: "#98CDB2",
      textColor: "#1414FF",
      imageUrl: "images/exhibit2.webp",
    },
    {
      title: "Northern Spectrum",
      description: "The magic of the North",
      color: "#001f97",
      textColor: "#98CDB2",
      imageUrl: "images/exhibit3.webp",
    },
    {
      title: "Tradition Hues",
      description: "The meaning of color in global traditions",
      color: "#ffb9ff",
      textColor: "#8C550F",
      imageUrl: "images/exhibit4.webp",
    },
    {
      title: "Urban Canvas",
      description: "How cities use color in design",
      color: "#8c550f",
      textColor: "#FFB9FF",
      imageUrl: "images/exhibit5.webp",
    },
    {
      title: "Nature’s Palette",
      description: "Colors in nature",
      color: "#fffa00",
      textColor: "#5A6950",
      imageUrl: "images/exhibit6.webp",
    },
  ];

  // Get the parent container where all the exhibit cards will be added
  const exhibitionsGrid = document.getElementById("exhibitions-grid");

  // Loop through each exhibit in the exhibitions array
  exhibitions.forEach((exhibit) => {
    // Create a new div element for each exhibit card
    const card = document.createElement("div");
    card.className = "exhibit-card"; // Assign a class for styling
    card.style.backgroundColor = exhibit.color; // Set the background color based on the exhibit data

    // Accessibility: Adding ARIA role "listitem" to mark this as an item in a list
    card.setAttribute("role", "listitem");

    // Allow the card to be focusable with the keyboard by adding tabIndex
    card.tabIndex = 0;

    // Accessibility: Adding an ARIA label for screen readers
    // This describes the exhibit's title and description when a screen reader focuses on the card
    card.setAttribute(
      "aria-label",
      `${exhibit.title} - ${exhibit.description}`
    );

    // Create a div for the image and set the background image style
    const imageDiv = document.createElement("div");
    imageDiv.className = "card-image"; // Assign a class for styling
    imageDiv.style.backgroundImage = `url(${exhibit.imageUrl})`; // Use the image URL from the exhibit data

    // Accessibility: Adding a hidden <img> element for alt text
    // This ensures that screen readers can access the image description, even though it's not visible
    const img = document.createElement("img");
    img.src = exhibit.imageUrl; // Use the exhibit's image URL
    img.alt = `${exhibit.title} - ${exhibit.description}`; // Use the exhibit's title and description for the alt text
    img.style.display = "none"; // Hide the image visually, but it's still accessible to screen readers

    imageDiv.appendChild(img); // Append the hidden <img> to the imageDiv
    card.appendChild(imageDiv); // Append the imageDiv to the exhibit card

    // Create an h3 element for the exhibit title and set its text content
    const title = document.createElement("h3");
    title.textContent = exhibit.title; // Set the title text
    title.style.color = exhibit.textColor; // Apply the text color from the exhibit data
    card.appendChild(title); // Add the title to the exhibit card

    // Create a p element for the exhibit description
    const description = document.createElement("p");
    description.textContent = exhibit.description; // Set the description text
    description.style.color = exhibit.textColor; // Apply the text color from the exhibit data
    card.appendChild(description); // Add the description to the exhibit card

    // Keyboard interaction: Add an event listener for the Enter or Space key
    // This allows users to "select" an exhibit using the keyboard
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Prevent the default action of the key
        alert(`You selected ${exhibit.title}`); // Show an alert with the selected exhibit's title
      }
    });

    // Append the exhibit card to the exhibitions grid container
    exhibitionsGrid.appendChild(card);
  });
});
