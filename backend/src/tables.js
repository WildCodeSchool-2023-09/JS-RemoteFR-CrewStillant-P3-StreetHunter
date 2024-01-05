
const ArtworkManager = require("./models/ArtWorkManager");
const UserManager = require("./models/UserManager");

const managers = [
  ArtworkManager,
  UserManager,
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
