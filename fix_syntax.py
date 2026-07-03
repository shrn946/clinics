import os
import glob
import re

APP_DIR = r'C:\primecare\app\demo-8'

# Find all page.tsx files
tsx_files = glob.glob(os.path.join(APP_DIR, '**', 'page.tsx'), recursive=True)

for file_path in tsx_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix dangerouslySetInnerHTML syntax
    # Replace dangerouslySetInnerHTML={__html:  with dangerouslySetInnerHTML={{__html: 
    # And replace }`} />  with }`} />
    
    content = content.replace('dangerouslySetInnerHTML={__html:', 'dangerouslySetInnerHTML={{__html:')
    content = content.replace('}`} />', '}}`} />')
    content = content.replace('}"} />', '}}"} />') # just in case
    
    # Actually, a better regex:
    content = re.sub(r'dangerouslySetInnerHTML=\{__html: (.*?)\} />', r'dangerouslySetInnerHTML={{__html: \1}} />', content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Fixed syntax in {len(tsx_files)} files")
