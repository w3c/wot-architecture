## Title: Discovery

### Submitter(s): 

Michael McCool

### Reviewer(s):

<reviewers>

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

* Horizontal: https://github.com/w3c/wot-usecases/blob/master/USE-CASES/discovery.md 
* Vertical: TODO

### Affected WoT Deliverables:

* Discovery
* Scripting API

### Requirements:

The WoT discovery process should have the following capabilities:

#### System
* Support peer-to-peer (self-identifying), local (network segment),
  and global (internet-wide) discovery.
* Support discovery via third-party services (e.g. a directory service)
  in order to support sleeping devices and search over collections.
* Be compatible with discovery support in the WoT Scripting API.

#### Search
* Support various forms of query, including keyword, template, 
  and semantic queries.
* Support spatial and sub-net limited queries.
* Support queries that can span a subnet or multiple directory services.
* Be scalable to large databases of TDs.

#### Data Management
* Support both Dynamic and Static TDs.
* Support explicit deletion and access control management of TDs.
* Automatically clean up TDs for devices that are no longer accessible or active.

#### Alignment with Existing Standards
* Align with IETF CoRE Resource Directories, CoRE Link Format, and DIDs.
* Be accessible via a variety of existing discovery mechanisms,
  including DNS-SD, DNS-SRV, DHCP, QR codes, and Bluetooth beacons.
  
#### Security:
* Support best known methods for confidentiality and authentication.
* Support authorization and role management.

#### Privacy:

* Support authentication and authorization mechanisms that do not reveal user identities.
* Support device and information lifecycle, trust management, access controls.
* Distribute TDs and other metadata only to authenticated and authorized entities.
* Don’t leak TDs, other metadata, or queries to unauthorized entities.

#### User Needs:

* Simple automatic discovery of Things and services with minimum to no human interaction
* Support for human authentication (eg pairing button presses) when appropriate

#### Accessibility:

* It should be possible for a user to discover devices even if they have sensory or motor limitations.
* Alternative forms of discovery should be supported to address different accessibility requirements

### Related standards:

See WoT Discovery

### Other references:

<additional references that provide more context>

### Comments:

The WoT Discovery process is a deliverable of the 2020 WoT charter.
