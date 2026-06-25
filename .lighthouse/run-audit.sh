#!/bin/bash
# Lighthouse audit script — runs all static pages in desktop + mobile modes
# Results are saved as JSON files in .lighthouse/results/

set -e

BASE_URL="http://localhost:3001"
RESULTS_DIR="/Users/suvra/Documents/B2BSA2/.lighthouse/results"
mkdir -p "$RESULTS_DIR"

# All static pages (excluding dynamic [slug]/[id] routes)
PAGES=(
  "/"
  "/about-us"
  "/blogs"
  "/case-studies"
  "/contact-us"
  "/cookie-policy"
  "/demo"
  "/privacy-policy"
  "/services"
  "/services/digital-marketing"
  "/services/digital-marketing/performance-marketing"
  "/services/digital-marketing/seo-services"
  "/services/digital-marketing/social-media-marketing"
  "/services/global-event-solutions"
  "/services/global-event-solutions/corporate-event-solutions"
  "/services/global-event-solutions/corporate-networking-events"
  "/services/global-event-solutions/event-branding-solutions"
  "/services/global-event-solutions/event-experience-creation"
  "/services/hpmi/human-powered-market-intelligence"
  "/services/market-research"
  "/services/market-research/data-augmentation-services"
  "/services/market-research/data-validation-services"
  "/services/media-production"
  "/services/media-production/corporate-video-production"
  "/services/media-production/event-experience-video-production"
  "/services/media-production/event-live-streaming-services"
  "/services/media-production/event-physical-video-shoot"
  "/services/media-production/event-video-production"
  "/services/media-production/virtual-video-production"
  "/services/sales-qualified-lead-generation"
  "/services/sales-qualified-lead-generation/event-lead-generation"
  "/services/tradeshow-booth-solutions"
  "/services/tradeshow-booth-solutions/booth-hostess-services"
  "/services/tradeshow-booth-solutions/booth-logistics-services"
  "/services/tradeshow-booth-solutions/modular-booth-solutions"
  "/services/tradeshow-booth-solutions/trade-show-booth-builder"
  "/services/tradeshow-booth-solutions/trade-show-booth-design"
  "/services/tradeshow-booth-solutions/trade-show-booth-rental"
  "/services/tradeshow-booth-solutions/tradeshow-calendar"
  "/terms-and-conditions"
  "/tradeshow-calendar"
)

TOTAL=${#PAGES[@]}
COUNTER=0

for PAGE in "${PAGES[@]}"; do
  COUNTER=$((COUNTER + 1))
  # Build a safe filename from the page path
  SAFE_NAME=$(echo "$PAGE" | sed 's|^/||; s|/|__|g')
  if [ -z "$SAFE_NAME" ]; then
    SAFE_NAME="homepage"
  fi

  echo ""
  echo "======================================================================"
  echo "[$COUNTER/$TOTAL] Auditing: $PAGE"
  echo "======================================================================"

  # --- MOBILE ---
  echo "  → Mobile audit..."
  npx -y lighthouse "${BASE_URL}${PAGE}" \
    --output=json \
    --output-path="$RESULTS_DIR/${SAFE_NAME}_mobile.json" \
    --chrome-flags="--headless --no-sandbox --disable-gpu" \
    --preset=perf \
    --form-factor=mobile \
    --throttling-method=simulate \
    --quiet 2>/dev/null || echo "  ⚠ Mobile audit failed for $PAGE"

  # --- DESKTOP ---
  echo "  → Desktop audit..."
  npx -y lighthouse "${BASE_URL}${PAGE}" \
    --output=json \
    --output-path="$RESULTS_DIR/${SAFE_NAME}_desktop.json" \
    --chrome-flags="--headless --no-sandbox --disable-gpu" \
    --preset=desktop \
    --form-factor=desktop \
    --throttling-method=simulate \
    --quiet 2>/dev/null || echo "  ⚠ Desktop audit failed for $PAGE"

  echo "  ✓ Done: $PAGE"
done

echo ""
echo "======================================================================"
echo "All audits complete! Results saved to: $RESULTS_DIR"
echo "======================================================================"
