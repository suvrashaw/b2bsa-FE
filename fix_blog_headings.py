import json
import os

updates = {
    "src/content/services/tradeshow-booth-solutions/trade-show-booth-builder/blog.json": "Latest Insights on Trade Show Booth Building & Custom Exhibiting",
    "src/content/services/tradeshow-booth-solutions/trade-show-booth-design/blog.json": "Latest Insights on Trade Show Booth Design & Experiential Marketing",
    "src/content/services/tradeshow-booth-solutions/trade-show-booth-rental/blog.json": "Latest Insights on Trade Show Booth Rentals & Exhibiting Strategies",
    "src/content/services/media-production/event-physical-video-shoot/blog.json": "Latest Insights on Event Video Shoots & On-Site Coverage",
    "src/content/services/digital-marketing/social-media-marketing/blog.json": "Latest Insights on Social Media Marketing & B2B Engagement"
}

for path, new_heading in updates.items():
    if not os.path.exists(path):
        continue
    
    with open(path, 'r') as f:
        data = json.load(f)
        
    old_heading = data.get("heading", "")
    if old_heading != new_heading:
        print(f"Updating {path}:\n  Old: {old_heading}\n  New: {new_heading}")
        data["heading"] = new_heading
        with open(path, 'w') as f:
            json.dump(data, f, indent=2)
            f.write('\n')

tsx_path = "src/app/services/media-production/corporate-video-production/page.tsx"
if os.path.exists(tsx_path):
    with open(tsx_path, 'r') as f:
        content = f.read()
    
    if 'heading="Blogs"' in content:
        new_content = content.replace('heading="Blogs"', 'heading="Latest Insights on Corporate Video Production & Brand Storytelling"')
        with open(tsx_path, 'w') as f:
            f.write(new_content)
        print(f"Updated {tsx_path}")

