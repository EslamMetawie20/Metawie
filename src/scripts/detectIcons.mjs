import { Jimp } from "jimp";

const BACKGROUND_COLOR = { r: 1, g: 8, b: 22 }; // Top-left pixel color

function colorDistance(c1, c2) {
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}

async function detect() {
  try {
    const image = await Jimp.read("src/assets/logo/logo.png");
    const width = image.width;
    const height = image.height;
    
    // Create a 2D grid representing non-background pixels (downscaled for speed)
    // We will scan at 2px resolution
    const scale = 2;
    const gridW = Math.floor(width / scale);
    const gridH = Math.floor(height / scale);
    const mask = Array(gridH).fill(0).map(() => Array(gridW).fill(false));
    
    console.log(`Scanning image pixels (${width}x${height})...`);
    
    for (let gy = 0; gy < gridH; gy++) {
      for (let gx = 0; gx < gridW; gx++) {
        const x = gx * scale;
        const y = gy * scale;
        const color = image.getPixelColor(x, y);
        const r = (color >> 24) & 255;
        const g = (color >> 16) & 255;
        const b = (color >> 8) & 255;
        
        const dist = colorDistance({ r, g, b }, BACKGROUND_COLOR);
        // If distance > 25, it's a non-background pixel
        if (dist > 25) {
          mask[gy][gx] = true;
        }
      }
    }
    
    // Find connected components (simple BFS)
    const visited = Array(gridH).fill(0).map(() => Array(gridW).fill(false));
    const boxes = [];
    
    for (let gy = 0; gy < gridH; gy++) {
      for (let gx = 0; gx < gridW; gx++) {
        if (mask[gy][gx] && !visited[gy][gx]) {
          // Found a new component, perform BFS
          let minX = gx, maxX = gx;
          let minY = gy, maxY = gy;
          
          const queue = [[gx, gy]];
          visited[gy][gx] = true;
          
          while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            
            if (cx < minX) minX = cx;
            if (cx > maxX) maxX = cx;
            if (cy < minY) minY = cy;
            if (cy > maxY) maxY = cy;
            
            // Check 4-neighbors
            const neighbors = [
              [cx + 1, cy],
              [cx - 1, cy],
              [cx, cy + 1],
              [cx, cy - 1]
            ];
            
            for (const [nx, ny] of neighbors) {
              if (nx >= 0 && nx < gridW && ny >= 0 && ny < gridH) {
                if (mask[ny][nx] && !visited[ny][nx]) {
                  visited[ny][nx] = true;
                  queue.push([nx, ny]);
                }
              }
            }
          }
          
          // Map back to original dimensions
          const boxX = minX * scale;
          const boxY = minY * scale;
          const boxW = (maxX - minX + 1) * scale;
          const boxH = (maxY - minY + 1) * scale;
          
          // Filter out tiny noise elements (e.g. less than 15px)
          if (boxW >= 15 && boxH >= 15) {
            boxes.push({ x: boxX, y: boxY, w: boxW, h: boxH });
          }
        }
      }
    }
    
    console.log(`Detected ${boxes.length} non-background elements:`);
    boxes.forEach((box, i) => {
      console.log(`Element ${i + 1}: x=${box.x}, y=${box.y}, w=${box.w}, h=${box.h}`);
    });
    
  } catch (error) {
    console.error("Error during detection:", error);
  }
}

detect();
