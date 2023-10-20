// Example centralized API returning whitelist for different chains and adresses
const express = require("express");
require("dotenv").config();
const fs = require("fs");

// Basic expresssJS server listener
const app = express();
const port = 4884;
app.listen(port, () => {
  console.log(`Whitelist API server listening on port ${port}`);
});

// Functions storing and checking if address is contained in a whitelist

// let whitelist = new Map();
let whitelist = ["0xEC813bd125b1359486b1E77074b63A6f1323988f", "0xa084f998dA3B5D4e490D295f3E15A40379DBc787", ];

const addAddressToTheWhitelist = async (address) => {
    try {
        whitelist.push(address);
        return true
    } catch (error) {
        console.error(error);
        return false
      }
}

const checkIfAddressIsIncluded = async (address) => {
    try {
        const isIncluded = await whitelist.includes(address)
        return isIncluded
    } catch (error) {
        console.error(error);
        return false
      }
}

// API endpoints

/**
 * Returns whether or not given address is whitelisted
 */
app.get("/api/isAddressWhitelisted", (req, res) => {
    (async () => {
      try {
        const { address } = await req.query;
        console.log(`got address: ${address}`)
        return res.send({
          result: await checkIfAddressIsIncluded(address),
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          Error: `${error}`,
        });
      }
    })();
  });