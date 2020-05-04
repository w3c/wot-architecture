## Title: Connected Building Energy Efficiency

### Submitter(s): 

Farshid Tavakolizadeh

### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

- device owners
- device user
- directory service operator

### Motivation:

<Provide a description of the problem that is solved by the use case and a reason why this use case is important for the users>

Construction and renovation companies often deal with the challenge of delivering target energy-efficient buildings given budget and time constraints. Energy efficiency, as one of the key factors for renovation investments, depends on the availability of various data sources to support the renovation design and planning. These include climate data and building material along with residential comfort and energy consumption profiles. The profiles may be created using a combination of manual inputs and sensory data collected from residents.


### Expected Devices:

- Gateway (e.g. Single-board computer with a Z-Wave controller)

Z-wave Sensors:
- Power Meter
- Gas Meter
- Smart Plug
- Heavy Duty Switch
- Door/Window Sensors
- CO2 Sensor
- Thermostat
- Multi-sensors (Motion, Temperature, Light, Humidity, Vibration, UV)

### Expected Data:

- Ambient conditions
- Occupancy model

### Dependencies - Affected WoT deliverables and/or work items:

<List the affected WoT deliverables that have to be changed to enable this use case>

### Description:

<Provide a description from the users perspective>

Renovation of residential buildings to improve energy efficiency requires a wide range of sensory information to understand the consumption model and existing weaknesses. As part of the pre-renovation activities, the renovation companies deploy various sensors to collect data over a period of time. Such sensors become part of a wireless sensor network (WSN) and expose data endpoint with the help of one or more gateway devices. The renovation companies need to discovery the data endpoints based on the physical location of the sensors, mapping to the building model, measurement type, or other meta information.

#### Variants:

<Describe possible use case variants, if applicable>

#### Security Considerations:

<Describe any issues related to security; if there are none, say "none" and justify>

#### Privacy Considerations:

<Describe any issues related to privacy; if there are none, say "none" and justify>

### Gaps:

<Describe any gaps that are not addressed in the current WoT standards and building blocks>

There is no standard way of embedding additional meta data about things inside the TD. It is possible to extend the TD context and add additional fields but with too much flexibility, every application may end up with a completely different structure, making such information more difficult to discover. In contrast, the OGC SensorThings model includes a `properties` property for a Thing which is a non-normative JSON Object for application-specific information (not to be confused with TD's properties which is a Map of instances of PropertyAffordance).

### Existing standards:

<Provide links to relevant standards that are relevant for this use case>

### Comments:


