
## Proposal for WoT device lifecycle model

This proposal is assembled based on:
- a [comparative analysis](https://github.com/w3c/wot-architecture/blob/master/proposals/Device-lifecycle-comparisons.pdf)
- OPC-UA/Anima [presentation](https://github.com/w3c/wot-security/blob/master/presentations/2020-03-16-Bootstrapping%20IoT%20Security%20-%20The%20IETF%20Anima%20and%20OPC-UA%20Recipes.pdf)
- discussion in [issue #476](https://github.com/w3c/wot-architecture/issues/476).

A `native protocol` or `underlying protocol` in this document refers to an IoT protocol on which WoT can operate through protocol bindings, such as CoAP, OCF, MQTT, OneM2M, Lightweight M2M, Anima, OPC-UA, HTTP, WSS etc.

### Key Requirements
1. WoT should be able to _describe the operational mode_ of the underlying device and protocol(s). For WoT to work, the precondition is that device must be operatioTnal in its native protocol domain. Once the underlying device and protocols are operational, there are two options to use it with WoT:
- consume the device by creating a Thing Description (TD) with native protocol bindings
- install WoT servient on the device and expose/consume Things.
2. For management use cases, WoT should be able to _describe the state_ in which the underlying native protocol stack is (for management use cases) even if that is not the operational state (in which WoT is directly interested). This can be done in two ways:
  - either _exposing the native state names transparently_, i.e. we don't define names for those states in WoT,
  - or _mapping_ them to generalized WoT state names.
The latter seems to be the main topic of the discussion.
3. WoT should be able to _describe the security model_ of the device (in any state) as security is one of the key aspects during IoT device lifecycle. Since different protocols might use different terminology, a mapping of terms used in WoT is needed to be included.
4. WoT may want to be also able to _describe state transitions_, especially what needs to be done to a device to bring it to operational state in its native protocol domain. An attempt on this is made in this document.

### Candidate stakeholder names
The main stakeholders are inherited from native protocols, which in turn are trying to solve the same use cases as the other protocols and therefore use stakeholder and state names that enable establishing a common terminology:
- _manufacturer_
- "vendor" or "service provider" or "site" or "solution provider", perhaps _provider_ being the best
- end user (aka _user_)
- eventually _regulator_ (state, certification body, etc).

In addition, some non-human actors:
-  _application_ (from the native protocols context; for instance WoT is an application for OCF);
- _WoT application_, e.g. a WoT script
- _cloud application_, e.g. a distributed database system that may require certain identification schemes and will affect device provisioning.


### Candidate state names
From WoT point of view, IMHO the following states make most sense:
- `Manufactured`
- `Onboarded to [protocol name]`  (could be skipped of requirement 4 is not needed)
- `Operational in [protocol name]`
- `Non-operational due to maintenance in [protocol name]`
(it may be under maintenance _and_ being operational, which needs no special handling)
- `Operational for WoT` (an aspect of Operational)
- `WoT maintenance` (an aspect of Maintenance; note that some updates may be possible in WoT Operational state, which needs no special handling)
- `Destroyed` or `Permanently Disabled`: the device is physically destroyed and can never be used again. May not have a corresponding state in native protocols.

### Information needed in each state
IMHO we need the following information for each WoT state name candidate:
- the corresponding state in native protocols (e.g. CoAP/OCF, MQTT, OneM2M, LwM2M, OPC-UA/Anima, ...)
- why the state is needed in the native protocol, i.e. what is the use case (relationship)
- what identities the state can be linked to
- what data the state can be linked to (security data, provisioning, configuration data, user data etc.)
- capabilities of the state, e.g.:
    - is the state operational for the native protocol
    - is the state operational for WoT (note that if the device can be _configured_ to work with WoT without changing the state in the native protocol, then it is operational in WoT, too).
- possible _previous_ states + stakeholders + conditions that control the state transition (in direct provisioning flow)
- possible _preceding_ states (in reverse flow: from which states can we revert to the current state)
- possible next states + stakeholders+conditions that control the state transition.

### Manufactured state
**Why**: device is manufactured and flashed with a SW image. Possibly certified (e.g. in OCF it runs in a special mode that only allows onboarding).
**Name in other protocols** : manufactured
**Actor** responsible to get to this state: manufacturer
**Data**:
- manufacturer credentials: OCF: optional, OneM2M: optional, LwM2M: optional, T2TRG: optional, OPC-UA: optional, Anima: required.

**Capabilities**:
- identity: usually none, possibly manufacturer-default;
- operational level: only for onboarding (OCF), initial provisioning (M2M), bootstrap (LwM2M), bootstrapping (installation, commisioning in T2TRG, enrollment in OPC-UA, bootstrapping in Anima;
- external interfaces: native mechanisms (e.g. support for onboarding methods/discovery).

**Previous state** (in normal provisioning flow): none
**Preceding states** (reverse flow: from which states can revert to Manufactured state): any state except Destroyed
**Next states**: `Bootstrapped/Onboarded`, `Destroyed/Permanently disabled`
**Relationship** (why to change state to Bootstrapped):
  - onboard the device in order to be usable by a provider (or to re-badge by vendor).

**Relationship** (why to change state to Destroyed):
  - destroy all data and make the device never usable again.

**Actor** who triggers next state transition: provider/vendor, based on native built-in mechanisms and protocols.

### Onboarded state (for given protocol)
**Why**: device gets owned, gets identity and authorization capability.
This state may be skipped from WoT point of vew.
**Name in other protocols** onboarding (OCF), initial provisioning (M2M), bootstrapping (LwM2M), bootstrapping (installation, commisioning) in T2TRG, bootstrapping (enrollment, trust list acquisition) in OPC-UA), bootstrapping in Anima.
**Actor** responsible to get to this state: provider/vendor
**Data**:
- manufacturer credentials
- provider credentials, configuration data.

**Capabilities**:
- identity: given by new owner (provider/vendor/user credentials)
- operational level: native, usually modified SW image, run after rebooting the device. After onboarding is complete, it can identify and authenticate, can be configured for services.
- operational for WoT: no
- external interfaces: native mechanisms (e.g. support for further provisioning/configuration)

**Previous state** (in normal provisioning flow): Manufactured
**Preceding states** (reverse flow: from which states can reset to Bootstrapped state): Operational/Maintenance
**Next states**: Operational, Manufactured
**Relationship** (why to change state to Operational):
  - provision the device in order to be usable by a provider in a solution
  - expose the native external interfaces.

**Relationship** (why to change state to Manufactured):
  - "offboarding" the device, i.e. reset to factory defaults
  - data that is not specific to Manufactured state should be deleted

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.

### Operational state (for native protocol)
**Why**: device gets operational in its native protocol (provisioned and configured).
**Name in other protocols** : operational
**Actor** responsible to get to this state: provider/vendor
**Data**:
- manufacturer credentials
- provider credentials, configuration data
- end user configuration data, user data.

**Capabilities**:
- identity: given by new owner (provider/vendor/user credentials)
- provisioned for the solution
- configured for the solution
- operational level: native, fully functional
- operational for WoT: only for consumption when a TD is defined with protocol bindings to the native protocol
- external interfaces: native mechanisms.

**Previous state**: Onboarded
**Preceding states**: Onboarded, MaintenanceD1: Onboarding: identity, ownership, provisioning/configuration servers. 
D2: Provisioning/configuration for protocols and services.
D3: Stop services for maintenance (SW and/or data). 
R1: Resume services after maintenance. Data updated.
R2: Factory reset. All data other than Manufactured-specific is deleted.
R3: Destroy the device. All data deleted, no recovery possible.
**Next states**: Maintenance, Onboarded (de-commission, not needing going through Maintenance state), Manufactured (reset to factory defaults without going to Maintenance state first)
**Relationship** (why to change state to Maintenance):
  - run the native mechanisms for SW update or reconfiguration or re-provisioning that requires stopping the external interfaces and/or normal operation of the device, including eventual rebooting).

**Relationship** (why to change state to Onboarded):
  - decommissioning the device, i.e. change solution or user but stay under the same owner (provider or user), without going through a Maintenance state.

**Relationship** (why to change state to Manufactured):
  - "offboarding" the device, i.e. reset to factory defaults, without going through a Maintenance state.

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.

### Maintenance state (for native protocol)
**Why**: device needs SW update that needs to disrupt the external interfaces on the device (note that some maintenance is possible while staying in Operation state)
**Name in other protocols** : operational, maintenance
**Actor** responsible to get to this state: provider/vendor
**Data** that cannot be updated:
- manufacturer credentials
- provider credentials for device ownership/identity
**Data** that can be updated:
- other provider credentials,
- configuration data
- end user configuration data, user data.

**Capabilities**:
- identity: given by new owner (provider/vendor/user credentials)
- provisioned for the solution
- configured for the solution
- operational level: only for updating
- operational for WoT: not
- external interfaces: only for updating.

**Previous state**: Operational
**Next states**: Operational, Onboarded (de-commission), Manufactured (reset to factory defaults), Maintenance for WoT
**Relationship** (why to change state to Operational):
  - finished updating, resume normal operation, expose native interfaces.

**Relationship** (why to change state to Onboarded):
  - decommissioning the device, i.e. change solution or user but stay under the same owner (provider or user).
  - data that is not specific to Onboarded state should be deleted

**Relationship** (why to change state to Manufactured):
  - "offboarding" the device, i.e. reset to factory defaults
  - data that is not specific to Manufactured state should be deleted

**Relationship** (to the "Maintenance for WoT" aspect):
  - install WoT servient, bootstrap WoT services (it is still Maintenance state).

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.


### Operational state for WoT
**Why**: an aspect of the Operational state: the device gets operational for WoT.
**Actor** responsible to get to this state: provider/vendor or user
**Data**:
- manufacturer credentials
- provider credentials, configuration data
- WoT servient specific credentials and configuration data
- user configuration data, user data.

**Capabilities**:
- identity: given by provider/vendor/user credentials
- provisioned for the native protocol
- configured for the native protocol
- operational level: native, fully functional.
- operational for WoT: yes (including consuming and exposing Things, running WoT services such as Thing Directory).
- external interfaces: mainly WoT interface, but native interface is running, too.
- WoT security configuration (required credentials, policies, etc).

**Previous state**: Operational for [protocol]
**Preceding states**: Operational for [protocol] , Maintenance, Maintenance for WoT
**Next states**: Maintenance for WoT, Maintenance, Operational for native protocol, Onboarded (de-commission), Manufactured (reset to factory defaults)
**Relationship** (why to change state to Maintenance for WoT):
  - run the WoT mechanisms for WoT-specific service update (e.g. for Thing Directory) or reconfiguration or re-provisioning that requires stopping the WoT interfaces on the device).
  - Note that those updates that do not require stopping WoT services may be done in `Operational for WoT` state.

**Relationship** (why to change state to Maintenance):
  - run the native mechanisms for SW update or reconfiguration or re-provisioning that requires stopping the normal operation of the device, including eventual rebooting).
  - in case of removing WoT, all WoT-specific data must be deleted.

