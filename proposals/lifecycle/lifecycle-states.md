# Lifecycle states

State Name    | Meaning/Definition          | Relationship (Device - Consumer)  | Capabilities    | Security
--------------|-----------------------------|-----------------------------------|-----------------|----------
manufactured  | A new device                | none/untrusted                    | non-operational | 
bootstrapped  | device identity assigned    |                                   |                 | 
registered    | can be found in a directory |                                   |                 | 
onboarded     | link to consumer established| trusted                           |                 |
activated     | regular operation           | trusted                           | operational     |
deactivated   | maintenance                 | trusted?                          |                 |
offboarded    | link to consumer removed    | none/untrusted                    |                 |
deregistered  | can no longer be found in a directory | none/untrusted          |                 |
decommissioned| all sensitive data removed  | none / unstrusted                 |                 |
destroyed     | end of life state, device can never be used again |             |                 | 
