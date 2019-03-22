# WoT Architecture Responses to Security and Privacy Questionnaire

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
IoT protocols or security schemes via its built-in extension mechansisms).
In addition, we define a general security testing procedure for WoT implementations in the
[WoT Security Testing Plan](https://github.com/w3c/wot-security-testing-plan).

## Does this specification deal with personally-identifiable information? 

## Does this specification deal with high-value data? 

## Does this specification introduce new state for an origin that persists across browsing sessions? 

## Does this specification expose persistent, cross-origin state to the web? 

## Does this specification expose any other data to an origin that it doesn’t currently have access to?

## Does this specification enable new script execution/loading mechanisms? 

## Does this specification allow an origin access to a user’s location?

## Does this specification allow an origin access to sensors on a user’s device?

## Does this specification allow an origin access to aspects of a user’s local computing environment?

## Does this specification allow an origin access to other devices? 

## Does this specification allow an origin some measure of control over a user agent’s native UI? 

## Does this specification expose temporary identifiers to the web?

## Does this specification distinguish between behavior in first-party and third-party contexts?

## How should this specification work in the context of a user agent’s "incognito" mode?

## Does this specification persist data to a user’s local device? 

## Does this specification have a "Security Considerations" and "Privacy Considerations" section? 

## Does this specification allow downgrading default security characteristics? 

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

