const firebaseConfig = require("../firebaseConfig");
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, updateDoc } = require("firebase/firestore");
module.exports = {
  name: "changeTheme",
  async run(theme, message) {
    const app = initializeApp(firebaseConfig.firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "theme", "currentTheme");
    updateDoc(docRef, { value: theme });
    await message.reply(`Theme changed :\`${theme}\``);
  },
};
