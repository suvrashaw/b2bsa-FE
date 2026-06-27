import json
import os

updates = [
    "src/content/services/tradeshow-booth-solutions/booth-logistics-services/why-choose-us.json",
    "src/content/services/tradeshow-booth-solutions/booth-hostess-services/why-choose-us.json",
    "src/content/services/tradeshow-booth-solutions/trade-show-booth-design/why-choose-us.json",
    "src/content/services/digital-marketing/seo-services/why-choose-us.json",
    "src/content/services/digital-marketing/social-media-marketing/why-choose-us.json",
    "src/content/services/digital-marketing/performance-marketing/why-choose-us.json",
    "src/content/services/media-production/event-experience-video-production/why-choose-us.json",
    "src/content/services/media-production/event-physical-video-shoot/why-choose-us.json",
    "src/content/services/media-production/corporate-video-production/why-choose-us.json",
    "src/content/services/media-production/virtual-video-production/why-choose-us.json",
    "src/content/services/media-production/event-live-streaming-services/why-choose-us.json",
    "src/content/services/global-event-solutions/corporate-networking-events/why-choose-us.json",
    "src/content/services/global-event-solutions/event-branding-solutions/why-choose-us.json",
    "src/content/services/global-event-solutions/corporate-event-solutions/why-choose-us.json"
]

for path in updates:
    if not os.path.exists(path):
        continue
    
    with open(path, 'r') as f:
        data = json.load(f)
        
    heading = data.get("heading", "")
    if heading.endswith('?') or heading.endswith('.'):
        new_heading = heading.rstrip('?.')
        print(f"Updating JSON {path}:\n  Old: {heading}\n  New: {new_heading}")
        data["heading"] = new_heading
        with open(path, 'w') as f:
            json.dump(data, f, indent=2)
            f.write('\n')

tsx_files = [
    "src/app/services/tradeshow-booth-solutions/trade-show-booth-builder/page.tsx",
    "src/app/services/tradeshow-booth-solutions/trade-show-booth-rental/page.tsx"
]

for tsx_path in tsx_files:
    if os.path.exists(tsx_path):
        with open(tsx_path, 'r') as f:
            content = f.read()
        
        # We look for heading="Why Choose...?" and replace it
        if 'Services?"' in content:
            new_content = content.replace('Services?"', 'Services"')
            with open(tsx_path, 'w') as f:
                f.write(new_content)
            print(f"Updated {tsx_path}")

