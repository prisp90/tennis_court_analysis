import json
import csv

allcity = {}
allcityname = []
with open('AllCityData.json', 'r') as f:
	allcity = json.load(f)


over1count = 0
sumofratio = 0
totalcity = 0
nonecount = 0

ILcity = 0
ILratio = 0

INcity = 0
INratio =0

WIcity = 0
WIratio = 0

top5city = ["", "", "", "", ""]
top5ratio = [0,0,0,0,0]
low5city = ["", "", "", "", ""]
low5ratio = [1,1,1,1,1]

ratio0citycount = 0

TENNIS_POPULATION = 0;

AGE_BETWEEN_18_65total = 0



ETHNICITY_WHITE = 0
ETHNICITY_BLACK = 0
ETHNICITY_NATIVE_AM = 0
ETHNICITY_ASIAN = 0
ETHNICITY_PAC_ISLANDER = 0
ETHNICITY_HISPANIC_LATINO = 0

WEALTH_MEDIAN_INCOME = 0

EDUCATION_LEVEL3 = 0

TotalEDUCATION_LEVEL1 = 0
TotalEDUCATION_LEVEL2 = 0
TotalEDUCATION_LEVEL3 = 0


for feature in allcity["features"]:
	ratio = feature["properties"]["SD_MIN_S"]
	if ratio is None:
		nonecount = nonecount + 1
		continue
	if ratio >= 1:
		over1count = over1count + 1

	totalcity = totalcity + 1
	sumofratio = sumofratio + ratio

	if feature["properties"]["STATEFP"] == "17":
		ILcity = ILcity + 1
		ILratio = ILratio + ratio
	elif feature["properties"]["STATEFP"] == "18":
		INcity = INcity + 1
		INratio = INratio + ratio
	elif feature["properties"]["STATEFP"] == "55":
		WIcity = WIcity + 1
		WIratio = WIratio + ratio

	TENNIS_POPULATION = TENNIS_POPULATION + feature["properties"]["TENNIS_POPULATION"]
	AGE_BETWEEN_18_65total = AGE_BETWEEN_18_65total + feature["properties"]["AGE_BETWEEN_18_65"]

	ETHNICITY_WHITE = ETHNICITY_WHITE + feature["properties"]["ETHNICITY_WHITE"]
	ETHNICITY_BLACK = ETHNICITY_BLACK + feature["properties"]["ETHNICITY_BLACK"]
	ETHNICITY_NATIVE_AM = ETHNICITY_NATIVE_AM + feature["properties"]["ETHNICITY_NATIVE_AM"]
	ETHNICITY_ASIAN = ETHNICITY_ASIAN + feature["properties"]["ETHNICITY_ASIAN"]
	ETHNICITY_PAC_ISLANDER = ETHNICITY_PAC_ISLANDER + feature["properties"]["ETHNICITY_PAC_ISLANDER"]
	ETHNICITY_HISPANIC_LATINO = ETHNICITY_HISPANIC_LATINO + feature["properties"]["ETHNICITY_HISPANIC_LATINO"]

	if feature["properties"]["WEALTH_MEDIAN_INCOME"] == "$250,000+":
		WEALTH_MEDIAN_INCOME = WEALTH_MEDIAN_INCOME + 250000
	else:
		WEALTH_MEDIAN_INCOME = WEALTH_MEDIAN_INCOME + float(feature["properties"]["WEALTH_MEDIAN_INCOME"])

	if "EDUCATION_LEVEL" not in feature["properties"]:
		print(feature["properties"]["NAME"])
	elif feature["properties"]["EDUCATION_LEVEL"] == "3":
		EDUCATION_LEVEL3 = EDUCATION_LEVEL3 + 1
		TotalEDUCATION_LEVEL3 = TotalEDUCATION_LEVEL3 + ratio
	elif feature["properties"]["EDUCATION_LEVEL"] == "2":		
		TotalEDUCATION_LEVEL2 = TotalEDUCATION_LEVEL2 + ratio
	elif feature["properties"]["EDUCATION_LEVEL"] == "1":		
		TotalEDUCATION_LEVEL1 = TotalEDUCATION_LEVEL1 + ratio


	if ratio == 0:
		ratio0citycount = ratio0citycount + 1
		continue

	if ratio > top5ratio[0]:
		top5ratio[4] = top5ratio[3]
		top5ratio[3] = top5ratio[2]
		top5ratio[2] = top5ratio[1]
		top5ratio[1] = top5ratio[0]
		top5ratio[0] = ratio
		top5city[4] = top5city[3]
		top5city[3] = top5city[2]
		top5city[2] = top5city[1]
		top5city[1] = top5city[0]
		top5city[0] = feature["properties"]["NAME"]
	elif ratio > top5ratio[1]:
		top5ratio[4] = top5ratio[3]
		top5ratio[3] = top5ratio[2]
		top5ratio[2] = top5ratio[1]		
		top5ratio[1] = ratio
		top5city[4] = top5city[3]
		top5city[3] = top5city[2]
		top5city[2] = top5city[1]
		top5city[1] = feature["properties"]["NAME"]
	elif ratio > top5ratio[2]:
		top5ratio[4] = top5ratio[3]
		top5ratio[3] = top5ratio[2]
		top5ratio[2] = ratio
		top5city[4] = top5city[3]
		top5city[3] = top5city[2]
		top5city[2] = feature["properties"]["NAME"]
	elif ratio > top5ratio[3]:
		top5ratio[4] = top5ratio[3]
		top5ratio[3] = ratio
		top5city[4] = top5city[3]
		top5city[3] = feature["properties"]["NAME"]
	elif ratio > top5ratio[4]:
		top5ratio[4] = ratio
		top5city[4] = feature["properties"]["NAME"]

	if ratio < low5ratio[0]:
		low5ratio[4] = low5ratio[3]
		low5ratio[3] = low5ratio[2]
		low5ratio[2] = low5ratio[1]
		low5ratio[1] = low5ratio[0]
		low5ratio[0] = ratio
		low5city[4] = low5city[3]
		low5city[3] = low5city[2]
		low5city[2] = low5city[1]
		low5city[1] = low5city[0]
		low5city[0] = feature["properties"]["NAME"]
	elif ratio < low5ratio[1]:
		low5ratio[4] = low5ratio[3]
		low5ratio[3] = low5ratio[2]
		low5ratio[2] = low5ratio[1]		
		low5ratio[1] = ratio
		low5city[4] = low5city[3]
		low5city[3] = low5city[2]
		low5city[2] = low5city[1]
		low5city[1] = feature["properties"]["NAME"]
	elif ratio < low5ratio[2]:
		low5ratio[4] = low5ratio[3]
		low5ratio[3] = low5ratio[2]
		low5ratio[2] = ratio
		low5city[4] = low5city[3]
		low5city[3] = low5city[2]
		low5city[2] = feature["properties"]["NAME"]
	elif ratio < low5ratio[3]:
		low5ratio[4] = low5ratio[3]
		low5ratio[3] = ratio
		low5city[4] = low5city[3]
		low5city[3] = feature["properties"]["NAME"]
	elif ratio < low5ratio[4]:
		low5ratio[4] = ratio
		low5city[4] = feature["properties"]["NAME"]


	


