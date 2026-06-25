#!/bin/bash
# Re-run mobile audits WITHOUT --preset=perf to get ALL categories
set -e

BASE_URL="http://localhost:3001"
RESULTS_DIR="/Users/suvra/Documents/B2BSA2/.lighthouse/results"

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
  "/terms-and-conditions"
  "/tradeshow-calendar"
)

TOTAL=${#PAGES[@]}
COUNTER=0

for PAGE in "${PAGES[@]}"; do
  COUNTER=$((COUNTER + 1))
  SAFE_NAME=$(echo "$PAGE" | sed 's|^/||; s|/|__|g')
  if [ -z "$SAFE_NAME" ]; then
    SAFE_NAME="homepage"
  fi

  echo "[$COUNTER/$TOTAL] Mobile (full): $PAGE"

  npx -y lighthouse "${BASE_URL}${PAGE}" \
    --output=json \
    --output-path="$RESULTS_DIR/${SAFE_NAME}_mobile.json" \
    --chrome-flags="--headless --no-sandbox --disable-gpu" \
    --form-factor=mobile \
    --screenEmulation.mobile \
    --screenEmulation.width=412 \
    --screenEmulation.height=823 \
    --throttling-method=simulate \
    --quiet 2>/dev/null || echo "  ⚠ Failed: $PAGE"
done

echo ""
echo "All mobile re-audits complete!"
