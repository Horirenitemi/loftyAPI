const {getAllEntry,
     getSingleEntry, 
     createEntry, 
     updateSingleEntry, 
     deleteSingleEntry
    } = require("./MVC/view");

     const express = require("express")
     const router = express.Router();

    router.route("/").get(getAllEntry).post(createEntry);
    router
    .route("/:id")
    .get(getSingleEntry)
    .patch(updateSingleEntry)
    .delete(deleteSingleEntry);


     module.exports = router;