**Relationship** (why to change state to Operational):
  - stop WoT services and eventually remove WoT servient without interrupting native external interfaces.
  - in case of removing WoT, all WoT-specific data must be deleted.

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.

### Maintenance state for WoT
**Why**: WoT needs SW update that needs to disrupt the WoT interfaces, but eventually keep running the native interfaces on the device, i.e. not requiring going to Maintenance mode. Therefore this is an aspect of the Operational state. The reason to model this state is to represent WoT specific bootstrapping processes, such as provisioning Thing Directories.
**Name in other protocols** : operational, maintenance
**Actor** responsible to get to this state: provider/vendor
**Data** that cannot be updated:
- manufacturer credentials
- provider credentials for device ownership/identity
- other provider credentials,
- configuration data that belongs to native protocol
- end user configuration data, user data configured with the native protocol
**Data** that can be updated:
- WoT specific configuration, credentials and policies.

**Capabilities**:
- identity: given by new owner (provider/vendor/user credentials)
- provisioned for the solution
- configured for the solution
- operational level: native operational
- operational for WoT: not
- external interfaces: running

**Previous state**: Operational for WoT, Maintenance
**Next states**: Operational for WoT, Maintenance

**Relationship** (why to change state to Operational for WoT):
  - an aspect of Maintenance to Operational state transition: start running the WoT external interfaces)

**Relationship** (why to change state to Maintenance):
  - remove the WoT servient
  - in case of removing WoT, all WoT-specific data must be deleted.

**Actor** who triggers next state transition: provider/vendor or user, based on native built-in mechanisms and protocols.


### Destroyed state (Permanently disabled state)
**Why**: device gets destroyed with no further possibility of functioning
**Name in other protocols**
- End-of-life (Anima, OPC-UA)
- T2TRG: there is `removed and replaced` but it's possible to recommission, therefore this state does not exist in T2TRG.
- OneM2M, LwM2M: not defined
- OCF: not explicitly defined

**Actor** responsible to get to this state: provider/vendor or user, enforcement agent
**Data**: none (all data must be destroyed, so that data recovery is not possible from the device).
**Capabilities**: none
**Previous state**: any
**Preceding states**: any
**Next states**: none
**Relationship** (why to change state to Destroyed):
  - end of life for device
  - callback for being dangerous
  - because enforcement (by your favorite dictator, or influencer)

**Actor** who triggers next state transition: manufacturer, provider/vendor or user, or enforcement agent, based on native built-in mechanisms and protocols.

