/**
 * Create AddDonation transaction
 * @param {org.aidtech.AddDonation} donationData
 * @transaction
 */

function AddDonation(donationData) {
  var itemToDonate = donationData.itemtype; // this is an istance of the asset itemtype
  var projectToDonate = donationData.project;  
  
  return getAssetRegistry('org.aidtech.Project')
  .then(function(ProjectRegistry) {
    return ProjectRegistry.exists(projectToDonate);
  })    
   .then(function(exists) {
    return getAssetRegistry('org.aidtech.ItemType'); 
  }) 
   .then(function (ItemTypeRegistry) {
              // to check if project is attached to this item
              if (itemToDonate.project.indexOf(projectToDonate) != -1){
                  if (itemToDonate.amount) {
                      itemToDonate.amount.push(donationData.amount)
                   } else {
                   itemToDonate.amount = [donationData.amount]
                   }
                   return ItemTypeRegistry.update(itemToDonate)
               } else {console.log('Project : << ', + projectToDonate + '>> is not attached to this item') } 
           })
   
  .catch(function (error) {
     });
    }
  
  
  /**
 * Create addProject transaction
 * @param {org.aidtech.addProject} Projectdata
 * @transaction
 */

function addProject(Projectdata) {
  return getAssetRegistry('org.aidtech.Project')
  .then(function(ProjectRegistry) {
    var factory = getFactory();
    var newProject = factory.newResource('org.aidtech', 'Project', Projectdata.projectid);
    return ProjectRegistry.add(newProject);
        })
}