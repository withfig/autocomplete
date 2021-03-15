import sys 
import os
import json

# TODO:  Handle types

def main():
    print("Enter the data") 
    data = sys.stdin.read()   # Use Ctrl d to stop the input 
    os.system('clear')
    split_lines = data.split('\n')
    opts = []
    for line in split_lines:
        split_line = line.split('  ')
        split_line = [x for x in split_line if x]
        if len(split_line):
            opt_res = {
                
            }

            if len(split_line) == 1:
                # print(split_line)
                # Either an empty option or added to the description of the last item?
                continue
            token = split_line[0].strip()
            token = [x.strip() for x in token.split(',')]
            description = split_line[1].strip()

            if '-' not in token[0]:
                continue

            if ' ' in token[len(token) - 1]:
                token_with_type = token[len(token) - 1]
                _token, type = token_with_type.split(' ')
                token[len(token) - 1] = _token
                opt_res['args'] = {'name': type}

            opt_res['name'] = token
            opt_res['description'] = description

            opts.append(opt_res)
    print(json.dumps(opts, indent=4, sort_keys=True))

main()