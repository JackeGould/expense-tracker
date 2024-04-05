import path from "path"
import * as dotenv from "dotenv"
import { dirname } from "dirname-filename-esm"
import { default as expressConfig } from "../../express.config.js"

console.log(expressConfig);

dotenv.config({ path: path.join(dirname(import.meta), "../../", `${expressConfig.env[process.env.NODE_ENV]}`) })
