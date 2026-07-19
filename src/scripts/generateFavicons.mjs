import { Jimp } from "jimp";
import fs from "fs";
import path from "path";

const LOGO_PATH = "src/assets/logo/logo.png";
const PUBLIC_DIR = "public";

async function generate() {
  console.log("Loading logo from:", LOGO_PATH);
  
  try {
    const image = await Jimp.read(LOGO_PATH);
    console.log(`Original logo dimensions: ${image.width}x${image.height}`);
    
    // Target favicon and app icons configurations
    const targets = [
      { name: "favicon-16x16.png", width: 16, height: 16 },
      { name: "favicon-32x32.png", width: 32, height: 32 },
      { name: "apple-touch-icon.png", width: 180, height: 180 },
      { name: "android-chrome-192x192.png", width: 192, height: 192 },
      { name: "android-chrome-512x512.png", width: 512, height: 512 },
      { name: "og-image.png", width: 800, height: 800 }
    ];
    
    // Ensure public folder exists
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }
    
    for (const target of targets) {
      const outputPath = path.join(PUBLIC_DIR, target.name);
      const resized = image.clone().resize({ w: target.width, h: target.height });
      await resized.write(outputPath);
      console.log(`Generated: ${outputPath} (${target.width}x${target.height})`);
    }
    
    // Copy 32x32 png to favicon.ico
    const png32Path = path.join(PUBLIC_DIR, "favicon-32x32.png");
    const icoPath = path.join(PUBLIC_DIR, "favicon.ico");
    fs.copyFileSync(png32Path, icoPath);
    console.log(`Copied ${png32Path} to ${icoPath}`);
    
    console.log("All favicon and app icon assets generated successfully!");
    
  } catch (error) {
    console.error("Failed to generate favicon assets:", error);
    process.exit(1);
  }
}

generate();
