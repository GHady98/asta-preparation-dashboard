const { chromium } = require('C:/Users/ghadi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const browser=await chromium.launch({headless:true,channel:"msedge"}); const page=await browser.newPage(); await page.goto('http://127.0.0.1:3000'); await page.getByRole('checkbox').first().waitFor(); await page.screenshot({path:'docs/evidence/poc.png',fullPage:true}); await browser.close();})();

