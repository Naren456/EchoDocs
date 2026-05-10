# EchoDocs

EchoDocs is a cinematic, AI-powered research assistant designed to help you extract insights, summaries, and answers directly from your documents. Think of it as your personal research companion, inspired by NotebookLM. It provides an immersive, "operating system" style interface for interacting with your uploaded PDFs and CSVs using advanced RAG (Retrieval-Augmented Generation) techniques.

## Features

- **Immersive Cinematic UI**: Built with React Native and NativeWind, featuring a premium dark-mode design with fluid animations, ambient backgrounds, and a knowledge graph visualization.
- **Document Ingestion (RAG)**: Upload PDF or CSV documents. The system automatically chunks the text, generates vector embeddings, and indexes them in Qdrant for blazing-fast semantic search.
- **Grounded AI Responses**: Powered by OpenRouter and Langchain, EchoDocs answers your queries strictly based on the uploaded document context, complete with source citations.
- **Conversational Awareness**: Handles general greetings naturally while maintaining focus on research and document exploration.
- **Cross-Platform**: Built with Expo, supporting Web, iOS, and Android platforms from a single codebase.

## Architecture & Tech Stack

### Frontend (React Native / Expo)
- **Framework**: Expo / Expo Router
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Animations**: React Native Reanimated
- **Icons**: Lucide React Native
- **HTTP Client**: Axios

### Backend (Node.js / Express)
- **Framework**: Express.js
- **Vector Database**: Qdrant (`@qdrant/js-client-rest`, `@langchain/qdrant`)
- **LLM & Embeddings**: OpenRouter, OpenAI Embeddings (`@langchain/openai`)
- **Document Parsing**: `pdf-parse`, `csv-parse`
- **Orchestration**: Langchain

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A [Qdrant](https://qdrant.tech/) cluster (cloud or local)
- An [OpenRouter](https://openrouter.ai/) API Key

### Backend Setup

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory with the following variables:
   ```env
   PORT=5000
   QDRANT_URL=your_qdrant_cluster_url
   QDRANT_API_KEY=your_qdrant_api_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   MODEL=your_preferred_openrouter_model # e.g., openai/gpt-4o-mini
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Frontend` directory:
   ```env
   EXPO_PUBLIC_API_URL=http://localhost:5000
   ```
4. Start the Expo development server:
   ```bash
   npm start
   ```
5. Open the app in your browser (press `w`), iOS simulator (press `i`), or Android emulator (press `a`).

## Usage

1. **Upload**: Use the interface to upload a PDF or CSV file. The backend will parse, chunk, and index the document into Qdrant.
2. **Chat**: Once uploaded, start asking questions! EchoDocs will retrieve relevant chunks from your document and generate accurate, grounded answers with citations.
