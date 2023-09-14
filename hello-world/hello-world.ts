/* this is a demo file */
import _ from "lodash";
import { GREETING } from "./constants";

export const helloWorld = () => {
    console.log(_.capitalize(GREETING));
}