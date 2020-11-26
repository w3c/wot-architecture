## Title: Connected Building Directory Information Model

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
Discovery WIP spec

### Requirements:

<short description of all requirements>
  
- The directory should contain metadata of all information sources such as sensors and storage endpoints
- The directory should use Thing Description (TD) model for metadata of each information source
- The directory should allow expressing metadata and Thing Descriptions using domain specific ontologies (like SAREF)
- The directory should provide query capabilities to filter TDs based on their attributes
- Each TD must have a type from a specific domain ontology
- The pagination attributes should not the invalidate SPARQL response format
- The resource maintained within the directory should be of TD type
- The directory should be able to store summaries of the TDs
- The directory should be able to produce summaries of the TDs
- Summaries of TDs must be RDF, specifically JSON-LD 1.1 when possible
- Directory should be a concept in the TD ontology
- Directories may register TDs containing the Directory concept and summaries (when possible) of their registered TDs
- Directory should support federated discovery queries as a special type of semantic discovery
- Federated discovery must use SPARQL as query language and an attribute to be triggered (eg. /sparql?query=...&federation=true)

  
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
