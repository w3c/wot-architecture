This directory contains the use cases 
for the next revision (V1.1) of the WoT architecture.

# Stakeholders, actors and roles

We have to use common terminology across the use cases to make sure 
everybod has the same understanding and the descriptions match,
when we combine the use case in a document.

## Currently used in use case descriptions

### Stakeholders/actors

device owners
device user
cloud provider
service provider
device manufacturer 
gateway manufacturer
network operator (potentially transparent for WoT use cases)
identity provider
directory service operator?

Please avoid domain specific terminology, e.g. MNO, telco. Rather use network operator.

<snip - consider to remove the section below>
# Roles



Manufacturer
Service Provider
Device Owner (User)
Others?

# Stakeholders 
represent a physical person or group of persons (company)
could be categorized per OSI layer model, consider top 3-4 categories (application, presentation, session, transport)

Align with Security document

Different roles:
e.g. security maintainer
Roles can be delegated
Depending on the use case, an actor can have multiple roles
</snip>




Please put all your use cases into this directory adopting the format in <em>use-case-template.md</em>.

### Initial set of use cases:
- Cloud / Big Data
https://github.com/w3c/wot-architecture/blob/master/USE-CASES/big-data.md

- Thing Directory / Discovery

- Data Streaming
https://github.com/w3c/wot-architecture/issues/387

- Audio/Video
https://github.com/w3c/wot-architecture/issues/8

- Accessibility  
  Providing accessible interfaces to devices

- Life Companion
  Integrate multiple devices and services to automate parts of the user's life 
  (e.g. morning routine, support aged people, accessibility)

- Multi-Vendor system integration  
  E.g. building management system integrating devices from multiple manufacturers (HVAC control)

- Cross-protocol integration of data from devices across multiple vendors
   Examples: Smart city, factories, environment onitoring, smart home
   
- Fleet management
   Assets are moving across locations and networks, geofencing
