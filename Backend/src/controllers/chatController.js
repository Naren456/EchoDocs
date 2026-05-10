import { retrieveChunks } from "../services/retrievalService.js";

import { generateAnswer } from "../services/llmService.js";

export async function  askQuestion(req,res) {
    try {
    const { question, collectionName } = req.body;
    if (!question || typeof question !== "string") {
      return res.status(400).json({
        success: false,
        error: "Question is required",
      });
    }

    let chunks = [];
    try {
      if (collectionName) {
        chunks = await retrieveChunks(question, collectionName);
      }
    } catch (error) {
      console.log("Retrieval skipped or failed:", error.message);
      // Continue without chunks (for greetings/general talk)
    }

    const answer = await generateAnswer(question, chunks);

    res.status(200).json({
      success: true,
      collectionName: collectionName || "default",
      answer,
      source: chunks,
    });
    }
    catch (error){
        res.status(500).json({
      success: false,
      error:
        error.message,
    });
    }
}
