import re

s = "Afghanistan, America, Bangladesh, Canada, Denmark, England, Greenland, Iceland, Netherlands, New Zealand, Sweeden, Switzerland"

countries = s.split(', ')

#li = [item for item in countries if item.endswith("land")]

li = re.findall(r'(\w+lands*)', s)
#print(li)

match = re.search('Bangla','Bangladesh')
#print(match.group())

text2 = "phone number: 0171110b1001."
match2 = re.search(r'\d+',text2)
#print(match2.group())

text3 = "house number: 5, phone number: 01711101001"
match = re.search(r'\d{11}', text3)
#print(match.group())

text4 = "multiple phone number: 01711111111, 01811111111, 01911111111, 00000000000"
result4 = re.findall(r'01[56789]\s?\d{8}', text4)
#print(result4)

with open("file.txt", "r") as f:
    text = f.read()

#print(re.findall(r'^.*$', text, re.MULTILINE))


template = "<li>Tamim</li><li>Shakib</li><li>Mushfiq</li>"
result = re.findall(r'<li>(.*?)</li>', template)
#print(result)


dateparser = "This is line 1. Date is 2017/06/01. And there is another date: 2017-07-01. The third and final date is 2017/08/30"
pat = re.compile(r'(\d{4})[-/](\d{2})[-/](\d{2})')
result = pat.findall(dateparser)
#print(pat)
#print(result)

newdate = "New date: 2017/06/15"
result2 = pat.findall(newdate)
#print(result2)

text5 = "Abcd 1234 - 33"
result5 = re.sub(r'\d', '0', text5)
#print(result5)


text6 = "22/07/1990, 20/01/2017, 01/01/2018"
result6 = re.sub(r'(\d{2})/(\d{2})/(\d{4})', r'\3-\2-\1', text6)
#print(result6)



