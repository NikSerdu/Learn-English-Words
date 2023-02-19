module.exports = (app) => {
  const allWordsController = require('../Controllers/AllWords')
  const dictionariesController = require('../Controllers/Dictionaries')
  const dictionaryController = require('../Controllers/Dictionary')
  //All words
  app.route("/getWords").get(allWordsController.getAllWords);
  app.route("/addWord").post(allWordsController.addWord);
  app.route("/deleteWord").delete(allWordsController.deleteWord);
  app.route("/toggleFavourite").put(allWordsController.toggleFavourite);

  //Dictionaries
  app.route("/getDictionaries").get(dictionariesController.getDictionaries);
  app.route("/addNewDictionary").post(dictionariesController.addNewDictionary);
  app.route("/deleteDictionary").delete(dictionariesController.deleteDictionary);

  //Dictionary
  app.route("/getWordsOfDictionary").get(dictionaryController.getWordsOfDictionary);
  app.route("/addWordInDictionary").post(dictionaryController.addWordInDictionary);
  app.route("/deleteWordFromDictionary").delete(dictionaryController.deleteWordFromDictionary);
};
