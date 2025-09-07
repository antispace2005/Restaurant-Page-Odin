export default (() => {
  const content = document.createElement("div");
  content.id = "content";

  // Title
  const SLOGAN = "Meet the Heart Behind M&A Burger";
  const sloganElement = document.createElement("div");
  sloganElement.classList = "title";
  sloganElement.textContent = SLOGAN;
  content.appendChild(sloganElement);

  // Mr. A – Owner
  const mrAElement = document.createElement("div");
  mrAElement.classList = "person boxed";
  mrAElement.innerText = `Mr. A is the proud owner of M&A Burger. With a passion for flavor and a commitment 
    to quality, he built this place from the ground up to serve legendary white sauce 
    and unforgettable burgers.

    📞 555-123-4567
    📧 mr.a@ma-burger.fake
  `;
  content.appendChild(mrAElement);

  // Mrs. M – Wife
  const mrsMElement = document.createElement("div");
  mrsMElement.classList = "person boxed";
  mrsMElement.innerText = `Mrs. M is the heart of the kitchen and the soul of the brand. Her support and 
    creativity helped shape the M&A experience into what it is today.

    📞 555-987-6543
    📧 mrs.m@ma-burger.fake
  `;
  content.appendChild(mrsMElement);

  return content;
})();
