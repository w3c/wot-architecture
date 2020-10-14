# Connected Building Notes

Requirements:
1. Federated directories
   - Federated registration of directories
   - Federated Directories register regular TDs containing the concept of Directory and summaries (when possible) of their registered TDs
   - Federated discovery is triggered with semantic queries

2. [Directory queries](connected-building-directory-queries.md)
   - List of expected queries
   - SPARQL (for federated discovery relies on a special parameter)
   - JSONPath
   - XPath

3. [Directory Information Model](connected-building-directory-information-model.md)
   - API requirements
   - Search response model
   - SAREF vocabulary should be natively part of the TDs
   - Directories should be part of the TDs, by being included in the TD ontology
   - The concept directory in the ontology should have attributes that refer to physical features, like the response ratio, hit ratio, average answering times, and others
   - Directories may implement a summarization technique for the stored TDs 
