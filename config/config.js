module.exports = {
  "development": {
    "username": "root",
    "password": process.env.LOCAL_DB_PASSWORD || null,
    "database": "expense_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "expense_db",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
