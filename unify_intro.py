import os
import json
import re

services_dir = "src/content/services"
app_dir = "src/app/services"

def process_service_dir(content_dir, app_page_path):
    if not os.path.exists(content_dir):
        return
    
    proof_bar_path = os.path.join(content_dir, "proof-bar.json")
    spotlight_path = os.path.join(content_dir, "spotlight.json")
    intro_path = os.path.join(content_dir, "intro.json")
    
    source_json = None
    source_name = None
    if os.path.exists(proof_bar_path):
        source_json = proof_bar_path
        source_name = "proof-bar.json"
    elif os.path.exists(spotlight_path):
        source_json = spotlight_path
        source_name = "spotlight.json"
    
    if source_json:
        # Load and update JSON
        with open(source_json, 'r') as f:
            data = json.load(f)
        
        if "heading" in data:
            data["titleLine1"] = data.pop("heading")
        
        # Write to intro.json
        with open(intro_path, 'w') as f:
            json.dump(data, f, indent=2)
            f.write('\n')
        
        # Remove old file
        if source_json != intro_path:
            os.remove(source_json)
        print(f"Migrated {source_name} to intro.json in {content_dir}")
        
    # Now update content.ts
    content_ts_path = os.path.join(content_dir, "content.ts")
    if os.path.exists(content_ts_path):
        with open(content_ts_path, 'r') as f:
            content_ts = f.read()
        
        # Replace file imports
        content_ts = content_ts.replace('./proof-bar.json', './intro.json')
        content_ts = content_ts.replace('./spotlight.json', './intro.json')
        
        # Replace export names
        content_ts = content_ts.replace('_PROOF_BAR', '_INTRO')
        content_ts = content_ts.replace('_SPOTLIGHT', '_INTRO')
        
        with open(content_ts_path, 'w') as f:
            f.write(content_ts)
            
    # Now update page.tsx
    if os.path.exists(app_page_path):
        with open(app_page_path, 'r') as f:
            page_tsx = f.read()
            
        page_tsx = page_tsx.replace('_PROOF_BAR', '_INTRO')
        page_tsx = page_tsx.replace('_SPOTLIGHT', '_INTRO')
        page_tsx = re.sub(r'proofBar=\{([A-Z_]+_INTRO)\}', r'spotlight={\1}', page_tsx)
        
        with open(app_page_path, 'w') as f:
            f.write(page_tsx)

# Walk through src/content/services
for root, dirs, files in os.walk(services_dir):
    if "content.ts" in files:
        # Found a service directory
        rel_path = os.path.relpath(root, services_dir)
        app_page_path = os.path.join(app_dir, rel_path, "page.tsx")
        
        process_service_dir(root, app_page_path)

print("Migration completed.")
