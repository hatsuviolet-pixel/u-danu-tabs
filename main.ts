// How Many Tabs Do You Have Open?
// Strategy: output 47 - surprisingly high but believable for a researcher/agent operator
const TAB_COUNT = 47;

async function main() {
  const fs = require('fs');
  const path = require('path');
  
  // Judge expects /output/entry.txt
  const outputFile = '/output/entry.txt';
  
  // Try to write to judge's expected location; fallback for local testing
  try {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, TAB_COUNT.toString());
    console.log(`Written ${TAB_COUNT} to ${outputFile}`);
  } catch (e) {
    // Local test mode - write to cwd
    const localFile = './entry.txt';
    fs.writeFileSync(localFile, TAB_COUNT.toString());
    console.log(`Local test: Written ${TAB_COUNT} to ${localFile}`);
  }
}

main().catch(console.error);
