## Audiovisual Devices Acting as Smartphone Extensions

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

Many of today's home IoT-enabled devices can provide similar functionality
(e.g. audio/video playback),
differing only in certain aspects of the user interface.
This use case would allow continuous interaction with a specific
application as the user moves from room to room,
with the user interface switched automatically to the set of
devices available in the user's present location.

On the other hand, 
some devices can have specific capabilities 
and user interfaces that can be used to add information to a larger context
that can be reused by other applications and devices.
This drives the need to spread an application across different devices
to achieve a more user-adapted and meaningful interaction according to the 
context of use.
Both aspects provide arguments for exploring use cases where
applications use distributed multimodal interfaces.

### Expected Devices:

Mobile phone or other client running an application requiring a extended and
more accessible user interface.

IoT-enabled audio-visual devices providing audio and visual information
display capabilities that can be used to augment the user interface of the 
application.

Possible edge computation services providing speech-to-text or described video
(e.g. object detection) capabilities.

### Expected Data:

Visual display information mapping information from audio to visual modalities,
for example text generated from voice recognition.

Text from an application that needs to be displayed at a larger size.

Visual alerts correspondig to audio stimuli, eg sound effects in a game mapped
to visual icons.

Visual information mapped to audio information, for example,
described video based on an AI service providing object recognition.

### Dependencies:

- WoT Thing Description
- WoT Discovery
- Optional: WoT Scripting API accessible from application for interacting
with devices.

### Description:

A home entertainment system is adapted by a mobile device
as a set of user interface components.

In addition to media rendering and playback,
these Devices also act as input or output modalities for
an application, for example an application running on a smartphone.
The native user interface on the application 
does not have to be manipulated directly at all.
A wall-mounted touch-sensitive TV could be used to navigate applications,
and a wide-range microphone can handle speech input.
Spatial (Kinect-style) gestures may also be used to control 
application behavior.

Accessibility support software on the smartphone 
discovers available modalities and arranges them to best 
serve the user's purpose. 
One display can be used to show photos and movies, 
another for navigation. 
As the user walks into another room, 
this configuration is adapted dynamically to the new location. 
User intervention may be sometimes required to decide on 
the most convenient modality configuration. 
The state of the interaction is maintained 
while switching between modality sets. 
For example, 
if the user was navigating a GUI menu in the living room, 
it is carried over to another screen when she switches rooms, 
or replaced with a different modality such as voice 
if there are no displays in the new location.

#### Variants:

Modalities may be translated from one form to another to accomodate
accessibility issues, for example, visual cues into audio cues and 
vice-versa, as appropriate.

### Gaps:

An AI service may be require to perform modality mapping, for example,
object recognition.

### Existing standards:

This use case is based on MMI UC 1.1.

### Comments:

Does not include Requirements section from original MMI use case.
Variant supporting 
modality conversion is not included in the original MMI use case.
