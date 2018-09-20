# 4. Requirements
## Principles

- WoT architecture should enable mutual interworking of different eco-systems using web technology.
- WoT architecture should be based on the web architecture using RESTful APIs.
- WoT architecture should allow to use multiple payload formats which are commonly used in the web.

## Thing functionalities

- WoT architecture should allow thing's to have functionalities such as
  - reading thing's status information
  - updating thing's status information which might cause actuation
  - subscribing to, receiving and unsubscribing to the notification of the change of thing's status information.
  - invoking functions with input and output parameters which would cause certain actuation or calculation.
  - subscribing to, receiving and unsubscribing to the notification which does not directly relate to thing's status information.

## Search and discovery

- WoT architecture should allow clients to know thing's attributes, functionalities and their access points, prior to access to the thing itself.
- WoT architecture should allow clients to search things by its attributes and functionalities.
- WoT architecture should allow semantic search of its functionalities based on unified vocabulary, regardless of naming of its functionalities.

## Description mechanism

- WoT architecture should support common description mechanism which enables describing things and their functions.
- Such description should be not only human-readable, but also machine-readable.
- Such description should allow semantic annotation of its structure and described contents.
- Such description should be able to be exchanged using multiple formats which are commonly used in the web.

## Description of attributes

- WoT architecture should allow describing thing's attributes such as
  - name
  - explanation
  - version of spec, format and description itself
  - links to other related things and information
- Such description should support internationalization.

## Description of functionalities

- WoT architecture should allow describing thing's functionalities which is shown in ## Thing functionalities

## Network

- WoT architecture should support multiple web protocols which are commonly used.
- Such protocols include 1)protocols commonly used in the internet and 2)protocols commonly used in the local area network
- WoT architecture should allow using multiple web protocols to access to the same functionality.
- WoT architecture should allow using mixture of multiple protocols to the functionalities of the same thing (e.g. HTTP and WebSocket).

## Deployment

- WoT architecture should support wide variety of thing capability such as edge devices with resource restrictions and virtual things on the cloud, based on the same model.
- WoT architecture should support multiple levels of thing hierarchy with intermediate entities such as gateways and proxies.
- WoT architecture should support accessing things in the local network from the outside of the local network (the internet or other local network), considering network address translation.

## Application

- WoT architecture should allow describing applications on the wide variety of things such as edge device, gateway, cloud and UI/UX device, using web standard technology based on the same model.

## Legacy adaption

- WoT architecture should allow mapping of legacy IP and non-IP protocols to web protocols, supporting wide variety of hierarchy, where such legacy protocols are terminated and translated.
- WoT architecture should allow transparent use of existing IP protocols without translation, which follow RESTful architecture.

## Security

- WoT architecture should support multiple security mechanism commonly used in the web, such as Basic, Digest, Bearer and OAuth2.0.
