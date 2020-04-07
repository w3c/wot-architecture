## Title: Smart City Localization

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
vehicles, and autonomous robots.

### Motivation:

Smart Cities need to track a large number of mobile devices and sensors.
Location information may be integrated with a logistics or fleet management
system.
A reusable localization module is needed with a common network interface to
include in these various applications.
For outdoor applications, GPS 
could be used, but indoors other localization technologies might be 
used, such as WiFi triangulation or vision-based navigation (SLAM).
Therefore the localization information should be technology-agnostic.

### Expected Devices:

One of the following:
* A localization already existing on a mobile device.
* A GPS module to be attached to a portable device.
* A GPS module attached to a mobile vehicle.
* A GPS module on a payload transported by a vehicle.
* Some other localization technology generating location data on an
  indoor mobile robot.

### Expected Data:

* Sensor ID
* Timestamp of last localization
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
* Localization technology (GPS, SLAM, etc).  
   * Note that multiple technologies might be used together.
   * Include parameters such as sample interval
* For each localization technology, data specific to that technology:
   * GPS: NMEA type
* Historical data

Note: the system should be capable of notifying consumers,
via a push mechanism, of changes in location, in order to implement
geofencing.  This may require additional parameters, such as the 
maximum distance that the device may be moved before a notification is
sent, or the maximum amount of time between updates.

### Dependencies:

node-wot

### Description:

Smart Cities have the need to observe the locations of 
large number of mobile devices 
in use in the context of a Fleet or Logistics Management System.
These systems may also include geofencing notifications and mapping
(visual tracking) capabilities.

#### Variants:

* A version of the system may log historical data so the past
  locations of the devices can be recovered.
* Location technologies other than GPS may be used.  The payload
  may contain additional information specific to the localization
  technology used.
* Geofencing may be implemented using push event notifications and
  will require setting of additional parameters such as maximum distance.

### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>

### Existing standards:

* NMEA: defines sentences from GPS devices
* W3C Geolocalization API: https://www.w3.org/TR/geolocation-API/
   * W3C Devices and Sensors WG is now handling
* Open Geospatial Consortium: https://www.ogc.org/
   * has standards defining semantics for identifying locations

### Comments:

