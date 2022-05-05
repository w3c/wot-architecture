# Web of Things Architecture Explained

The W3C Web of Things (WoT) was created to counter the fragmentation of the IoT market:
The variety of pre-existing standards and vendor-specific platforms in the various verticals (i.e., application domains) has led to data and application silos and many difficult system integration problems.
By some estimates, [up to 40% of the value of the IoT](https://www.mckinsey.com/business-functions/digital-mckinsey/our-insights/the-internet-of-things-the-value-of-digitizing-the-physical-world) is only acheivable through interoperabilty, which is the primary goal of the Web of Things.

W3C WoT acknowledges that the IoT emerged from and incorporates various established ecosystems with existing platforms and standards that reflect the diversified requirements of IoT applications (e.g., network protocols, data models).
Thus, W3C WoT uses Web technology to **formally describe the interfaces** of IoT devices and platforms to ease the integration across ecosystems and application domains.
The idea is that rich metadata based on URIs, hypermedia controls, and collaborative schema definitions (cf. [schema.org]()) allows clients to adapt to the peculiarities of a given IoT platform by configuring its (vanilla) protocol stack with the metadata (e.g., only one CoAP stack for OCF, oneM2M, LwM2M, and dotdot -- or re-using the same HTTP API instead of generating custom stubs for each "RESTful API").

The WoT Architecture document serves as an umbrella for all WoT specifications, and hence also sets the general goals of the W3C Web of Things.
It defines the abstract architecture and spans the design space for current and future so-called building blocks, which are specified in separate documents.
Specifically, the purpose of the WoT Architecture document is to provide

- the basic terminology,
- use cases and derived requirements the W3C WoT Architecture should satisfy,
- definitions of the basic concepts and architectural constraints,
- an overview over the WoT building block documents and their interplay, and
- a guide for mapping the abstract architecture onto a variety of concrete deployment scenarios

The architecture document lays the foundation for the WoT building block specifications:

- the <a href="https://w3c.github.io/wot-thing-description/">WoT Thing Description</a> (REC Track),
- the <a href="https://w3c.github.io/wot-profile/">WoT Profile</a>,
- the <a href="https://w3c.github.io/wot-binding-templates/">WoT Binding Templates</a>,
- the <a href="https://w3c.github.io/wot-discovery/">WoT Discovery</a>, and
- the <a href="https://w3c.github.io/wot-security/">WoT Security and Privacy Considerations</a>.

Of these, the WoT Security and Privacy Considerations provide a general analysis that cross-cuts the other building blocks, each of which also include their own specific security and privacy considerations.

## Goals

* Simplify the integration of different IoT devices and platforms.
* Complement existing IoT standards and platforms.
* Build upon the Web architecture, in particular URIs, registered representation formats (media types), and hypermedia.
* Allow for IP-based IoT protocols other than HTTP (given they fulfill the Uniform Interface constraint of REST).
* Allow for different integration patterns: at the device level, gateway/edge node, and the cloud.

## Non-goals

* Not trying to establish a new vertical solution for the IoT.
* Not defining domain-specific aspects.
* Not defining any new security mechanisms.

## Application domains and use cases

A set of use cases for a set of IoT application domains were collected to drive the 
requirements for the WoT architecture.
These use cases were chosen to be typical of IoT applications but were not meant
to be exhaustive.
Rather, the use cases served as concrete illustrations or exemplars,
where connected things using WoT could provide additional benefit or enable new scenarios.

These use cases and requirements are published at <a href="https://www.w3.org/TR/wot-usecases/">WoT Usecases and Requirements</a>.

Application domains and use considered included 

### 1. Horizontal use cases that address multiple domains

| Domain                            | Use Cases |
| --------------------------------- | ----------- |
| Discovery                         | Metadata distribution |
| Multi-Vendor System Integration   | Out of the box interoperability |
| Digital Twin                      | Virtual twin, Predictive Twin, Twin Projections  |
| Cross Protocol Interworking       | Interworking across different protocols |
| Multimodal System Integration     | Multimodal Recognition, Synergistic Interactions |
| Accessibility                     | Accessbility extensions of personal devices |
| Security                          | Oauth2 |
| Lifecycle                         | Device lifecycle |
| Virtual Reality / Augmented Reality | Augmented virtual guide|
| Edge Computing                    | low latency processing, always on scenarios  |

### 2. Domain specific (vertical) use cases for a single application domain

| Domain           | Use Cases   |
| ---------------- | ----------- |
| Agriculture      |Greenhouse and Open-field agricultire |
| Smart City       |Geolocation, Dashboard, Interactive Public Spaces, Smart Campus|
| Building Technologies  | Smart Buildings, Energy Efficiency, Building Management |
| Manufacturing    | Discrete and continuous manufacturing |
| Retail           | Common retail workflows |
| Health           | Public and private health |
| Energy           | Energy distribution, smart grid |
| Transportation   | Infrastructure, Cargo, People |
| Automotive       | Smart cars, |
| Smart Home       | TV synchronisation, presence |
| Education        | Shared devices |


## Key scenarios and common patterns

Analysis of the use cases resulted in a set of common patterns of
network and device configuration summarized in the following figure, which
combines many of the patterns.  IoT services are often composed of services 
running in the cloud and on gateways as well as on the actual devices.
User interfaces are often exposed via the web or through applications on
mobile devices such as phones.
Devices themselves might be mobile and so their network location should
not be tied to their physical location nor should such devices be
treated as being continuously connected; an example is the connected car.
Devices are often located behind firewalls and
NATs in which case proxies may be required for traversal and visibility
outside the local network.  Digital twins may be required to mirror state
for devices that are not continuously online for power-saving, mobility, or other reasons.
Many usage scenarios involving timely action in the case of alerts
require the use of "push" event notification and cannot rely
on pure request/response patterns driven by the client.

## Detailed design discussion

The architecture document defines a common WoT Architecture and serves as an entry point and
introduction to several other documents defining the WoT Building Blocks.

### Common Architecture
Based on the application domains and use cases, and the requirements derived from these,
a common abstract architecture has been defined for WoT systems.
This abstract architecture is broad enough to include many existing IoT systems and standards.
This is intentional since, in order to combat fragmentation,
the WoT approach is designed to allow the construction of IoT
systems composed of devices and services supporting many standards, platforms, and protocols
in multiple verticals.
The abstract architecture also defines a set of reference patterns and terminology that can
be used to avoid confusion when describing a WoT system.

<img src="../images/arch-use-case-overview.png"/>

The main requirement for an IoT device or service to operate as part of a WoT system 
(and be considered a "WoT Thing") is that _it must be described in a WoT Thing Description_.
The WoT Thing Description provides basic metadata about a WoT Thing, 
such as a name, description, and 
id, and also provides all the metadata needed to interact with a device.

The Web of Things defines specific building blocks to allow the implementation of systems that
conform with the abstract WoT Architecture.
The specifics of these building blocks are defined in separate documents; 
this document provides an overview and a summary.
However, first we will define the abstract architectural aspects that
these building blocks cover.

A WoT Thing has four architectural aspects of interest:
its behavior,
its interactions,
the specific additional information needed by a client
to implement each interaction in a concrete protocol
(what we will call the protocol binding),
and its security configuration.

<img src="../images/wot-abstract-arch.png"/>

The behavior aspect of a WoT Thing 
includes both lifecycle management
(onboarding, updating, decommissioning, etc) and
its operational behavior.
Operational behaviour includes autonomous activity and computation,
network interactions, sensing, and actuation during "normal operation".

The interaction aspect of a Thing can be described in terms
of generic and abstract operations like setting and getting a property, 
invoking an action, or subscribing to an event notification, among others.
The WoT architecture separates these abstract interactions from their implementation in 
particular protocols in order to enhance interoperability.
A single WoT Thing may, in general, use multiple protocols,
including but not limited to HTTP, CoAP, and MQTT.
These protocols are used both to support a WoT Thing's own interactions 
(as a server) and to connect to other WoT Things (as a client).
Some of these protocols use the request-response model,
others support a subscribe-publish model.
The latter is especially important for low-power devices
and use cases requiring timely event notifications.

Protocol bindings augment each interaction with the additional detail needed to implement it
with a particular concrete protocol.

The security configuration aspect represents the mechanisms
used to control access to the affordances and the 
management of related public and private metadata.
WoT Things in general also need to maintain their own integrity
and the integrity and confidentiality of the data they manage,
and limit access to interactions to authenticated
and authorized users, devices, and services.

### Building Blocks

The WoT Building Blocks support each of the architectural aspects discussed
in the previous section
and are the actual focus of our standardization effort.
Each of these building blocks is defined in a separate document.
The following figure outlines how these building blocks relate to
each of the architectural aspects discussed above.  Note that
building blocks do not map 1:1 to these architectural aspects.
The WoT Thing Description in particular connects in some
way to all the aspects.

<img src="../images/wot-building-blocks-abstract.png"/>

#### WoT Thing Description
The primary building block is the
<a href="https://w3c.github.io/wot-thing-description/">WoT Thing Description</a>,
which encodes metadata about the WoT Thing (name, identifier, version, etc.),
links to related entities,
its set of interactions,
data schemas and protocol bindings for those interactions,
and public security metadata.

We define the term Interaction Affordances to refer to the metadata describing the interactions supported by a WoT Thing.)

