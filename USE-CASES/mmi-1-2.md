### Submitter(s): 

Michael McCool

### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:

<please leave blank>

### Category:

Accessibility

### Class:

<please leave blank>

### Status:

<please leave blank>

### Target Users

<List all users that are involved in the use case, e.g. device manufacturer, gateway manufacturer, cloud provider>

### Motivation:

The increase in the number of controllable devices in an
intelligent home creates a problem with controlling all available services
in a coherent and useful manner.
Having a shared context,
built from information collected through sensors and direct user input,
 would improve recognition of user intent, and thus simplify interactions.

In addition,
multiple input mechanisms could be selected by the user based on device type,
level of trust and the type of interaction required for a particular task.

### Expected Devices:

Mobile phone or other client running an application providing command
mediation capabilities.

IoT-enabled smart home devices supporting
remote sensing and actuation functionality.

### Expected Data:

Command and status information transferred between the command mediation
application and one or more devices.

### Dependencies:

- WoT Thing Description
- WoT Discovery
- Optional: WoT Scripting API accessible from application for interacting 
  with devices.

### Description:

Smart home functionality (window blinds, lights, air conditioning etc.)
is controlled through a multimodal interface,
composed from modalities built into the house itself
(e.g. speech and gesture recognition)
and those available on the user's personal devices
(e.g. smartphone touchscreen).
The system may automatically adapt to the preferences of a specific user,
or enter a more complex interaction if multiple people are present.

Sensors built into various devices around the house can act as input
modalities that feed information to the home and affect its behavior.
For example,
lights and temperature in the gym room can be adapted dynamically
as workout intensity recorded by the fitness equipment increases.
The same data can also increase or decrease volume and tempo of music tracks
played by the user's mobile device or the home's media system.

#### Variants:

The intelligent home in tandem with the user's personal
devices can additionally monitor user behavior for emotional patterns
such as 'tired' or 'busy' and adapt further.

### Gaps:

A service may be needed to recognize gestures and emotional states.

### Existing standards:

This use case is based on MMI UC 1.2.

### Comments:

Does not include Requirements section from original MMI use case.
