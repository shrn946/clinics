import os
import glob
import shutil
from bs4 import BeautifulSoup

SOURCE_DIR = r'C:\primecare\html\medixen'
APP_DIR = r'C:\primecare\app\demo-8'
PUB_DIR = r'C:\primecare\public\demo-8'

os.makedirs(APP_DIR, exist_ok=True)
os.makedirs(PUB_DIR, exist_ok=True)

# Copy assets to public directory
assets_src = os.path.join(SOURCE_DIR, 'assets')
assets_dest = os.path.join(PUB_DIR, 'assets')
if os.path.exists(assets_src):
    shutil.copytree(assets_src, assets_dest, dirs_exist_ok=True)

html_files = glob.glob(os.path.join(SOURCE_DIR, '*.html'))

def generate_tsx(html_content, is_index=False):
    # Fix paths
    html_content = html_content.replace('href="assets/', 'href="/demo-8/assets/')
    html_content = html_content.replace('src="assets/', 'src="/demo-8/assets/')
    
    # Fix internal links
    # medixen has flat files like about.html, service.html
    # We map them to /demo-8/about, /demo-8/service
    import re
    # Match href="somepage.html"
    def fix_link(match):
        page = match.group(1)
        if page == 'index.html':
            return 'href="/demo-8"'
        return f'href="/demo-8/{page.replace(".html", "")}"'
        
    html_content = re.sub(r'href="([^"]+\.html)"', fix_link, html_content)
    
    # Extract body content if possible, or just dump it all.
    # The safest way for these complex templates is often to dump the whole body inner HTML.
    soup = BeautifulSoup(html_content, 'html.parser')
    
    head_html = ""
    if soup.head:
        # Extract CSS links to add to a <style> block or just put them in head
        for link in soup.head.find_all('link', rel='stylesheet'):
            head_html += str(link) + "\n"
    
    body_content = ""
    if soup.body:
        # Remove script tags from body and move them to a separate component if we were being rigorous,
        # but dangerouslySetInnerHTML won't execute scripts. 
        # For a quick Next.js wrapper, we can just put it all in.
        body_content = "".join([str(c) for c in soup.body.contents])
    else:
        body_content = html_content
        
    # Escape backticks and $ for template string
    body_content = body_content.replace('`', '\\`').replace('$', '\\$')
    head_html = head_html.replace('`', '\\`').replace('$', '\\$')

    tsx = f"""
export default function Page() {{
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: `{head_html}`}} />
      <div dangerouslySetInnerHTML={{__html: `{body_content}`}} />
    </>
  );
}}
"""
    return tsx

for file_path in html_files:
    filename = os.path.basename(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if filename == 'index.html':
        page_dir = APP_DIR
    else:
        page_name = filename.replace('.html', '')
        page_dir = os.path.join(APP_DIR, page_name)
        os.makedirs(page_dir, exist_ok=True)
        
    tsx_content = generate_tsx(content, is_index=(filename == 'index.html'))
    
    with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(tsx_content)

print("Created Next.js pages for demo-8")
