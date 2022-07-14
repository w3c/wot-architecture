## Title: Machines in a hospital ICU should be able to speak to one another<Pick a descriptive title>

### Submitter(s): 

Taki Kamiya

### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

- device owners
- device user
- cloud provider
- service provider
- device manufacturer
- gateway manufacturer
- identity provider

### Motivation:

Preventable medical errors may account for more than 100,000 deaths per year in U.S. alone. These errors are mainly caused by failures of communication such as a chart misread or the wrong data passed along to machines or staffs. Part of the problem could be solved if the machines could speak to one another.   Manufacturers have little incentive to make their proprietary code and data easily to accessible and process able by their competitors’ machines. So the task of middleman falls to the hospital staffs. In addition to saving lives, a common framework could result in collecting and recording more clinical data on patients, making it easier to deliver precision medicine.

### Expected Devices:

<List the target devices, e.g. as a sensor, solar panel, air conditioner>

### Expected Data:

<List the type of expected data, e.g. weather and climate data, medical conditions, machine sensors, vehicle data>

### Dependencies - Affected WoT deliverables and/or work items:

<List the affected WoT deliverables that have to be changed to enable this use case>

### Description:

Physiological Closed-Loop Control (PCLC) devices are a group of emerging technologies, which use feedback from physiological sensor(s) to autonomously manipulate physiological variable(s) through delivery of therapies conventionally delivered by clinician(s). 

Clinical scenario without PCLC. An elderly female with end-stage renal failure was given a standard insulin infusion protocol to manage her blood glucose, but no glucose was provided. Her blood glucose dropped to 33, then rebounded to over 200 after glucose was given. This scenario has not changed for decades.

The desired state with PCLC implemented in an ICU. A patient is receiving an IV insulin infusion and is having the blood glucose continuously monitored. The infusion pump rate is automatically adjusted according to the real-time blood glucose levels being measured, to maintain blood glucose values in a target range. If the patient’s glucose level does not respond appropriately to the changes in insulin administration, the clinical staff is alerted.

Medical devices do not interact with each other autonomously (monitors, ventilator, IV pumps, etc.) Contextually rich data is difficult to acquire. Technologies and standards to reduce medical errors and improve efficiency have not been implemented in theater or at home.

In recent years, researchers have made progress developing PCLC devices for mechanical ventilation, anesthetic delivery applications, and so on. Despite these promises and potential benefits, there has been limited success in the translation of PCLC devices from [bench to bedside](https://today.duke.edu/2014/07/benchbedside). A key challenge to bringing PCLC devices to a level required for a clinical trials in humans is risk management to ensure device reliability and safety.

The United States Food and Drug Administration (FDA) classifies new hazards that might be introduced by PCLC devices into three categories. Besides clinical factors (e.g. sensor validity and reliability, inter- and intra-patient physiological variability) and usability/human factors (e.g. loss of situational awareness, errors, and lapses in operation), there are also engineering challenges including robustness, availability, and integration issues.

#### Variants:

US military developed ONR SBIR (Automated Critical Care System Prototype), and found those issues.

- No plug and play, i.e. cannot swap O2 Sat with another manufacturer.
- No standardization of data outputs for devices to interoperate.
- Must have the exact make/model to replace a faulty device or system will not work.

### Security Considerations:

Security considerations for interconnected and dynamically composable medical systems are critical not only because laws such as [HIPAA](https://www.hhs.gov/hipaa/index.html) mandate it, but also because security attacks can have serious safety consequences for patients. The systems need to support automatic verification that the system components are being used as intended in the clinical context, that the components are authentic and authorized for use in that environment, that they have been approved by the hospital’s biomedical engineering staff and that they meet regulatory safety and effectiveness requirements.

For security and safety reasons, [ICE (F2761-09)](#ICE) medical devices never interact directly each other. All interaction is coordinated and controlled via the applications.

While transport-level security such as TLS provides reasonable protection against external attackers, they do not provide mechanisms for granular access control for data streams happening within the same protected link. Transport-level security is also not sufficiently flexible to balance between security and performance. Another issue with widely used transport-level security solutions is the lack of support for multicast.

### Privacy Considerations:

<Describe any issues related to privacy; if there are none, say "none" and justify>

### Gaps:

Multicast support. It has proven useful for efficient and scalable discovery and information exchange in industrial systems.

### Existing standards:

#### <a name="ICE"></a> [F2761-09 (2013)](https://www.astm.org/Standards/F2761.htm) 

Medical Devices and Medical Systems - Essential safety requirements for equipment comprising the patient-centric integrated clinical environment (ICE) - Part 1: General requirements and conceptual model.

The idea behind ICE is to allow medical devices that conform to the ICE standard, either natively or using an adapter, to interoperate with other ICE-compliant devices regardless of manufacturer.

#### [OpenICE](https://www.openice.info/)

OpenICE is an initiative to create a community implementation of F2761-09 (ICE - Integrated Clinical Environment) based on [DDS](https://www.omg.org/spec/DDS/About-DDS/).

#### [MDIRA Specification Document Version 1.0](https://secwww.jhuapl.edu/mdira/documents). 

MDIRA Version 1.0 provides requirements and implementation guidance for MDIRA-compliant systems focused on trauma and critical care in austere environments.

Johns Hopkins University Applied Physics Laboratory (JHU-APL) lead a research project in collaboration with US military to develop a framework of autonomous / closed loop prototypes for military health care which are dual use for the civilian healthcare system.

### Comments:

