## Title: OAuth2 Flows

### Submitter(s): 

Michael McCool

### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

WIP

### Target Users

- device owner
- device user
- device application
- service provider
- identity provider
- directory service

### Motivation:


OAuth2.0 is an authorization protocol wide know for its usage across several web services. it enables third-party applications to obtain limited access to HTTP services on behalf of the resource owner or of its self. 
The protocol defines the following actors:

* Client: an application that wants to use a resource owned by the resource owner. 
* Authorization Server: An intermediary that authorizes the client for a particular `scope`. 
* Resource: a web resource 
* Resource Server: the server where the resource is stored
* Resource Owner: the owner of a particular web resource. if it is a human is usually referred to as an end-user.

which in turn can be mapped to WoT entities: 
* Client is a WoT consumer
* Authorization Server is a third-party service
* Resource is an interaction affordance
* Resource Server is a Servient or a service described by a Thing Descriptor
* Resource Owner might be different in each use case (?)

Furthermore, the protocol specifies an authorization layer that separates the client from the resource owner. The basic steps of this protocol are summarized in the next schema:

     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+

The steps A and B defines what is known as authorization grant type or flow. OAuth2.0 defines 4 basic flows plus an extension mechanism. The most common of which are:
* code
* implicit
* resource owner password
* client credential
* Extension:
    - device flow

Further information about the protocol can be found in [RFC6749](https://tools.ietf.org/html/rfc6749#section-1).

This document describes relevant use cases for each of the oAuth2.0 authorization grants. 

### Expected Devices:

Possibly all the devices that have the capability of: 
- creating a TLS connection
- verify an access token (i.e. sufficient computational power/connectivity) 

### Expected Data:

<List the type of expected data, e.g. weather and climate data, medical conditions, machine sensors, vehicle data>

### Dependencies - Affected WoT deliverables and/or work items:

Thing Description, Scripting API, Discovery, and Security. 

### Description:

A general use case for oAuth2.0 is when a WoT consumer wants to access restricted interaction affordances. In particular, when those affordances have a distinctive resource owner which may grant some temporary permissions to the consumer.  

The WoT consumer can either be host in a remote device or interact directly with the end-user inside an application.

#### Variants:

For each OAuth2 flow, there is a corresponding use case variant.
We also include the experimental "device" flow for consideration.

##### code

A natural application of this protocol is when the end-user wants to interact directly with the consumed thing or to provisioning his authorization to a remote device. In fact from the [RFC6749](https://tools.ietf.org/html/rfc6749#section-4.1)

> Since this is a redirection-based flow, the client must be capable of
   interacting with the resource owner's user-agent (typically a web
   browser) and capable of receiving incoming requests (via redirection)
   from the authorization server.


This implies that the code flow can be only used when the resource owner interacts directly with the WoT consumer at least once. Typical scenarios are:

- In a home automation context, a device owner uses a third party software to interact with/orchestrate one or more devices
- Similarly, in a smart farm, the device owner might delegate its authorization to third party services.
- ...   

##### device

The device flow is a variant of the code flow for browserless and input-constrained devices. Similarly, to its main flow, it requires a close interaction between the resource owner and the WoT consumer. Therefore, the use cases for this flow are the same as the code authorization grant but restricted to all devices that do not have a rich mean to interact with the resource owner.  


##### client credential
The Client Credentials grant type is used by clients to obtain an access token outside of the context of an end-user. From [RFC6749](https://tools.ietf.org/html/rfc6749#section-4.4):

>  The client can request an access token using only its client
   credentials (or other supported means of authentication) when the
   the client is requesting access to the protected resources under its
   control, or __those of another resource owner that has been previously
   arranged with the authorization server__ (the method of which is beyond
   the scope of this specification).

Therefore the client credential grant can be used:
- When the resource owner is a public authority. For example, in a smart city context, the authority provides a web service where to register an application id.
- Companion application
- Industrial IoT. Consider a smart factory where the devices or services are provisioned with client credentials. 
- ...

**Note** there is an [RFC](https://tools.ietf.org/html/draft-tschofenig-ace-oauth-iot-01) that describes this flow for COAP clients.

##### implicit
**Deprecated**
From  [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-15#section-2.1.2):

> In order to avoid these issues, clients SHOULD NOT use the implicit
   grant (response type "token") or other response types issuing access
   tokens in the authorization response, unless access token injection
   in the authorization, response is prevented and the aforementioned
   token leakage vectors are mitigated.

The RFC above suggests using `code` flow with Proof Key for Code Exchange (PKCE) instead. 

##### resource owner password
**Deprecated** From  [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-15#section-2.1.2):

> The resource owner password credentials grant MUST NOT be used.  This
   grant type insecurely exposes the credentials of the resource owner
   to the client.  Even if the client is benign, this results in an
   increased attack surface (credentials can leak in more places than
   just the AS) and users are trained to enter their credentials in
   places other than the AS.




### Security Considerations:

See oAuth2.0 security considerations in [RFC6749](https://tools.ietf.org/html/rfc6749#section-10)

### Privacy Considerations:

<Describe any issues related to privacy; if there are none, say "none" and justify>

### Gaps:

<Describe any gaps that are not addressed in the current WoT standards and building blocks>

### Existing standards:

<Provide links to relevant standards that are relevant for this use case>

### Comments:
Notice that the oAuth2.0 protocol is not an authentication protocol, however [OpenID](https://openid.net/connect/) defines an authentication layer on top of oAuth.
