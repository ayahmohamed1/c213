// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#1d4ed8",                             // اللون الأزرق الغامق المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `كل سنه وانت طيب ياحبيبي وتفضل معايا علطول واشوفك احسن حد في الدنيا يارب ياحبيبي انا بجد فخوره بيك اوي بكل حاجه انت عديت بيها وكل حاجه بتعملها هفضل شايفه ان انت الحاجه الوحيده اللي مهونه عليا حياتي؟ انا مبسوطه باللي احنا وصلنا ليه ده بقينا تحفه  وانت السبب! من غيرك ولا اي حاجه هتعدي كل مره بنسامح بعض فيها بتخلينا نقدر بعض اكتر ونعرف قيمه بعض؟ انا ممتنه جدا انك في حياتي انت الحاجه اللي انا اختارتها في الدنيا ومتأكده جدا من اختياري ليها؟ يارب اشوفك مبسوطه دايما انا ببقي في اسعد لحظات حياتي وانا معاك؟ عمري ما بينت احتياجي لحد عشان متعايرش بعد كده بس انت الوحيد اللي قادره اعمل ده قدامه إذا كان عياط ضعف علمتني محتاجش لحد بس انا هفضل طول عمري محتاجك جمبي وفي ضهري؟ انا فعلا شوفت الدنيا علي ايدك يامحمد! دايما بقول تيجي في اي حد الا محمد علطول بجري عليك انت لو عايزه اعمل ايه او اقول ايه ودايما سامعني شكرا يامحمد شكرا انك طلعت الطفله اللي جوايا وعرفت تخليني ابقي علي طبيعتي معاك وشكرا علي علي كل وعد وعدتهولي وطلعت قدو وعملتوا؟هفضل فخوره بكل حاجه بتحاول تغيرها عشاني وهفضل شايفه ان مفيش اي حد في الدنيا يستاهل ياخد مكانك عندي ؟ كل سنه واحنا بنكبر سوا مش بطمن غير وانا معاك وانا مبعرفش اكون روان غير معاك هفضل معاك وفي ضهرك طول العمر هتفضل مصدر ثقتي واماني ربنا يخليك ليا يانور عيني وتبقي من نصيبي يارب يامحمد ونفضل سوا بحبك ياحمودي❣️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;