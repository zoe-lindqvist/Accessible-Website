document.addEventListener("DOMContentLoaded", function () {
  const exhibitions = [
    {
      title: "Livet i Norden",
      description: "Genom 500 år och fyra årstider",
      color: "#ff4629",
    },
    {
      title: "Arctic Life",
      description: "Livet medan isen smälter",
      color: "#aed9e0",
    },
    {
      title: "Tidsvalvet",
      description: "Gör dig redo för en resa i tiden",
      color: "#001f97",
    },
    {
      title: "Traditioner",
      description: "Om årets och livets högtider",
      color: "#ffb9ff",
    },
    {
      title: "Lekstugan",
      description: "Lek livet på landet på 1890-talet",
      color: "#8c550f",
    },
    {
      title: "Lekstugan",
      description: "Lek livet på landet på 1890-talet",
      color: "#fffa00",
    },
  ];

  const exhibitionsGrid = document.getElementById("exhibitions-grid");

  exhibitions.forEach((exhibit) => {
    const card = document.createElement("div");
    card.className = "exhibit-card";
    card.style.backgroundColor = exhibit.color;

    const title = document.createElement("h3");
    title.textContent = exhibit.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = exhibit.description;
    card.appendChild(description);

    exhibitionsGrid.appendChild(card);
  });
});
