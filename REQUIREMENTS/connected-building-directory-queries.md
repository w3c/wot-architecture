## Title: Connected Building Directory Queries

### Submitter(s): 

Andrea Cimmino, Farshid Tavakolizadeh

### Reviewer(s):

<reviewers>

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

https://github.com/w3c/wot-usecases/blob/master/USE-CASES/connected-building-energy-efficiency.md

https://github.com/w3c/wot-usecases/blob/master/USE-CASES/smart-campus.md

### Affected WoT Deliverables:

<list all affected deliverables, e.g. TD spec, Profile spec, Scripting API, Security best practices, Discovery, ...>

- Discovery WIP spec

### Requirements:

<short description of all requirements>

#### Single Directory Query Requirements
- TDs with an attribute value matching a given string exactly, as a substring, prefix, or suffix
  - E.g. TDs with title containing "Temperature Sensor"
- TDs with a specific attribute
  - E.g. TDs with properties.temperature attribute
- TDs created after a specific date-time
  - E.g. TDs with created date after 2020-03-15

#### Federated Directory Query Requirements
- TDs that belong to the directory matching an attribute value with a given string, as a substring, prefix, or suffix
  - E.g. find TDs allocated in this directory contaning "Temperature Sensor"
- TDs that belong to other directories that have a specific attribute
  - E.g. find TDs allocated outside this directory with the property temperature
  

#### Security:

<Describe security features needed; if there are none, say "none">


#### Privacy:

<Describe privacy features needed; if there are none, say "none">


### Related standards:

<list related standards>

### Other references:

<additional references that provide more context>

### Comments:

<additional comments>
