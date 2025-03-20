import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../assets');

async function cleanMetadata(filePath) {
    try {
        const image = sharp(filePath);
        const cleanedImage = await image.withMetadata().toBuffer();
        const fileName = path.basename(filePath);
        fs.writeFileSync(filePath, cleanedImage);
        console.log(`Metadata removed from: ${fileName}`);
    } catch (error) {
        console.error(`Error processing ${fileName}:`, error);
    }
}
async function processAssets() {
    try {
        const files = fs.readdirSync(assetsDir);

        for (const file of files) {
            const filePath = path.join(assetsDir, file);
            const stats = fs.statSync(filePath);

            if (stats.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file)) {
                await cleanMetadata(filePath);
            }
        }
    } catch (error) {
        console.error('Error processing assets folder:', error);
    }
}

processAssets();