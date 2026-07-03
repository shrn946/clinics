import os
import glob
import re
from bs4 import BeautifulSoup

SOURCE_DIR = r'C:\primecare\html\medixen'
APP_DIR = r'C:\primecare\app\demo-8'
COMP_DIR = r'C:\primecare\components\demo-8'

os.makedirs(COMP_DIR, exist_ok=True)

def html_to_jsx(html_str):
    # Convert standard HTML to JSX
    html_str = html_str.replace('class="', 'className="')
    html_str = html_str.replace('for="', 'htmlFor="')
    html_str = html_str.replace('<!--', '{/*')
    html_str = html_str.replace('-->', '*/}')
    
    # Self-closing tags regex
    # Match <img ...> that doesn't end with />
    html_str = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_str)
    html_str = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_str)
    html_str = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_str)
    html_str = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_str)
    
    # Fix paths
    html_str = html_str.replace('href="assets/', 'href="/demo-8/assets/')
    html_str = html_str.replace('src="assets/', 'src="/demo-8/assets/')
    
    # Fix inline styles (very basic)
    # Convert style="background-image: url('...');" to style={{backgroundImage: "url('...')"}}
    html_str = re.sub(
        r'style="background-image:\s*url\((.*?)\);?"', 
        r'style={{ backgroundImage: "url(\1)" }}', 
        html_str
    )
    return html_str

# Read index.html to extract Header and Footer
with open(os.path.join(SOURCE_DIR, 'index.html'), 'r', encoding='utf-8') as f:
    index_html = f.read()

soup = BeautifulSoup(index_html, 'html.parser')

header_tag = soup.find('header')
footer_tag = soup.find('footer')

if header_tag:
    for a in header_tag.find_all('a'):
        text = a.get_text(strip=True)
        if 'Blog' in text or 'Shop Page' in text:
            if a.parent and a.parent.name == 'li':
                a.parent.decompose()

        # Simplify Home link
        for li in header_tag.find_all('li', class_=lambda c: c and 'menu-thumb' in c):
            # This is the desktop home menu
            a_tag = soup.new_tag('a', href='/demo-8', **{'class': 'nav-link'})
            a_tag.string = 'Home'
            new_li = soup.new_tag('li', **{'class': 'nav-item'})
            new_li.append(a_tag)
            li.replace_with(new_li)
            
        for li in header_tag.find_all('li', class_=lambda c: c and 'sub-mobile-menu' in c):
            # Check if this is the mobile Home menu
            a = li.find('a')
            if a and 'Home' in a.get_text():
                a_tag = soup.new_tag('a', href='/demo-8')
                a_tag.string = 'Home'
                new_li = soup.new_tag('li')
                new_li.append(a_tag)
                li.replace_with(new_li)

header_html = str(header_tag) if header_tag else ""
footer_html = str(footer_tag) if footer_tag else ""

header_jsx = html_to_jsx(header_html)
footer_jsx = html_to_jsx(footer_html)

# Create Header component
header_tsx = f"""
import React from 'react';
import Link from 'next/link';

export default function Header() {{
  return (
    <>
      {header_jsx}
    </>
  );
}}
"""
with open(os.path.join(COMP_DIR, 'Header.tsx'), 'w', encoding='utf-8') as f:
    f.write(header_tsx)

# Create Footer component
footer_tsx = f"""
import React from 'react';
import Link from 'next/link';

export default function Footer() {{
  return (
    <>
      {footer_jsx}
    </>
  );
}}
"""
with open(os.path.join(COMP_DIR, 'Footer.tsx'), 'w', encoding='utf-8') as f:
    f.write(footer_tsx)

# Now generate layout.tsx in app/demo-8
layout_tsx = """
import React from 'react';
import Header from '@/components/demo-8/Header';
import Footer from '@/components/demo-8/Footer';
import Loader from '@/components/demo-8/Loader';
import ScriptLoader from '@/components/demo-8/ScriptLoader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Loader />
        <ScriptLoader />
        <div className="page-wrapper">
          <Header />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
"""
os.makedirs(APP_DIR, exist_ok=True)
with open(os.path.join(APP_DIR, 'layout.tsx'), 'w', encoding='utf-8') as f:
    f.write(layout_tsx)


# Now regenerate all page.tsx files without header and footer
html_files = glob.glob(os.path.join(SOURCE_DIR, '*.html'))

def fix_link(match):
    page = match.group(1).replace('.html', '')
    if page == 'index':
        return 'href="/demo-8"'
    return f'href="/demo-8/{page}"'

for file_path in html_files:
    filename = os.path.basename(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    s = BeautifulSoup(content, 'html.parser')
    
    # Remove header and footer
    if s.header:
        # Strip Shop and Blog from navigation
        for a in s.header.find_all('a'):
            text = a.get_text(strip=True)
            if 'Blog' in text or 'Shop Page' in text:
                if a.parent and a.parent.name == 'li':
                    a.parent.decompose()
        s.header.decompose()
        
    if s.footer:
        s.footer.decompose()

    # Remove shop and news sections
    for section in s.find_all('section', class_=lambda c: c and ('shop-section' in c or 'news-section' in c)):
        section.decompose()
        
    head_html = ""
    if s.head:
        # Update Title and Description
        if s.head.title:
            s.head.title.string = "Lumina Beauty Clinic - Premium Aesthetics & Care"
        
        meta_desc = s.head.find('meta', {'name': 'description'})
        if meta_desc:
            meta_desc['content'] = "Lumina Beauty Clinic offers premium cosmetic procedures, skincare, and aesthetic treatments to bring out your natural glow."
            
        head_html = s.head.decode_contents()
            
    body_content = ""
    if s.body:
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
        
    # Fix paths
    body_content = body_content.replace('href="assets/', 'href="/demo-8/assets/')
    body_content = body_content.replace('src="assets/', 'src="/demo-8/assets/')
    body_content = body_content.replace("url('assets/", "url('/demo-8/assets/")
    body_content = body_content.replace('url("assets/', 'url("/demo-8/assets/')
    body_content = body_content.replace('url(assets/', 'url(/demo-8/assets/')
    body_content = re.sub(r'href="([^"]+\.html)"', fix_link, body_content)
    
    # Strip script tags
    body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL)
    
    # Strip raw text comments like << All JS Plugins >>
    body_content = re.sub(r'<<.*?>>', '', body_content)
    
    head_html = head_html.replace('href="assets/', 'href="/demo-8/assets/')
    
    body_content = body_content.replace('`', '\\`').replace('$', '\\$')
    head_html = head_html.replace('`', '\\`').replace('$', '\\$')
    
    tsx_content = f"""
export default function Page() {{
  return (
    <>
      <div dangerouslySetInnerHTML={{{{__html: `{head_html}`}}}} />
      <div dangerouslySetInnerHTML={{{{__html: `{body_content}`}}}} />
    </>
  );
}}
"""
    if filename == 'index.html':
        page_dir = APP_DIR
    else:
        page_name = filename.replace('.html', '')
        page_dir = os.path.join(APP_DIR, page_name)
        os.makedirs(page_dir, exist_ok=True)
        
    with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(tsx_content)

print("Extracted Header/Footer and regenerated pages.")
