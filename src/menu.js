export default (() => {
  const content = document.createElement("div");
  content.id = "content";

  // Title
  const SLOGAN = "Menu";
  const sloganElement = document.createElement("div");
  sloganElement.classList = "title";
  sloganElement.textContent = SLOGAN;
  content.appendChild(sloganElement);

  //menu list maker
  class listMaker {
    constructor(title) {
      this.title = title;
      this.list = [];
      this.listElement = document.createElement("ul");
      this.listElement.id = "menuList";
    }
    addItem(name, price, description, photo) {
      let item = {
        name: name,
        price: price,
        description: description,
        photo: photo,
      };
      this.list.push(item);
    }

    getList() {
      for (const item of this.list) {
        const titleElement = document.createElement("div");
        titleElement.classList = "menuTitle";
        titleElement.textContent = this.title;
        this.listElement.appendChild(titleElement);
        const itemElement = document.createElement("li");

        for (const key of Object.keys(item)) {
          if (item[key] != undefined) {
            const spec = document.createElement("div");
            spec.classList = "menuItem " + key;
            spec.textContent = item[key];
            itemElement.appendChild(spec);
          }
        }
        this.listElement.appendChild(itemElement);
      }
      return this.listElement;
    }
  }

  //burgers
  let burgersList = new listMaker("Burgers");
  burgersList.addItem(
    "Meat Lovers",
    "5$",
    "Meat Burger With Our Special Sauce"
  );
  burgersList.addItem(
    "Chicken Lovers",
    "5$",
    "Zinger Sandwich With Our Special Sauce"
  );
  content.appendChild(burgersList.getList());

  //bevrages
  let beveragesList = new listMaker("Beverages");

  beveragesList.addItem("Coca-Cola", "2$", "Chilled classic Coke");

  beveragesList.addItem("Orange Juice", "3$", "Freshly squeezed orange juice");

  beveragesList.addItem("Water", "1$", "Mineral water bottle");
  content.appendChild(beveragesList.getList());

  //extras
  let extrasList = new listMaker("Extras");

  extrasList.addItem("Fries", "2$", "Crispy golden fries");

  extrasList.addItem("Cheese Dip", "1.5$", "Creamy cheddar dip");

  extrasList.addItem("Onion Rings", "2.5$", "Crunchy onion rings");
  content.appendChild(extrasList.getList());

  return content;
})();
