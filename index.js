const webex = require('webex/env')

webex.rooms.list({
  
})
.then( rooms => {
    console.log(rooms)
})
