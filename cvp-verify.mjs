import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const URL = 'http://localhost:3000/services/media-production/corporate-video-production';
const OUT = '/tmp/cvp-verify';

const browser = await chromium.launch({ headless: true });
const page    = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2500);

// full page screenshot
await page.screenshot({ path: `${OUT}/00-full.png`, fullPage: true });
// hero viewport
await page.screenshot({ path: `${OUT}/01-hero.png`, clip: { x: 0, y: 0, width: 1440, height: 700 } });

// heading inventory in DOM order
const headings = await page.evaluate(() =>
  Array.from(document.querySelectorAll('h1,h2,h3')).map(el => ({
    tag: el.tagName,
    text: el.innerText.trim().replace(/\s+/g, ' ').slice(0, 140),
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
  const s = window.getComputedStyle(h);
  const links = h.querySelectorAll('a');
  const firstLinkColor = links.length ? window.getComputedStyle(links[0]).color : null;
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
  list.map(t => ({ text: t, found: document.body.innerText.includes(t) })),
  checks
);
writeFileSync(`${OUT}/sections.json`, JSON.stringify(found, null, 2));

// why-choose-us card titles
const whyCards = await page.evaluate(() => {
  const sec = document.getElementById('why-choose-us');
  if (!sec) return { sectionFound: false };
  return { sectionFound: true, cards: Array.from(sec.querySelectorAll('h3')).map(h => h.innerText.trim()) };
});
writeFileSync(`${OUT}/why-cards.json`, JSON.stringify(whyCards));

// FAQ items count
const faqCount = await page.evaluate(() => {
  const faqSec = document.getElementById('faq') || Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes('Corporate Video FAQs'));
  if (!faqSec) return { found: false };
  const buttons = faqSec.querySelectorAll('button');
  return { found: true, count: buttons.length, questions: Array.from(buttons).map(b => b.innerText.trim().slice(0, 80)) };
});
writeFileSync(`${OUT}/faq.json`, JSON.stringify(faqCount, null, 2));

// related services
const related = await page.evaluate(() => {
  const sec = Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes('Explore Related Solutions'));
  if (!sec) return { found: false };
  return { found: true, links: Array.from(sec.querySelectorAll('a')).map(a => ({ text: a.innerText.trim().replace(/\s+/g,' '), href: a.getAttribute('href') })) };
});
writeFileSync(`${OUT}/related.json`, JSON.stringify(related, null, 2));

// scroll screenshots at 900px intervals
const totalH = await page.evaluate(() => document.body.scrollHeight);
for (let i = 0, y = 0; y < totalH; y += 900, i++) {
  await page.evaluate(yy => window.scrollTo(0, yy), y);
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${OUT}/scroll-${String(i).padStart(2,'0')}.png`, clip: { x:0, y:0, width:1440, height:900 } });
}

await browser.close();
console.log('DONE');
