module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone',
    }
  },

  production: {
    client: 'pg',
    connection:  process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true

  }

};

// '?ssl=true'
