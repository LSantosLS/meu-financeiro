console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
module.exports = {
  "type": "mysql",
  "url": process.env.DATABASE_URL,
  "entities": [
    `./${process.env.BASE_URL
    }/modules/**/typeorm/entities/*{.ts,.js}`
  ],
  "migrations": [
    `./${process.env.BASE_URL}/typeorm/migrations/*{.ts,.js}`
  ],
  "cli": {
    "migrationsDir": "./src/typeorm/migrations"
  },
}


// {
//   "entities": [
//     "src/entity/**/*.ts"
//   ],
//   "migrations": [
//     "src/migration/**/*.ts"
//   ],
//   "subscribers": [
//     "src/subscriber/**/*.ts"
//   ],
//   "cli": {
//     "entitiesDir": "src/entity",
//     "migrationsDir": "src/migration",
//     "subscribersDir": "src/subscriber"
//   }
// }
