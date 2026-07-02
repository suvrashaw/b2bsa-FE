import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Navigating to localhost:3005...');
  try {
    await page.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  } catch (e) {
    console.error('Failed to load page. Is the server running?');
    await browser.close();
    process.exit(1);
  }
  
  console.log('Page loaded. Simulating scroll...');
  
  let previousScrollY = await page.evaluate(() => window.scrollY);
  let stuckCount = 0;
  let backwardCount = 0;
  
  // We'll scroll down by simulating wheel events to mimic real user behavior,
  // since lenis intercepts wheel events.
  
  for (let i = 0; i < 150; i++) {
    // Dispatch a wheel event to scroll down
    await page.mouse.wheel(0, 50);
    
    // Wait a little for smooth scroll to catch up
    await page.waitForTimeout(50);
    
    const currentScrollY = await page.evaluate(() => window.scrollY);
    
    if (currentScrollY < previousScrollY) {
      console.log(`Scroll went BACKWARDS! previous: ${previousScrollY}, current: ${currentScrollY} (Iteration ${i})`);
      backwardCount++;
    } else if (currentScrollY === previousScrollY && currentScrollY > 0) {
      stuckCount++;
    }
    
    previousScrollY = currentScrollY;
  }
  
  console.log(`Analysis complete. Backward jumps: ${backwardCount}, Stuck counts: ${stuckCount}`);
  
  await browser.close();
})();
