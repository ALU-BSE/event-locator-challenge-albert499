const container = document.getElementById("eventsContainer");
const filters = JSON.parse(localStorage.getItem("filters")) || {};

const filteredEvents = events.filter(event => {
  const matchCity = !filters.city || event.location.toLowerCase().includes(filters.city.toLowerCase());
  const matchDate = !filters.date || event.date === filters.date;
  const matchCategory = !filters.category || event.category === filters.category;
  return matchCity && matchDate && matchCategory;
});

if (filteredEvents.length === 0) {
  container.innerHTML = "<p>No events found for your search criteria.</p>";
} else {
  filteredEvents.forEach(event => {
    container.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text"><strong>Date:</strong> ${event.date}</p>
            <p class="card-text"><strong>Location:</strong> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
}
