import boto3
import json
import os

access_key = "AKIA6JEHZ62JD2DQYATL"

secret_access_key = "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"

session = boto3.Session(aws_access_key_id = access_key, aws_secret_access_key = secret_access_key, region_name = "us-east-1")

db = session.resource("dynamodb")
table = db.Table("Shopping_Cart")

response = table.get_item(
    Key = {
        'ID' : 1
    }
)

items = json.dumps(response['Item']['cart'], indent=2, default=str)

with open('Cart_JSON.json', 'w+') as jsonFile:
    jsonFile.write(str(items))
    jsonFile.close()

f = open('Cart_JSON.json')
data = json.load(f)
for i in data:
    print(i['ID'])
f.close()

if os.path.exists('Cart_JSON.json'):
    os.remove('Cart_JSON.json')
else: 
    print("File doesn't exist")
