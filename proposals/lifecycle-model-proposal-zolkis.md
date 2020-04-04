
** Proposal for WoT device lifecycle model

This proposal is assembled based on:
- a [comparative analysis](https://github.com/w3c/wot-architecture/blob/master/proposals/Device-lifecycle-comparisons.pdf)
- OPC-UA/Anima [presentation](https://github.com/w3c/wot-security/blob/master/presentations/2020-03-16-Bootstrapping%20IoT%20Security%20-%20The%20IETF%20Anima%20and%20OPC-UA%20Recipes.pdf)
- discussion in [issue #476](https://github.com/w3c/wot-architecture/issues/476).


### Key Requirements

First of all, we need to agree what we want with device lifecycle modeling and why (a.k.a. key requirements):

1. The main thing we want is to be able to use WoT to describe and manage devices that run a native protocol suite in their _operational_ mode. For WoT to work, the precondition is that device must be _operational_ in its native protocol domain. Only then WoT can be used for consuming and exposing Things.
2. WoT should be able to _describe_ what state the underlying native protocol stack is (for management use cases) even if that is not an operational state. This can happen in 2 ways:
  - either exposing the native state names transparently,
  - or translating them into generalized WoT state names.
The latter seems to be the main topic of the discussion.
3. WoT should be able to describe the security model of the device (in any state) as security is one of the key aspects during IoT device lifecycle.
4. 2. WoT may want to be also able to describe what needs to be done to a device to bring it to operational state in its native protocol domain. However, that is a separate thing and requires a special mode with special interactions, not the ones defined for operational mode for WoT.


### Stakeholders

Also, main stakeholders need to be defined. Since these are inherited from native protocols that try to solve the same use cases as the other protocols, we can establish a common terminology:
- _manufacturer_
- "vendor" or "service provider" or "site" or "solution provider", perhaps _provider_ being the best
- _application_
- end user (aka _user_)
- eventually _regulator_ (state, certification body, etc).

### Candidate states
From WoT point of view, IMHO the following states make most sense:
- `Manufactured`
- `Onboarded to [protocol name]`  (could be skipped of requirement 4 is not needed)
- `Operational in [protocol name]`
- `Non-operational for maintenance in [protocol name]`
(it may be under maintenance _and_ being operational, which needs no special handling)
- `Operational for WoT`
- `Destroyed`

### Information needed in each state

IMHO we need the following information for each WoT state name candidate:
- the corresponding state in "native" protocols (e.g. CoAP/OCF, MQTT, OneM2M, LwM2M, OPC-UA/Anima, ...)
- why the state is needed (in native protocol), i.e. what is the use case (relationship)
- what identities the state can be linked to
- what security data the state can be linked to
- capabilities of the state, e.g.:
    - is the state operational for the "native" protocol
    - is the state operational for WoT (note that if the device can be _configured_ to work with WoT without changing the state in the "native" protocol, then it is operational in WoT, too).
- possible previous states + stakeholders + conditions that controls the state transition
- possible next states + stakeholders+conditions that control the state transition.


### Manufactured state
**Why**: device is manufactured and flashed with a SW image. Possibly certified (e.g. OCF).
**Name in other protocols** : manufactured
**Actor** responsible to get to this state: manufacturer
**Capabilities**:
- manufacturer certificate: OCF: optional, OneM2M: optional, LwM2M: optional, T2TRG: optional, OPC-UA: optional, Anima: required
- identity: usually none, possibly manufacturer-default
- operational level: only for onboarding (OCF), initial provisioning (M2M), bootstrap (LwM2M), bootstrapping (installation, commisioning in T2TRG, enrollment in OPC-UA, bootstrapping in Anima)
- external interfaces: native mechanisms (e.g. support for onboarding methods/discovery)

**Previous state**: none
**Preceding states** (from which one can reset to Manufactured state): any state except Destroyed
**Next states**: Bootstrapped/Onboarded
**Relationship** (why to change state):
  - onboard the device in order to be usable by a provider (or to re-badge by vendor)
  - security setup

**Actor** who triggers next state transition: provider/vendor, based on native built-in mechanisms and protocols.

### Onboarded state (for given protocol)
**Why**: device gets owned, gets identity and authorization capability.
This state may be skipped from WoT point of vew.
**Name in other protocols** onboarding (OCF), initial provisioning (M2M), bootstrapping (LwM2M), bootstrapping (installation, commisioning) in T2TRG, bootstrapping (enrollment, trust list acquisition) in OPC-UA), bootstrapping in Anima
**Actor** responsible to get to this state: provider/vendor
**Capabilities**:
- identity: given by new owner (provider/vendor or user)
- operational level: native, usually modified SW image, run after rebooting the device. After onboarding is complete, it can identify and authenticate, can be configured for services.
- operational for WoT: no
- external interfaces: native mechanisms (e.g. support for further provisioning/configuration)

**Previous state**: Manufactured
**Preceding states** (from which one can reset to Bootstrapped state): Operational/Maintenance
**Next states**: Operational, Manufactured
**Relationship** (why to change state to Operational):
  - provision the device in order to be usable by a provider in a solution
  - security setup

**Relationship** (why to change state to Manufactured):
  - "offboarding" the device, i.e. reset to factory defaults

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.

### Operational state (for given protocol)
**Why**: device gets operational in its native protocol (provisioned and configured).
** Name in other protocols ** : operational
**Actor** responsible to get to this state: provider/vendor
**Capabilities**:
- identity: given by new owner (provider/vendor or user)
- provisioned for the solution
- configured for the solution
- operational level: native, fully functional.
- operational for WoT: no
- external interfaces: native mechanisms.

**Previous state**: Onboarded
**Preceding states**: Onboarded, Maintenance (Non-operational for maintenance)
**Next states**: Maintenance, Onboarded (de-commission), Manufactured (reset to factory defaults)
**Relationship** (why to change state to Maintenance):
  - run the native mechanisms for SW update or reconfiguration or re-provisioning that requires stopping the normal operation of the device, including eventual rebooting)
  - security setup

**Relationship** (why to change state to Onboarded):
  - decommissioning the device, i.e. change solution or user but stay under the same owner (provider or user).

**Relationship** (why to change state to Manufactured):
  - "offboarding" the device, i.e. reset to factory defaults

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.


### Operational state for WoT
**Why**: device gets operational for WoT
**Actor** responsible to get to this state: provider/vendor or user
**Capabilities**:
- identity: given by provider/vendor or user
- provisioned for the solution
- configured for the solution
- operational level: native, fully functional.
- operational for WoT: yes (including deploying WoT runtime, dependencies and system configuration, optionally WoT bootstrapping for WoT services, e.g. Thing Directory)
- external interfaces: mainly WoT interface

**Previous state**: Operational for [protocol]
**Preceding states**: Operational for [protocol] , Maintenance (Non-operational for maintenance)
**Next states**: Maintenance, Operational for [protocol], Onboarded (de-commission), Manufactured (reset to factory defaults)
**Relationship** (why to change state to Maintenance):
  - run the native mechanisms for SW update or reconfiguration or re-provisioning that requires stopping the normal operation of the device, including eventual rebooting)
  - managed either by the underlying native SW stack (to update that), or by WoT runtime (only to update WoT, if that requires stopping WoT services)
  - security setup

**Relationship** (why to change state to Operational for [protocol]):
  - decommissioning the device from WoT but keep the native operation.

**Relationship** (why to change state to Onboarded):
  - decommissioning the device, i.e. change solution or user but stay under the same owner (provider or user).

**Relationship** (why to change state to Manufactured):
  - "offboarding" the device, i.e. reset to factory defaults

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.


### Destroyed state
**Why**: device gets destroyed with no further possibility of functioning
**Name in other protocols**
End-of-life (Anima, OPC-UA)
T2TRG: there is `removed and replaced` but it's possible to recommission, therefore this state does not exist in T2TRG.
OneM2M, LwM2M: not defined
OCF: not explicitly defined
**Actor** responsible to get to this state: provider/vendor or user, enforcement agent
**Capabilities**: none
**Previous state**: any
**Preceding states**: any
**Next states**: none
**Relationship** (why to change state to Destroyed):
  - end of life for device
  - callback for being dangerous
  - because enforcement (by your favorite dictator, or influencer)

**Actor** who triggers next state transition: manufacturer, provider/vendor or user, or enforcement agent, based on native built-in mechanisms and protocols.

