## Title: Retail

### Submitter(s): 

David Ezell, Michael Lagally, Michael McCool

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

Retailers, customers, suppliers.

### Motivation:

Integrating and interconnecting multiple devices into the common retail workflow 
(i.e., transaction log) drastically improves retail business operations at multiple levels. 
It brings operational visibility,including consumer behavior and environmental information, 
that was not previously possible or viable in a meaningful way. 

It drastically speeds up the process of root cause analysis of operational issues and 
simplifies the work of retailers.

### Expected Devices:

Connected sensors, such as people counters, presence sensors, air quality, room ocupancy, door sensors. 
Cloud services.  Video analytics edge services.

### Expected Data:
 
Inventory data, supply chain status information, discrete sensor data or data streams.

### Dependencies:

<List the affected WoT deliverables>
tbd

### Description:

Falling costs of sensors, communications, and handling of very large volumes of data combined with cloud 
computing enable retail business operations with increased operational efficiency, better customer service, 
and even increased revenue growth and return on investment.

Accurate forecasts allow retailers to coordinate demand-driven outcomes that deliver connected customer interactions.
They drive optimal strategies in planning, increasing inventory productivity in retail supply chains, 
decreasing operational costs and driving customer satisfaction from engagement, to sale, to fulfilment. 

Understanding of store activity juxtaposed with traditional information streams can boost worker and consumer safety, 
comply better with work safety regulations, enhance system and site security, and improve worker efficiency 
by providing real-time visibility into worker status, location, and work environment.

### Variants:

- Use edge computing, in particular video analytics, in combination with IoT devices to deliver an enhanced 
  customer experience, better manage inventory, or otherwise improve the store workflow.
  
### Security Considerations:

- In retail, replay attacks can cause monetary loss, customers may be incorrectly charged or over-charged.
- To avoid replay attacks, "Things" should implement a sequence number for each message and digital signature.
- Servers ("Things" or "Cloud") should verify the signature and disallow for duplicated messages.
- For "Things" relying on electronic payments, "Things" must comply with PCI-DSS requirements.
- "Things" must never store credit card information.
- Customer satisfaction and trust depends on availability, so attacks such as Denial-of-Service (DoS) need to be prevented or mitigated.
- To prevent DoS, implement "Things" with early DoS detection.
- Have an automated DoS system that will notify the controlling unit of the problem.
- Implement IP white list, that could be part of the DoS early detection system.
- Make sure your network perimeter is defended with up to date firewall software.

### Privacy Considerations:
 
As a general rule, personal consumer information should not be stored.
That is especially true in the retail industry where a security breach could cause financial, reputation, and brand damage.
If personal or information that can identify a consumer is to be stored,
it should be to conduct business and with the explicit acknowledgment of the consumer.
WoT vendors and integrators should always have a privacy policy and make it easily available.
By default, devices should adopt an opt-out policy.
That means, unless the consumer explicitly allowed for the data capture and storage, avoid doing it.

### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>
tbd

### Existing standards:

<Provide links to relevant standards that are relevant for this use case>
tbd

### Comments:


