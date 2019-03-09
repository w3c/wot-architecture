# Web of Things Architecture Explained
[7.3.2019]

## What’s all this then?
[A brief, 4-5 paragraph explanation of the feature’s value. Outline what the feature does and how it accomplishes those goals (in prose). If your feature creates UI, this is a great place to show mocks and user flows.]

The W3C Web of Things (WoT) was created to enable
interoperability across IoT Platforms and application domains using Web technology.

WoT provides mechanisms to formally describe IoT interfaces
to allow IoT devices and services to communicate with each other,
independent of their underlying implementation, and across multiple
networking protocols. 
In addition WoT offers a standardized way to define and program IoT behavior.

The WoT Architecture Document describes the abstract architecture for the W3C
Web of Things. It is derived from a set of requirements that were derived
from use cases for multiple application domains.
The architecture can be mapped onto a variety of concrete deployment scenarios, 
several examples of which are given. 

The Architecture Document serves as an umbrella for the W3C WoT 
specifications and defines the basics such as terminology and the
underlying abstract architecture of the W3C Web of Things. 
In particular, the purpose of this document is to provide

- a set of use cases that lead to the W3C WoT Architecture,
- a set of requirements for WoT implementations,
- an overview of the WoT building blocks being standardized
	and their interplay,
- a guideline to map the abstract architecture to software
	stacks and hardware components,
- and security considerations to be aware of when implementing
	WoT building blocks.

The architecture document is complemented by the building block
specifications:

- the <a href="https://w3c.github.io/wot-thing-description/">WoT
					Thing Description</a> ,

- the <a href="https://w3c.github.io/wot-binding-templates/">WoT
					Binding Templates</a> , and
- the <a href="https://w3c.github.io/wot-scripting-api/">WoT
					Scripting API</a> .

Other non-normative architectural blocks and conditions
underlying the Web of Things are also described in the context of
deployment scenarios. In particular, recommendations for security and
privacy are included, while the goal is to preserve and support
existing device mechanisms and properties. 

## Goals
[How will the web be better when this feature launches? And who will it help?]


## Non-goals
[You’re not going to solve every problem so enumerate the attractive, nearby problems that are out of scope for this effort. This may include details on the tradeoffs made due to architectural limitations made due to implementation details, and features left out either due to interoperability concerns or other hurdles, and how you plan to improve on this. This can often be the single most important part of your document, so give it careful thought.]

The Web of Things architecture does not put any limitations on use cases and application domains. 
It complements existing IoT standards and bridges between them.
In general, W3C WoT is designed to describe what exists rather than to prescribe what to
implement.


## Getting started / example code
[Provide a terse example for the most common use case of the feature. If you need to show how to get the feature set up (initialized, or using permissions, etc.), include that tool here]

## Application domains
The following sections are not exhaustive. Rather they serve as illustrations, where connected things using WoT can provide additional benefit or enable new scenarios.

### Consumer

In the consumer space there are multiple assets that benefit from being connected. Lights and air conditioners can be turned off based on room occupancy. Window blinds can be closed automatically based on weather conditions and presence.
Energy and other resource consumption can be optimized based on usage patterns and predictions.

### Industrial

Smart factories require advanced monitoring of the connected manufacturing equipment as well of the manufactured products. They benefit from predictions of machine failures and early discovery of anomalies to prevent costly downtime and maintenance efforts. Monitoring of connected manufacturing equipment and the environment at the production facility for the presence of poisonous gases, excessive nois or heat increases the safety of the workers and reduces the risks of incidents or accidents.

Monitoring of vehicles, fuel costs, maintenance needs and assignments helps to optimize the full utilization of the vehicle fleet. Shipments can be tracked to be en-route to ensure consistent quality and condition of the transported goods. This is especially useful to assert the integrity of the cold-chain from warehouses to refrigerated trucks to delivery.

Automated reading of residential and C&I (Commercial and Industrial) meters, and billing offers continuous insights into
resource consumption and potential bottlenecks. Monitoring the condition and output of distributed renewable energy generation equipment enables optimisation of distributed energy resources.

Offshore platform monitoring, leakage detection and predicition of pipelines as well as monitoring and controlling the levels in tanks and reservoirs helps to improve the industrial safety for the workforce as well as for the environment.
Automated calculation of a distributed stock through various storage tanks and delivery pipes/trucks allows for improved planning and resource optimisation.

