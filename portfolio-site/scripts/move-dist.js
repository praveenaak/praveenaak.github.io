const fs = require('fs-extra');
const path = require('path');

const distPath = path.join(__dirname, '../dist');
const rootPath = path.join(__dirname, '../../');

async function moveFiles() {
  try {
    // Remove existing files in root (except .git and portfolio-site)
    const existingFiles = await fs.readdir(rootPath);
    for (const file of existingFiles) {
      if (file !== '.git' && file !== 'portfolio-site') {
        await fs.remove(path.join(rootPath, file));
      }
    }

    // Move all files from dist to root
    await fs.copy(distPath, rootPath);
    console.log('Successfully moved dist files to root');
  } catch (err) {
    console.error('Error moving dist files:', err);
    process.exit(1);
  }
}

moveFiles();