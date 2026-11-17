// ═══════════════════════════════════════════════════════
//  DATA PERTANYAAN – PERTEMUAN 1 (3 SOAL OBSERVASI)
//  Dipakai bersama oleh halaman (index.html) dan API (api/chat.js)
//  supaya rubrik penilaian hanya ada di satu tempat.
// ═══════════════════════════════════════════════════════
export const FLOW = [
  {
    id: 1,
    question: "Apa yang kamu lihat pada kawasan mangrove Pulau Seliu?",
    keywords: [
      "pohon mangrove","mangrove","kawasan hijau","hijau",
      "pesisir","pantai","tidak ditumbuhi","tumbuh",
      "sepanjang","kawasan","banyak","pohon","hutan"
    ],
    minMatch: 1,
    appreciation:
      "Wah, kamu sudah berhasil melihat hal yang penting sekali, " +
      "itu berarti Pulau Seliu punya kekayaan alam yang luar biasa dan patut kita jaga bersama. " +
      "Kamu hebat sudah memperhatikan dengan seksama! 🌊 Mari kita amati lebih dalam lagi.",
    hints: [
      "Hmm, coba bayangkan kamu sedang berdiri di tepi Pulau Seliu dan memandang ke arah pantai. " +
      "Apa yang kamu lihat di sekitar garis pantai atau perairan? Apakah ada pohon-pohon atau kawasan hijau di sana? 👀",
      "Yuk coba lagi! Perhatikan kawasan di sekitar perairan — adakah pohon-pohon yang tumbuh di tepi pantai? " +
      "Atau mungkin ada bagian kawasan yang terlihat berbeda satu sama lain? 🌱"
    ],
    revealHint:
      "Di kawasan mangrove Pulau Seliu biasanya terlihat banyak pohon mangrove yang tumbuh di sepanjang pesisir, " +
      "ada kawasan hijau di dekat pantai, serta ada bagian yang tidak ditumbuhi mangrove."
  },
  {
    id: 2,
    question: "Menurutmu, mengapa ada bagian yang berbeda dari kawasan mangrove?",
    keywords: [
      "tambak","aktivitas manusia","manusia","berkurang",
      "tidak semua","berubah","rusak","terganggu","hilang",
      "ditebang","alih fungsi","penebangan","kegiatan",
      "digunakan","diubah","perubahan"
    ],
    minMatch: 1,
    appreciation:
      "Hebat, pengamatanmu sangat teliti! 🔍 Setiap bagian yang kamu lihat bisa menjadi petunjuk untuk memahami " +
      "kondisi mangrove di Pulau Seliu. Mari kita amati lebih dalam lagi.",
    hints: [
      "Coba pikirkan siapa yang mungkin tinggal atau bekerja di sekitar kawasan mangrove itu. " +
      "Apakah ada kegiatan manusia di sana yang bisa mengubah kondisi kawasan tersebut? 🤔",
      "Hampir! Bayangkan kalau suatu kawasan mangrove berubah — misalnya jadi lahan tambak atau ada pohon yang ditebang. " +
      "Menurutmu, siapa atau apa yang bisa menyebabkan hal itu terjadi? 🏗️"
    ],
    revealHint:
      "Perbedaan kawasan mangrove biasanya terjadi karena: sebagian kawasan berubah menjadi tambak, " +
      "tidak semua area cocok untuk ditumbuhi mangrove, ada aktivitas manusia di kawasan tersebut, " +
      "atau beberapa bagian mangrove memang sudah berkurang."
  },
  {
    id: 3,
    question: "Mengapa kondisi mangrove perlu diperhatikan?",
    keywords: [
      "abrasi","habitat","hewan","lingkungan","pesisir",
      "melindungi","ekosistem","alam","iklim","banjir",
      "menjaga","lestari","pantai","makhluk hidup",
      "tempat tinggal","berubah","berkurang","jumlah"
    ],
    minMatch: 1,
    // Kata vague yang butuh arahan lebih spesifik
    tooVagueKeywords: [
      "sangat penting","penting sekali","perlu dijaga",
      "harus dijaga","harus diperhatikan","wajib dijaga"
    ],
    // Semua kata yang kira-kira hanya bilang "penting" tanpa alasan
    vaguePhrases: ["penting","perlu diperhatikan","perlu dijaga"],
    appreciation:
      "Jawaban yang sangat baik! 🌿 Mangrove memiliki banyak peran penting bagi kehidupan di wilayah pesisir. " +
      "Semangat terus untuk menggali lebih dalam mengapa mangrove sepenting itu ya! " +
      "Semakin baik kita memahami manfaatnya, semakin mudah kita menjaga kelestariannya.",
    hints: [
      "Kamu sudah di jalur yang benar! Coba sekarang pikirkan lebih spesifik: " +
      "mangrove itu melindungi apa ya? Atau hewan-hewan apa yang tinggal di sana? " +
      "Atau bagaimana jika jumlah mangrove terus berkurang? 🦀",
      "Hampir! Coba arahkan jawabanmu ke salah satu dari ini: " +
      "apakah mangrove melindungi pantai dari sesuatu? Apakah mangrove menjadi tempat tinggal makhluk hidup? " +
      "Atau apakah kondisi mangrove bisa berubah dari waktu ke waktu? 🌊"
    ],
    vagueHint:
      "Kamu sudah benar bahwa mangrove itu penting! Tapi coba jelaskan lebih lanjut — " +
      "penting untuk apa ya? Apakah mangrove melindungi pantai dari abrasi, menjadi tempat tinggal hewan, " +
      "atau mungkin karena jumlahnya bisa berubah dari waktu ke waktu? Coba arahkan jawabanmu ke sana! 🌱",
    revealHint:
      "Kondisi mangrove perlu diperhatikan karena: mangrove melindungi pantai dari abrasi, " +
      "menjadi habitat berbagai hewan, sangat penting bagi lingkungan pesisir, " +
      "dan jumlah mangrove dapat berubah dari waktu ke waktu jika tidak dijaga."
  }
];

export const MAX_HINTS = 2;
