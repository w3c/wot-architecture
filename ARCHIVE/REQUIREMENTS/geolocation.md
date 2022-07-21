## Title: Geolocation support

### Submitter(s): 

Michael Lagally

### Reviewer(s):

Jennifer Lin, Zoltan Kis, Ege Korkan, Michael McCool

### Tracker Issue ID:

<please leave blank>

### Use case reference(s):

https://github.com/w3c/wot-architecture/blob/master/USE-CASES/govtech-gps-module.md

### Affected WoT Deliverables:

TD spec  
Profile spec  

### Requirements:

Enable location support for devices that are either stationary or moving between different locations.  
Enable indoor and outdoor navigation and a handover between them.  
Support multiple geolocation systems, such as GPS, Galileo, and others.  
Standardize TD vocabulary with corresponding identifiers for those.  
Select the appropriate Mime types for representing location information.  
Define the corresponding data formats and types to represent a location and a path / track.  

Evaluate existing W3C standards for adoption / alignment, including:
* Spatial Data on the Web Best Practices (https://www.w3.org/TR/sdw-bp/)
* Geolocation API (https://www.w3.org/TR/geolocation-API/)
* Generic Sensor API (https://www.w3.org/TR/generic-sensor/)

### Related standards:

https://www.iso.org/standard/39242.html
https://www.iso.org/standard/70882.html ISO 19116:2019
Open Geospatial consortium
ETSI, FIWARE

### Other references:

See architecture minutes for additional references:
https://www.w3.org/2020/03/12-wot-arch-minutes.html

### Comments:

The profile specification already contained a section about GPS location data in a previous draft.
This has been carried over to the thing description as a baseline.
