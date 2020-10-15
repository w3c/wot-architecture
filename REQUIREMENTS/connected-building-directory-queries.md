## Title: Connected Building Directory Queries

### Submitter(s): 

Andrea Cimmino, Farshid Tavakolizadeh

### Reviewer(s):

<reviewers>

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

- [Connected Building Energy Efficiency](https://github.com/w3c/wot-usecases/blob/master/USE-CASES/processed/connected-building-energy-efficiency.md)
- [Cross-Domain Discovery in a Smart Campus](https://github.com/w3c/wot-usecases/blob/master/USE-CASES/processed/smart-campus.md)

### Affected WoT Deliverables:

<list all affected deliverables, e.g. TD spec, Profile spec, Scripting API, Security best practices, Discovery, ...>

- Discovery WIP spec

### Requirements:

- TD ontology must cover the concept of Directory
- Federated directories should be able to produce a summary of their TDs registered
- Federated directories can register a TD containing the Directory concept and a set of summaries (when possible) of the TDs stored in such Directory
- Federated discovery is a specific type of semantic discovery
- Federated directories trigger the federated discovery when a semantic discovery request is received with a particular parameter (e.g./sparql?query=..&federate=true)
- Federated discovery may have parameters to delimit the life of the federation (time out, max directories visited during federation, etc.)
- Federated discovery must output aggregated results from all the Federated directories registered in the former Federated Directory

#### Single Directory Query Requirements
- TDs with an attribute value matching a given string exactly, as a substring, prefix, or suffix
  - E.g. TDs with title containing "Temperature Sensor"
- TDs with a specific attribute
  - E.g. TDs with properties.temperature attribute
- TDs created after a specific date-time
  - E.g. TDs with created date after 2020-03-15

#### Federated Directory Query Requirements
- TDs that belong to the directory matching an attribute value with a given string, as a substring, prefix, or suffix
  - E.g. find TDs allocated in this directory containing "Temperature Sensor"
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
