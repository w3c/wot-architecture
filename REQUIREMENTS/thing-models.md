## Title: Thing Models

### Submitter(s): 

Michael Lagally

### Reviewer(s):

Michael McCool, Sebastian Käbisch, Michael Koster, Ege Korkan, ...

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

https://github.com/w3c/wot-architecture/blob/master/USE-CASES/digital-twin.md   
https://github.com/w3c/wot-architecture/blob/master/USE-CASES/big-data.md

Discovery.md

Link relation types

### Affected WoT Deliverables:

TD spec  

Profile spec  

Scripting API   

Security best practices 

Discovery 

### What do we want for different use cases?

We need a flexible mechanism to extract commonalities from TD into a common model
to support common mangement, discovery and simulation of multiple things of the same category / class.

#### Digital twin Modeling
Modeling, simulations, shadows, not expose protocols, multiple identical devices

A model can be implemented by a "real world thing" or a simulation.

#### IoT Orchestration Modeling
Developer support
protocols and security should be optional 

#### Big Data
data schemas, other metadata, interactions

### Requirements:

Define vocabulary and semantics for describing a class of things that share common elements.

Minimum requirements for common elements are interactions and data schemas. 

Partial security definitions are optional.
URL templates for protocol endpoints are optional.

Thing model contraints must appear in the thing description with possible additional details.
Overriding of elements inherited from the thing model is not permitted.

A thing model is a blueprint that describes the affordances, i.e. the structure and interface.
Define an inheritance mechanism and corresponding handling of namespaces to avoid naming conflicts,
when things implement more than one thing model.


#### Open issues: 
Single/Multiple inheritance.
Modularity.
Optionality.
Relationship between OneDM. 


### Related standards:

Web Linking: https://tools.ietf.org/html/rfc8288

Link Relation Types for Web Services: https://tools.ietf.org/html/rfc8631

Additional Link Relation Types: https://tools.ietf.org/html/rfc6903

https://tools.ietf.org/html/rfc5988

Link Relation Types - IANA registry: https://www.iana.org/assignments/link-relations/link-relations.xhtml



### Other references:

See also the corresponding section in the profile spec:
https://w3c.github.io/wot-profile/#links

### Comments:

It is expected that the inheritance mechanism adopts links that are defined in the link relationship work item.

Todo: 

Consider adding protocol constraints

Consider to use the scripting API to define exposed things with partial TDs

Clear separation between *thing models* and *partial TDs*

Todo: 

address / consider whether these are separate aspects or separate requirements

- Interface

- Expose TDs in scripting API

- Search patterns in directory services



