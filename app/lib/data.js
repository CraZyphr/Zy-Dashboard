// this is the file we will use to fetch our data

import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        // Ensure that the database connection is established before attempting to fetch users
       connectToDB();

        // Once the connection is established, fetch users from the User model
        const users = await User.find();

        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch Users!");
    }
};
