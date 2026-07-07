import os
import glob
import re
from bs4 import BeautifulSoup

SOURCE_DIR = r'C:\primecare\html\medizen'
APP_DIR = r'C:\primecare\app\demo-9'

os.makedirs(APP_DIR, exist_ok=True)

html_files = glob.glob(os.path.join(SOURCE_DIR, '*.html'))

def fix_link(match):
    page = match.group(1).replace('.html', '')
    if page == 'index':
        return 'href="/demo-9"'
    return f'href="/demo-9/{page}"'

for file_path in html_files:
    filename = os.path.basename(file_path)
    print(f"Processing: {filename}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    s = BeautifulSoup(content, 'html.parser')
    
    # Remove header, footer, preloader, mouse follower, search, offcanvas from individual pages
    if s.header:
        s.header.decompose()
        
    if s.footer:
        s.footer.decompose()
        
    preloader = s.find(id='preloader')
    if not preloader:
        preloader = s.find(class_='preloader')
    if preloader:
        preloader.decompose()
        
    follower = s.find(class_='mouse-follower')
    if follower:
        follower.decompose()
        
    search_wrap = s.find(class_='search-wrap')
    if search_wrap:
        search_wrap.decompose()
        
    fix_area = s.find(class_='fix-area')
    if fix_area:
        fix_area.decompose()
        
    overlay = s.find(class_='offcanvas__overlay')
    if overlay:
        overlay.decompose()

    # Get body contents without headers/footers
    body_content = ""
    if s.body:
        # Some templates have page-wrapper or smooth-content
        smooth_content = s.body.find('div', id='smooth-content')
        if smooth_content:
            body_content = smooth_content.decode_contents()
        else:
            page_wrapper = s.body.find('div', class_='page-wrapper')
            if page_wrapper:
                body_content = page_wrapper.decode_contents()
            else:
                body_content = s.body.decode_contents()
    else:
        body_content = str(s)
        
    # Replace asset paths to point to public assets folder
    body_content = body_content.replace('href="assets/', 'href="/demo-9/assets/')
    body_content = body_content.replace('src="assets/', 'src="/demo-9/assets/')
    body_content = body_content.replace("url('assets/", "url('/demo-9/assets/")
    body_content = body_content.replace('url("assets/', 'url("/demo-9/assets/')
    body_content = body_content.replace('url(assets/', 'url(/demo-9/assets/')
    
    # Map links from flat HTML pages to Next.js routes
    body_content = re.sub(r'href="([^"]+\.html)"', fix_link, body_content)
    
    # Strip script tags
    body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL)
    
    # Escape template string markers
    body_content = body_content.replace('`', '\\`').replace('$', '\\$')
    
    # Construct page metadata titles
    title = "MediZen - Health & Medical"
    if filename == 'about.html':
        title = "About Us | MediZen"
    elif filename == 'service.html':
        title = "Our Services | MediZen"
    elif filename == 'service-details.html':
        title = "Service Details | MediZen"
    elif filename == 'doctor.html':
        title = "Our Doctors | MediZen"
    elif filename == 'doctor-details.html':
        title = "Doctor Details | MediZen"
    elif filename == 'project.html':
        title = "Our Projects | MediZen"
    elif filename == 'project-details.html':
        title = "Project Details | MediZen"
    elif filename == 'pricing.html':
        title = "Pricing Plans | MediZen"
    elif filename == 'blog.html':
        title = "Blog & News | MediZen"
    elif filename == 'blog-details.html':
        title = "Blog Details | MediZen"
    elif filename == 'contact.html':
        title = "Contact Us | MediZen"
    elif filename == 'index2.html':
        title = "Home 02 | MediZen"
    elif filename == 'index3.html':
        title = "Home 03 | MediZen"
        
    # We can use standard Next.js Head component or generateMetadata, but metadata is cleaner in layout or page files
    tsx_content = f"""'use client';

import React, {{useEffect}} from 'react';

export default function Page() {{
  useEffect(() => {{
    // Trigger scroll and load events so that scripts on page mount bind correctly
    const timer = setTimeout(() => {{
      const $ = (window as any).jQuery;
      if ($) {{
        $(window).trigger('resize');
        if (typeof (window as any).WOW !== 'undefined') {{
          try {{
            new (window as any).WOW().init();
          }} catch (e) {{}}
        }}
      }}
    }}, 500);
    return () => clearTimeout(timer);
  }}, []);

  return (
    <div dangerouslySetInnerHTML={{{{__html: `{body_content}`}}}} />
  );
}}
"""
    # Determine directory
    if filename == 'index.html':
        page_dir = APP_DIR
    else:
        page_name = filename.replace('.html', '')
        page_dir = os.path.join(APP_DIR, page_name)
        os.makedirs(page_dir, exist_ok=True)
        
    with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(tsx_content)
        
print("Successfully generated all pages for demo-9.")
