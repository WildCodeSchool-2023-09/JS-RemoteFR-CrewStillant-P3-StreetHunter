const ArtworkManager = require("./models/ArtWorkManager");
const ArtistManager = require("./models/ArtistManager");
const CategoryManager = require("./models/CategoryManager");
const UserManager = require("./models/UserManager");
const MessagingManager = require("./models/MessagingManager");

const managers = [
  ArtworkManager,
  ArtistManager,
  CategoryManager,
  UserManager,
  MessagingManager,
];

const tables = {};
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
