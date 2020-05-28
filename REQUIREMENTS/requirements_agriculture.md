## Title: Requirements for the device virtualization, TD states, and Units in TD

### Submitter(s): 

Ryuichi Matsukura

### Reviewer(s):

<reviewers>

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

https://github.com/w3c/wot-architecture/blob/master/USE-CASES/smart-agriculture.md

### Affected WoT Deliverables:

Architecture
Thing Description
Profile

### Requirements:

- device virtualization
Enable to respond to the requests from consumers instead of the original corresponding to the virtual device and being offline
Create and keep TD for a virtual device that has the same interaction affordances as those of the original thing, but the different URL that points to the intermediary

- States for things (devices)
Enable to maintain states of things in TD
  for examples, such states should be managed:
  - running: the thing is available (has valid URL) and able to reply to consumers' requests
  - sleeping: the thing is available (has valid URL) but able to reply to consumers' requests because of it(device) suspending
  - stopping: thing is disabled (has no URL)
  
Comments: may separate discussions for states during the onboarding process to states after onboarding. Perhaps application developers have much interested in states after onboarding.

- units
Enable to refer the definitions for unit specified in various standards

### Related standards:

for units:
https://genivi.github.io/vehicle_signal_specification/rule_set/data_entry/data_unit_types/

### Other references:

<additional references that provide more context>

### Comments:

<additional comments>
