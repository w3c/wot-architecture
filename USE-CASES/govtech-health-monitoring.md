## Title: GPS Tracker

### Submitter(s): 

Jennifer Lin

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
significant people traffic.

### Motivation:


### Expected Devices:

One of the following:
* A thermal camera.
* Face detection (AI) service.

Optional:
* RGB and/or depth camera registered with the thermal camera
* Some way to identify location (optional)
Note that location might be static and configured during installation,
but might also be based on a localization technology if it needs to be 
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
* Bounding boxes around faces of identified people

Note: the system should be capable of notifying consumers,
via a push mechanism, of fever detections.   
This may be email or SMS.

### Dependencies:

node-wot

### Description:


#### Variants:


### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>

### Existing standards:


### Comments:

* May be additional requirements for privacy since images of people and their health status is involved.
* Different sub-use cases: immediate alerts vs agreggate data gathering

