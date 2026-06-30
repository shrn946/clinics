import os
import glob
import re
import shutil
from bs4 import BeautifulSoup
import json

SOURCE_DIR = r'C:\primecare\dental'
APP_DIR = r'C:\primecare\app\demo-6'
PUB_DIR = r'C:\primecare\public\demo-6'
COMP_DIR = r'C:\primecare\components\demo-6'

os.makedirs(APP_DIR, exist_ok=True)
os.makedirs(PUB_DIR, exist_ok=True)
os.makedirs(COMP_DIR, exist_ok=True)

# List of allowed pages (excluding blog-related)
PAGES = {
    'index.html': '/demo-6',
    'about-us/index.html': '/demo-6/about-us',
    'contact-us/index.html': '/demo-6/contact-us',
    'services/index.html': '/demo-6/services',
    'dental-appliances/index.html': '/demo-6/dental-appliances',
    'lenses/index.html': '/demo-6/lenses',
    'pricing-plan-01/index.html': '/demo-6/pricing-plan-01',
    'pricing-plan-02/index.html': '/demo-6/pricing-plan-02',
    'prosthetics/index.html': '/demo-6/prosthetics',
    'root-canal-treatment/index.html': '/demo-6/root-canal-treatment',
    'the-most-popular-cosmetic-procedures-in-dentistry/index.html': '/demo-6/the-most-popular-cosmetic-procedures-in-dentistry',
    'tooth-whitening/index.html': '/demo-6/tooth-whitening',
}

def clean_text(text):
    if not text: return text
    
    # Paths replacements
    text = text.replace('wp-content/plugins/', 'assets/plugins/')
    text = text.replace('wp-content/themes/', 'assets/themes/')
    text = text.replace('wp-content/uploads/', 'assets/uploads/')
    text = text.replace('wp-includes/', 'assets/system/')
    
    # Core WP and Elementor class/id replacements
    text = text.replace('elementor', 'theme')
    text = text.replace('Elementor', 'Theme')
    text = text.replace('wp-image-', 'img-id-')
    text = text.replace('wp-block-', 'block-')
    text = text.replace('wp-classes', 'theme-classes')
    
    # Fix paths from ../ to root
    text = text.replace('href="../../wp-', 'href="/demo-6/assets/')
    text = text.replace('src="../../wp-', 'src="/demo-6/assets/')
    text = text.replace('href="../wp-', 'href="/demo-6/assets/')
    text = text.replace('src="../wp-', 'src="/demo-6/assets/')
    text = text.replace('href="wp-', 'href="/demo-6/assets/')
    text = text.replace('src="wp-', 'src="/demo-6/assets/')
    
    text = text.replace('url(../../wp-', 'url(/demo-6/assets/')
    text = text.replace('url(../wp-', 'url(/demo-6/assets/')
    text = text.replace('url(wp-', 'url(/demo-6/assets/')
    
    # Remove wp-* classes safely
    text = re.sub(r'\bwp-\w+\b', '', text)
    
    # Update links
    for old, new in PAGES.items():
        if old == 'index.html':
            text = text.replace('href="index.html"', 'href="/demo-6"')
            text = text.replace('href="../index.html"', 'href="/demo-6"')
            text = text.replace('href="../../index.html"', 'href="/demo-6"')
        else:
            old_path = old.replace('/index.html', '')
            text = text.replace(f'href="{old}"', f'href="{new}"')
            text = text.replace(f'href="../{old}"', f'href="{new}"')
            text = text.replace(f'href="../../{old}"', f'href="{new}"')
            text = text.replace(f'href="{old_path}/"', f'href="{new}"')
            text = text.replace(f'href="../{old_path}/"', f'href="{new}"')
            text = text.replace(f'href="../../{old_path}/"', f'href="{new}"')
            
    # Also strip absolute domain links if any
    text = text.replace('https://primecare.example.com/', '/demo-6/') 
    
    return text

