document.addEventListener("DOMContentLoaded", () => {
  const exhibitions = [
    {
      title: "Ocean Depths",
      description: "Colors beneath the sea",
      color: "#ff4629",
      textColor: "#A5EDF9",
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

  const exhibitionsGrid = document.getElementById("exhibitions-grid");

  exhibitions.forEach((exhibit) => {
    const card = document.createElement("div");
    card.className = "exhibit-card";
    card.style.backgroundColor = exhibit.color;

    // Add role="listitem" for better ARIA compliance
    card.setAttribute("role", "listitem");
    card.tabIndex = 0; // Make the card focusable

    // Set ARIA label for screen readers
    card.setAttribute(
      "aria-label",
      `${exhibit.title} - ${exhibit.description}`
    );

    // Create image div and set the background image
    const imageDiv = document.createElement("div");
    imageDiv.className = "card-image";
    imageDiv.style.backgroundImage = `url(${exhibit.imageUrl})`;
    card.appendChild(imageDiv);

    // Create title and apply text color
    const title = document.createElement("h3");
    title.textContent = exhibit.title;
    title.style.color = exhibit.textColor;
    card.appendChild(title);

    // Create description and apply text color
    const description = document.createElement("p");
    description.textContent = exhibit.description;
    description.style.color = exhibit.textColor;
    card.appendChild(description);

    // Add event listeners for keyboard interaction (Enter or Space)
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        alert(`You selected ${exhibit.title}`);
      }
    });

    exhibitionsGrid.appendChild(card);
  });
});
