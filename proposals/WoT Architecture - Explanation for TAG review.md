# Web of Things Architecture
## Explanation document for TAG review

## Background (MK?)
- objectives
- contributors
- work started in ... 
- Status as of today

## Application domains and use cases (ML)

- home
- industrial
- connected cars
- smart cities and buildings

## What is being standardized? (MMC)

This document defines a common WoT Architecture and serves as an entry point and
introduction to several other documents defining WoT Building Blocks.

### Common Architecture
Based on the application domains and use cases, and the requirements derived from these,
a common abstract architecture is defined for WoT systems.  
This abstract architecture is broad enough to include many existing IoT systems and standards.
This is intentional since, in order to combat fragmentation,
the WoT approach is designed to allow the construction of IoT
systems composed of devices and services supporting many other standards and protocols
in multiple verticals.
However, the abstract architecture defines a set of reference patterns and terminology that can
be used to avoid confusion when describing a WoT system.

The main requirement for an IoT device or service to operate as part of a WoT system 
(and be considered a "WoT Thing") is that it must be described in a WoT Thing Description.
The WoT Thing Description provides basic metadata about a WoT Thing, such as a name, description, and 
id, and also provides all the metadata needed to interact with a device.

### Building Blocks:
The Web of Things defines specific building blocks to allow the implementation of systems that
conform with the abstract WoT Architecture.
The specifics of these building blocks are defined in separate documents; 
this document provides an overview and a summary.

<img src="../images/wot-building-blocks.png"/>
## Architectural Aspects of a Thing

A WoT Thing has four architectural aspects of interest: 
its behavior, its interactions, the specific additional information needed by a client to implement each interaction in a concrete protocol 
(what we will call the protocol binding), and its security configuration.  The security configuration
includes both public and private (secret) information, as well as mechanisms to support the integrity of the WoT Thing and 
protect and control access to its interactions.

The behavior aspect of a WoT Thing 
includes both lifecycle management (onboarding, updating, decommissioning, etc) and
its operational behavior.
Operational behaviour includes autonomous activity and computation, network interactions, sensing, and actuation.

The interaction aspect of a Thing can be described in terms
of generic and abstract operations like setting and getting a property, 
invoking an action, or subscribing to an event notification, among others.  
The WoT architecture separates these abstract interactions from their implementation in 
particular protocols in order to enhance interoperability.
A single WoT Thing may, in general, use multiple protocols, including but not limited to HTTP, CoAP, and MQTT.
These protocols are used both to support its own interactions (as a server) and to connect to other WoT Things (as a client).
Some of these protocols use the client-server model, others support a subscribe-publish model.
The latter is especially important for low-power devices and use cases requiring timely event notifications.
Our main constraint on protocols is that they must support the use of URLs to describe access addresses.
We define the term "servient" for devices or services,
such as WoT Things, that can be either a server/publisher, a client/subscriber, or both. 

Protocol bindings augment each interaction with the additional detail needed to implement it
with a particular concrete protocol.

The security configuration aspect represents the mechanisms used to control access to the affordances and the 
management of related public and private metadata.  WoT Things in general also need to maintain their own integrity
and the integrity and confidentiality of the data they manage, and limit access to interactions to authenticated
and authorized users, devices, and services.

### Building Blocks
The WoT Building Blocks support each of these aspects, and are the focus of our standardization effort.
Each of these building blocks is defined in a separate document.

#### WoT Thing Description
The primary building block is the WoT Thing Description [[?wot-thing-description]],
which encodes metadata about the WoT Thing (name, identifier, version, etc.),
links to related entities,
its set of interactions, 
data schemas and protocol bindings for those interactions, 
and public security metadata.
We define the term Interaction Affordances to refer to the metadata describing the interactions supported by a WoT Thing. 
A WoT Thing Description also supports but does not require RDF/JSON-LD (Linked Data) 
processing and semantic annotation and inteferencing [[?LINKED-DATA]].
* NOTE 1: In the long run, we intend to align with JSON-LD 1.1 [[?JSON-LD11]] 
  for serialization of the WoT Thing Description
  but have to wait for that WG to complete their own work.
  In the short term we have aligned the WoT Thing Description
  as much as possible with the JSON-LD 1.1 draft 
  and have defined a simple transformation to JSON-LD 1.0.
