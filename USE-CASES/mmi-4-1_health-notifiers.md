## Health Notifiers

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

End user with a health problem they wish to monitor.

Health services provider (doctor, nurse, paramedic, etc).

### Motivation:

In critical situations regarding health,
like a medical emergency,
media multimodality may be the most effective way to communicate alerts,
When the goal is to monitor the health evolution of a
person in both emergency and non-emergency contexts,
access via networked devices may be the most effective way to collect data and 
monitor a patient's status.

### Expected Devices:

Medical facilities supporting device and service access.

### Expected Data:

Command and status information transferred between the personal mobile device
application and the meeting space's services and devices.

Profile data for user preferences.

### Dependencies:

- WoT Thing Description
- WoT Discovery
- Optional: WoT Scripting API in application on mobile personal device and possibly
  in IoT orchestration services.

### Description:

In medical facilities,
a system may provide multiple options to control sensor operations
by voice or gesture ("start reading my blood pressure now").
These interactions may be mediated by an application installed into a smartphone.
The system integrates information from multiple sensors
(for example, blood pressure and heart rate);
reports medical sensor readings periodically (for example, to a remote medical facility)
and sends alerts when unusual readings/events are detected.

#### Variants:

The user may have additional mobile devices they want to incorporate into
an interaction, for example a headset acting as an auditory aid or personal speech output
device.

### Gaps:

Data format describing user interface preferences.

Ability to install applications based on links that can access IoT services.

### Existing standards:

This use case is based on MMI UC 3.2.

### Comments:

Does not include Requirements section from original MMI use case.
