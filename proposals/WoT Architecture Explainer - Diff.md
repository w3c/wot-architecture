5c5,6
< ## What’s all this then?
---
> [//]: # (## What’s all this then?
> This section header seems chatty and redundant.  The opening can just be the opening.)
10a12,18
> This is a crucial issue as the specialized needs of IoT services
> and the variety of pre-existing standards in the various verticals (application domains)
> IoT seeks to integrate has led to severe market fragmentation and
> many difficult system integration problems.
> By some estimates, 
> [up to 40% of the value of the IoT](https://www.mckinsey.com/business-functions/digital-mckinsey/our-insights/the-internet-of-things-the-value-of-digitizing-the-physical-world) 
> is only acheivable through interoperabilty.
19c27,28
< Web of Things. It is derived from a set of requirements that were derived
---
> Web of Things.
> It is derived from a set of requirements that were in turn derived
22c31
< several examples of which are given. 
---
> several examples of which are given in the document.
25c34
< specifications and defines the basics such as terminology and the
---
> specifications and defines basics such as terminology and the
27c36
< In particular, the purpose of this document is to provide
---
> Specifically, the purpose of this document is to provide
29c38
< - a set of use cases that lead to the W3C WoT Architecture,
---
> - a set of use cases the W3C WoT Architecture should satisfy,
33,36c42,45
< - a guideline to map the abstract architecture to software
< 	stacks and hardware components,
< - and security considerations to be aware of when implementing
< 	WoT building blocks.
---
> - a guide to mapping the abstract architecture onto software
> 	stacks and hardware components in various deployment scenarios,
> - and a summary of some security and privacy considerations 
>         to be aware of when implementing WoT building blocks.
38,39c47,48
< The architecture document is complemented by the building block
< specifications:
---
> The architecture document lays the foundation for the WoT
> building block specifications:
42c51
< 					Thing Description</a> ,
---
> 					Thing Description</a> (REC Track),
45c54
< 					Binding Templates</a> , and
---
> 					Binding Templates</a>,
47c56,58
< 					Scripting API</a> .
---
> 					Scripting API</a>, and
> - the <a href="https://w3c.github.io/wot-security/">WoT
>                 Security and Privacy Considerations</a>.
49,53c60,62
< Other non-normative architectural blocks and conditions
< underlying the Web of Things are also described in the context of
< deployment scenarios. In particular, recommendations for security and
< privacy are included, while the goal is to preserve and support
< existing device mechanisms and properties. 
---
> Of these, the security and privacy considerations provide a general
> analysis that cross-cuts the other building blocks, each of which also 
> include their own specific security and privacy considerations.
55c64
< ## Goals (MK)
---
> ## Goals
57c66
< [//]: # (How will the web be better when this feature launches? And who will it help?)
---
> [//]: # (MK: How will the web be better when this feature launches? And who will it help?)
59c68
< TODO
---
> [//]: # (McCool: it is pretty hard to cleanly divide this into goals and non-goals... maybe this should be one section, "Goals and Non-Goals"?)
61c70,71
< ## Non-goals (MK)
---
> For WoT in general the goal is to support existing standards
> and make them easier to use and integrate.
63c73,80
< [//]: # (You’re not going to solve every problem so enumerate the attractive, nearby problems that are out of scope for this effort. This may include details on the tradeoffs made due to architectural limitations made due to implementation details, and features left out either due to interoperability concerns or other hurdles, and how you plan to improve on this. This can often be the single most important part of your document, so give it careful thought.)
---
> The WoT consolidates IoT metadata in WoT Thing Descriptions
> to foster interoperability in two ways:
> 1. By enabling and enhancing machine-to-machine communication, as devices can
>    read WoT Thing Descriptions and use the information contained in them
>    to automatically adapt to details of a particular protocol, using
>    the interaction/protocol binding abstraction.
> 2. By serving as a common, uniform format for developers to document and
>    retrieve all details necessary to access an IoT service and make use of that service's data.
65c82,91
< The Web of Things architecture does not put any limitations on use cases and application domains. 
---
> To better support semantic interoperability, WoT Thing Descriptions may
> optionally make use of domain-specific vocabularies,
> for which explicit extension points are provided.
> 
> ## Non-goals
> 
> [//]: # (MK: You’re not going to solve every problem so enumerate the attractive, nearby problems that are out of scope for this effort. This may include details on the tradeoffs made due to architectural limitations made due to implementation details, and features left out either due to interoperability concerns or other hurdles, and how you plan to improve on this. This can often be the single most important part of your document, so give it careful thought.)
> 
> The Web of Things architecture does not put any limitations on use cases and 
> application domains. 
68a95,130
> This is especially true for security, where the goal is to support
> existing mechanisms and properties, not to define new ones.
> 
> That said, we have focused on a specific set of existing 
> protocol and security standards that are in wide use by IoT devices.
> We have limited our targets to standards where resources and interaction
> points can be identified by URLs, where the protocols are defined using
> well-documented standards,
> and for which the structure of data payloads is consistent with JSON 
> (this includes XML and CBOR) and/or can be identified with an IANA media type,
> and where the interaction style is either request/response, pub/sub, or
> a hybrid of these two (eg CRUDN, REST+an event notification mechanism).
> The WoT Protocol Bindings targets HTTP, CoAP, and MQTT in particular and
> security testing and analysis has also focused on these specific protocols,
> although in theory the WoT Thing Description could be extended to other
> protocols with the properties noted above.
> 
> In general, however, we do not claim that the WoT can be used to describe the
> interaction affordances for _any_ IoT protocol.  Instead we have identified
> a set of use cases and application domains and have 
> then targeted the protocols and common patterns in those use cases and
> application domains.
> 
> Although the WoT supports Linked Data and domain-specific vocabularies
> through extension points in the WoT Thing Description,
> defining domain-specific vocabularies themselves is out of scope of the
> current WoT standardization activity.
> 
> The WoT Thing Description is a JSON document designed to be 
> generated and processed in a lightweight manner (an important requirement
> for IoT devices) with uncomplicated JSON usage patterns designed to
> be comfortable and familiar to web developers. 
> A WoT Thing Description is not itself a JSON-LD document.
> However, we do provide a mechanism to include semantic contexts and
> annotations and a well-defined process to convert WoT Thing Descriptions to JSON-LD 1.0,
> and are aligning WoT Thing Descriptions with the work in progress on JSON-LD 1.1.
74c136,145
< TODO
---
> [//]: # (McCool: I'm not convinced we need this section.  I suggest removing it
> in favor of another section later on common usage patterns, which connect the 
> use cases to the abstract architecture)
> 
> **TODO.  Maybe Omit?  An example TD _might_ be useful here, but on the other hand,
> that really belows in the TD spec.**
> 
> ## Application domains and use cases
> 
> [//]: # (McCool: This takes a lot of space; perhaps we can condense it somehow, perhaps using bulleted lists rather than subsections?  I also added "use cases" to the title because that's really what the contents of each subsection below are)
76,78c147,150
< ## Application domains
< The following sections are not exhaustive.
< Rather they serve as illustrations,
---
> The following sections describe a set of use cases that were used to drive the 
> requirements for the WoT architecture.
> These are not exhaustive. 
> Rather they serve as illustrations or exemplars,
83,86c155,159
< In the consumer space there are multiple assets that benefit from being connected.
< Lights and air conditioners can be turned off based on room occupancy.
< Window blinds can be closed automatically based on weather conditions and presence.
< Energy and other resource consumption can be optimized based on usage patterns and predictions.
---
> In the consumer space there are multiple assets that could benefit from being connected.
> Typical examples include:
> * Lights and air conditioners can be turned off based on room occupancy.
> * Window blinds can be closed automatically based on weather conditions and presence.
> * Energy and other resource consumption can be optimized based on usage patterns and predictions.
90,119c163,195
< Smart factories require advanced monitoring of the connected manufacturing equipment 
< as well of the manufactured products.
< They benefit from predictions of machine failures and early discovery of anomalies
< to prevent costly downtime and maintenance efforts.
< Monitoring of connected manufacturing equipment and the environment
< at the production facility for the presence of poisonous gases,
< excessive noise or heat increases the safety of the workers
< and reduces the risks of incidents or accidents.
< 
< Monitoring of vehicles,
< fuel costs,
< maintenance needs and assignments helps to optimize the full utilization
< of the vehicle fleet.
< Shipments can be tracked to be en-route to ensure consistent quality
< and condition of the transported goods.
< This is especially useful to assert the integrity of the cold-chain
< from warehouses to refrigerated trucks to delivery.
< 
< Automated reading of residential and C&I (Commercial and Industrial) meters,
< and billing offers continuous insights into
< resource consumption and potential bottlenecks.
< Monitoring the condition and output of distributed renewable energy generation
< equipment enables optimisation of distributed energy resources.
< 
< Offshore platform monitoring,
< leakage detection and prediction of pipelines as well as monitoring and 
< controlling the levels in tanks and reservoirs helps to improve the
< industrial safety for the workforce as well as for the environment.
< Automated calculation of a distributed stock through various storage tanks
< and delivery pipes/trucks allows for improved planning and resource optimisation.
---
> Examples from smart factories include:
> * Advanced monitoring of the status of connected manufacturing equipment 
>   as well of the manufactured products.
> * Predictions of machine failures and early discovery of anomalies
>   to prevent costly downtime and maintenance efforts.
> 
> Typical examples aimed at enhancing safety or protecting the environment include:
> * Monitoring of connected manufacturing equipment and the environment
>   at production facilities for the presence of poisonous gases.
> * Monitoring excessive noise or heat.
> * Leakage detection and prediction of pipeline usage in offshore platforms.
> * Monitoring and controlling the levels of chemicals in tanks and reservoirs.
> The goals of these use cases are to identify risk to the safety of workers 
> or the environment and reduce the risks of incidents or accidents.
> Therefore there should also be 
> a mechanism to raise alerts or invoke safety failsafes in a timely manner when
> hazards are identified.
> 
> Additional examples aimed at optimizing costs or processing include:
> * Monitoring of vehicles, fuel costs,
>   maintenance needs and assignments to optimize the utilization
>   of a vehicle fleet.
> * Tracking shipments en-route to ensure consistent quality
>   and condition of transported goods.
>   This is especially useful to assert the integrity of the cold-chain
>   from warehouses to refrigerated trucks to delivery.
> * Automated reading of residential and C&I (Commercial and Industrial) meters,
>   coordinatd with billing, offers continuous insights into
>   resource consumption and potential bottlenecks.
> * Monitoring the condition and output of distributed renewable energy generation
>   equipment enables optimisation of distributed energy resources.
> * Automated calculation of a distributed stock through various storage tanks
>   and delivery pipes/trucks allows for improved planning and resource optimisation.
123,125c199,202
< Usage based insurance can be offered with usage tracking and customized insurance policies.
< Predictive weather monitoring and re-routing fleet vehicles to covered garages
< can limit loss due to hail and tree damage.
---
> Examples include:
> * Usage based insurance can be offered with usage tracking and customized insurance policies.
> * Predictive weather monitoring and re-routing of fleet vehicles to covered garages
>   can limit loss due to hail and tree damage.
129,131c206,210
< Soil condition monitoring and creating optimal plans for watering,
< fertilizing as well as monitoring the produce conditions optimize 
< the quality and output of agricultural produce.
---
> Examples include:
> * Soil condition monitoring and creation of optimal plans for watering,
>   and fertilizing.
> * Monitoring production conditions to optimize 
>   the quality and output of agricultural produce.
135,137c214,218
< Data collection and analytics of clinical trial data helps to gain insights into new areas.
< Remote patient monitoring mitigates the risk of undetected critical situations
< for elderly people and patients after hospitalization.
---
> Examples include:
> * Data collection and analytics of clinical trial data to gain insights into 
>   treatment effectiveness.
> * Remote patient monitoring to mitigate  the risk of undetected critical situations
>   for elderly people and patients after hospitalization.
141,144c222,231
< Monitoring of air pollution,
< water pollution and other environmental risk factors such as fine dust,
< ozone, volatile organic compounds, radioactivity, temperature, and humidity
< to detect critical environment conditions can prevent unrecoverable health or environment damages.
---
> [//]: # (McCool: What about earthquake, landslide, or high winds alerts, which might require a more urgent response, eg. shutting down trains?)
> 
> Examples include:
> * Monitoring of air pollution,
>   water pollution and other environmental risk factors such as fine dust,
>   ozone, volatile organic compounds, radioactivity, temperature, and humidity
> The goal is to detect critical environment conditions in order 
> to prevent unrecoverable health or environment damages.
> Such monitoring should be combined with a mechanism to raise alerts when
> hazardous conditions are detected.
148,152c235,243
< Monitoring of bridges, dams, levees, and canals for material condition,
< deterioration, vibrations discovers maintenance repair work and prevents significant damage.
< Monitoring of highways and providing appropriate signage ensures optimized traffic flow.
< Smart control of street lights based on presence detection, weather predictions, etc reduced cost.
< Monitoring the energy usage throughout the building helps to optimize resource consumption and reduce waste.
---
> Examples include:
> * Monitoring of bridges, dams, levees, and canals for material condition,
>   deterioration, and vibration with the goal of identifing needed maintenance or repair 
>   work and preventing significant damage.
> * Monitoring of highways and providing appropriate signage that ensures optimized traffic flow.
> * Smart control of street lights based on presence detection and weather predictions 
>   to reduce energy costs.
> * Monitoring the energy usage throughout a building to help optimize resource consumption
>   and reduce waste.
156,157c247,253
< Monitoring of operation status, prediction of service needs optimizes maintenance needs and costs.
< Driver safety is enhanced with notifications of an early warning system for critical road and traffic conditions.
---
> Examples include:
> * Monitoring of operation status and prediction of service needs optimizes 
>   maintenance needs and costs.
> * Driver safety can be enhanced with notifications from an early warning system 
>   of critical road and traffic conditions.
> 
> ## Key scenarios and common patterns
159c255
< ## Key scenarios (MK)
---
> [//]: # (McCool: The purpose of this section is the same as the "common patterns" section of the architecture doc, so let's summarize that here; I have modified the title to capture both ideas)
161c257
< [//]: # (Next, discuss the key scenarios which move beyond the most canonical example,
---
> [//]: # (MK: Next, discuss the key scenarios which move beyond the most canonical example,
175c271,276
< TODO
---
> 
> **TODO; really, this is the "Common Patterns"**
> 
> ## Requirements
> 
> **TODO.   This is NOT one of the sections in the template but should be included to follow the process we have defined and the progression from use cases through to architectural definitions.**
186,187c287,288
< This architecture document defines a common WoT Architecture and serves as an entry point and
< introduction to several other documents defining WoT Building Blocks.
---
> The architecture document defines a common WoT Architecture and serves as an entry point and
> introduction to several other documents defining the WoT Building Blocks.
191c292
< a common abstract architecture is defined for WoT systems.  
---
> a common abstract architecture has been defined for WoT systems.  
195c296
< systems composed of devices and services supporting many other standards and protocols
---
> systems composed of devices and services supporting many standards, platforms, and protocols
197c298
< However, the abstract architecture defines a set of reference patterns and terminology that can
---
> The abstract architecture also defines a set of reference patterns and terminology that can
201,202c302,304
< (and be considered a "WoT Thing") is that it must be described in a WoT Thing Description.
< The WoT Thing Description provides basic metadata about a WoT Thing, such as a name, description, and 
---
> (and be considered a "WoT Thing") is that _it must be described in a WoT Thing Description_.
> The WoT Thing Description provides basic metadata about a WoT Thing, 
> such as a name, description, and 
205d306
< ### Building Blocks:
209a311,312
> However, first we will define the abstract architectural aspects that
> these building blocks cover.
211,216c314,316
< <img src="../images/wot-building-blocks.png"/>
< 
< ### Architectural Aspects of a Thing
< 
< A WoT Thing has four architectural aspects of interest: 
< its behavior, its interactions,
---
> A WoT Thing has four architectural aspects of interest:
> its behavior,
> its interactions,
218c318
< to implement each interaction in a concrete protocol 
---
> to implement each interaction in a concrete protocol
221,224c321,322
< The security configuration
< includes both public and private (secret) information,
< as well as mechanisms to support the integrity of the WoT Thing and 
< protect and control access to its interactions.
---
> 
> <img src="../images/wot-building-blocks.png"/>
231c329
< network interactions, sensing, and actuation.
---
> network interactions, sensing, and actuation during "normal operation".
240c338
< These protocols are used both to support its own interactions
---
> These protocols are used both to support a WoT Thing's own interactions 
242c340
< Some of these protocols use the client-server model,
---
> Some of these protocols use the request-response model,
246,247c344,345
< Our main constraint on protocols is that they must support 
< the use of URLs to describe access addresses.
---
> 
> [//]: # (McCool: I took this out, as we won't really need it here...
250c348
< a client/subscriber, or both. 
---
> a client/subscriber, or both.) 
262a361,450
> ### Building Blocks
> 
> [//]: # (McCool: this was previously taken out as being "OLD" but it is
> actually important to include since the previous section only talks about
> architectural aspects to consider, NOT the actual building blocks!)
> 
> The WoT Building Blocks support each of the architectural aspects discussed
> in the previous section
> and are the actual focus of our standardization effort.
> Each of these building blocks is defined in a separate document.
> The following figure outlines how these building blocks relate to
> each of the architectural aspects discussed above.  Note that
> building blocks do not map 1:1 to these architectural aspects.
> The WoT Thing Description in particular connects in some
> way to all the aspects.
> 
> <img src="../images/wot-thing-with-scripting.png"/>
> 
> #### WoT Thing Description
> The primary building block is the
> <a href="https://w3c.github.io/wot-thing-description/">WoT Thing Description</a>,
> which encodes metadata about the WoT Thing (name, identifier, version, etc.),
> links to related entities,
> its set of interactions,
> data schemas and protocol bindings for those interactions,
> and public security metadata.
> 
> [//]: # (McCool: Do we need this?
> We define the term Interaction Affordances to refer to the metadata describing the interactions supported by a WoT Thing.)
> 
> A WoT Thing Description also supports but does not require RDF/JSON-LD
> (<a href="https://www.w3.org/standards/semanticweb/data">Linked Data</a>)
> processing and semantic annotation and inteferencing.
> 
> #### WoT Scripting API
> A second (optional) building block is the WoT Scripting API.
> This building block allows the definition of the behavior
> of a WoT Thing (responses to interactions) as well as
> the Consumption (parsing and use)
> and Exposure (construction and publication) of
> WoT Thing Descriptions.
> This building block is optional because devices can choose to
> implement behaviors and construct or consume WoT Thing Descriptions by other
> means than using the WoT Scripting API.
> In particular, WoT Thing Descriptions do not need to be be provided
> by the device itself, but can be provided separately (for example by
> a web service or database).
> This is necessary for supporting brownfield (pre-existing)
> devices and services.
> However, the WoT Scripting API can be used to simplify and support the development of
> *new* WoT Things or services that need to connect to WoT Things.
> The WoT Scripting API specification targets implementation in JavaScript
> and is consistent with both browser and server use cases,
> although the focus is on its use in devices and services.
> 
> #### WoT Binding Templates
> The IoT uses a variety of protocols for accessing devices, since no
> one protocol is appropriate in all contexts. Thus, a central
> challenge for the Web of Things is to enable interactions with the
> plethora of different _IoT Platforms_ (e.g., OCF, oneM2M, OMA
> LWM2M, OPC-UA, etc.) and RESTful devices that do not follow any
> particular standard, but provide an interface over standardized protocols
> such as HTTP, CoAP, or MQTT.
> 
> WoT is tackling this variety by supporting the encoding of protocol
> binding details in the WoT Thing Description but also
> by publishing an informational document, the
> <a href="https://w3c.github.io/wot-binding-templates/">WoT Binding Templates</a>.
> This building block provides a collection of communication metadata blueprints
> that explain how to encode the metadata needed to interact with different IoT platforms.
> in a WoT Thing Description.
> 
> #### WoT Security and Privacy Considerations
> The final building block is security, which is a cross-cutting concern.
> IoT devices and services generally have strong security and privacy requirements,
> and the WoT Architecture deals with this aspect of WoT systems in several ways.
> 
> First, the WoT Thing Description itself supports the description of public
> security metadata so that consumers of a WoT Thing know what mechanisms they
> need to support to gain access.
> This follows security best practices
> of documenting security mechanisms and controlling access through specific
> private information (eg keys) rather than depending on security through obscurity.
> 
> Second, the WoT Scripting API is designed to not have direct access to
> private keying information.  This must be provisioned separately.
> 
> General security and privacy considerations, testing,
> and best practices are covered in separate publications.
> 
266a455,456
> **TODO**
> 
270a461,462
> [//]: # (McCool: Perhaps link to the various github repos as well?)
> 
272,274c464,466
< form of publications and, starting in 2010, a yearly International Workshop on
< the Web of Things. Its goal is to improve interoperability as well
< as usability in the Internet of Things (IoT). With the increasing
---
> form of publications and, from 2010 to 2017, 
> a yearly [International Workshop on the Web of Things](https://webofthings.org/events/wot/). 
> With the increasing
278a471,480
> The first <a href="https://www.w3.org/2014/02/wot/">W3C Web of Things Workshop</a>
> was held in 2014 with the goal of further examining the potential for open standards
> as a basis for IoT services.
> Based on the interest generated by this workshop, the
> W3C chartered a Web of Things Interest Group in 2015 to
> identify technological building blocks for Recommendation Track
> standardization.
> The current proposal was tested with a focus on enhanced interoperability over the 
> course of multiple plugfests over the several years since the creation of the IG and WG.
> Dozens of companies have been involved and have produced and tested numerous implementations.
