const getPromotionsFromDB = async () => {
  return fetch("/public/json/promotionsDB.json")
    .then((res) => res.json())
    .catch(console.log);
};
const promotionsCandyContainer = document.getElementById("promotions-candys");
const promotionsMoviesContainer = document.getElementById("promotions-movies");
getPromotionsFromDB().then(console.log);
const loadPromotions = async () => {
  const { promotionsCandys, promotionsMovies } = await getPromotionsFromDB();

  promotionsCandys.forEach(
    ({ imagePromotion, promotionTitle, rangePromotion }) => {
      const promotionContainer = document.createElement("div");
      promotionContainer.classList.add("promotion-card", "d-flex", "gap-3");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("w-50");
      const imagePromotionElement = document.createElement("img");

      imagePromotionElement.src = imagePromotion;
      imageContainer.appendChild(imagePromotionElement);

      promotionContainer.appendChild(imageContainer);

      const infoContainer = document.createElement("div");
      infoContainer.classList.add(
        "w-50",
        "p-1",
        "d-flex",
        "flex-column",
        "justify-content-between"
      );
      promotionContainer.appendChild(infoContainer);

      const promotionTitleElement = document.createElement("span");
      promotionTitleElement.classList.add("text-danger", "h6");
      promotionTitleElement.textContent = promotionTitle;
      infoContainer.appendChild(promotionTitleElement);

      const dateRangeContainer = document.createElement("div");
      dateRangeContainer.classList.add("d-flex", "flex-column");

      rangePromotion.forEach((dateRange) => {
        const dateRangeElementContainer = document.createElement("div");
        const timeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
      </svg>`;
        dateRangeElementContainer.innerHTML += timeIcon;

        const dateRangeElement = document.createElement("span");
        dateRangeElement.classList.add("fw-bold", "ps-1");
        dateRangeElement.style.color = "gray";
        dateRangeElement.style.fontSize = "12px";
        dateRangeElement.textContent = dateRange;
        dateRangeElementContainer.appendChild(dateRangeElement);
        dateRangeContainer.appendChild(dateRangeElementContainer);
      });

      infoContainer.appendChild(dateRangeContainer);
      infoContainer.innerHTML += `<button type="button" class="btn btn-danger">Danger</button>`;
      promotionsCandyContainer.appendChild(promotionContainer);
    }
  );

  promotionsMovies.forEach(
    ({ imagePromotion, promotionTitle, rangePromotion }) => {
      const promotionContainer = document.createElement("div");
      promotionContainer.classList.add("promotion-card", "d-flex", "gap-3");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("w-50");
      const imagePromotionElement = document.createElement("img");

      imagePromotionElement.src = imagePromotion;
      imageContainer.appendChild(imagePromotionElement);

      promotionContainer.appendChild(imageContainer);

      const infoContainer = document.createElement("div");
      infoContainer.classList.add(
        "w-50",
        "p-1",
        "d-flex",
        "flex-column",
        "justify-content-between"
      );
      promotionContainer.appendChild(infoContainer);

      const promotionTitleElement = document.createElement("span");
      promotionTitleElement.classList.add("text-danger", "h6");
      promotionTitleElement.textContent = promotionTitle;
      infoContainer.appendChild(promotionTitleElement);

      const dateRangeContainer = document.createElement("div");
      dateRangeContainer.classList.add("d-flex", "flex-column");

      rangePromotion.forEach((dateRange) => {
        const dateRangeElementContainer = document.createElement("div");
        const timeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
      </svg>`;
        dateRangeElementContainer.innerHTML += timeIcon;

        const dateRangeElement = document.createElement("span");
        dateRangeElement.classList.add("fw-bold", "ps-1");
        dateRangeElement.style.color = "gray";
        dateRangeElement.style.fontSize = "12px";
        dateRangeElement.textContent = dateRange;
        dateRangeElementContainer.appendChild(dateRangeElement);
        dateRangeContainer.appendChild(dateRangeElementContainer);
      });

      infoContainer.appendChild(dateRangeContainer);
      infoContainer.innerHTML += `<button type="button" class="btn btn-danger">Danger</button>`;
      promotionsMoviesContainer.appendChild(promotionContainer);
    }
  );
};

loadPromotions();
