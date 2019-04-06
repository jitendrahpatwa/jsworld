# World JS

```
Is the only JS NPM package to make use of country details over the globe in node.
Its uses an country hub details from https://restcountries.eu && https://github.com/dr5hn/countries-states-cities-database
```


```
Here we find the regions, country name, flags, languages, etc.
```


## In following example is shown how to use World JS
> const WorldJS = require('jsworld');


#### Following is the method and properties used for World JS.

```
1 WorldJS.list
```
***
It returns all the world countries list with its details
***
> console.log('WorldJS list', WorldJS.list);


```
2 WorldJS.total
```
***
It returns total no of countries
***
> console.log('WorldJS Total', WorldJS.total);


```
3 WorldJS.names()
```
***
It returns name of countries
***
> console.log('WorldJS Names', WorldJS.names());


```
4 WorldJS.regionalBloc()
```
***
It returns total regional bloc from all countries
***
> console.log('WorldJS regionalBloc', WorldJS.regionalBloc());


```
5 WorldJS.region()
```
***
It returns region of world
***
> console.log('WorldJS region', WorldJS.region());


```
6 WorldJS.find(?)
```
***
Its find the list of country search item in list
***
> console.log('WorldJS find', WorldJS.find('Uk'));


```
7 WorldJS.findCountry(?)
```
***
Its find the exact country search item detail
***
> console.log('WorldJS findCountry', WorldJS.findCountry('Germany'));
****
More we can use WorldJS.findCountry(?) method with there associated member properties to find for example timezone transalations currency, etc.
Can be find as:
> 1 topLevelDomain ex: console.log('WorldJS topLevelDomain', WorldJS.findCountry('Germany').topLevelDomain);
> 2 alpha2Code ex: console.log('WorldJS alpha2Code', WorldJS.findCountry('Germany').alpha2Code);
> 3 alpha3Code ex: console.log('WorldJS alpha3Code', WorldJS.findCountry('Germany').alpha3Code);
> 4 callingCodes ex: console.log('WorldJS callingCodes', WorldJS.findCountry('Germany').callingCodes);
> 5 altSpellings ex: console.log('WorldJS altSpellings', WorldJS.findCountry('Germany').altSpellings);
> 6 region ex: console.log('WorldJS region', WorldJS.findCountry('Germany').region);
> 7 subregion ex: console.log('WorldJS subregion', WorldJS.findCountry('Germany').subregion);
> 8 population ex: console.log('WorldJS population', WorldJS.findCountry('Germany').population);
> 9 latlng ex: console.log('WorldJS latlng', WorldJS.findCountry('Germany').latlng);
> 10 demonym ex: console.log('WorldJS demonym', WorldJS.findCountry('Germany').demonym);
> 11 area ex: console.log('WorldJS area', WorldJS.findCountry('Germany').area);
> 12 gini ex: console.log('WorldJS gini', WorldJS.findCountry('Germany').gini);
> 13 timezones ex: console.log('WorldJS timezones', WorldJS.findCountry('Germany').timezones);
> 14 borders ex: console.log('WorldJS borders', WorldJS.findCountry('Germany').borders);
> 15 nativeName ex: console.log('WorldJS nativeName', WorldJS.findCountry('Germany').nativeName);
> 16 numericCode ex: console.log('WorldJS numericCode', WorldJS.findCountry('Germany').numericCode);
> 17 currencies ex: console.log('WorldJS currencies', WorldJS.findCountry('Germany').currencies);
> 18 languages ex: console.log('WorldJS languages', WorldJS.findCountry('Germany').languages);
> 19 translations ex: console.log('WorldJS translations', WorldJS.findCountry('Germany').translations);
> 20 flag ex: console.log('WorldJS flag', WorldJS.findCountry('Germany').flag);
> 21 regionalBlocs ex: console.log('WorldJS regionalBlocs', WorldJS.findCountry('Germany').regionalBlocs);
> 22 cioc ex: console.log('WorldJS cioc', WorldJS.findCountry('Germany').cioc);
****



```
8 WorldJS.flags()
```
***
It returns associated country with there flags.
***
> console.log('WorldJS flags', WorldJS.flags());


```
9 WorldJS.code()
```
***
It returns specific iso or dial code according to country name.
***
> console.log('WorldJS code', WorldJS.code());


```
10 WorldJS.capital()
```
***
It returns specific capital associated with there country name.
***
> console.log('WorldJS capital', WorldJS.capital());


```
11 WorldJS.country(?).statesList(?).citiesStreetList(?)
```
***
It returns specific country states and/or cities streets.
***

For example to find United Arab Emirates country detail:
> WorldJS.country('United Arab Emirates')

To find the state of the United Arab Emirates
> WorldJS.country('United Arab Emirates').states // return state with cities

> WorldJS.country('United Arab Emirates').statesList() // return states

To find the city of 'Ras al-Khaymah' one of the state of United Arab Emirates
> WorldJS.country('United Arab Emirates').statesList('Ras al-Khaymah')

> WorldJS.country('United Arab Emirates').statesList('Ras al-Khaymah').citiesStreetList()

To check city exist or not
> WorldJS.country('United Arab Emirates').statesList('Ras al-Khaymah').citiesStreetList('Shahkot')

##### Example:
> console.log('WorldJS country3 ', WorldJS.country('United Arab Emirates').statesList('Ras al-Khaymah').citiesStreetList('Shahkot'));




console.log('WorldJS country3 ', WorldJS.country('United Arab Emirates').statesList('Ras al-Khaymah').citiesStreetList('Shahkot'));