Source: https://w3c.github.io/mmi/usecases/Overview.html

### Submitter(s): 

### Reviewer(s):

### Tracker Issue ID: @@@

### Category: 1. gap in existing specifications

### Class: Various MCs

### Status: Dirk would be the best person to elaborate on this.

### Motivation:

Interactive and adaptive control is useful in the case of accidents or errors
Elder people will increase in the near future and people would need help (or would enjoy interaction) with pet robots.

### Dependencies:

List of possible related standardization activities...


### Description:

Car navigation system, HTML5-based IVI, smartphones and sensor devices within car controlled using MMI lifecycle events and (JSON version of) EMMA over WebSocket, use cases are navigation, entertainment, and telephony
There is an open source approach called GENIVI (Generic In Vehicle Infotainment). They have developed a vocabulary component that could be considered as the Data Component in the MMI Architecture. For the GUI part of the interaction the GENIVI Alliance use Qt or HTML5.
MMI lifecycle events could be used to integrate multiple devices and modalities within a car (and outside the car)
Motivation:

Most current car architectures are based on Genivi, employing Qt for the GUI part of the interaction and FRANCA (commonapi) for communication issues. The current architecture should be extended to enable interaction with components designed after the W3C MMI architecture. This aims for an easy extension of existing deployments with support of additional modalities, devices and sensors within and outside the car.
An interaction manager will take care about the business logic and accessing the existing components like HMI, Vehicle Interface, Phone, ...
FRANCA may be used to deliver MMI lifecycle events.
Dependencies:

#### Variants

### Possible related standardization activities

The Automotive Working Group is developing an approach to low-level interaction in the vehicle with Web Sockets.
The Genivi Alliance is aiming for a resuable IVI platform as a flexible but standard reference architecture that may serve as a blueprint for building a full IVI solution

### Gaps

### Existing standards 

### Comments:
