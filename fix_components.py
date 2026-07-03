import os
import re

COMP_DIR = r'C:\primecare\components\demo-8'
header_path = os.path.join(COMP_DIR, 'Header.tsx')
footer_path = os.path.join(COMP_DIR, 'Footer.tsx')

def fix_component(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Change Name
    content = content.replace('Medixen', 'Lumina')
    content = content.replace('OptiVision', 'Lumina') # just in case
    
    # Fix menu links
    def fix_link(match):
        page = match.group(1)
        if page == 'index.html':
            return 'href="/demo-8"'
        return f'href="/demo-8/{page.replace(".html", "")}"'
        
    content = re.sub(r'href="([^"]+\.html)"', fix_link, content)
    
    # Fix style="display: none;" -> style={{ display: 'none' }}
    content = content.replace('style="display: none;"', 'style={{ display: "none" }}')
    content = content.replace("style='display: none;'", "style={{ display: 'none' }}")
    
    # Add suppressHydrationWarning to elements that might be manipulated by scripts
    content = content.replace('className="split-title"', 'className="split-title" suppressHydrationWarning')
    
    # Let's also add suppressHydrationWarning to ul with sub-menus just in case
    # Actually, wrapping the whole header/footer with suppressHydrationWarning is safer for heavy jQuery templates.
    # We will just add it to the root elements of Header and Footer
    content = content.replace('<header className="header-section', '<header suppressHydrationWarning className="header-section')
    content = content.replace('<footer className="footer-section"', '<footer suppressHydrationWarning className="footer-section"')

    # Also, we can suppress hydration warning on the wrappers in page.tsx layout, but let's stick to Header and Footer first.
    
    # Replace logo images with text
    fancy_logo_dark = '<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "var(--theme-color-2)"}}>Lumina</span> <span style={{fontWeight: "300", color: "var(--theme-color-1)"}}>Beauty</span></h2>'
    fancy_logo_light = '<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "#ffffff"}}>Lumina</span> <span style={{fontWeight: "300", color: "rgba(255,255,255,0.7)"}}>Beauty</span></h2>'
    
    content = content.replace(
        '<img alt="logo" src="/demo-8/assets/img/logo/black-logo.svg"/>',
        fancy_logo_dark
    )
    content = content.replace(
        '<img alt="logo" src="/demo-8/assets/img/logo/white-logo.svg"/>',
        fancy_logo_light
    )
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# Apply to Footer as well
footer_path = 'components/demo-8/Footer.tsx'
if os.path.exists(footer_path):
    with open(footer_path, 'r', encoding='utf-8') as f:
        footer_content = f.read()
    
    fancy_logo_footer = '<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "var(--theme-color-2)"}}>Lumina</span> <span style={{fontWeight: "300", color: "var(--theme-color-1)"}}>Beauty</span></h2>'
    footer_content = footer_content.replace(
        '<img alt="img" src="/demo-8/assets/img/home-1/footer-logo.svg"/>',
        fancy_logo_footer
    )
    
    # Fix inline css url
    footer_content = footer_content.replace("url('assets/", "url('/demo-8/assets/")
    
    # Add spacing requested by user
    footer_content = footer_content.replace(
        '<footer suppressHydrationWarning className="footer-section">',
        '<footer suppressHydrationWarning className="footer-section" style={{ paddingBottom: "12px", marginTop: "80px" }}>'
    )
    # Also handle if suppressHydrationWarning is not there yet
    footer_content = footer_content.replace(
        '<footer className="footer-section">',
        '<footer suppressHydrationWarning className="footer-section" style={{ paddingBottom: "12px", marginTop: "80px" }}>'
    )
    
    with open(footer_path, 'w', encoding='utf-8') as f:
        f.write(footer_content)

    # Inject use client and usePathname
    with open(header_path, 'r', encoding='utf-8') as f:
        header_content = f.read()
    if '"use client";' not in header_content:
        header_content = '"use client";\n' + header_content
        header_content = header_content.replace(
            "import Link from 'next/link';",
            "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';"
        )
        header_content = header_content.replace(
            "export default function Header() {",
            "export default function Header() {\n  const pathname = usePathname();\n  const isInnerPage = pathname !== '/demo-8' && pathname !== '/demo-8/';\n"
        )
        header_content = header_content.replace(
            '<header suppressHydrationWarning className="header-section header-1 header-3"',
            '<header suppressHydrationWarning className={`header-section header-1 header-3 ${isInnerPage ? "header-inner-page" : ""}`}'
        )
        header_content = header_content.replace(
            '<header className="header-section header-1 header-3"',
            '<header className={`header-section header-1 header-3 ${isInnerPage ? "header-inner-page" : ""}`}'
        )
    
    with open(header_path, 'w', encoding='utf-8') as f:
        f.write(header_content)

fix_component(header_path)
fix_component(footer_path)
print("Fixed Header and Footer")
