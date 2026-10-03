import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { glob } from 'glob';

async function optimizeImages() {
  console.log('Finding images...');
  // Find all jpg, jpeg, png files
  const images = await glob('src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}');
  
  for (const img of images) {
    const ext = path.extname(img);
    const webpPath = img.replace(ext, '.webp');
    
    console.log(`Converting ${img} -> ${webpPath}...`);
    
    try {
      // Resize to max 1920px width to save space, and convert to webp (quality 80)
      await sharp(img)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
        
      // Delete original file to save space
      await fs.unlink(img);
    } catch (e) {
      console.error(`Failed to process ${img}:`, e);
    }
  }
  
  console.log('\nImages converted. Now updating source files...');
  
  // Find all ts/tsx files
  const files = await glob('src/**/*.{ts,tsx}');
  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8');
    
    // Replace .jpg, .jpeg, .png, .JPG, .JPEG, .PNG followed by a quote with .webp
    let newContent = content.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)(['"])/g, '.webp$2');
    
    if (content !== newContent) {
      await fs.writeFile(file, newContent);
      console.log(`Updated imports in ${file}`);
    }
  }
  
  console.log('\nOptimization complete! You should now test your app and commit the changes.');
}

optimizeImages();
