/** @format */

import { Client } from "fero-dc";

import { config as dotenvConfig } from "dotenv";

dotenvConfig();

import c from "./config/config.json";

import { Config } from "./interfaces/Config";

const config = c as Config;

import { connect } from "mongoose";

const client: Client = new Client(config);

client.reload(process.env.TOKEN).then(console.log);

connect(config.MongoDBURI, config.MongoDB).then(() =>
  console.log("Connected to the database!")
);
