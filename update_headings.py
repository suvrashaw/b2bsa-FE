import json
import os
import re

updates = {
    "src/content/services/tradeshow-booth-solutions/booth-logistics-services/why-choose-us.json": "Why Choose B2B Sales Arrow for Booth Logistics Services?",
    "src/content/services/tradeshow-booth-solutions/booth-hostess-services/why-choose-us.json": "Why Choose B2B Sales Arrow for Event Hostess Services?",
    "src/content/services/tradeshow-booth-solutions/trade-show-booth-design/why-choose-us.json": "Why Choose B2B Sales Arrow for Trade Show Booth Design Services?",
    "src/content/services/digital-marketing/seo-services/why-choose-us.json": "Why Choose B2B Sales Arrow for SEO Services?",
    "src/content/services/digital-marketing/social-media-marketing/why-choose-us.json": "Why Choose B2B Sales Arrow for Social Media Marketing Services?",
    "src/content/services/digital-marketing/performance-marketing/why-choose-us.json": "Why Choose B2B Sales Arrow for Performance Marketing Services?",
    "src/content/services/media-production/event-experience-video-production/why-choose-us.json": "Why Choose B2B Sales Arrow for Event Experience Video Production Services?",
    "src/content/services/media-production/event-physical-video-shoot/why-choose-us.json": "Why Choose B2B Sales Arrow for Event Physical Video Shoot Services?",
    "src/content/services/media-production/corporate-video-production/why-choose-us.json": "Why Choose B2B Sales Arrow for Corporate Video Production Services?",
    "src/content/services/media-production/virtual-video-production/why-choose-us.json": "Why Choose B2B Sales Arrow for Virtual Video Production Services?",
    "src/content/services/media-production/event-live-streaming-services/why-choose-us.json": "Why Choose B2B Sales Arrow for Event Live Streaming Services?",
    "src/content/services/global-event-solutions/corporate-networking-events/why-choose-us.json": "Why Choose B2B Sales Arrow for Corporate Networking Event Solutions?",
    "src/content/services/global-event-solutions/event-branding-solutions/why-choose-us.json": "Why Choose B2B Sales Arrow for Event Branding Solutions?",
    "src/content/services/global-event-solutions/corporate-event-solutions/why-choose-us.json": "Why Choose B2B Sales Arrow for Corporate Event Solutions?"
}

for path, new_heading in updates.items():
    if not os.path.exists(path):
        print(f"Warning: {path} not found.")
        continue
    
    with open(path, 'r') as f:
        data = json.load(f)
        
    old_heading = data.get("heading", "")
    if old_heading != new_heading:
        print(f"Updating JSON {path}:\n  Old: {old_heading}\n  New: {new_heading}")
        data["heading"] = new_heading
        with open(path, 'w') as f:
            json.dump(data, f, indent=2)
            f.write('\n')

builder_path = "src/app/services/tradeshow-booth-solutions/trade-show-booth-builder/page.tsx"
if os.path.exists(builder_path):
    with open(builder_path, 'r') as f:
        builder_content = f.read()
    if 'heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading}' in builder_content:
        new_content = builder_content.replace('heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading}', 'heading="Why Choose B2B Sales Arrow for Trade Show Booth Builder Services?"')
        with open(builder_path, 'w') as f:
            f.write(new_content)
        print("Updated trade-show-booth-builder/page.tsx")

rental_path = "src/app/services/tradeshow-booth-solutions/trade-show-booth-rental/page.tsx"
if os.path.exists(rental_path):
    with open(rental_path, 'r') as f:
        rental_content = f.read()
    if 'heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading}' in rental_content:
        new_content = rental_content.replace('heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading}', 'heading="Why Choose B2B Sales Arrow for Trade Show Booth Rental Services?"')
        with open(rental_path, 'w') as f:
            f.write(new_content)
        print("Updated trade-show-booth-rental/page.tsx")

