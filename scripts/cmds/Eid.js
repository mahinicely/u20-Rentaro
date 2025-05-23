module.exports = {
  config: {
    name: "eid",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Ullash ッ",
    description: "Eid countdown",
    commandCategory: "fun",
    cooldowns: 5
  },

  onStart: function ({ event, api }) {
    const t = Date.parse("March 31, 2025 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return api.sendMessage(
      `🕌🌜 অগ্রিম ঈদের শুভেচ্ছা 🌛🕌\n\n••••••••••••••••••••••••••••••\n\nخوف خدا دیکھنا ہے تو مسلمان کا دیکھ جو روزے میں وضو کا پانی منہ میں لیکر بھی پیتا نہیں ہے المؤلف أولاش\n\n••••••••••••••••••••••••••••••\n\n♻️ ঈদ আসতে সময় বাকি ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড 🥰\n\n 📌চাঁদ দেখার উপর নির্ভরশীল \n\n❣️CREDIT❣️ : 🌹—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️🌹`, 
      event.threadID, 
      event.messageID
    );
  }
};
