import { Jimp } from "jimp";
import fs from "fs";
import path from "path";

// URL of Eslam Metawie's GitHub Avatar
const AVATAR_URL = "https://media.licdn.com/dms/image/v2/D4E03AQELzbjGk4_rlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682598674405?e=1785974400&v=beta&t=rwbXwLSq67UrYNsE_-dI4z5ABGNaHo0trApn4-bSlvM";

async function generate() {
  console.log("Fetching avatar from:", AVATAR_URL);
  
  try {
    const image = await Jimp.read(AVATAR_URL);
    
    // Target grid dimensions for desktop portrait (rows and columns)
    const width = 100;
    const height = 64;
    
    image.resize({ w: width, h: height });
    
    const brightnessMatrix = [];
    
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const color = image.getPixelColor(x, y);
        // Extract RGB
        const r = (color >> 24) & 255;
        const g = (color >> 16) & 255;
        const b = (color >> 8) & 255;
        
        // Calculate grayscale brightness (0.0 to 1.0)
        // Standard relative luminance formula
        const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        
        // Round to 3 decimal places to keep data file compact
        row.push(parseFloat(brightness.toFixed(3)));
      }
      brightnessMatrix.push(row);
    }
    
    // Save directory check
    const targetDir = path.resolve("./src/data");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    const outputPath = path.join(targetDir, "portraitMatrix.ts");
    
    const fileContent = `// Centralized Portrait Brightness Matrix for Generative Code Rendering
// Generated dynamically from GitHub avatar URL: ${AVATAR_URL}

export const PORTRAIT_WIDTH = ${width};
export const PORTRAIT_HEIGHT = ${height};

export const portraitMatrix: number[][] = ${JSON.stringify(brightnessMatrix, null, 2)};
`;
    
    fs.writeFileSync(outputPath, fileContent, "utf-8");
    console.log("Portrait matrix successfully saved to:", outputPath);
    
  } catch (error) {
    console.error("Failed to generate portrait matrix:", error);
    process.exit(1);
  }
}

generate();
