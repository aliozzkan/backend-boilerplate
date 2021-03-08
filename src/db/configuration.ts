import { useContainer } from "routing-controllers";
import { createConnection } from "typeorm";
import Container from "typedi";

useContainer(Container);

createConnection({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: ["dist/db/entity/**/*.{js,ts}"],
})
  .then(async (connection) => {
    console.log("Connected DB");
  })
  .catch((error) => console.log(error));
