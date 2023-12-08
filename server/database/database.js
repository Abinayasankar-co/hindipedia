async function printUsername(client,emails,maxNumberToPrint){
    const pipeline = [
            {
              '$match': {
                'emails': emails
              }
            }
          ];

        client.db("test").collection("tests").aggregate(pipeline);

        await aggCursor.foreach(airbnbListing => {
            console.log(`${airbnbListing._id}:${airbnbListing.username}`);
        })              
}

