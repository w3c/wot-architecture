## Multimodal Recognition Support

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

Recognizer system development has arrived at a point of maturity where
if we want to dramatically enhance recognition performance,
sensor fusion from multiple modalities is needed.
In order to achieve this,
an image recognizer should incorporate results coming from other 
kinds of recognizers (e.g. audio recognizer) within the network
engaged in the same interaction cycle.

### Expected Devices:

Audio sensing device (microphone).

Video sensing device (camera).

Audio recognition service.

Video recognition service.

Devices capabale of presenting alerts in various modalities.

### Expected Data:

Command and status information transferred between the sensing devices,
the recognition services, and the alert devices.

Profile data for user preferences.

### Dependencies:

- WoT Thing Description
- WoT Discovery
- Optional: WoT Scripting API in application on mobile personal device and possibly
  in IoT orchestration services.

### Description:

An audio recognizer has been trained with the more common sounds in the house,
in order to provide alerts in case of an emergency.
In the same house a security system uses a video recognizer to identify people
at the front door.
These two systems need to cooperate with a remote home management system
to provide integrated services.

#### Variants:


### Gaps:

Support for video and audio recognition services.

### Existing standards:

This use case is based on MMI UC 5.1.

### Comments:

Does not include Requirements section from original MMI use case.
