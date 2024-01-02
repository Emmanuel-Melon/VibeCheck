import * as dotenv from "dotenv";
import express from "express";
import { databaseURL } from "./config";
import { init } from "./init";
import connect from "./db";
import http from "http";
import Server from "socket.io";

export const app = express();
dotenv.config();
const connection = connect(databaseURL);

/** initialize middleware */
init(app);
