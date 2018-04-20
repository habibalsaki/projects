import os
import re
import requests
import sys

def create_directory(name):
    try:
        os.mkdir(name)
    except FileExistsError:
        print(name, "already exists")

create_directory("dimik_pub")
url = "http://dimik.pub"
response = requests.get(url)
if response.ok is False:
    sys.exit("Couldn't get response from server")

page_content = response.text

regexp = re.compile(r'<div class="book-cover">\s*<a href="(.*?)">\s*<img src="(.*?)">.*?<h2 class="sd-title"><.*?>(.*?)<', re.S)
result = regexp.findall(page_content)
for item in result:
    print("Name: ", item[2])
    print("Url: ", item[0])
    print("Image link: ", item[1])
    print("")