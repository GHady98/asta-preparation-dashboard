import assert from 'node:assert/strict';
import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {}) });
const page = await browser.newPage({ viewport: { width:1280, height:1000 } });
const errors=[];
page.on('pageerror', error=>errors.push(error.message));
await page.goto(process.env.BASE_URL || 'http://127.0.0.1:3001', {waitUntil:'networkidle'});
const boxes=page.getByRole('checkbox');
assert.equal(await boxes.count(),3);
const check=async(count,percent)=>{
  assert.equal(await page.locator('.progress-summary').innerText(),`${count} / 3 tasks complete · ${percent}%`);
  assert.equal(await page.getByRole('progressbar').getAttribute('value'),String(count));
  assert.equal(await boxes.evaluateAll(nodes=>nodes.filter(node=>node.checked).length),count);
};
await check(0,0);
await page.screenshot({path:'docs/evidence/desktop.png',fullPage:true,caret:'initial'});
await boxes.nth(0).check(); await check(1,33);
await boxes.nth(1).check(); await check(2,67);
await boxes.nth(2).check(); await check(3,100);
await page.screenshot({path:'docs/evidence/complete.png',fullPage:true,caret:'initial'});
await boxes.nth(2).uncheck(); await check(2,67);
for(let index=0;index<20;index++){ await boxes.nth(0).click(); await check(index%2===0?1:2,index%2===0?33:67); }
await page.reload({waitUntil:'networkidle'}); await check(0,0);
await page.keyboard.press('Tab');
assert.equal(await page.locator(':focus').innerText(),'Skip to training dashboard');
await page.keyboard.press('Tab');
assert.equal(await page.locator(':focus').getAttribute('aria-label'),'Sword control: complete');
assert.equal(await page.locator(':focus').evaluate(node=>getComputedStyle(node).outlineStyle),'solid');
await page.keyboard.press('Space'); await check(1,33);
await page.screenshot({path:'docs/evidence/keyboard-focus.png',fullPage:true,caret:'initial'});
await page.setViewportSize({width:360,height:800});
await page.reload({waitUntil:'networkidle'});
assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no mobile horizontal overflow');
for(let index=0;index<3;index++){
 const control=boxes.nth(index).locator('..');
 const bounds=await control.boundingBox(); assert.ok(bounds.height>=44 && bounds.width>=44);
}
await page.screenshot({path:'docs/evidence/mobile.png',fullPage:true,caret:'initial'});
await boxes.nth(0).check(); await check(1,33);
await page.screenshot({path:'docs/evidence/mobile-complete.png',fullPage:true,caret:'initial'});
await page.setViewportSize({width:1280,height:1000});
assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
assert.deepEqual(errors,[]);
await browser.close();
console.log('PASS: browser sequence, 20 repeated toggles, refresh reset, keyboard Space and focus, 360px/1280px overflow, 44px controls, no page errors.');
