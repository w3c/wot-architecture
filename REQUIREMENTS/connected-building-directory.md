## Title: Connected Building Directory

### Submitter(s): 

Andrea Cimmino, Farshid Tavakolizadeh

### Reviewer(s):

<reviewers>

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

https://github.com/w3c/wot-usecases/blob/master/USE-CASES/connected-building-energy-efficiency.md

### Affected WoT Deliverables:

<list all affected deliverables, e.g. TD spec, Profile spec, Scripting API, Security best practices, Discovery, ...>
Discovery WIP spec

### Requirements:

<short description of all requirements>
- The directory should contains metadata of all information sources such as sensors and storage endpoints
- The directory should use Thing Description (TD) model for metadata of each information source
- The directory should provide query capabilities to filter TDs based on their attributes
- Each TD must have a type from a specific domain ontology
- The pagination attributes should not the invalidate SPARQL response format
- The resource maintained within the directory should be of TD type
  
#### Security:

<Describe security features needed; if there are none, say "none">
- The directory should provide TDs to authorized users only
- The directory should allow registration and modification of TDs to authorized users only

#### Privacy:

<Describe privacy features needed; if there are none, say "none">
- The directory should not expose information that can be used in an inference attack

### Related standards:

<list related standards>

### Other references:

<additional references that provide more context>

### Comments:

<additional comments>
