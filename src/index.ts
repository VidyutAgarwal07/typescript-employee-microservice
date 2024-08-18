
import { connect } from "./services/db";
import * as dotenv from 'dotenv';
dotenv.config();

export async function hello(who: string): Promise<string> {
    await connect()
    return `Hello ${who}! `;
}

console.log(hello('world')) 