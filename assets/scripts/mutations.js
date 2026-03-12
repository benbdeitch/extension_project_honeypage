myMutations = []
var i=0
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation)
       myMutationObject = {}
       if (mutation.type == "attributes") {
            myMutationObject.type='attributes'
            node = {}
           
            node.id=mutation.target['id']
            node.outerHTML=mutation.target['outerHTML']
            myMutationObject.target = node
            
            myMutations.push(JSON.stringify(myMutationObject))
            
        }
        if (mutation.type == "childList") {
            added=[]
            removed=[]
            myMutationObject.type='childList'

            if (mutation.addedNodes.length > 0) {
                 for (var i = 0; i < mutation.addedNodes.length; i++){
                     current=mutation.addedNodes[i]
                     local_node={}
                     local_node.id=current.id
                     local_node.outerHTML=current.outerHTML
                     added.push(local_node)
                 }

            }
            if (mutation.removedNodes.length > 0) {
                 for (var i = 0; i < mutation.removedNodes.length; i++){
                     current=mutation.removedNodes[i]
                     local_node={}
                     local_node.id=current.id
                     local_node.outerHTML=current.outerHTML
                     removed.push(local_node)
                 }

            }
            myMutationObject.target = mutation.target['id']
            myMutationObject.added=added
            myMutationObject.removed=removed
            myMutations.push(JSON.stringify(myMutationObject))



        }
    });
});

var container = document.documentElement || document.body;
var config = {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
};
observer.observe(container, config);    



