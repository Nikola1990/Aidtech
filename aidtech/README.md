# aidtech

blockchain app to manage donations to be donated to a particular humanitarian project.
***************************************************************************************
 Each transaction done on the blockchain include:

- Project name of a project to donate to

- Item Type of item to donate

- Amount (number) amount of the donation

- Timestamp
********************************************************************
Chaincode include the function AddDonation (Project, ItemType, Amount) to add a donation to a project. This check that Project and ItemType actually exist.
*****************************************************************************************
- Architecture: Hyperledger Composer - a three layer architecture with Rest-Server APIs
- chaincode language: NodeJS
- Project directories:
-./dist - contain Admin buissines card & bna file containing all the cryptomaterial.
-./lib - contain logic.js file with AddDonation finction and AddProject function.
-./test - contain my-test.js a file for unit testing using Mocha framework and Chai librabry & 
      - boiler-plate.js file with a boilerplate code in order to automatize testing and setup embeded NodeJS enviroment to carry on test. 
****************************************************************************************
- BNA Resources are participant & assets
- BNA Assets are Projects & Items
- Participants want to add a specific Item to atached Project 

Each project has unique ID.
Each Item has a filed ItemType and an array of strings named 'project'.
Each element of the project array represents the project ID attachet to the specific item.

- Chaincode AddDonation - uder the lib directoy within logic.js file:
passes donationData to the function AddDonation: - a string : project ID
                                                 - a Integer: amount 
                                                 - a relation to a particular Item Type
- Chaincode is doing:
    1. check if the project exist in Project registry.
    2. if does, gets Items registry and check if the named project ID is attached to this item:
       get the array project and check if there is an element = projectid
    3. push/create the element with value passed from donationData to amount array. 

- The donation amounts and projects attached to the items are managed within arrays of String & Integers. 
   - easy to manipulare with arrays ! 
   
   

       
   
   
