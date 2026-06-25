import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const RESULTS_DIR = '/Users/suvra/Documents/B2BSA2/.lighthouse/results';
const OUTPUT_FILE = '/Users/suvra/Documents/B2BSA2/.lighthouse/detailed-results.json';

async function parseDetailed() {
  const files = (await readdir(RESULTS_DIR)).filter(f => f.endsWith('.json')).sort();
  const results = [];

  for (const file of files) {
    try {
      const raw = await readFile(join(RESULTS_DIR, file), 'utf-8');
      const report = JSON.parse(raw);

      const baseName = file.replace('.json', '');
      const isDesktop = baseName.endsWith('_desktop');
      const mode = isDesktop ? 'desktop' : 'mobile';
      const pageName = baseName.replace(/_desktop$|_mobile$/, '').replace(/__/g, '/');
      const page = pageName === 'homepage' ? '/' : `/${pageName}`;

      const cats = report.categories || {};
      const audits = report.audits || {};

      // Category scores
      const scores = {};
      for (const [key, cat] of Object.entries(cats)) {
        scores[key] = cat.score !== null ? Math.round(cat.score * 100) : null;
      }

      // Key metrics with full detail
      const metrics = {};
      const metricKeys = [
        'first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time',
        'cumulative-layout-shift', 'speed-index', 'interactive', 'server-response-time',
      ];
      for (const key of metricKeys) {
        if (audits[key]) {
          metrics[key] = {
            displayValue: audits[key].displayValue || '',
            numericValue: audits[key].numericValue || null,
            score: audits[key].score !== null ? Math.round(audits[key].score * 100) : null,
          };
        }
      }

      // Performance opportunities (with savings)
      const opportunities = [];
      for (const [key, audit] of Object.entries(audits)) {
        if (
          audit.details?.type === 'opportunity' &&
          audit.details?.overallSavingsMs > 0
        ) {
          const items = (audit.details.items || []).slice(0, 5).map(item => ({
            url: item.url || item.node?.snippet || '',
            wastedBytes: item.wastedBytes || 0,
            wastedMs: item.wastedMs || 0,
            totalBytes: item.totalBytes || 0,
          }));
          opportunities.push({
            id: key,
            title: audit.title,
            displayValue: audit.displayValue || '',
            savingsMs: audit.details.overallSavingsMs,
            savingsBytes: audit.details.overallSavingsBytes || 0,
            score: audit.score !== null ? Math.round(audit.score * 100) : null,
            items,
          });
        }
      }
      opportunities.sort((a, b) => b.savingsMs - a.savingsMs);

      // Diagnostics
      const diagnostics = [];
      const diagKeys = [
        'dom-size', 'mainthread-work-breakdown', 'bootup-time',
        'font-display', 'third-party-summary', 'largest-contentful-paint-element',
        'lcp-lazy-loaded', 'layout-shifts', 'long-tasks', 'unsized-images',
        'uses-passive-event-listeners', 'no-document-write', 'uses-http2',
        'render-blocking-resources', 'critical-request-chains',
        'total-byte-weight', 'network-rtt', 'network-server-latency',
      ];
      for (const key of diagKeys) {
        if (audits[key] && audits[key].score !== null && audits[key].score < 1) {
          const items = (audits[key].details?.items || []).slice(0, 5).map(item => {
            const clean = {};
            for (const [k, v] of Object.entries(item)) {
              if (typeof v === 'string' || typeof v === 'number') clean[k] = v;
              if (k === 'node' && v?.snippet) clean.snippet = v.snippet;
            }
            return clean;
          });
          diagnostics.push({
            id: key,
            title: audits[key].title,
            displayValue: audits[key].displayValue || '',
            score: Math.round(audits[key].score * 100),
            description: (audits[key].description || '').split('[Learn more]')[0].trim(),
            items,
          });
        }
      }

      // Accessibility issues
      const a11yIssues = [];
      const a11yRef = cats.accessibility?.auditRefs || [];
      for (const ref of a11yRef) {
        const audit = audits[ref.id];
        if (audit && audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'manual' && audit.scoreDisplayMode !== 'notApplicable') {
          const items = (audit.details?.items || []).slice(0, 5).map(item => ({
            snippet: item.node?.snippet || '',
            selector: item.node?.selector || '',
            explanation: item.node?.explanation || '',
            failureSummary: item.failureSummary || item.node?.failureSummary || '',
          }));
          a11yIssues.push({
            id: ref.id,
            title: audit.title,
            description: (audit.description || '').split('[Learn more]')[0].trim(),
            score: Math.round(audit.score * 100),
            impact: ref.weight || 0,
            items,
          });
        }
      }
      a11yIssues.sort((a, b) => b.impact - a.impact);

      // SEO issues
      const seoIssues = [];
      const seoRef = cats.seo?.auditRefs || [];
      for (const ref of seoRef) {
        const audit = audits[ref.id];
        if (audit && audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'manual' && audit.scoreDisplayMode !== 'notApplicable') {
          const items = (audit.details?.items || []).slice(0, 5).map(item => {
            const clean = {};
            for (const [k, v] of Object.entries(item)) {
              if (typeof v === 'string' || typeof v === 'number') clean[k] = v;
              if (k === 'node' && v?.snippet) clean.snippet = v.snippet;
            }
            return clean;
          });
          seoIssues.push({
            id: ref.id,
            title: audit.title,
            description: (audit.description || '').split('[Learn more]')[0].trim(),
            score: Math.round(audit.score * 100),
            items,
          });
        }
      }

      // Best practices issues
      const bpIssues = [];
      const bpRef = cats['best-practices']?.auditRefs || [];
      for (const ref of bpRef) {
        const audit = audits[ref.id];
        if (audit && audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'manual' && audit.scoreDisplayMode !== 'notApplicable') {
          const items = (audit.details?.items || []).slice(0, 5).map(item => {
            const clean = {};
            for (const [k, v] of Object.entries(item)) {
              if (typeof v === 'string' || typeof v === 'number') clean[k] = v;
              if (k === 'node' && v?.snippet) clean.snippet = v.snippet;
              if (k === 'source' && typeof v === 'object') clean.source = v.url || JSON.stringify(v);
            }
            return clean;
          });
          bpIssues.push({
            id: ref.id,
            title: audit.title,
            description: (audit.description || '').split('[Learn more]')[0].trim(),
            score: Math.round(audit.score * 100),
            items,
          });
        }
      }

      // Passed audits count
      const passedCount = Object.values(audits).filter(a => a.score === 1).length;
      const failedCount = Object.values(audits).filter(a => a.score !== null && a.score < 1).length;

      results.push({
        file, page, mode, scores, metrics,
        opportunities,
        diagnostics,
        a11yIssues,
        seoIssues,
        bpIssues,
        passedCount,
        failedCount,
      });
    } catch (e) {
      console.error(`Failed to parse ${file}: ${e.message}`);
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`Parsed ${results.length} detailed results → ${OUTPUT_FILE}`);
}

parseDetailed().catch(console.error);
