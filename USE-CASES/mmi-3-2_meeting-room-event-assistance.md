## Meeting Room Event Assistance

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


### Expected Devices:

Meeting space supporting personalizable services and device access.

### Expected Data:

Command and status information transferred between the personal mobile device
application and the meeting space's services and devices.

Profile data for user preferences.

### Dependencies:

- WoT Thing Description
- WoT Discovery
- Optional: WoT Scripting API in application on mobile personal device and possibly
  in IoT orchestration services in the meeting space.

### Description:

A conference room where a series of meetings will take place.
People can go in and out of the room before,
after and during the meeting.
The door is "touched" by a badge.
An application on the user's mobile device can
activate any available display in the room and the room and can access and
receive notification from devices and services in the room.
The chair of the meeting is notified by a dynamically composed graphic animation,
audio notification or a mobile phone notification,
about available devices and services, and 
can install applications indicated by links.

The chair of the meeting selects a setup procedure by text amongst the provided links.
These options could be, for example:
photo step-by-step instructions (smartphone, HDTV display, Web site),
audio instructions (MP3 audio guide, room speakers reproduction, HDTV audio)
or RFID enhanced instructions (mobile SmartTag Reader, RFID Reader for smartphone).
The chair of the meeting chooses the room speakers reproduction,
then the guiding Service is activated and he starts to set the video projector.
After some attendees arrive,
the chair of the meeting changes to the slide show option and continues to
follow the instructions at the same step it was paused but with another more
private modality for example, a smartphone slideshow.

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