* NOTE 2: RDF/JSON-LD support is not *required* 
  due to the need to support lightweight devices and also to maximize
  support by the web developer community,
  not all of whom want or need semantic processing.

The WoT Thing Description building block fosters interoperability in two ways: 
First, they enable machine-to-machine communication, as devices can
read WoT Thing Descriptions and use the information contained in them
to automatically adapt to details of a particular protocol, using
the interaction/protocol binding abstraction.
Second, they can serve as a common, uniform format for developers to document and
retrieve all details necessary to access IoT devices and make use of their data.
To better support semantic interoperability, WoT Thing Descriptions may 
optionally make use of domain-specific vocabularies, 
for which explicit extension points are provided. 
However domain-specific vocabularies themselves are out of scope of the 
current WoT standardization activity.

#### WoT Scripting API
A second optional building block is the WoT Scripting API. 
This building block allows the definition of the behavior
of a WoT Thing (eg responses to interactions) 
and the Consumption (parsing and use) 
and Exposure (construction and publication) of
WoT Thing Descriptions.  
This building block is optional because devices can choose to
implement behaviors and construct or consume WoT Thing Descriptions by other
means than using the WoT Scripting API.  
In particular, WoT Thing Descriptions do not need to be be provided
by the device itself, but can be provided separately (for example by
a web service or database), which is necessary for supporting brownfield (pre-existing)
devices and services.  
However, the WoT Scripting API can be used to simplify and support the development of 
*new* WoT Things or services that need to connect to WoT Things.
The WoT Scripting API specification targets implementation in JavaScript 
and is consistent with both browser and server use cases, 
although the focus is on its use in devices and services.

### WoT Binding Templates
The IoT uses a variety of protocols for accessing devices, since no
one protocol is appropriate in all contexts. Thus, a central
challenge for the Web of Things is to enable interactions with the
plethora of different <a>IoT platforms</a> (e.g., OCF, oneM2M, OMA
LWM2M, OPC-UA, etc.) and RESTful devices that do not follow any
particular standard, but provide an interface over standardized protocols
such as HTTP, CoAP, or MQTT. 

WoT is tackling this variety by supporting the encoding of protocol
binding details in the WoT Thing Description but also
by publishing an informational document,
the WoT Binding Templates [[?wot-binding-templates]].
This building block provides a collection of communication metadata blueprints 
that explain how to encode the metadata needed to interact with different IoT platforms.
in a WoT Thing Description.

### WoT Security and Privacy Considerations
The final building block is security, which is a cross-cutting concern.
IoT devices and services generally have strong security and privacy requirements,
and the WoT Architecture deals with this aspect of WoT systems in several ways.

First, the WoT Thing Description itself supports the description of public
security metadata so that consumers of a WoT Thing know what mechanisms they
need to support to gain access.  Notice that this follows security best practices
of documenting security mechanisms and controlling access through specific 
private information (eg keys) rather than depending on security through obscurity.

Second, the WoT Scripting API is designed to not have direct access to
private keying information.  This must be provisioned separately.

Third, we have done an analysis of the threats and risks to a WoT system
and published this analysis in the WoT Security and Privacy Considerations
document [[?wot-security]].  In addition to a set of risks common to all
IoT systems, this document also considers the additional risks and opportunities
afforded by the other WoT Building Blocks, and how to mitigate them.  
For example, a WoT Thing
Description gives a potential attacker information that may help in
identifying and attacking a vulnerable system... but it also helps a 
system integrator or user manage that information and identify the same
vulnerable systems and mitigate their vulnerabilities.
Each normative document also includes a set of security and privacy
considerations specific to that document.

Fourth, we have developed a WoT Security Testing Plan [[?wot-security-testing-plan]]
and a set of WoT Best Practices [[?wot-security-best-practices]].
These informational documents are intended to help developers 
secure WoT system implementations.
