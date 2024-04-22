import { Client, Account, Databases } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
export const account = new Account(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6625552daabc2d382f3a");

export { ID } from "appwrite";
