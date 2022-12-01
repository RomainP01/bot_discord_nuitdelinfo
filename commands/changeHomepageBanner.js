const firebaseConfig = require("../firebaseConfig");
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, updateDoc } = require("firebase/firestore");
module.exports = {
  name: "changeHomepageBanner",
  async run(homepageBanner, message) {
    const app = initializeApp(firebaseConfig.firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "homepageBanner", "currentHomepageBanner");
    updateDoc(docRef, { value: homepageBanner });
    await message.reply(`HomepageBanner changed :\`${homepageBanner}\``);
  },
};
