## Title: Smart Grids

### Submitter(s): 

Christian Glomb (Siemens)

### Reviewer(s):

Michael Lagally (Oracle)

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

- Grid operators on all voltage levels (DSO, TSO, ...)
- Plant operators (centralized as well as de-centralized producers)
- VPP operators
- Energy grid markets (to be discussed)
- Device owners
- Device users
- Cloud providers
- Device manufacturers
- Gateway manufacturers

### Motivation:

<Provide a description of the problem that is solved by the use case and a reason why this use case is important for the users>

### Expected Devices:

A smart grid integrates all players in the electricity market into one overall system through the interaction of generation, storage, grid management and consumption. Power and storage plants are already controlled today in such a way that only as much electricity is produced as is needed. Smart grids include consumers as well as small, decentralized energy suppliers and storage locations in this control system, so that on the one hand, consumption is more homogeneous in terms of time and space (see also intelligent electricity consumption) and on the other hand, in principle inhomogeneous producers (e.g. wind power) and consumers (e.g. lighting) can be better integrated.

### Expected Data:

- Weather and climate data
- Metering data (both production as well as consumption, 15 min. intervals)
- Real time data from PMUs (phasor measurement units)
- Machine and equipment monitoring data (enabling health checks)
- ...

### Dependencies - Affected WoT deliverables and/or work items:

WoT Architecture, WoT Binding Templates (covering protocol specifica)

### Description:

The term Smart Grid refers to the communicative networking and control of power generators, storage facilities, electrical consumers, and grid equipment in power transmission and distribution networks for electricity supply. This enables the optimization and monitoring of the interconnected components. The aim is to secure the energy supply on the basis of efficient and reliable system operation.

#### Variants:

##### Decentralized Power Generation
While electricity grids with centralized power generation have dominated up to now, the trend is moving towards decentralized generation plants, both for generation from fossil primary energy through small CHP plants and for generation from renewable sources such as photovoltaic systems, solar thermal power plants, wind turbines and biogas plants. This leads to a much more complex structure, primarily in the area of load control, voltage maintenance in the distribution grid and maintenance of grid stability. In contrast to medium to large power plants, smaller, decentralised generation plants also feed directly into the lower voltage levels such as the low-voltage grid or the medium-voltage grid.

##### Virtual Power Plants
A Virtual Power Plant (VPP) is an aggregation of Distributed Energy Resources (DERs) that can act as an entity on energy markets or as an ancillary service to grid operation.
The individual DERs often have a primary use on their own, with electric generation/consumption being a side-effect resp. secondary use. This results in negotiations/collaborations between many different parties e.g. such as the DER owner, the VPP operator, the grid operator and others.

##### Smart Metering
For consumers, a major change is the installation of smart meters. Their core tasks are remote reading and the possibility to realize fluctuating prices within a day at short notice. All electricity meters must therefore be replaced by those with remote data transmission. 

### Building Blocks:
- Multi-Stakeholder Operation: Multiple involved parties have to find a common mode of operation
- Device Lifecycle Management: Since the VPP is a dynamic system of loosely coupled DERs, the appearance and disappearance of DERs as well as the software management on the devices itself requires a means to orchestrate the lifecycle of individual device's respective components.
- Embedded Runtime: Especially for DERs in remote locations, maintaining a close couple control loop can be expensive if feasible at all. Therefore, it is desirable to be able to offload control logic to the DER itself.
- Ensemble Discovery: In order to dynamically find matching DERs needed for the operational goal of a VPP, a registry with different options of DER discovery is needed.
- Content-Negotiation: The different stakeholders have to interact and therefore need a common data format.
- Resource Description: The DER has to describe itself to enable discovery of single DERs and ensembles, also the operational data needs to be understood by the different stakeholders without engineering effort.
- Push Services: As there is a fan-out with many devices that probably have a rate-limited connection connecting to one single command centre, a bidirectional communication mechanism is needed rather than polling for the reverse direction
- Object Memory: As multiple and interchangable stakeholders are involved in the application, a backlog of the object is beneficial for scrollkeeping

### Non-Functionals:
- Privacy: As fine-grained metering informtion provides sensitive data about a household, the system should show a high digree of privacy
- Trust: Since the data exchange between the virtual power plant and the distributed energy resource leads to a physical action that invokes high currents and monetary flows, the integrity of both parties and the exchange's data is crucial
- Layered L7 Communication: Since multiple different links are used for monitoring and control, integration requires a clear and consistent seperation of information from the used serialization and application protocols to enable the exchange of homogenous information over heterogenous application layer protocols

### Gaps:

<Describe any gaps that are not addressed in the current WoT standards and building blocks>

### Existing standards:

IEC 61850 - International standard for data models and communication protocols

IEEE 1547 - US standard for interconnecting distributed resources with electric power systems

### Comments:
