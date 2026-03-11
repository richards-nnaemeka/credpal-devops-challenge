// Simple test to verify the app structure
console.log('Running tests...');

// Test that required files exist
const fs = require('fs');
const path = require('path');

try {
  // Check if server.js exists
  if (fs.existsSync(path.join(__dirname, 'server.js'))) {
    console.log('✅ server.js exists');
  } else {
    console.log('❌ server.js missing');
    process.exit(1);
  }
  
  // Check if package.json exists
  if (fs.existsSync(path.join(__dirname, 'package.json'))) {
    console.log('✅ package.json exists');
  } else {
    console.log('❌ package.json missing');
    process.exit(1);
  }
  
  console.log('All tests passed! ✅');
  process.exit(0);
} catch (error) {
  console.error('Test failed:', error);
  process.exit(1);
}
