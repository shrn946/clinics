import os
import re
import urllib.request
import time
from urllib.error import URLError, HTTPError

SOURCE_DIR = r'C:\primecare\dental'

# We will scan all HTML and CSS files in SOURCE_DIR
missing_assets = set()

# Pattern for local wp-content paths
# Pattern for absolute paths
patterns = [
    r'wp-content/[^\s"\'\(\)]+\.(?:png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)',
    r'https://templateup.site/dental/wp-content/[^\s"\'\(\)]+\.(?:png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)'
]

for root, dirs, files in os.walk(SOURCE_DIR):
    for file in files:
        if file.endswith(('.html', '.css', '.js')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                for pattern in patterns:
                    matches = re.findall(pattern, content)
                    for match in matches:
                        # Normalize to relative path from root
                        if match.startswith('https://templateup.site/dental/'):
                            rel_path = match.replace('https://templateup.site/dental/', '')
                        else:
                            rel_path = match
                            
                        # Clean any query params like ?ver=1.0
                        rel_path = rel_path.split('?')[0].split('#')[0]
                        missing_assets.add(rel_path)
            except Exception as e:
                pass

downloaded = 0
failed = 0

for rel_path in missing_assets:
    local_path = os.path.join(SOURCE_DIR, rel_path.replace('/', '\\'))
    if not os.path.exists(local_path):
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        url = f"https://templateup.site/dental/{rel_path}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                with open(local_path, 'wb') as out_file:
                    out_file.write(response.read())
            downloaded += 1
            print(f"Downloaded: {rel_path}")
        except HTTPError as e:
            print(f"Failed (HTTP {e.code}): {url}")
            failed += 1
        except URLError as e:
            print(f"Failed (URL Error): {url}")
            failed += 1
            
print(f"Total downloaded: {downloaded}, Total failed: {failed}")
