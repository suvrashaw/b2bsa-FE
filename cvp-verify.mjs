import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const URL = 'http://localhost:3000/services/media-production/corporate-video-production';
const OUT = '/tmp/cvp-verify';

const browser = await chromium.launch({ headless: true });
const page    = await browser.newPage();
await page.setViewportSize({ height: 900, width: 1440 });

await page.goto(URL, { timeout: 30_000, waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

// full page screenshot
await page.screenshot({ fullPage: true, path: `${OUT}/00-full.png` });
// hero viewport
await page.screenshot({ clip: { height: 700, width: 1440, x: 0, y: 0 }, path: `${OUT}/01-hero.png` });

// heading inventory in DOM order
const headings = await page.evaluate(() =>
  [...document.querySelectorAll('h1,h2,h3')].map(el => ({
    tag: el.tagName,
    text: el.innerText.trim().replaceAll(/\s+/g, ' ').slice(0, 140),
    y: Math.round(el.getBoundingClientRect().top + window.scrollY),
  }))
);
writeFileSync(`${OUT}/headings.json`, JSON.stringify(headings, null, 2));

// video in hero?
const videoInfo = await page.evaluate(() => {
  const v = document.querySelector('section video');
  return v ? { found: true, src: v.currentSrc || v.querySelector?.('source')?.src } : { found: false };
});
writeFileSync(`${OUT}/video.json`, JSON.stringify(videoInfo));

// header before scroll
const headerInfo = await page.evaluate(() => {
  const h = document.querySelector('header');
  if (!h) return null;
  const s = globalThis.getComputedStyle(h);
  const links = h.querySelectorAll('a');
  const firstLinkColor = links.length > 0 ? globalThis.getComputedStyle(links[0]).color : null;
  return { bg: s.backgroundColor, firstLinkColor, position: s.position };
});
writeFileSync(`${OUT}/header.json`, JSON.stringify(headerInfo));

// targeted section text checks
const checks = [
  'Corporate Video Production solutions',
  'What We Produce in Our Corporate Video Production Services',
  'How Corporate Video Accelerates Your Sales Cycle',
  'Video production tailored to your industry',
  'Check out our video production portfolio',
  'Why Choose B2B Sales Arrow for Corporate Video Production',
  'Corporate Video FAQs',
  'Explore Related Solutions',
  'Blogs',
  'Award-Winning',
  'Expert Team',
  'Global Reach',
  'Proven Results',
  'Event Video Production',
  'Video Editing Services',
  'Live Streaming Services',
];
const found = await page.evaluate((list) =>
  list.map(t => ({ found: document.body.innerText.includes(t), text: t })),
  checks
);
writeFileSync(`${OUT}/sections.json`, JSON.stringify(found, null, 2));

// why-choose-us card titles
const whyCards = await page.evaluate(() => {
  const sec = document.querySelector('#why-choose-us');
  if (!sec) return { sectionFound: false };
  return { cards: [...sec.querySelectorAll('h3')].map(h => h.innerText.trim()), sectionFound: true };
});
writeFileSync(`${OUT}/why-cards.json`, JSON.stringify(whyCards));

// FAQ items count
const faqCount = await page.evaluate(() => {
  const faqSec = document.querySelector('#faq') || [...document.querySelectorAll('section')].find(s => s.innerText.includes('Corporate Video FAQs'));
  if (!faqSec) return { found: false };
  const buttons = faqSec.querySelectorAll('button');
  return { count: buttons.length, found: true, questions: [...buttons].map(b => b.innerText.trim().slice(0, 80)) };
});
writeFileSync(`${OUT}/faq.json`, JSON.stringify(faqCount, null, 2));

// related services
const related = await page.evaluate(() => {
  const sec = [...document.querySelectorAll('section')].find(s => s.innerText.includes('Explore Related Solutions'));
  if (!sec) return { found: false };
  return { found: true, links: [...sec.querySelectorAll('a')].map(a => ({ href: a.getAttribute('href'), text: a.innerText.trim().replaceAll(/\s+/g,' ') })) };
});
writeFileSync(`${OUT}/related.json`, JSON.stringify(related, null, 2));

// scroll screenshots at 900px intervals
const totalH = await page.evaluate(() => document.body.scrollHeight);
for (let i = 0, y = 0; y < totalH; y += 900, i++) {
  await page.evaluate(yy => window.scrollTo(0, yy), y);
  await page.waitForTimeout(350);
  await page.screenshot({ clip: { height:900, width:1440, x:0, y:0 }, path: `${OUT}/scroll-${String(i).padStart(2,'0')}.png` });
}

await browser.close();
console.log('DONE');
