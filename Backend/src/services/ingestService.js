import {QdrantVectorStore} from "@langchain/qdrant"
import { client, embeddings , qdrantConfig } from "../config/db.js"
import { loadDocument } from "./DocumentLoader.js"
import { chunkDocs } from "../utils/chunking.js"
import { getCollectionNameForFile } from "../utils/collectionName.js";

export async function  ingestDocument(filePath, options = {}) {

    // doc --> chuncks -- embedding 
    const collectionName = await getCollectionNameForFile(
        filePath,
        options.originalName
    );
    const docs  =  await loadDocument(filePath);
    const docsWithMetadata = docs.map((doc) => ({
        ...doc,
        metadata: {
            ...doc.metadata,
            originalName: options.originalName,
            collectionName,
        },
    }));
    const chunks = await chunkDocs(docsWithMetadata);

    await resetCollection(collectionName);

    await QdrantVectorStore.fromDocuments(chunks, embeddings, {
        ...qdrantConfig,
        collectionName,
    });

    return { success : true , collectionName, totalChunks : chunks.length,};

    
}

async function resetCollection(collectionName) {
    const { exists } = await client.collectionExists(collectionName);

    if (exists) {
        await client.deleteCollection(collectionName);
    }

    await client.createCollection(collectionName, {
        vectors: {
            size: 1536,
            distance: "Cosine",
        },
    });
}
