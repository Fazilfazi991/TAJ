from PIL import Image

img = Image.open("logo.jpeg").convert("RGBA")
pixels = img.load()
width, height = img.size

threshold = 230
transparent_count = 0

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if r > threshold and g > threshold and b > threshold:
            pixels[x, y] = (r, g, b, 0)  # fully transparent
            transparent_count += 1

img.save("logo.png")
print(f"Done! logo.png saved ({width}x{height})")
print(f"Transparent pixels: {transparent_count}, Kept: {width*height - transparent_count}")
