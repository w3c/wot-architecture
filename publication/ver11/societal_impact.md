
# Results of Societal Impact self-review for Web of Things (WoT) 

This document was prepared by the Web of Things (WoT) Working Group,
responding to the questions raised in the February 9, 2023 version of the 
[Societal Impact Questionnaire](https://www.w3.org/2001/tag/doc/draft-finding-societal-impact-questionnaire-20230209/) document published by the W3C and required as part of the 
wide review process.

These responses relate to all WoT deliverables being developed as part of the current charter.
In some cases a question needs to be considered with respect to a particular deliverable,
and these will be identified when necessary:
* For the WoT system as a whole we include a set of responses associated with the
[Web of Things (WoT) Architecture](https://github.com/w3c/wot-architecture) document.
* The [Web of Things (WoT) Thing Description](https://github.com/w3c/wot-thing-description) 
specification is about a metadata information model 
and a file format expressing it, and fulfills a similar function to HTML. 
Responses related to the information model and the metadata encoding will be associated with this document.
* The [Web of Things (WoT) Discovery](https://github.com/w3c/wot-discovery) specification
describes how WoT Thing Descriptions are delivered to WoT Consumers, with WoT Consumers being
an analogue to browsers and WoT Discovery being an analogue to the HTTP protocol content delivery
mechanism.  
Responses related to content delivery will be associated with this document.
* There is also a [Web of Things (WoT) Profile](https://github.com/w3c/wot-profile) specification
describing constraints on certain WoT Implementations to achieve out-of-the-box interoperability.

In the following we have used this mapping to interpret the various questions.
For example, if a question or part of a question is relevant to content delivery
then we will consider it in whole or in part as relating to the Discovery deliverable,
as opposed to the Thing Description deliverable.

Note: We use "metadata" in in this document as a general term for formal information that 
describes another system. WoT Thing Descriptions and WoT Thing Models are forms of metadata
defined by the WoT deliverables.

## Background
The mission of the Web of Things (WoT) WG is to combat the fragmentation of the IoT
ecosystem by defing building blocks that improve the interoperability of
existing IoT standards and ecosystems.  The "Web" can be considered one of several
ecosystems that we are aiming to achieve interoperability with, and as implied
by the name the WoT uses standard web technologies or other technologies defined within the 
W3C, such as JSON-LD to achieve this goal.  
However, it should be noted that WoT does not define
any new browser capabilities and a WoT system may not include a web browser or 
even a web server.  A WoT system may also be purely machine-to-machine and may
not, for example, directly provide a user interface.

However, it is *possible* to access WoT systems from a browser, but only in particular
circumstances, i.e. if an IoT device provides a URL accessible to a web browser to
use as a source of data.

Since many of the following questions assume the context of a web browser, when 
relevant we will describe interpretations of the question applicable to situations
both with and without interaction with a browser.

## Questions and Answers

### 1. [What kinds of activities do you anticipate your specification becoming a critical part of?](https://w3ctag.github.io/societal-impact-questionnaire/#critical-part)
IoT systems generally are used for the capture of sensor data by automated systems,
and in many cases for remote control of actuators.  IoT systems interface between
the physical world and the virtual world of information systems.  IoT systems can be used
for automation of processes (for example in a factory), for monitoring (for example,
to detect environmental conditions), or for coordinating multiple devices to 
provide a new service (for example, by combining and analysing data from sensors to
detect intrusions and implement a home security system).  IoT devices can also
be useful to combine other devices and data sources in useful ways, for example
to physically display data in real-time (for example, to provide a weather alert)
or to provide an alternative physical interface to some digital functionality
(which provide opportunities to improve accessibilty with custom interfaces).

Specifically, the WoT standards provide consistent metadata for the access of 
IoT systems, so that IoT devices following different standards (or no standards...) can
interoperate.  Therefore, it specifically targets the case where multiple IoT devices
from different manufacturers and possibly different standards ecosystems need to be used 
together.

The WoT standards can be considered "essential" when this metadata is not available
by other means or would be expensive or inconvenient to obtain, or where machine-readable
metadata is needed to automate integration.

When combined with a browser, the consistent metadata provided by WoT standards
can be used to automatically build web user interfaces for IoT devices, making them
more consistently accessible.  This may or may not be done by directly talking to 
IoT devices.  Very often an IoT system will digest the metadata about a set of
IoT devices and use this to generate a consistent interface, such as a dashboard.

Some usages of WoT may be safety-critical, for example, an IoT interface to a factory
actuator or to a fall-detection system in the home.  A government may also use WoT
to provide access to public services, including critical mechanisms such as access
to environmental monitoring systems (which might in turn be used to warn vulnerable
people about air pollution states they need to be wary of). 

The WoT standards primarily describe metadata and how to access it.  To mitigate
failures, such as the inability to access metadata if a WoT Discovery service
is unavailable, such systems should use WoT Discovery and metadata (WoT Thing
Descriptions) for initial connections and if updated metadata is not available,
use the last known state of this metadata.

### 2. [What kinds of activities could your specification become a part of that you are not designing for?](https://w3ctag.github.io/societal-impact-questionnaire/#unexpected-use)
WoT does not directly address accessibility but IoT systems generally can be
used to build custom user interfaces, including those that make systems easier
to use (e.g. large buttons to replace difficult to use controls) or map sensory
modalities (e.g. mapping visual indicators to audible ones or vice-versa).
Unfortunately, the current WoT specification describes only network communication and interactions,
not physical behavior, making automated construction of such interfaces difficult.
However, since WoT uses JSON-LD, it would be possible in theory to annotate WoT
Thing Descriptions with information such as this.

In general, additional metadata can be attached to WoT Thing Descriptions and
this can be used for arbitrary purposes that can go beyond what is currently
in the specification.  For example, a given device manufacturer could attach
geolocation information to a WoT Thing Description.  To mitigate privacy
hazards from both current and future metadata in WoT Thing Descriptions, the 
WoT Discovery process provides mechanisms to control access to WoT Thing Descriptions.

### 3. [What risks do you see in features of your specification being misused, or used differently from how you intended?](https://w3ctag.github.io/societal-impact-questionnaire/#misuse)
Many possible misuses and risks are already discussed in the 
[answers to the Security and Privacy questionnaire](https://github.com/w3c/wot-architecture/blob/main/publication/ver11/security_and_privacy.md), 
such as distributed denial of service attacks and
man-in-the-middle attacks.  See also the individual specifications for 
descriptions of risks and mitigations.  

In general, in addition to the "normal" risks of access to digital information,
IoT devices can also provide real-time sensor data (a surveillance risk), and
IoT actuators could potentially be a safety risk (e.g. an attacker starting a car in
an enclosed space, filling the garage with carbon monoxide).  Most of these
already exist without WoT, so what WoT brings is easier access to this functionality.
It describes what already exists, it does not create it.  Mechanisms provided
in WoT Discovery, however, can be used to limit access to WoT metadata to those
who already have access to the associated IoT services.

### 4. [Can users of the Web Platform choose not to use features of your specification?](https://w3ctag.github.io/societal-impact-questionnaire/#opt-out)
An end user can choose not to install IoT devices.
They could also use to access IoT services directly without first accessing
WoT metadata (e.g. using specific documentation for that IoT service)
although this would in most cases lead to significantly more effort.
If an application needs WoT metadata to function, availabliity and
use of WoT metadata would, of course, be required.  Applications can however
be designed to avoid the use of WoT metadata if necessary, at least for
specific IoT devices.

A device manufacturer can also choose not to publish WoT metadata for their
devices.  However, this does not prevent others from publishing WoT metadata
about their devices.  This is however similar to the fact that web content
in general can be published about any public subject.
 
### 5. [What groups of people are excluded from using features of your specification?](https://w3ctag.github.io/societal-impact-questionnaire/#excluded)
No specific groups of people are excluded, although language may be a barrier.
Vocabulary used in the WoT Thing Description is based on English, much like
HTML tags.  Support is included for including human-readable content in 
multiple languages but it is up to device manufacturers to include that content.
Access to the network interfaces of IoT devices would, of course, only be available
to those with network access and a computer able to generate network requests.

To broaden access, translation services are needed to be able to extend existing
WoT Thing Models with third-party translations.  This aspect of the WoT Thing Models
needs further work.  However, the WoT JP CG has been working on translating the
specifications themselves into Japanese.

### 6. [What effect may features of your specification have on minority groups?](https://w3ctag.github.io/societal-impact-questionnaire/#minority-groups)
No specific impact, other than the language barrier noted.
Minority groups may not be able to access metadata in their language.
However, it depends on the manufacturer or service provider to decide
which languages are supported, and this is no different than the current
situation with other web content.

IoT devices or services may only be available to those able to afford access
devices.  However, if IoT services are made available via a web front-end,
a common pattern made easier to implement with the proposed WoT standards,
then it would make IoT services as accessible as the general Web.

### 7. [What are the power dynamics at play in implementations of your specification?](https://w3ctag.github.io/societal-impact-questionnaire/#power-dynamics)
The WoT standard can be used to make details of how to access an IoT
device available to a wider audience.  In particular, the manufacturer does
not have to provide the metadata, it can be provided by a third party.  
While this is not ideal ("official" support from a manufacturer would be more
trustworth, third-party information would have to be used with care), it does
mean that a manufacture will not be able to control access by restricting
access to WoT Thing Descriptions.  They can simply be sourced from elsewhere,
with some security caveats.

The WoT also makes it easier to develop "local" IoT systems that do not
require the cloud to function and can better manage private data.  They can
in particular allow data from devices from different manufacturers to be used
as part of a single system without that data having to go through a cloud
API or service presented by that manufacturer.

Finally, standardizing WoT metadata allows IoT devices from different manufacturers
to be interchanged, reducing customer "lockin" to proprietary technologies or
devices from a single manufacturer.

In general, WoT gives users and the implementers of IoT systems more information
about IoT devices and more control over how they are deployed.

### 8. [What points of centralization does your feature bring to the web platform?](https://w3ctag.github.io/societal-impact-questionnaire/#centralization)
This iteration of the WoT Architecture introduces WoT Discovery, which includes
a specification for a WoT Directory service.  This provides a searchable
database of WoT Thing Descriptions.  However, there can be many such services
used in different contexts; they do not need to be centralized, although such 
centralization may be useful in some contexts (e.g. a central directory for
smart city services in a particular city).
WoT Discovery is also an optional service and is not required for 
deployment of a WoT system.

Identifiers used in WoT Thing Descriptions can be generated randomly using
UUIDs, avoiding the need for a central id management service.  This is recommended
but not required, so some deployments of WoT may choose to use a centralized
identifier allocation scheme.

Ideally, WoT Thing Models should have a fixed URL and be available from a single
source.  It would, however, be possible to cache and duplicate Thing Models, which
would also avoid the privacy hazard of looking up Thing Models dynamically.

### 9. [To what extent do the features in your specification impact the natural environment?](https://w3ctag.github.io/societal-impact-questionnaire/#environment)
IoT systems generally can impact the environment in both positive and negative
ways.  Negatively, use of IoT implies a proliferation of small electronic devices
most of which will eventually have to be recovered from the waste stream, and may
include components such as batteries with both a manufacturing cost and an environmental
impact if not recovered.  Positively, IoT devices can provide real-time data that
can provide visibility into and the potential for optimizing resource usage.  For 
example, IoT management may be essential for the stability of distributed energy
systems for renewable energy (see [a use case that discusses this specific
application in our Use Cases and Requirements document](https://www.w3.org/TR/wot-usecases/#use-case-opc-ua-binding)).

WoT systems support the adoption and use of IoT technologies so these
negative and positive aspects are included in WoT.  For WoT in particular,
however, availability of metadata may allow the continued use of devices that
would otherwise have to be discarded due to incompatibility, or conversely the adoption of
alternative devices (e.g. newer, more energy-efficient devices) without
being as constrained by compatibility concerns.

### 10. [What is the expected lifetime of your specification feature(s)?](https://w3ctag.github.io/societal-impact-questionnaire/#lifetime)
WoT is designed to have a long-term (indefinite) impact on the architecture of
IoT systems.  It is also expected that future systems will build upon the availability of
WoT metadata.  WoT metadata can also improve the functional lifetime of IoT systems
by documenting how to interact with them in a standard way independent of 
manufacturer.

### 11. [Have you completed the Security & Privacy Self-review Questionnaire?](https://w3ctag.github.io/societal-impact-questionnaire/#security-and-privacy)
Yes, see [here](https://github.com/w3c/wot-architecture/blob/main/publication/ver11/security_and_privacy.md)
