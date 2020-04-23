const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

const customConfig = {
  development: {
    connection: {
      database: "gola",
    },
  },
  test: {
    connection: {
      database: "gola_test",
    },
  },
  production: {
    rejectUnauthorized: true,
    connection: `${DB_URL}?ssl=true`,
  },
};

module.exports = { ...customConfig[ENV], ...baseConfig };
