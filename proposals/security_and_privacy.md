# Web of Things (WoT) Architecture
## Responses to Security and Privacy Questionnaire

This document was prepared by the Web of Things Working Group,
responding to the questions raised in the
[Self-Review Questionnaire: Security and Privacy](https://www.w3.org/TR/security-privacy-questionnaire/) 
published by the W3C TAG 
related to the 
[WoT Architecture](https://github.com/w3c/wot-architecture) document.

Please raise issues on the
[WoT Architecture GitHub Issue page](https://github.com/w3c/wot-architecture/issues).

## Background

The [WoT Security and Privacy Considerations](https://github.com/w3c/wot-security)
includes an extensive threat model,
and considers both passive and active attacks to
both data (payload transactions) and metadata (Thing Descriptions).
It should be made clear however that the WoT is _descriptive_.
WoT Thing Descriptions can be used to describe existing IoT devices.
In this case the WoT
is subject the same threats and mitigations as those devices.
For "new" devices written from scratch to conform to the WoT specifications,
we define a set of 
[WoT Security Best Practices](https://github.com/w3c/wot-security-best-practices)
which will be updated as necessary (for example, as the WoT is extended to new
IoT protocols or security schemes via its built-in extension mechanisms).
In addition, we define a general security testing procedure for WoT implementations in the
[WoT Security Testing Plan](https://github.com/w3c/wot-security-testing-plan).

Security in the IoT is unavoidably more complex as it involves general networks of communication rather 
than just the client-server architecture of browsers. A better analogy than browsers would be the
microservice architecture used by many web services. The WoT Architecture supports best practices there,
such as Zero-Trust networks.

For example, the "same origin policy" is considered a cornerstone of web security.  
In addition,
security is often concerned with the "user's device" or the "user agent", which is
always a client (the browser).
However, the IoT is often concerned with machine-to-machine communication.
If an IoT device is associated with a user, it is may be a client, or
a server---or even both at the same time.  Finally, an IoT device may have
a "user interface" but it will be more varied than that of the browser.

On the web, the "origin" means content from a specific web server, and 
we usually worry about protecting the user and the client, which is a browser.
In the WoT context, "origin" could be interpreted as a WoT Server (WoT Thing in server role)
and "browser" would be a WoT Client.

The kinds of risks we have to deal with in the WoT are different than 
those in the Web.  For example, the WoT does not support downloading
and executing arbitrary scripts from other devices.  So many risks having
to deal with such execution are not relevant.  On the other hand, the types
of sensors and actuators supported by IoT devices are much broader and
can even include systems whose compromise would have safety implications.

In the documents above we address the threats and attack surfaces of the 
WoT in detail.  In the following we have answered the questions posed by the
Web Security group as best as we could... but please take into consideration
that most of these questions are not fully applicable to our situation.

## Questions and Answers

### Does this specification deal with personally-identifiable information? 

Indirectly.  The WoT Thing Description describes IoT devices and may include
information such as location and type.  If these devices can be associated
with an owner, then it may be possible to infer information about the
owner.  For example, if they have a baby monitor, they may have a baby,
are probably in a certain age range, and so forth.

The WoT Thing Description (TD) also allows extension via the inclusion
of custom vocabularies.  Although the WoT standard itself does not
have any requirement for PII, it is possible an extension might.  We
consider this aspect of PII inclusion to be out of scope.

As for the indirect risk, we recommend that as a precaution a 
WoT Thing Description should be treated _as if_ it contained PII
and be stored, cached, and transmitted accordingly.  For example,
we recommend that it only be distributed to authorized and authenticated
users (for example, via a directory service or to a registered owner)
and only be cached for a limited time.

### Does this specification deal with high-value data? 

Yes.  A WoT Thing may both require credentials to be accessed and
use credentials to access other devices.  However, these are generally
to secure M2M communication and are not user credentials.  We 
define an architecture for managing sensitive credentials
securely.

The WoT architecture deals with the operational phase of IoT devices
and does not specify how credentials are provisioned to devices.
The WoT Architecture document does use a strict separation
of private security data from public data and metadata, and
recommends the use of an isolated private security data subsystem,
such as TPM (Trusted Platform Module).

The WoT Runtime and WoT Scripting API are defined in such a way
that they do not have direct access to private credentials.
Instead, an "abstract data type" is used in the WoT Protocol Bindings 
to implement security operations such as authentication
without revealing such private security data to WoT Applications.

### Does this specification introduce new state for an origin that persists across browsing sessions? 

This is not a browser-oriented specification although
WoT Things can be accessed through browsers as if they
were web services. 
However, no new state is introduced or required in browsers beyond
current mechanisms (cookies, etc).

WoT Things can also act as clients, however, accessing
web services and other WoT Things acting as servers.
It is also possible that the same device could instantiate
multiple WoT Runtimes.  However, there is no explicit mechanism
for sharing state between such instances, and each instance
can be considered a single origin.

### Does this specification expose persistent, cross-origin state to the web? 

A WoT Thing may act as a server and expose interactions that 
allow properties to be modified.  Therefore modifications by
one client may be visible to another.

This risk of this, if any, is mitigated by the fact that
WoT Things support various mechanisms to limit access to 
authorized users, like any other web service.

When acting as a client, each WoT Thing is in effect single-origin.

There is a potential fingerprinting risk, which is discussed,
and is related to the PII risk discussed above.
This can be mitigated by controlling access to WoT metadata
such as WoT Thing Descriptions.

### Does this specification expose any other data to an origin that it doesn’t currently have access to?

Yes.

WoT Things by nature will be connected into a network of
devices.  A single "WoT Network" application may involve
communications between many WoT Things, some acting as
servers, some acting as clients, some acting as both.

In addition, WoT Things may act as gateways to other
non-HTTP devices using other network protocols, such
as MQTT or CoAP, or to interface to a variety of non-IP
devices using BACNET, ECHONET, X10, SPI, I2C, and many
other possibilities.

Unfortunately, the single-origin model used in 
web servers and browsers does not scale well to this model.

In practice, securing an IoT Application in general is
out of scope.  We do however discuss several common connection
patterns (client-server, proxy, etc) and how they can be secured.

This risk is mitigated by the fact that endpoint IoT devices
are generally not exposed directly on the internet, but
are mediated by gateways and cloud services.

### Does this specification enable new script execution/loading mechanisms? 

Yes.  It enables WoT Things to run applications based
on ECMAScript, using a constrained API, and with suitable
restrictions, such as no direct access to private
security data.

However, a mechanism for loading new scripts is not defined
and is currently considered to be out of scope.
Our architecture assumes the scripts running inside a WoT Thing
are trusted implementations provided by the manufacturer
of the device and installed using a suitable update
mechanism; but this update mechanism is not defined in our
architecture and is also currently considered to be out of scope.

### Does this specification allow an origin access to a user’s location?

As noted above in the PII response, a device
location may be encoded in a WoT Thing Description using
an extension vocabulary, 
and this could in some cases such a device location could be
associated with a user's location.
Location information, however, is neither a standard nor
a required part of the architecture.
It is, however, common in institutional IoT applications,
but in this case the devices are typically not
associated with a particular user's location, and in fact
placement of location information in the TD is useful
mostly for devices installed in a static location.

A manufacturer of a device could also define an
interaction that returns the
location of the device.
This is more likely in dynamic location use cases.
We do not provide constraints on this, since it is usually
the _purpose_ of IoT devices to provide access to sensor data.

To mitigate this risk,
we do provide mechanisms to control access to
interactions and a manufacturer can use these to
prevent accidental disclosure to unauthorized users,
and recommend that these mechanisms be used when PII
can be inferred from device information, this being one example
of that.
A user can also inspect the WoT Thing Description to
determine whether the device returns location information,
assuming the manufacturer has not obfuscated the purpose
of interactions.  

### Does this specification allow an origin access to sensors on a user’s device?

Yes.  Many other sensors can be attached to an IoT 
device and we do not constrain these in any way.

It is the responsibility of the user to only connect and
provision devices they trust, to select devices with
good security, and manage the data that is
collected appropriately.

The metadata provided in the WoT Thing Description
can be helpful in this regard since the security mechanisms
supported by a device can be easily inspected and,
via semantic annotations, the type of data provided
by the device can be determined.

### Does this specification allow an origin access to aspects of a user’s local computing environment?

No.  Actually, there is no executable content
included in data or metadata provided by WoT Things.
The only operations that a WoT Server will perform
on behalf of a WoT Client are those that it chooses
to support via its exposed interactions (network API).

### Does this specification allow an origin access to other devices? 

Yes, as discussed above.  A WoT Thing can act as a gateway to 
other WoT Things or to other non-IP protocols.
In fact, access to other devices is one of the primary use cases of WoT.

The situation is unavoidably more complex than the client-server
architecture of browsers.  A better analogy than browsers
would be the microservice architecture used by many web services.
The WoT Architecture supports best practices there, such
as Zero-Trust networks.

However, to be more specific, here "origin" in the usual
web meaning means content from a specific web server,
and "access to other devices" would mean from the browser.
In the WoT context, "origin" could be interpreted as 
a WoT Server (WoT Thing in server role) and "browser" would
be a WoT Client.  In that specific case, there is no
way for an arbitrary server to force an arbitrary client
to access another device.  The WoT Client is in control,
initiates messages, and decides what to do with the
responses.  Even if we reverse the roles, which is
common in the IoT (IoT endpoint devices are often servers) a WoT Server
is never forced to do what a WoT Client requests.

That said, an "gateway" Servient might be developed by
a manufacturer that allows broad access to other devices.
In this case, such a gateway service should be protected
by access controls (in the Zero-Trust approach, _every_ service
uses access controls, encryption, and authentication).

### Does this specification allow an origin some measure of control over a user agent’s native UI? 

No.  The WoT Architecture is M2M and makes no mention of direct
user interfaces.

That said, some devices connected via the WoT may have
local user interfaces which might be exposed to control
over network interactions.  Exposure of such controls
is at the discretion of individual device manufacturers,
who should do an analysis of security risks as part of
their software development process.

### Does this specification expose temporary identifiers to the web?

The WoT Thing Description has a required element (not actually
mentioned in the current document, the WoT Architecture, but
in the WoT Thing Description) which is meant to be a unique ID
(a URN, actually).  This is necessary to support Linked Data.
In fact, some domains, such as medical devices in the US,
have a legal requirement to support immutable identifiers.

However, we suggest that the tracking risk this poses should
be mitigated, whenever possible (e.g. if not legally disallowed
as discussed above) by allowing such identifiers to be modified
at least when the devices are reprovisioned.

Generally, though, the identifiers in Thing Descriptions 
are relatively long-lived.  

### Does this specification distinguish between behavior in first-party and third-party contexts?

This concept is not applicable to the WoT context.

### How should this specification work in the context of a user agent’s "incognito" mode?

This concept is not applicable to the WoT context, as there is no user agent.

### Does this specification persist data to a user’s local device? 

A WoT Thing may be either a client or server.  Therefore we 
have to consider this question from both the client and server 
point of view.

A WoT Thing in a server role may support interactions that
support POST requests.  Such can of course retain state posted to them.
If this state is too general (for example, a property that allows
a client to POST and GET arbitrary string data) and is not 
protected with access controls, _and_ if the device can be 
associated with a particular user, _and_ the network protocol
allows accesses to be tied to physical location, then this is 
a potential physical tracking risk.  However, providing access
controls on interactions (which is strongly recommended for
all personal devices) mitigates this issue.

In the client role, a WoT Thing could be programmed to 
retrieve data provided by a server and then post it back to that
server later.  This could also be enabled by a webhook pattern.
This can be mitigated by establishing a trust relationship
and providing explicit access controls between any pair of
devices before allowing data to be exchanged.

Note that scripts cannot be included in TDs, only data.  So devices
always have local control over what data they retain.  WoT Things
are never _forced_ to retain state and return it later.

### Does this specification have a "Security Considerations" and "Privacy Considerations" section? 

Yes, as explained above.
This section in the WoT Architecture document is fairly high-level
however and meant to be a summary of the most important considerations.
There are also sections in each WoT building block
document and a more general document.

### Does this specification allow downgrading default security characteristics? 

No.  A WoT Thing Description describes what a WoT Thing does and
requires, no more and no less. 

## Mitigations

Mitigations for each security and privacy consideration are discussed in
the Security and Privacy Considerations section of this document as well as the
[WoT Security and Privacy Considerations](https://github.com/w3c/wot-security/)
document and Security and Privacy Considerations section of each
document describing a building block of the WoT, such as the
[WoT Thing Description](https://github.com/w3c/wot-thing-description/),
[WoT Binding Templates](https://github.com/w3c/wot-binding-templates/),
and the 
[WoT Scripting API](https://github.com/w3c/wot-scripting-api/)
documents.