### Insurance

Usage based insurance can be offered with usage tracking and customized insurance policies.
Predictive weather monitoring and re-routing fleet vehicles to covered garages can limit loss due to hail damage, tree damage.

### Agriculture

Soil condition monitoring and creating optimal plans for watering, fertilizing as well as monitoring the produce conditions optimize the quality and output of agricultural produce.

### Healthcare

Data collection and analytics of clinical trial data helps to gain insights into new areas.
Remote patient monitoring mitigates the risk of undetected critical situations for elderly people and patients after hospitalization.

### Environment

Monitoring of air pollution, water pollution and other environmental risk factors such as fine dust, ozone, volatile organic compound, radioactivity, temperature, humidity to detect critical environment conditions can prevent unrecoverable health or environment damages.

### Smart cities and buildings

Monitoring of Bridges, Dams, Levees, Canals for material condition, deterioration, vibrations discovers maintenance repair work and prevents significant damage. Monitoring of highways and providing appropriate signage ensures optimized traffic flow.
Smart control of street lights based on presence detection, weather predictions, etc reduced cost.
Monitoring the energy usage throughout the building helps to optimize resource consumption and reduce waste.

### Connected Car

Monitoring of operation status, prediction of service needs optimizes maintenance needs and costs.
Driver safety is enhanced with notifications of an early warning system for critical road and traffic conditions.

## Key scenarios
Next, discuss the key scenarios which move beyond the most canonical example, showing how they are addressed using example code:

Scenario 1
Outline the scenario, then provide:

[sample code that demonstrates the feature]

Scenario 2
Outline the scenario, then provide:

[sample code that demonstrates the feature]

…



## Detailed design discussion
[Tricky design choice #1
Talk through the tradeoffs in coming to the specific design point you want to make, hopefully:

[illustrated with example code]

…

Tricky design choice N
…]

This architecture document defines a common WoT Architecture and serves as an entry point and
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

### Architectural Aspects of a Thing

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



## Considered alternatives
[One of the most important things you can do in your design process is to catalog the set of roads not taken. As you iterate on your design, you may find that major choices in your approach or API style will be revisited and enumerating the full space of alternatives can help you apply one (or more) of them later, may serve as a “graveyard” for u-turns in your design, and can give reviewers and potential users confidence that you’ve got your ducks in a row.]

## References & acknowledgements
[Your design will change and be informed by many people; acknowledge them in an ongoing way! It helps build community and, as we only get by through the contributions of many, is only fair.]

The "Web of Things" (WoT) started as an academic initiative in the
form of publications and, starting in 2010, a yearly International Workshop on
the Web of Things. Its goal is to improve interoperability as well
as usability in the Internet of Things (IoT). With the increasing
role of IoT services using other web standards in commercial and
industrial applications, the W3C chartered an Interest Group in 2015 to
identify technological building blocks for Recommendation Track
standardization. 

Many thanks to Kazuyuki Ashimura, Dave Raggett, Matthias Kovatsch, 
Michael McCool, Michael Lagally, Ryuichi Matsukura, Toru Kawaguchi, 
and Kazuo Kajimoto for their contributions to this document.

Numerous other people have contributed with input, discussions and review feedback,
and it is impossible to acknowledge them all - Many thanks for all comments and discussions
that helped to create the WoT architecture.



-------------
# OLD content 

## Background 
With the WoT Working Group which started working at the end of 2016, 
the first set of WoT building blocks has now being standardized:
	
- the <a href="https://w3c.github.io/wot-thing-description/">WoT
		Thing Description</a>,
- the <a href="https://w3c.github.io/wot-binding-templates/">WoT
		Binding Templates</a>, and
- the <a href="https://w3c.github.io/wot-scripting-api/">WoT
		Scripting API</a>.
		
The architecture document serves as an umbrella for the W3C WoT 
specifications and defines the basics such as terminology and the
underlying abstract architecture of the W3C Web of Things. In
particular, the purpose of this document is to provide

- a set of use cases that lead to the W3C WoT Architecture,
- a set of requirements for WoT implementations,
- an overview of the WoT building blocks being standardized
	and their interplay,
- a guideline to map the abstract architecture to software
	stacks and hardware components,
- and security considerations to be aware of when implementing
	WoT building blocks.



## What is being standardized?

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
