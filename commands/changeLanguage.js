const firebaseConfig = require("../firebaseConfig");
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, updateDoc } = require("firebase/firestore");
module.exports = {
  name: "changeLanguage",
  async run(language, message) {
    const app = initializeApp(firebaseConfig.firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "language", "currentLanguage");
    updateDoc(docRef, { value: language });
    await message.reply(`language changed :\`${language}\``);
  },
};
