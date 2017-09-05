# WoT Terminology

This document serves for faster iterations and discussions of our terminology, as the WoT Architecture document has a stricter merging policy and the GitHub wiki is not writeable for non-editors.

## Action
An Interaction Pattern to invoke procedure on a Thing, potentially a long running physical process (e.g., lowering of window blinds).

## Application
A running or periodically running process that consumes one or more Things (read and processes there data, control their state) and/or exposes on or more Things (provide access to locally gathered data or computed from consumed Things, provide remote control and management interfaces). The application can be implemented using the Scripting API or native platform APIs. The application may also be distributed over multiple Things and other hosts.

## Binding Templates
A re-usable collection of blueprints for the communication with different IoT platforms. The blueprints includes the required vocabulary for the Thing Description to map Interactions to platform-specific messages as well as implementation notes for the required protocol stacks or dedicated communication drivers.

## Client API
Programming interface that allows scripts to access remote Things over the network, local Things in a different execution environment, or directly attached hardware (which as abstracted as Things).

## Consumed Thing
A software object instance created through the Client API that represents a remote Thing that is used by the local application.

## Discovery API
Programming interface that allows scripts to discover other Things (local, nearby, or remote).

## Event
An Interaction Pattern to subscribe to data pushed by a WoT Server. These can be stand-alone events such as an alarm, change-of-value notifications, or time series of data.

## Execution Environment
A sandbox within the Runtime that isolates scripts running on the same Servient.

## Exposed Thing
A software object instance created through the Server API that is implemented locally and can be accessed over the network by remote WoT Clients.

## Interaction
A functionality exposed by Thing that is defined by the TD Interaction Model.

## Interaction Model
A formal model that syntactically and semantically maps different network-facing interfaces (i.e., WoT Interfaces) to application-facing interfaces (e.g., the Scripting API -- note that these can also be proprietary APIs when not implementing the WoT Runtime). The Thing Description is built around this model and connects it to Link Data vocabularies.

## Interaction Pattern
A default solution to describe common Interactions: Property, Action, and Event.

## IoT platform
A specific IoT ecosystem such as OCF, oneM2M, or Mozilla Project Things with its own specifications for application-facing APIs, data model, and protocols or protocol configurations.

## Local Discovery
A discovery method that can discover Things directly connected to a Servient (e.g., sensor or actuator that is abstracted as Thing).

## Manual Discovery
A discovery method where the URI of the used consumed Thing Descriptions is provided manually (e.g., through user configuration or hard-coding in a script).

## Nearby Discovery
A discovery method where the physical location is considered (e.g., BLE, Audio Watermarking, ...).

## Network Discovery
A discovery method that can discover Things in local networks (e.g. SSDP, mDNS/DNS-SD, ...).

## Property
An Interaction Pattern to read a specific value of a Thing and optionally to write it.

## Protocol Binding
An implementation of the mapping between Interaction in the TD Interaction Model (e.g., Property read) and specific operations of a protocol (e.g., HTTP GET).

## Remote Discovery
A discovery method which supports lookup of remote Things also beyond network boundaries, for instance by using a directory service. The endpoint of the directory must be supported.

## Scripting API
The application-facing programming interface provided by a Servient; comparable to the Web browser APIs.

## Server API
Programming interface that allows scripts to expose local functionality as Things to WoT Clients.

## Servient
A software stack that implements the WoT building blocks. A Servient can host and expose Things (server role) and/or consume Things (client role). Servients usually have multiple Protocol Bindings to enable interaction with different platforms.

## TD
See Thing Description.

## Thing
An abstraction of a physical entity whose metadata and interfaces are described by a WoT Thing Description. This entity can be an existing device augmented with a Thing Description, a logical component of a device that has a software stack that natively provides Thing Descriptions (see Servient), a local hardware component of a Servient, or a logical entity (e.g., location) that does not directly provide any software stack such as a room or building.

## Thing Description (TD)
Structured data describing a Thing. A TD includes metadata, domain-specific metadata, a list of offered interactions, the supported protocol bindings for each interaction, and links to related Things. The Thing Description is built around a formal Interaction Model.

## Thing Directory
A directory service for TDs that provides a Web interface to register TDs (see [draft-ietf-core-resource-directory](https://tools.ietf.org/html/draft-ietf-core-resource-directory)) and look them up (e.g., using SPARQL queries or CoRE Link Format).

## WoT Client
An entity that can connect with a network interface described by a WoT Thing Description (i.e., consume a Thing). WoT Clients usually implement multiple Protocol Bindings. WoT Client is also used to refer to a Servient in client role only.

## WoT Interface
The network-facing interface of a Thing as defined by its Thing Description.

## WoT Runtime
A runtime system for application scripts with the WoT Scripting API. Implementing a Runtime is optional for Servients.

## WoT Server
An entity that exposes a network interface consistent with a WoT Thing Description. WoT Server is also used to refer to a Servient in server role only.

---

## CoAP
Acronym for Constrained Application Protocol [RFC7252]

## CWT
CBOR Web Token [draft-ietf-ace-cbor-web-token](https://tools.ietf.org/html/draft-ietf-ace-cbor-web-token)

## JSON-LD
A JSON document that is augmented with support for Linked Data by providing an `@context` property with a defining URI [JSON-LD](https://www.w3.org/TR/json-ld/).

## JWT
JSON Web Token [RFC7519]

## RDF
The Resource Description Framework (RDF) of the Semantic Web [rdf11-concepts](https://www.w3.org/TR/rdf11-concepts/)
