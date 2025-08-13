import {GoogleGenAI} from '@google/genai';
import {GEMINI_API} from "./private"

const ai = new GoogleGenAI({apiKey: GEMINI_API});

export default ai;