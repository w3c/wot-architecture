## Interactive Public Spaces

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

Public spaces provide many opportunities for engaging, social and fun interaction.
At the same time,
preserving privacy while sharing tasks and activities with other people is a major issue
in ambient systems.
These systems may also deliver personalized information in combination
with more general services presented publicly.

A trustful discovery of the services and devices available in such environments
is a necessity to guarantee personalization and privacy in public-space applications.

### Expected Devices:

Public spaces supporting personalizable services and device access.

### Expected Data:

Command and status information transferred between the personal mobile device
application and the public space's services and devices.

Profile data for user preferences.

### Dependencies:

- WoT Thing Description
- WoT Discovery
- Optional: WoT Scripting API in application on mobile personal device and possibly
  in IoT orchestration services in the public space.

### Description:

Interactive installations such as touch-sensitive or gesture-tracking billboards
may be set up in public places.
Objects that present public information (e.g. a map of a shopping mall)
can use a multimodal interface (built-in or in tandem with the user's mobile devices)
to simplify user interaction and provide faster access.
Other setups can stimulate social activities,
allowing multiple people to enter an interaction simultaneously to work together
towards a certain goal (for a prize)
or just for fun (e.g. play a musical instrument or control a lighting exhibition).
In a context where privacy is an issue
(for example, with targeted/personalized alerts or advertisements),
the user's mobile device acts as a mediator for the services
running on the public network.
This allows the user to receive relevant information in the way she sees fit.
Notifications can serve as triggers for interaction with public devices and services
if the user chooses to do so.

#### Variants:

The user may have additional mobile devices they want to incorporate into
an interaction, for example a headset acting as an auditory aid or personal speech output
device.

### Gaps:

Data format describing user interface preferences.

### Existing standards:

This use case is based on MMI UC 3.1.

### Comments:

Does not include Requirements section from original MMI use case.