def process_assets():
    # We copy wp-content and wp-includes to public/demo-6/assets
    for folder in ['wp-content', 'wp-includes']:
        src = os.path.join(SOURCE_DIR, folder)
        if not os.path.exists(src): continue
        for root, dirs, files in os.walk(src):
            for file in files:
                if file.endswith('.php'): continue # skip php
                src_file = os.path.join(root, file)
                rel_path = os.path.relpath(src_file, SOURCE_DIR)
                # Map to new path
                new_rel = rel_path.replace('wp-content\\plugins', 'assets\\plugins')\
                                  .replace('wp-content\\themes', 'assets\\themes')\
                                  .replace('wp-content\\uploads', 'assets\\uploads')\
                                  .replace('wp-includes', 'assets\\system')
                
                new_rel = new_rel.replace('wp-content/plugins', 'assets/plugins')\
                                 .replace('wp-content/themes', 'assets/themes')\
                                 .replace('wp-content/uploads', 'assets/uploads')\
                                 .replace('wp-includes', 'assets/system')
                                 
                new_rel = new_rel.replace('elementor', 'theme')
                
                dst_file = os.path.join(PUB_DIR, new_rel)
                os.makedirs(os.path.dirname(dst_file), exist_ok=True)
                
                # If text file, read, clean and write. Else just copy
                if src_file.endswith(('.css', '.js', '.svg', '.json')):
                    try:
                        with open(src_file, 'r', encoding='utf-8') as f:
                            content = f.read()
                        content = clean_text(content)
                        with open(dst_file, 'w', encoding='utf-8') as f:
                            f.write(content)
                    except Exception as e:
                        print(f"Error reading {src_file}, treating as binary: {e}")
                        shutil.copy2(src_file, dst_file)
                else:
                    shutil.copy2(src_file, dst_file)

print("Processing assets...")
process_assets()

# Extract layout from index.html
with open(os.path.join(SOURCE_DIR, 'index.html'), 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

css_links = []
for link in soup.find('head').find_all('link'):
    rel = link.get('rel', [])
    if 'stylesheet' in rel or 'preconnect' in rel:
        href = clean_text(link.get('href', ''))
        if href.startswith('assets/'):
            href = '/demo-6/' + href
        link_str = f'<link rel="{" ".join(rel) if isinstance(rel, list) else rel}" href="{href}" />'
        if link.get('id'):
            link_id = clean_text(link.get('id', ''))
            link_str = link_str.replace('/>', f'id="{link_id}" />')
        css_links.append(link_str)

js_links = []
for script in soup.find('body').find_all('script'):
    if script.get('src'):
        src = clean_text(script.get('src', ''))
        if src.startswith('assets/'):
            src = '/demo-6/' + src
        js_links.append(src)

layout_tsx = f"""
export default function Demo6Layout({{ children }}: {{ children: React.ReactNode }}) {{
  return (
    <html lang="en">
      <head>
        {chr(10).join(css_links)}
      </head>
      <body>
        {{children}}
      </body>
    </html>
  );
}}
"""
with open(os.path.join(APP_DIR, 'layout.tsx'), 'w', encoding='utf-8') as f:
    f.write(layout_tsx)

script_loader_tsx = f"""
'use client';
import {{ useEffect }} from 'react';

export default function Demo6ScriptLoader() {{
  useEffect(() => {{
    const loadScript = (src: string) => {{
      return new Promise<void>((resolve) => {{
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      }});
    }};

    const initScripts = async () => {{
      if (typeof window !== 'undefined') {{
        const scripts = {json.dumps(js_links)};
        for (const src of scripts) {{
          await loadScript(src);
        }}
      }}
    }};
    
    initScripts();
  }}, []);

  return null;
}}
"""
with open(os.path.join(COMP_DIR, 'Demo6ScriptLoader.tsx'), 'w', encoding='utf-8') as f:
    f.write(script_loader_tsx)

print("Processing HTML pages...")
for src_file, route in PAGES.items():
    full_src = os.path.join(SOURCE_DIR, src_file)
    if not os.path.exists(full_src):
        print(f"File not found: {full_src}")
        continue
        
    with open(full_src, 'r', encoding='utf-8') as f:
        html = f.read()
        
    html = clean_text(html)
    soup = BeautifulSoup(html, 'html.parser')
    
    body = soup.find('body')
    for script in body.find_all('script'):
        script.decompose()
        
    # We also remove SVG that acts as WP's weird injected icon pack unless it's used
    
    body_html = "".join([str(x) for x in body.contents])
    
    page_tsx = f"""
import Demo6ScriptLoader from '@/components/demo-6/Demo6ScriptLoader';
import Chatbot from '@/components/Chatbot';

export default function Page() {{
  return (
    <>
      <div dangerouslySetInnerHTML={{{{ __html: `{body_html.replace('`', '\\`').replace('$', '\\$')}` }}}} />
      <Chatbot themeColor="#00bcd4" />
      <Demo6ScriptLoader />
    </>
  );
}}
"""
    route_path = route.replace('/demo-6', '').strip('/')
    if route_path:
        page_dir = os.path.join(APP_DIR, route_path)
    else:
        page_dir = APP_DIR
        
    os.makedirs(page_dir, exist_ok=True)
    with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(page_tsx)
    print(f"Generated {route}/page.tsx")

print("Done!")
