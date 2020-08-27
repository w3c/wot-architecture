## Title: Thing Templates

### Submitter(s): 

Michael Lagally

### Reviewer(s):

Michael McCool, Sebastian Käbisch, Michael Koster, Ege Korkan, ...

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

https://github.com/w3c/wot-architecture/blob/master/USE-CASES/digital-twin.md   
https://github.com/w3c/wot-architecture/blob/master/USE-CASES/big-data.md

### Affected WoT Deliverables:

TD spec  

Profile spec  

Scripting API   

Security best practices 

Discovery  

### Requirements:

Define vocabulary and semantics for a templating mechanism for a class of things.
A template is a blueprint that describes the affordances, i.e. the structure and interface.
Define an inheritance mechanism and corresponding handling of namespaces to avoid naming conflicts,
when things implement more than one template.


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

Clear separation between *templates* and *partial TDs*

Todo: 

address / consider whether these are separate aspects or separate requirements

- Interface

- Expose TDs in scripting API

- Search patterns in directory services



