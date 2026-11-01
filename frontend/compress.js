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
        .rotate() // This applies the EXIF orientation to the pixels
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
        
      // Delete original file to save space
      await fs.unlink(img);
    } catch (e) {
      console.error(`Failed to process ${img}:`, e);
    }
  }

  // Also optimize any existing oversized or uncompressed webp images
  const webpImages = await glob('src/assets/**/*.{webp,WEBP}');
  for (const img of webpImages) {
    try {
      const meta = await sharp(img).metadata();
      const stat = await fs.stat(img);
      // If image is wider than 1920px or larger than 1.5MB, re-compress
      if ((meta.width && meta.width > 1920) || stat.size > 1.5 * 1024 * 1024) {
        console.log(`Optimizing large webp ${img} (${(stat.size / 1024 / 1024).toFixed(2)} MB, ${meta.width}x${meta.height})...`);
        const buffer = await sharp(img)
          .rotate()
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toBuffer();
        await fs.writeFile(img, buffer);
        console.log(`Optimized ${img} -> ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
      }
    } catch (e) {
      console.error(`Failed to process webp ${img}:`, e);
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
