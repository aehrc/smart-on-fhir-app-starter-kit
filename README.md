# Getting Started SMART on FHIR apps
This starter-kit application is a simple SMART on FHIR App.

* Fetches Patient FHIR data
* Displays Patient information using FHIR Visualizer
* Allows User to Modify Patient information


# Running this app locally (quick)
1. ``` npm install ```
2. ``` npm run dev ```
3. [Goto SMART Forms EHR](https://ehr.smartforms.io/settings/app-launch?fhir_version=r4&launch_url=https%3A%2F%2Flocalhost%3A3000&app_name=Starter+SMART+App&tab=0&launch=WzAsInBhdC1zZiIsInByaW1hcnktcGV0ZXIiLCJoZWFsdGgtY2hlY2stcGF0LXNmIiwwLDAsMCwibGF1bmNoIG9wZW5pZCBmaGlyVXNlciBvbmxpbmVfYWNjZXNzIHBhdGllbnQvQWxsZXJneUludG9sZXJhbmNlLmNzIHBhdGllbnQvQ29uZGl0aW9uLmNzIHBhdGllbnQvRW5jb3VudGVyLnIgcGF0aWVudC9JbW11bml6YXRpb24uY3MgcGF0aWVudC9NZWRpY2F0aW9uLnIgcGF0aWVudC9NZWRpY2F0aW9uU3RhdGVtZW50LmNzIHBhdGllbnQvT2JzZXJ2YXRpb24uY3MgcGF0aWVudC9QYXRpZW50LnIgcGF0aWVudC9RdWVzdGlvbm5haXJlUmVzcG9uc2UuY3J1cyB1c2VyL1ByYWN0aXRpb25lci5yIGxhdW5jaC9xdWVzdGlvbm5haXJlP3JvbGU9aHR0cDovL25zLmVsZWN0cm9uaWNoZWFsdGgubmV0LmF1L3NtYXJ0L3JvbGUvbmV3IiwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCIsImE1N2Q5MGUzLTVmNjktNGI5Mi1hYTJlLTI5OTIxODA4NjNjMSIsIiIsIiIsIiIsIiIsMCwxLCJbe1wicm9sZVwiOlwiaHR0cDovL25zLmVsZWN0cm9uaWNoZWFsdGgubmV0LmF1L3NtYXJ0L3JvbGUvbmV3XCIsXCJ0eXBlXCI6XCJRdWVzdGlvbm5haXJlXCIsXCJjYW5vbmljYWxcIjpcImh0dHA6Ly93d3cuaGVhbHRoLmdvdi5hdS9hc3Nlc3NtZW50cy9tYnMvNzE1fDAuMy4wLWFzc2VtYmxlZFwifV0iLCJodHRwczovL3Byb3h5LnNtYXJ0Zm9ybXMuaW8vdi9yNC9maGlyIixmYWxzZV0&jwks_tab=0&validation=1)
4. This takes you to the settings page, where you can change the launch context. This has localhost:3000 as the default, which is where your application should be running. If it's not running here, change the Launch URL & Allowed Redirect URIs to wherever it is running.
5. If you wish you can change the patient and the user for the launch context from this page, this is not a necessary step.
6. Go to the top left (+ Icon) and then on this page Hit the 'Launch Starter SMART App' button.


# Setup Identity Provider
SMART on FHIR is secure and so this app will need to be able to fetch tokens from the same identity provider as your EMR.   

# Running this app locally (EMR/Scenario Specific App Integration)

## Setup Identitiy Provider
[This guide](https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/use-smart-on-fhir-proxy) walks through the setup process for a SMART on FHIR app using the Azure SMART Proxy for Azure Active Directory.

Not covered: Running with an identity provider other than Azure Activer Directory.

## Run the app
1. Change client ID in index.js to the client ID generated in the above steps.
2. ``` npm run dev```
3. Follow [these steps](https://techcommunity.microsoft.com/t5/healthcare-and-life-sciences/launching-a-smart-app-demystified/ba-p/2779729) to create a SMART Launcher from your EMR: 
4. Click on the link



# What's Next?
Think about what this app does.  It has all the boiler plate you need to access and modify a FHIR resrouce.
If you've ever had a piece of functionality you've wanted to add to an EMR you can code it in a SMART on FHIR app- using all the web dev tech you already know. Then just add that app to your EMR.

An example use of this is the Chestist demo app that packages ML assisted image analysis.


#References:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Quickstart on deploying a SMART app in Azure](https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/use-smart-on-fhir-proxy)

[SMARTHealth's Quickstart](https://docs.smarthealthit.org/)

[Cerner's Quickstart](https://engineering.cerner.com/smart-on-fhir-tutorial/)


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
