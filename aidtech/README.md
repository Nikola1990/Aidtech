# aidtech

Aid-technology app

Resources are participant & assets
Assets are project & Items

Each project has unique ID

Each item has a filed ItemType and an array of strings named project 
Each element of the array project represents the project ID attachet to the item

Chaincode AddDonation:
 passes the function data - DoanationData: - a string : project ID
                                           - a Integer: amount 
                                           - a relation to a particular Item Type
Code is doing:
    1. check if the project exist in Project registry
    2. if does, gets Items registry and check if the named project ID is attached to this item:
    get the array project and check if there is an element = projectid
    3. push/create and element to array amount 

The amount and project attached to the items are done as arrays 
   - easy to manipulare with arrays ! 
