from PIL import Image
import collections

img = Image.open('logo.jpeg').convert('RGB')
pixels = img.getdata()

# count colors
counts = collections.Counter()
for r, g, b in pixels:
    # ignore mostly white or gray pixels
    if r < 230 or g < 230 or b < 230:
        counts[(r,g,b)] += 1

most_common = counts.most_common(10)
for color, count in most_common:
    print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x} : {count}")
