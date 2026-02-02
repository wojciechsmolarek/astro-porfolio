import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, 'public', 'wojciech-hero.png');
const outputWebP = join(__dirname, 'public', 'wojciech-hero.webp');
const outputAvif = join(__dirname, 'public', 'wojciech-hero.avif');

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    try {
        // Convert to WebP
        console.log('Converting to WebP...');
        await sharp(inputPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputWebP);

        console.log(`✅ WebP created: ${outputWebP}\n`);

        // Convert to AVIF
        console.log('Converting to AVIF...');
        await sharp(inputPath)
            .avif({ quality: 80, effort: 6 })
            .toFile(outputAvif);

        console.log(`✅ AVIF created: ${outputAvif}\n`);

        // Get file sizes for comparison
        const originalSize = statSync(inputPath).size / 1024;
        const webpSize = statSync(outputWebP).size / 1024;
        const avifSize = statSync(outputAvif).size / 1024;

        console.log('📊 Optimization Results:');
        console.log(`   Original PNG: ${originalSize.toFixed(2)} KB`);
        console.log(`   WebP: ${webpSize.toFixed(2)} KB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% smaller)`);
        console.log(`   AVIF: ${avifSize.toFixed(2)} KB (${((1 - avifSize / originalSize) * 100).toFixed(1)}% smaller)`);
        console.log(`\n✨ Total savings: ${(originalSize - avifSize).toFixed(2)} KB with AVIF`);

    } catch (error) {
        console.error('❌ Error optimizing images:', error);
        process.exit(1);
    }
}

optimizeImages();
