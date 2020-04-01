## Device Lifecycle

### Submitter(s): 

Michael Lagally

### Reviewer(s):

All WoT Arch participants

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

device manufacturer, gateway manufacturer, cloud provider

### Motivation:

Current spec does not address lifecycle.

### Expected Devices:


<List the target devices, e.g. as a sensor, solar panel, air conditioner>

### Expected Data:

<List the type of expected data, e.g. weather and climate data, medical conditions, machine sensors, vehicle data>

### Dependencies:

<List the affected WoT deliverables>

### Description:

Handle the entire device lifecycle: 
Define terminology for lifecycle states and transitions.

#### Actors (represent a physical person or group of persons (company))
Manufacturer
Service Provider
Network Provider (potentially transparent for WoT use cases)
Device Owner (User)
Others?

#### Roles:
Depending on the use case, an actor can have multiple roles, 
e.g. security maintainer.  
Roles can be delegated.

#### Variants:

There are (at least) two different entities to consider:
- Things / Devices
- Consumers, e.g. cloud services or gateways

In more complex use cases there are additional entities:
- Intermediates
- Directories

### Gaps:

The current architecture spec does not describe device lifecycle in detail.
A common lifecycle model helps to clarify terminology and structures the discussion
in different groups.
Interaction of a device with other entities such as directories may introduce 
additional states and transitions.

### Existing standards:

<Provide links to relevant standards that are relevant for this use case>
WoT Security
ETSI OneM2M
OMA LwM2M
OCF
IEEE
SIM cards / GSMA
IETF 
Application Lifecycle (W3C Multimodal Interaction WG)  

### Comments:

Here are some documents that were created / discussed in the architecture TF.

Draft lifecycle diagram:
https://github.com/w3c/wot-architecture/blob/master/proposals/WoT%20lifecycle%20diagram-WoT%20new%20lifecycle.svg

Lifecycle comparisons:
https://github.com/w3c/wot-architecture/blob/master/proposals/Device-lifecycle-comparisons.pdf

IoT Security Bootstrapping: 
https://github.com/w3c/wot-security/blob/master/presentations/2020-03-16-Bootstrapping%20IoT%20Security%20-%20The%20IETF%20Anima%20and%20OPC-UA%20Recipes.pdf
