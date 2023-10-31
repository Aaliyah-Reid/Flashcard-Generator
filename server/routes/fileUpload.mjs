import { Router } from "express";
const router = Router();
import multer from "multer";
import { appendFileSync } from "fs";
import { join } from "path";
import path from 'path';



const destination = path.join(__dirname,"uploads");

const storage = multer.diskStorage({
    destination: destination,
    filename: (file, cb) => {
        cb(null, file.originalname);
      },
});
const upload = multer({storage});

router.post("/api/upload", upload.array("files"), (req,res)=>{
    const uploadedFiles = req.files;

    for (const file of uploadedFiles){
        const content = file.buffer.toString("ut-8");
        const firstSentence = extractFirstSentence(content);
        
        const filePath = join(__dirname, "data", "server-doc.txt");
        appendFileSync(filePath, firstSentence + "\n");
       
    }
    res.json({message:"Files uploaded, and sentences extracted ad added to doc."});

});

function extractFirstSentence(text) {
    const sentenceMatch = text.match(/[^.!?]*[.!?]/);
    return sentenceMatch ? sentenceMatch[0].trim() : "";
}

export default router;