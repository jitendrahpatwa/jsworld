const world = require('./world');
const staties = require('./staties');

const WorldJS = {
	list: world,
	total: world.length,
	names: () => {
		const name = world.map(function(item, index, array){
			return item.name;
		});
		return name;
	},
	regionalBloc: () => {
		let bloc = world.map(function(fitem, findex, farray) {
			if ((fitem.regionalBlocs).length > 0) {
				return fitem.regionalBlocs;
			}
		});
		function flattenDeep(arr1) {
		   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
		}
		bloc = flattenDeep(bloc);
		bloc = bloc.filter((o)=>{if(o){ return o; }});
		bloc = bloc.map((o)=>{if(o){ const a = { acronym: o.acronym, name: o.name }; return a; }});
		bloc = Array.from( new Set( bloc.map( s => s.acronym ) ) )
		.map( id => {
			return {
				acronym: id,
				name: bloc.find(s => s.acronym === id).name
			};
		});
		return bloc;
	},
	region: () => {
		let region = world.map(function(fitem, findex, farray) {
			if ((fitem.region)) {
				return fitem.region;
			}
		});
		region = Array.from( new Set( region.map( s => s ) ) );
		region = region.filter((o)=>{if(o){ return o; }});
		return region;
	},
	find: (name = null) => {
		if (name === null) return [];
		function search(nameKey, myArray){
			let list = [];
		    for (var i=0; i < myArray.length; i++) {
		        if ((myArray[i].name).indexOf(name) !== -1) {
		            list.push(myArray[i]);
		        }
		    }
		    return list;
		}
		return search(name, world);
	},
	findCountry: (name = null) => {
		if (name === null) return null;
		function search(nameKey, myArray){
		    for (var i=0; i < myArray.length; i++) {
		        if ((myArray[i].name) === nameKey) {
		            return myArray[i];
		        }
		    }
		}
		const ans = search(name, world);
		return typeof ans === 'undefined' ? null : ans ;
	},
	flags: () => {
		const flags = Array.from( new Set( world.map( s => s.name ) ) )
		.map( id => {
			return {
				name: id,
				flag: world.find(s => s.name === id).flag
			};
		});
		return flags;
	},
	code: () => {
		const code = Array.from( new Set( world.map( s => s.name ) ) )
		.map( id => {
			const find = world.find(s => s.name === id);
			return {
				name: id,
				alpha2Code: find.alpha2Code,
				alpha3Code: find.alpha3Code,
				callingCodes: find.callingCodes,
				numericCode: find.numericCode
			};
		});
		return code;
	},
	capital: () => {
		const cap = Array.from( new Set( world.map( s => s.name ) ) )
		.map( id => {
			const find = world.find(s => s.name === id);
			return {
				name: id,
				capital: find.capital
			};
		});
		return cap;
	},
	country: (name = null) => {
		if (name === null) return null;
		function sc(nameKey, myArray){
		    for (var i=0; i < staties.length; i++) {
		        if ((staties[i].name) === nameKey) {
		            return staties[i].states;
		        }
		    }
		}
		const ansSc = sc(name, staties);
		function search(nameKey, myArray){
		    for (var i=0; i < myArray.length; i++) {
		        if ((myArray[i].name) === nameKey) {
		        	myArray[i]['states'] = ansSc;
		            return myArray[i];
		        }
		    }
		}
		const ans = search(name, world);
		let putResp = typeof ans === 'undefined' ? null : ans ;

		return {
			...putResp, 
			statesList: (statename = null) => {
				function findState(statename, objstaties) {
					// if (statename === null) return null;
					let respStt = [];
					if (statename) {
						var keys = []; var isthere = false;
						for(var k in objstaties) {
							// console.log('-------' , k);
							if (k === statename) {
								isthere = true;
								return {...{0:k}, ...{cities: objstaties[statename]}};
								break;
							}
						};
						if (isthere === false) {
							return [null];	
						}
					}
					if (objstaties === null) return null;
					respStt = Object.keys(objstaties);
					return respStt;
				}
				let putRespState = findState(statename, putResp ? putResp.states: null); // states list

				return {
					...putRespState,
					// cities: 'axss',
					citiesStreetList: function(cityname = null) {
						function findCity(cityname, objstaties) {
							// if (cityname === null) return null;
							let respStt = [];
							if (cityname) {
								var keys = []; var isthere = false;
								for(var k in objstaties) {
									if (objstaties[k] === cityname) {
										isthere = true;
										return {...{0:objstaties[k]}};
										break;
									}
								};
								if (isthere === false) {
									return [null];	
								}
							}
							if (objstaties === null) return null;
							respStt = objstaties;
							return respStt;
						}
						let putRespCity = findCity(cityname, putRespState ? putRespState.cities: null); // cities list
						return {
							...putRespCity
						}
					}
				}
			}
		};
	},
};

module.exports = WorldJS;