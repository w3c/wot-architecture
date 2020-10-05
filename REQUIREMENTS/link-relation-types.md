## Title: Link Relation Types

### Submitter(s):

Results of the brainstorming discussion in arch call on Sept 17th.

### Reviewer(s):

<reviewers>

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

<link to corresponding use case https://github.com/w3c/wot-architecture/blob/master/USE-CASES/xyz.md >

### Affected WoT Deliverables:

<list all affected deliverables, e.g. TD spec, Profile spec, Scripting API, Security best practices, Discovery, ...>

### Requirements:

- Describe a topology of things that are combined in a mashup.
- Connect a thing description with a thing model.

### Types of relationships:

There is already a RFC / Iana naming scheme for link relatinos, we can adopt those.

If the type is a URL, a link is the natural chice for represnting it.

when you think about how you model things in UML: inheritance, implementation, aggregation

- "Source"/"Search", to identify the source from which the TD was obtained (e.g. a device, database, directory)
- "Inheritance/implements" for Thing Model - TD relationship
- "Containment": "contained by" or "is contained" - system components
- "Aggregation": set of entities
- "Collection":
- "Metadata", e.g. company, maintainer, license ...
- "Documentation":
- ("Current")
- "Previous": version of the document
- "member", "Item"
- "manifest": point to SW implementing the TD
- "Profile": denote compliance

#### Not in IANA list:
- "proxy-to" (security or protocol proxy or both)
- "twin-of"
- "shadow": caching data
- "simulation", could be a shadow or a twin

### Entity types:
* Thing model
* Thing description

** Directory
** Physical locations
** Sets (homogeneous or different types)


### Open Issues:

* Do we need bidirectional relationship?
* More than one link of the same type? (Example is a TD that implements multiple TMs)
* Is a "TD implements TM" relationship inclusive or exclusive?
* When to use links and when to use semantic relationships?
* not use a link if the linked entity is not dereferencable
* if it is primarily a concept, a semantic realtionship is more appropriate

### Related standards:

<list related standards>
Any more IoT specific link relation types: Platform Industry 4.0?

### Other references:

https://www.iana.org/go/rfc8288

Link relations:
https://www.iana.org/assignments/link-relations/link-relations.xhtml


### Comments:

<additional comments>
