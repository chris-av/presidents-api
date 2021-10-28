# TODOs

## Presidents

* `birthplace`: string description of birth place (city, state, county, country)
* `birthdate`: integer value representation of date
* `previous_occupation`: string description of previous occupation
* `wasCongressHouse`: boolean of whether President had previously served in the United States House of Representatives
* `wasCongressSenate`: boolean of whether President had prevuously served in the United States Senate
* `wasStateHouse`: boolean of whether President had previously served in a state house or lower chamber
* `wasStateSenate`: boolean of whether President had previously served in a state senate or upper chamber
* `wasGovernor`: boolean whether President had served as Governor or as executive head of a state
* `servedMilitary`: boolean of whether President had previously served in any branch of the military
* `wars_preside`: boolean of whether US President presided during a formal declaration of war (does not include armed conflict outside explicit authorization of Congress)
* `wars_presided`: array of `War` objects
* `n_exec_orders`: integer indicating number of executive orders declared by the President
* `n_judicial_nominations`: integer indicating number of supreme court or federal circuit court nominations issued by the president
* `n_judicial_nominations_succ`: integeger indicating number of supreme court or federal circuit court nominations that were successfully approved by Congress
* `n_pardons`: number of formal pardons issued by the President.


## War

A war object describes a war that was formally declared by Congress. War objects include only those wars that were formally declared by Congress and/or formally ended by Treaty.

* `warStart`
* `warEnd`
* `declaredAgainst`
* `n_casualties`
* `declarationName`
* `treatyName`
* ``
* ``

## CabinetMember

A Cabinet is an object that describes a person who formally held a Cabinet position after having been nominated by the (Office of) the President and whose nomination was approved by Congress.

This object will not include any people who were merely considered for nomination, or those who were formally nominated but did not succeed in having their nomination approved by Congress

* `name`: 
* `name`: 




# Questions

* are the presidential adminsitrations (same president) considered distinct from a legal or historical standpoint? Is there "one" presidential Obama term or "two" Obama terms for the purposes of research/law?
* how extensively catalogued were the executive orders for each president?
* are nominations recorded somewhere in Congress or the executive? What about failed nominations?
* are there any instances where the occupant of a Cabinet position was ambigous from a constitutional/legal standpoint? Do all Cabinet members have an unambigious start and end date?
* 


