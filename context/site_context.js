import { createContext } from "react";
import { getSiteSettings } from "../lib/site";

const SiteContext = createContext(getSiteSettings());

export default SiteContext;
