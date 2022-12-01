const firebaseConfig = require("../firebaseConfig");
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, addDoc, collection } = require("firebase/firestore");
module.exports = {
  name: "addMessage",
  async run(value, message) {
    const app = initializeApp(firebaseConfig.firebaseConfig);
    const db = getFirestore(app);
    await addDoc(collection(db, "messages"), {
      author: message.author.username,
      value: value.join(" "),
    });
    await message.reply(`Messages added :\`${value.join(" ")}\``);
  },
};
