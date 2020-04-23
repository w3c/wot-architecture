## Title: Smart City Geolocation

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

A Smart City managing mobile devices and sensors,
including passively mobile sensor packs, packages,
vehicles, and autonomous robots, where their location needs to
be determined dynamically.

TODO: Stakeholders/Users need to be further clarified. They include "city government, people counting service providers, police, network providers, ...

### Motivation:

Smart Cities need to track a large number of mobile devices and sensors.
Location information may be integrated with a logistics or fleet management
system.
A reusable geolocation module is needed with a common network interface to
include in these various applications.
For outdoor applications, GPS 
could be used, but indoors other geolocation technologies might be 
used, such as WiFi triangulation or vision-based navigation (SLAM).
Therefore the geolocation information should be technology-agnostic.

NOTE: we prefer the term "geolocation", even indoors, over "localization" to
avoid confusion with language localization.

### Expected Devices:

One of the following:
* A geolocation system on a personal device, such as a smart phone.
* A geolocation system to be attached to some other portable device.
* A geolocation system attached to a mobile vehicle.
* A geolocation system on a payload transported by a vehicle.
* A geolocation system on an indoor mobile robot.

### Expected Data:

* Sensor ID
* Timestamp of last geolocation
* 2D location
   * typically latitude and longitude
   * May also be semantic, i.e. room in a building, exit

Optional:
* Semantic location
   * Possibly in addition to numerical lat/long location.
* Altitude
   * May also be semantic, i.e. floor of a building
* Accuracy information
   * Gaussian covariance matrix
* Geolocation technology (GPS, SLAM, etc).  
   * Note that multiple technologies might be used together.
   * Include parameters such as sample interval, accuracy
* For each geolocation technology, data specific to that technology:
   * GPS: NMEA type
* Historical data

Note: the system should be capable of notifying consumers
of changes in location.
This may be used to implement geofencing by some other system.  
This may require additional parameters, such as the 
maximum distance that the device may be moved before a notification is
sent, or the maximum amount of time between updates.
Notifications may be sent by a variety of means, some of which may
not be traditional push mechanisms (for example, email might be used).
For geofencing applications, it is not necessary that the device be aware
of the fence boundaries; these can be managed by a separate system.

### Dependencies:

node-wot

### Description:

Smart Cities have the need to observe the physical locations of 
large number of mobile devices 
in use in the context of a Fleet or Logistics Management System.
These systems may also include geofencing notifications and mapping
(visual tracking) capabilities.

#### Variants:

* A version of the system may log historical data so the past
  locations of the devices can be recovered.
* Geolocation technologies other than GPS may be used.  The payload
  may contain additional information specific to the geolocation
  technology used.  In particular, in indoor situations technologies such
  as WiFi triangulation or (V)SLAM may be more appropriate.
* Geofencing may be implemented using event notifications and
  will require setting of additional parameters such as maximum distance.

### Gaps:

There is no standardized TD vocabulary for representing location data.
Location data can be point data, a path, an area or a volumentric object.
Location information can be expressed using multiple standards, 
the TD must be able to unambiguously describe location information.

### Existing standards:

* NMEA: defines sentences from GPS devices
* W3C Geolocalization API: https://www.w3.org/TR/geolocation-API/
   * W3C Devices and Sensors WG is now handling
* Open Geospatial Consortium: https://www.ogc.org/
   * has standards defining semantics for identifying locations

### Comments:

