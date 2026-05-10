import { ingestDocument } from "../services/ingestService.js";
import fs from "fs";

export async function uploadFile(req, res) {
  let filePath = null;
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "File is required",
      });
    }

    filePath = req.file.path;
    const result = await ingestDocument(filePath, {
      originalName: req.file.originalname,
    });

    // Cleanup: Delete file after successful indexing
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.status(200).json({
      success: true,
      message: "Document Indexed",
      data: result
    });
  } catch (error) {
    // Cleanup: Delete file even if indexing fails
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
