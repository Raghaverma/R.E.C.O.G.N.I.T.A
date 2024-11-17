from OCR import recognize_text

def main():
    image_path = input("Enter the path to the image file: ")
    result = recognize_text(image_path)

    if result:
        print("Extracted Text:")
        for region in result.get("regions", []):
            for line in region.get("lines", []):
                text = " ".join([word["text"] for word in line["words"]])
                print(text)

if __name__ == "__main__":
    main()
