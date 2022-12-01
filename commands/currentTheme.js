const firebaseConfig = require("../firebaseConfig");
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");
module.exports = {
  name: "currentTheme",
  async run(message) {
    const app = initializeApp(firebaseConfig.firebaseConfig);
    const db = getFirestore(app);
    const themCol = collection(db, "theme");
    const themeSnapshot = await getDocs(themCol);
    const themeList = themeSnapshot.docs.map((doc) => doc.data());
    await message.reply(`Current theme is :\`${themeList[0].value}\``);
  },
};
