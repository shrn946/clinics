import os
import re
import urllib.request

html_content = open(r'C:\primecare\app\demo-6\page.tsx', encoding='utf-8').read()
urls = re.findall(r'https://templateup.site/dental/[^\s"\'\(\)]+', html_content)
urls = list(set(urls))

print(f"Total absolute URLs found: {len(urls)}")
for url in urls[:10]:
    print(url)
