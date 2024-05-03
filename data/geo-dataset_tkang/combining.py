import json
import os

#print(os.listdir())

allcityjson = {}
f = open("../AllCityData.json")
allcityjson = json.load(f)
f.close()


for fn in os.listdir():
	if ".json" in fn:
		f = open(fn)
		j = json.load(f)
		f.close()
		feature = j["features"][0]
		allcityjson["features"].append(feature)

#print(allcityjson)
with open("../AllCityData.json", "w") as outfile:
    json.dump(allcityjson, outfile)

print("Done")


