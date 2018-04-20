import requests
import sys

url = "http://www.facebook.com"
base_url = "http://subeen.com/download/"

data = {
    "name" : "Habib Al Saki",
    "email" : "habibalsaki@gmail.com",
    "country": "Bangladesh"
}

target_url = base_url + "process.php"

response = requests.post(target_url, data)

if response.ok is False:
    sys.exit("Error in downloading file")

with open("book.pdf", "wb") as fp:
    fp.write(response.content)
print("book downloaded")
    
