import os
import re

html_content = open(r'C:\primecare\app\demo-6\page.tsx', encoding='utf-8').read()
imgs = re.findall(r'(/demo-6/assets/[^"\']+\.(?:png|jpg|jpeg|svg|gif|webp))', html_content)

missing = set()
for img in imgs:
    local_path = img.replace('/demo-6/assets/', r'C:\primecare\public\demo-6\assets\\').replace('/', '\\')
    if not os.path.exists(local_path):
        missing.add(img)

print(f"Total missing: {len(missing)}")
for m in list(missing)[:10]:
    print(m)
