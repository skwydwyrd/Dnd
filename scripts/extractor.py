import re
import json
pattern = r'<option value="[^"]*">(.*?)</option>'
with open('monster-names.txt','r' ) as file:
    content = file.read()
    names = re.findall(pattern, content)
    jsarray = json.dumps(names)
    with open('myArray.js','w') as jsfile:
        jsfile.write(f'const monster-names = {jsarray};\n')
        jsfile.write('export default monster-names')
    monsters = [name for name in names[1::]]
    print(monsters)
# with open('monster-names','r') as file:

# print(content)