## Title: Cross Protocol Interworking
### Submitter(s): 

Michael Lagally

### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:


### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

Device owners, cloud providers.


<List all users that are involved in the use case, e.g. device manufacturer, gateway manufacturer, cloud provider>

### Motivation:

<Provide a description of the problem that is solved by the use case and a reason why this use case is important for the users>

In home and industrial scenarios various devices are connected to a common network. These devices implement different protocols. To enable interoperability, an "agent" needs to communcate across different protocols. Platforms for this agent can be  edge devices, gateways or cloud services.

Interoperability across protocols is a must for all user scenarios that inctegrate devices from more than one protocol.

### Expected Devices:

Various sensors, e.g. temperature, light, humidity, vibration, noise, air quality, edge devices, gateways, cloud servers and services.
<List the target devices, e.g. as a sensor, solar panel, air conditioner>

### Expected Data:

Discrete sensor values, such as temperature, light, humidity, vibration, noise, air quality readings.
A/V streams.
The data can be delivered periodically or on demand.
 
<List the type of expected data, e.g. weather and climate data, medical conditions, machine sensors, vehicle data>

### Dependencies:

<List the affected WoT deliverables>
WoT Profiles.

### Description:

There are multiple user scenarios that are addressed by this use case. 

An example in the smart home environment is an automatic control lamps, air conditioners, heating, window blinds in a household 
based on sensor data, e.g. sunlight, human presence, calendar and clock, etc.

In an industrial environment individual actuators and production devices use different protocols. 
Examples include MQTT, OPC-UA, Modbus, Fieldbus, and others.
Gathering data from these devices, e.g. to support digital twins or big data use cases requires an "Agent" to bridge across these protocols.
To provide interoperability and to reduce implementation complexity of this agent a common set of (minimum and maximum) 
requirements need to be supported by all interoperating devices. 

A smart city environment is similar to the industrial scenario in terms of device interoperability. Devices differ however, 
they include smart traffic lights, traffic monitoring, people counters, cameras.

#### Variants:

<Describe possible use case variants, if applicable>

### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>
A common profile across protocols is required to address this use case. 

### Existing standards:

<Provide links to relevant standards that are relevant for this use case>
MQTT, OPC-UA, BACNet, CoAP, various other home and industrial protocols.
### Comments:


