document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const city = document.getElementById("cityInput").value.trim();
  const date = document.getElementById("dateInput").value;
  const category = document.getElementById("categoryInput").value;

  // Save to localStorage
  localStorage.setItem("filters", JSON.stringify({ city, date, category }));

  // Navigate to events page
  window.location.href = "events.html";
});
