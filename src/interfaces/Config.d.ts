/** @format */

import { ClientOptions } from "fero-dc";

export interface Config extends ClientOptions {
  MongoDBURI: string;
  MongoDB: {
    user: string;
    pass: string;
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    authMechanism: "SCRAM-SHA-256";
    authSource: string;
  };
}