print(over1count)
print(sumofratio/totalcity)
print(totalcity)
print(nonecount)

print("IL")
print(ILcity)
print(ILratio/ILcity)

print("IN")
print(INcity)
print(INratio/INcity)

print("WI")
print(WIcity)
print(WIratio/WIcity)

print("top and low")
print(top5city)
print(top5ratio)
print(low5city)
print(low5ratio)

print(ratio0citycount)

print("Tennis Population")
print(TENNIS_POPULATION)

print((AGE_BETWEEN_18_65total/totalcity ))
print("Tennis ETHNICITY")
print((ETHNICITY_WHITE/totalcity ))
print((ETHNICITY_BLACK/totalcity ))
print((ETHNICITY_NATIVE_AM/totalcity ))
print((ETHNICITY_ASIAN/totalcity ))
print((ETHNICITY_PAC_ISLANDER/totalcity ))
print((ETHNICITY_HISPANIC_LATINO/totalcity ))

print("Income")
print(WEALTH_MEDIAN_INCOME/totalcity)

print("education")
print(EDUCATION_LEVEL3/totalcity)

print(TotalEDUCATION_LEVEL3/totalcity)
print(TotalEDUCATION_LEVEL2/totalcity)
print(TotalEDUCATION_LEVEL1/totalcity)