A WoT Thing Description also supports but does not require RDF/JSON-LD
(<a href="https://www.w3.org/standards/semanticweb/data">Linked Data</a>)
processing and semantic annotation and inteferencing.

#### WoT Profile
The WoT profile 
<a href="https://w3c.github.io/wot-profile/">WoT Profile</a>, 
defines a Profiling Mechanism and a HTTP Baseline Profile,
which enables out-of-the-box interoperability among things and devices.
Out-of-the-box interoperability implies that devices can be integrated together
into various application scenarios without deep level adaptations.
Typically only minor configuration operations are necessary
(such as entering a network key, or IP address) to use the device in a certain scenario.
These actions can be done by anyone without specific training.
In addition, the WoT Profile specification defines the HTTP SSE Profile 
and the HTTP Webhook profile. These enable asynchronous notifications.
The HTTP SSE Profile is using the SSE protocol, the HTTP Webhook Profile 
uses a WebHook mechanism.

#### WoT Discovery
// TODO: add description 


#### WoT Scripting API
A second (optional) building block is the WoT Scripting API.
This building block allows the definition of the behavior
of a WoT Thing (responses to interactions) as well as
the Consumption (parsing and use)
and Exposure (construction and publication) of
WoT Thing Descriptions.
This building block is optional because devices can choose to
implement behaviors and construct or consume WoT Thing Descriptions by other
means than using the WoT Scripting API.
In particular, WoT Thing Descriptions do not need to be be provided
by the device itself, but can be provided separately (for example by
a web service or database).
This is necessary for supporting brownfield (pre-existing)
devices and services.
However, the WoT Scripting API can be used to simplify and support the development of
*new* WoT Things or services that need to connect to WoT Things.
The WoT Scripting API specification targets implementation in JavaScript
and is consistent with both browser and server use cases,
although the focus is on its use in devices and services.

