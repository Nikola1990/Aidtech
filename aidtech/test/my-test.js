/**
 * 
 * 
 * 
 * Use this as a template for unit test cases
 * 
 * 
 * 
 * 
 * 
 * 
 */
var assert = require('chai').assert;


const boilerplate = require('./boiler-plate');

// This points to the model project folder
var modelFolder = '/Users/nikolabozic/fabric-dev-servers/HLF-Course-Domain-Model-master/Aid-tech.4/aidtech';
// Three variables to  establish connection before "before HOOK"
var adminConnection = {}
var businessNetworkConnection = {}
var bnDefinition = {}


// Synchronous call so that connections can be established --> we past "done" as argument


before((done) => {
done()
})



// Test Suite # 1
describe('Set up a tests using Mocha tool & Chai library', () => {

    // Synchronous
    beforeEach((done) => {
      
        done();
    });
//})

    // Test Case # 1
    it('Lets geth the registries - a demo test!', () => {
         
         
        boilerplate.debug=true;
        boilerplate.initialize(modelFolder, (adminCon, bnCon, definition)=>{

        // Get the registry names
         
         console.log("BNA =", definition.getName(),'@', definition.getVersion());

        // Lets geth the registries - a demo test! 
        return bnCon.getAllAssetRegistries(false).then((registries)=>{
            registries.forEach((registry)=>{
                console.log(registry.id)
    




            });
                     
        });  
        
});
  // expression in assert 
  assert(true)     
        
    });

   


   


});


