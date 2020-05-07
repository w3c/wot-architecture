## Title: Digital Twin

### Submitter(s): 

Michael Lagally

### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:


### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

Device owners, cloud provider.

### Motivation:

A digital twin is the virtual representation of a physical asset such as a machine, a vehicle, robot, sensor. 
Using a digital twin allows businesses to analyze their physical assets to troubleshoot in real time, predict future problems, minimize downtime, and perform simulations to create new business opportunities.

A digital twin may also be called a twin or a shadow. Digital twin technology may be referred to as device virtualization.

Digital twins can be located in the edge or in the cloud.

### Expected Devices:

Various devices such as sensors, machines, vehicles, production lines, industry robots.

Digital twin platforms at the edge or in the cloud.

<List the target devices, e.g. as a sensor, solar panel, air conditioner>

### Expected Data:
 
<List the type of expected data, e.g. weather and climate data, medical conditions, machine sensors, vehicle data>

Machine status information, discrete sensor data or data streams.

### Dependencies:

<List the affected WoT deliverables>
- WoT Architecture  
- WoT Thing Description  
- WoT Profile  
- WoT Scripting?  

### Description:

<Provide a description from the users perspective>

The user benefits from using digital twins with the following scenarios:

* Better visibility: Continually view the operations of the machines or devices, and the status of their interconnected systems.

* Accurate prediction: Retrieve the future state of the machines from the digital twin model by using modeling.

* What-if analysis: Easily interact with the model to simulate unique machine conditions and perform what-if analysis using well-designed interfaces.

* Documentation and communication: Use of the digital twin model helps to understand, document, and explain the behavior of a specific machine or a collection of machines.

* Integration of disparate systems: Connect with back-end applications related to supply chain operations such as manufacturing, procurement, warehousing, transportation, or logistics.


### Variants:

#### Virtual Twin

The virtual twin is a representation of a physical device or an asset. A virtual twin uses a model that contains observed and desired attribute values and also uses a semantic model of the behavior of the device.

Intermittent connectivity: An application may not be able to connect to the physical asset. In such a scenario, the application must be able to retrieve the last known status and to control the operation states of other assets.

Protocol abstraction: Typically, devices use a variety of protocols and methods to connect to the IoT network. From a users perspective this complexity should not affect other business applications such as an enterprise resource planning (ERP) application. 

Business rules: The user can specify the normal operating range of a property in a semantic model. 
Business rules can be declaratively defined and actions can be automatically invoked in the edge or on the device.

Example: In a fleet of connected vehicles, the user monitors a collection of operating parameters, such as fuel level, location, speed and others. The semantics-based virtual twin model enables the user to decide whether the operating parameters are in normal range. In out of range conditions the user can take appropriate actions.


#### Predictive Twin

In a predictive twin, the digital twin implementation builds an analytical or statistical model for prediction by using a machine-learning technique. It need not involve the original designers of the machine. It is different from the physics-based models that are static, complex, do not adapt to a constantly changing environment, and can be created only by the original designers of the machine.

A data analyst can easily create a model based on external observation of a machine and can develop multiple models based on the user’s needs.
The model considers the entire business scenario and generates contextual data for analysis and prediction.

When the model detects a future problem or a future state of a machine, the user can prevent or prepare for them.
The user can use the predictive twin model to determine trends and patterns from the contextual machine data. The model helps to address business problems.


#### Twin Projections

In twin projections, the predictions and the insights integrate with back-end business applications, making IoT an integral part of business processes.
When projections are integrated with a business process, they can trigger a remedial business workflow.

Prediction data offers insights into the operations of machines. Projecting these insights into the back-end applications infrastructure enables business applications to interact with the IoT system and transform into intelligent systems.


### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>
WoT does not define a way to describe the behavior of a thing to use for a simulation.

### Existing standards:

<Provide links to relevant standards that are relevant for this use case>

### Comments:


