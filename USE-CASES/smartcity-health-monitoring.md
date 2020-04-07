## Title: Public Health Monitoring

### Submitter(s): 

Jennifer Lin (GovTech Singapore)

### Reviewer(s):

Michael McCool, Michael Lagally

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

Agencies, companies and other organizations in a Smart City with 
significant foot traffic.

### Motivation:

A system to monitor the health of people in public places is useful to
control the spread of infectious diseases.  In particular, we would like
to identify individuals with temperatures outside the norm (i.e. running
a fever) and then take appropriate action.  Actions can include sending
a notification or actuating a security device, such as a gate.

This mechanism should be non-invasive and non-contact since the solution
should not itself contribute to the spread of infectious diseases.

Data may also be aggregated for statistics purposes, for example, to 
identify the number of people in an area with elevated temperatures.
This has additional requirements to avoid double-counting individuals.

### Expected Devices:

One of the following:
* A thermal camera.
* Face detection (AI) service
     * May be on device or be an edge or cloud service.

Optional:
* RGB and/or depth camera registered with the thermal camera
* Cloud service for data aggregation and analytics.
* Some way to identify location (optional)
Note that location might be static and configured during installation,
but might also be based on a localization technology if the device needs to be 
portable (for example, if it needs to be set up quickly for an event).

### Expected Data:

* Sensor ID
* Timestamp
* Number of people identified with a fever in image
* Estimated temperature for each person
   * May be coarse, low/normal/high
* Location
   * Latitude, Longitude, Altitude, Accuracy 
   * Semantic (eg a particular building entrance)
* Thermal image

Optional:
* RGB image
* Depth image
* Localization technology (see localization use case)
* Integration with local IoT devices: gates, lights, or people (guards)
* Bounding boxes around faces of identified people in image(s)
* Data that can be used to uniquely identify a face (distinguish it from others)
    * Aggregation system may output the total number of unique faces with fever

Note: the system should be capable of notifying consumers (such as security personnel),
of fever detections.   
This may be email, SMS, or some other mechanism, such as MQTT publication.

It would also be useful to count unique individuals for statistics purposes,
but not necessarily based on identifying particular people.  This is to
avoid counting the same person multiple times.

### Dependencies:

node-wot

### Description:

A thermal camera image is taken of a group of people
and an AI service is used to identify faces in the image.
The temperature of each person is then estimated from the registered face;
for greater accuracy, a consistent location for sampling should be used, such 
as the forehead.
The estimated temperature is compared to high (and optionally, low)
thresholds and a notification (or other action) is taken if the 
temperature is outside the norm.
Additional features may be extracted to identify unique individuals.

#### Variants:

* Enough information is included in the notification that the specific
  person that raised the alarm can be identified.  For example, if an RGB
  camera is also registered with the thermal camera, then a bounding box may
  be indicated via JSON and the RGB image included; or the bounding box could
  be actually drawn into the sent image, or the face could be cropped out.
  This is useful if, for example, a notification needs to be sent to health
  or security workers who need to identify the person in a crowd.
* Instead of simply a notification, an action may be taken, such as closing
  or refusing to open a gate at the entrance to a building, to prevent sick
  employees from entering the building.
* To generate statistics, for example to count the number of people with
  fevers, then unique individuals need to be indentified to avoid counting
  the same person more than once.
* The same sensors might be used to determine the number of people in
  an area and send a notification if crowded conditions are detected, in
  order to support social distancing behaviour (for instance, supporting
  an app that notifies users when a destination is crowded) in a pandemic situation.

### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>
* Onboarding mechanism for rapidly deploying a large number of devices

### Existing standards:


### Comments:

* May be additional requirements for privacy since images of people and their health status is involved.
* Different sub-use cases: immediate alerts or actions vs. aggregate data gathering

