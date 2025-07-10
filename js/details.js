const params = new URLSearchParams(window.location.search);
const eventId = parseInt(params.get("id"));
const event = events.find(e => e.id === eventId);

if (event) {
  document.getElementById("eventDetails").innerHTML = `
    <h2>${event.name}</h2>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Category:</strong> ${event.category}</p>
    <p>${event.description}</p>
    <a href="events.html" class="btn btn-secondary mt-3">Back to Events</a>
  `;
} else {
  document.getElementById("eventDetails").innerHTML = "<p>Event not found.</p>";
}
