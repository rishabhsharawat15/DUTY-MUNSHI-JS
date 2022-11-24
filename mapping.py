import string
import pandas as pd  
from geopy.geocoders import Nominatim #to get the cordinates
from geopy import distance # to get the distance b/w the location


# loading the dataframe
df = pd.read_excel("./data/pro.xlsx")

#get the size ofthe datafram 
sz = df.shape[0] 


#______________________________________________________df for si___  =sicollection____________________________________________
dfsi = df[(df["Rank"]== "S.I.")]

#list of priority locations
siHLoc = dfsi["Home Location"]
siHLoc = siHLoc.to_list()

#list of names
siName = dfsi["Name"]
siName = siName.to_list()

#size pata kia and initialize an empty dictonaory
sicollection = {}
szesi = dfsi.shape[0]

                                 #-------------making the dictonary----------------#
for i in range (0,szesi):
    nme = siName[i]
    homloc = siHLoc[i]
    sicollection[nme] = homloc


#__________________________________________df for constable________________________________________________#
dfcon = df[(df["Rank"]== "Constable")] 

#list of priority locations
conHLoc = dfcon["Home Location"]
conHLoc = conHLoc.to_list()

#list of names
conName = dfcon["Name"]
conName = conName.to_list()

#size pata kia and initialize an empty dictonaory
concollection = {}
szecon = dfcon.shape[0]

                                 #-------------making the dictonary----------------#
for i in range (0,szecon):
    nme = conName[i]
    homloc = conHLoc[i]
    concollection[nme] = homloc



#____________________________________________df location___________________________________________________#
loc = df.groupby(["Location"])["Location"].count().to_dict()
print(loc)  
print("\n")

#no of si on a  particular loc
locS = {}
for i in loc.keys():
    nme = i
    dfc = df[(df["Location"]==i) & (df["Rank"]=="S.I.")]
    val = dfc.shape[0]
    locS[nme]= val 

#no of cons
locC = {}
for i in loc.keys():
    nme = i
    dfC = df[(df["Location"]==i) & (df["Rank"]=="Constable")]
    val = dfC.shape[0]
    locC[nme]= val 
#requirement of si on every loc
print("si location")
print(locS)
print("\n")
print("constable location")
print(locC) 
print("\n")
print("si and there home location")
print(sicollection)
print("\n")



#distance calutaion
geocoder = Nominatim(user_agent="i known the python")
lonlat = []
for i  in locS.keys():
    c = string
    c =i
    cordi = geocoder.geocode(c)
    lonlat.append((cordi.latitude,cordi.longitude))
print("these are the cordinates")
print(lonlat)

#population


    





    



    
    










