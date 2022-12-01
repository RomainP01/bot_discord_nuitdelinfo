const firebaseConfig = require("../firebaseConfig");
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");
module.exports = {
  name: "currentLanguage",
  async run(message) {
    const app = initializeApp(firebaseConfig.firebaseConfig);
    const db = getFirestore(app);
    const themCol = collection(db, "language");
    const languageSnapshot = await getDocs(themCol);
    const languageList = languageSnapshot.docs.map((doc) => doc.data());
    await message.reply(`Current language is :\`${languageList[0].value}\``);
  },
};
