const apiKey = "5210ab9ef24546fb8d2a7b6c0a026247";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const newsList = document.getElementById("newsList");
    data.articles.forEach((article) => {
      const newsItem = document.createElement("li");
      newsItem.classList.add("news-item");
      newsItem.innerHTML = `
                  <img src="${article.urlToImage}" alt="${article.title}">
                  <div class="news-item-content">
                      <h2>${article.title}</h2>
                      <p>${article.description}</p>
                      <a class="read-more-link" href="${article.url}" target="_blank">Read More</a>
                  </div>`;
      newsList.appendChild(newsItem);
    });
  })
  .catch((error) => console.error("Error fetching news:", error));
