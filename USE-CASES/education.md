## Title: Shared Devices

### Submitter(s): 

Ege Korkan

### Reviewer(s):



### Tracker Issue ID:

[496](https://github.com/w3c/wot-architecture/issues/496)

### Category:

Education

### Class: 



### Status: 



### Target Users

For the education category:

- device owners : The university -> Research Group -> Specific Lab
- device user : Students and potentially anyone who participates in plugfests
- service provider : The university -> Research Group
- network operator : The university

### Motivation:

This use case motivates a standardized use of shared resources. One example is when a physical resource of the Thing should not be used by multiple Consumers at the same time like the arm of the robot but its position can be read my multiple Consumers.

### Expected Devices:

Concrete devices are irrelevant for this use case but devices with a physical state is required. However, we have currently the following devices that are connected to Raspberry Pis where the WoT stack (node-wot or similar) is running. Concrete device models can be given upon request.

- Robotic arms
- Conveyor belts
- Motorized sliders where the robots or devices can be mounted on
- Philips Hue devices: Light bulbs, LED Strips, Motion sensors, Switch. We do not have the source code of these devices (brownfield) 
- Various sensors (brightness, humidity, temperature, gyroscopic sensors)
- LED Screen to display messages

There are also IP Cameras but they are not WoT compatible and are not planned to be made compatible.

### Expected Data:

Atmospheric data of a room, machine sensors

### Dependencies - Affected WoT deliverables and/or work items:

Thing Description, Scripting API, possibly security

### Description:

We are offering a practical course for the students where they can interact fully remotely with WoT devices and verify their physical actions via video streams. We have sensors and actuators like robots. Students then build mashup applications to deepen their knowledge of WoT technologies. Official page of the course is [here](https://campus.tum.de/tumonline/wbLv.wbShowLVDetail?pStpSpNr=950504601&pSpracheNr=1).

#### Variants:

### Security Considerations:

The devices are connected to the Internet and are secured behind a router and proxy.

### Privacy Considerations:

none from the WoT point of view since we want the devices to be used by anyone and the devices do not share any information that is related to the students or us as the provider of the devices.
However, there are cameras which can show humans entering the room as a side effect (they are meant to monitor the devices). The streams are accessible only to authorized users, the room has signs on the door and there is a cage around the area that is filmed.

### Gaps:

#### Thing Description

- How to give hints that a particular action should not be used by others at the same time. A new keyword (like `"shared":true`) would be needed for devices that do not implement a describable mechanism.
- How to describe the mechanism that the Thing implements to manage the shared resources. Does it happen in the security level? 

#### Scripting API

- How does the Consumer code change when this mechanism is used. Does it get settled in the implementation or scripting level. 

### Existing standards:


### Comments:
