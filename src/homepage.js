export default (() => {
  const content = document.createElement("div");
  content.id = "content";

  //slogan
  const SLOGAN = "Home of the Legendary White Sauce";
  const sloganElement = document.createElement("div");
  sloganElement.classList = "title";
  sloganElement.textContent = SLOGAN;
  content.appendChild(sloganElement);
  //headline
  const headlineElement = document.createElement("div");
  headlineElement.classList = "headline boxed";
  headlineElement.innerText = `M&A Burger isn’t just a place to eat — it’s where juicy, handcrafted burgers
    meet our silky, signature white sauce, creating an unforgettable flavor
    experience that keeps guests coming back for more.
  `;
  content.appendChild(headlineElement);

  //location
  const locationElement = document.createElement("div");
  locationElement.classList = "boxed";
  const locationLabel = document.createElement("div");
  locationLabel.classList = "label";
  locationLabel.innerText = "Location";

  // Create actual location text
  const locationText = document.createElement("div");
  locationText.classList = "location-text";
  locationText.innerText = "Red Room 🫣🫣";

  // Append both to the container
  locationElement.appendChild(locationLabel);
  locationElement.appendChild(locationText);

  // Add to content
  content.appendChild(locationElement);
  return content;
})();
