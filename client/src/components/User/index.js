import stream from 'getstream';
import React from 'react'

function index() {
    
    const chris = client.feed('user', 'chris'); 
 
// Add an Activity; message is a custom field - tip: you can add unlimited custom fields! 
    await chris.addActivity({ 
        actor: 'chris', 
        verb: 'add', 
        object: 'picture:10', 
        foreign_id: 'picture:10', 
        message: 'Beautiful bird!' 
}); 
 
// Create a following relationship between Jack's "timeline" feed and Chris' "user" feed: 
const jack = client.feed('timeline', 'jack'); 
await jack.follow('user', 'chris'); 
 
 
// Read Jack's timeline and Chris' post appears in the feed: 
const results = await jack.get({ limit: 10 }); 
console.log(results) 
 
// Remove an Activity by referencing it's Foreign Id: 
await chris.removeActivity({ foreignId: 'picture:10' });
    return (

        <div>
            <h1>test here</h1>
        </div>
    )
}

export default index



