module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/sprintBAA.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/test/migrations"
    },
    seeds: {
      directory: "./database/test/seeds"
    }
  }
};
