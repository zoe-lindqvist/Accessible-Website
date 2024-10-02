document.addEventListener("DOMContentLoaded", function () {
  const exhibitions = [
    {
      title: "Livet i Norden",
      description: "Genom 500 år och fyra årstider",
      color: "#ff4629",
      imageUrl: "images/exhibit2.webp", // Image for this card
    },
    {
      title: "Arctic Life",
      description: "Livet medan isen smälter",
      color: "#98CDB2",
      imageUrl: "images/exhibit2.webp",
    },
    {
      title: "Tidsvalvet",
      description: "Gör dig redo för en resa i tiden",
      color: "#001f97",
      imageUrl: "images/exhibit3.webp",
    },
    {
      title: "Traditioner",
      description: "Om årets och livets högtider",
      color: "#ffb9ff",
      imageUrl: "images/exhibit4.webp",
    },
    {
      title: "Lekstugan",
      description: "Lek livet på landet på 1890-talet",
      color: "#8c550f",
      imageUrl: "images/exhibit5.webp",
    },
    {
      title: "Lekstugan",
      description: "Lek livet på landet på 1890-talet",
      color: "#fffa00",
      imageUrl: "images/exhibit6.webp",
    },
  ];

  const exhibitionsGrid = document.getElementById("exhibitions-grid");

  exhibitions.forEach((exhibit) => {
    const card = document.createElement("div");
    card.className = "exhibit-card";
    card.style.backgroundColor = exhibit.color;

    // Create image div and set the background image
    const imageDiv = document.createElement("div");
    imageDiv.className = "card-image";
    imageDiv.style.backgroundImage = `url(${exhibit.imageUrl})`;
    card.appendChild(imageDiv);

    const title = document.createElement("h3");
    title.textContent = exhibit.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = exhibit.description;
    card.appendChild(description);

    exhibitionsGrid.appendChild(card);
  });
});
