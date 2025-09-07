export default (() => {
  const content = document.createElement("div");
  content.id = "content";

  //slogan
  const SLOGAN = "Home of the Legendary White Sauce";
  const sloganElement = document.createElement("div");
  sloganElement.classList = "slogan";
  sloganElement.textContent = SLOGAN;
  content.appendChild(sloganElement);
  //headline
  const headlineElement = document.createElement("div");
  headlineElement.classList = "headline boxed";
  headlineElement.textContent = `
    M&A Burger isn’t just a place to eat — it’s where juicy, handcrafted burgers
    meet our silky, signature white sauce, creating an unforgettable flavor
    experience that keeps guests coming back for more.
  `;
  content.appendChild(headlineElement);

  //location
  const locationElement = document.createElement("div");
  locationElement.classList = "location boxed";
  locationElement.textContent = `
Red Room 🫣🫣
  `;
  content.appendChild(locationElement);
  return content;
})();
