import { Jimp } from "jimp";
import fs from "fs";
import path from "path";

const INPUT_PATH = "src/assets/logo/logo.png";
const PUBLIC_DIR = "public";

async function run() {
  try {
    // 1. Load the original full logo sheet
    console.log("Loading original logo sheet...");
    const original = await Jimp.read(INPUT_PATH);
    
    // 2. Crop the top-left icon centered in a 600x600 square
    // Center of the top-left icon was calculated as X=327, Y=361
    const cropSize = 600;
    const startX = 27;
    const startY = 61;
    
    console.log(`Cropping logo at x=${startX}, y=${startY}, w=${cropSize}, h=${cropSize}...`);
    const croppedLogo = original.clone().crop({ x: startX, y: startY, w: cropSize, h: cropSize });
    
    // Save the clean cropped logo back to the assets folder
    await croppedLogo.write(INPUT_PATH);
    console.log("Clean cropped logo saved to:", INPUT_PATH);
    
    // 3. Regenerate all favicons and PWA icons from the cropped logo
    console.log("Regenerating favicons from cropped logo...");
    const targets = [
      { name: "favicon-16x16.png", width: 16, height: 16 },
      { name: "favicon-32x32.png", width: 32, height: 32 },
      { name: "apple-touch-icon.png", width: 180, height: 180 },
      { name: "android-chrome-192x192.png", width: 192, height: 192 },
      { name: "android-chrome-512x512.png", width: 512, height: 512 },
      { name: "og-image.png", width: 800, height: 800 }
    ];
    
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }
    
    for (const target of targets) {
      const outputPath = path.join(PUBLIC_DIR, target.name);
      const resized = croppedLogo.clone().resize({ w: target.width, h: target.height });
      await resized.write(outputPath);
      console.log(`Generated: ${outputPath} (${target.width}x${target.height})`);
    }
    
    // Copy 32x32 png to favicon.ico
    const png32Path = path.join(PUBLIC_DIR, "favicon-32x32.png");
    const icoPath = path.join(PUBLIC_DIR, "favicon.ico");
    fs.copyFileSync(png32Path, icoPath);
    console.log(`Copied ${png32Path} to ${icoPath}`);
    
    console.log("Favicon regeneration completed successfully!");
    
  } catch (error) {
    console.error("Failed to crop and regenerate logo:", error);
    process.exit(1);
  }
}

run();
