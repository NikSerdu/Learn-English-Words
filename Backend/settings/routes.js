module.exports = (app) => {
  const getController = require("../Controller/GetController");
  const postController = require("../Controller/PostController");
  const putController = require("../Controller/PutController");
  const deleteController = require("../Controller/DeleteController");
  //MYWORDS
  //Get all words
  app.route("/getWords").get(getController.getAllWords);
  //Add a new word
  app.route("/addWord").post(postController.addWord);
  //Add word in group
  app.route("/addWordInGroup").post(postController.addWordInGroup);
  //Add new group
  app.route("/addNewGroup").post(postController.addNewGroup);
  //Delete word
  app.route("/deleteWord").delete(deleteController.deleteWord);
  //Delete word from group
  app.route("/deleteWordFromGroup").delete(deleteController.deleteWordFromGroup);
  //Delete group
  app.route("/deleteGroup").delete(deleteController.deleteGroup);
  //Update word
  app.route("/isFavourite").put(putController.isFavourite);
  //Get all groups
  app.route("/getGroups").get(getController.getGroups);
  //Get words in group
  app.route("/getWordsInGroup").get(getController.getWordsInGroup);
};
