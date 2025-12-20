import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";

export const client = new OpenAI({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});
 
 