#### WoT Binding Templates
The IoT uses a variety of protocols for accessing devices, since no
one protocol is appropriate in all contexts. Thus, a central
challenge for the Web of Things is to enable interactions with the
plethora of different _IoT Platforms_ (e.g., OCF, oneM2M, OMA
LWM2M, OPC-UA, etc.) and RESTful devices that do not follow any
particular standard, but provide an interface over standardized protocols
such as HTTP, CoAP, or MQTT.

WoT is tackling this variety by supporting the encoding of protocol
binding details in the WoT Thing Description but also
by publishing an informational document, the
<a href="https://w3c.github.io/wot-binding-templates/">WoT Binding Templates</a>.
This building block provides a collection of communication metadata blueprints
that explain how to encode the metadata needed to interact with different IoT platforms
in a WoT Thing Description.

#### WoT Security and Privacy Considerations
The final building block is security, which is a cross-cutting concern.
IoT devices and services generally have strong security and privacy requirements,
and the WoT Architecture deals with this aspect of WoT systems in several ways.

First, the WoT Thing Description itself supports the description of public
security metadata so that consumers of a WoT Thing know what mechanisms they
need to support to gain access.
This follows security best practices
of documenting security mechanisms and controlling access through specific
private information (eg keys) rather than depending on security through obscurity.

Second, the WoT Scripting API is designed to not have direct access to
private keying information.  This must be provisioned separately.

Third, general security and privacy considerations, testing,
and best practices are covered in separate publications.

## Considered alternatives

One of the original designs for the WoT limited interactions to HTTP and RESTful interfaces.
However, there are many IoT ecosystems that use other protocols, such as CoAP or MQTT.
There are many reasons for this, but to fully support the IoT, with direct access to
IoT devices without protocol translation services, a broader perspective on
acceptable protocols is needed.
This also differentiates the WoT Thing Description from Web API descriptions such
as Swagger/OpenAPI, which are focused on defining APIs that are based on HTTP.

## References & acknowledgements

The "Web of Things" (WoT) started as an academic initiative in the
form of publications and, from 2010 to 2017, 
a yearly [International Workshop on the Web of Things](https://webofthings.org/events/wot/). 
The first <a href="https://www.w3.org/2014/02/wot/">W3C Web of Things Workshop</a>
was held in 2014 with the goal of further examining the potential for open standards
as a basis for IoT services.
Based on the interest generated by this workshop, the
W3C chartered a Web of Things Interest Group in 2015 to
identify technological building blocks for Recommendation Track
standardization.
The W3C Web of Things Working Group was chartered in late 2016 to
work on standards for the identified building blocks.
The current set of proposals was tested with a focus on enhanced interoperability over the 
course of multiple plugfests over the several years since the creation of the WoT
Interest Group and Working Group.
Dozens of companies have been involved and have produced and tested numerous implementations.

Many thanks to Kazuyuki Ashimura, Matthias Kovatsch, 
Michael McCool, Michael Lagally, Ryuichi Matsukura, Toru Kawaguchi, 
Kazuaki Nimura, Kunihiko Toumura, Elena Reshetova, Zoltan Kis, Kazuo Kajimoto, Sebastian Käbisch and Dave Raggett 
for their contributions to this document.

Numerous other people have contributed with input, discussions and review feedback,
and it is impossible to acknowledge them all - Many thanks for all comments and discussions
that helped to create the WoT architecture.
