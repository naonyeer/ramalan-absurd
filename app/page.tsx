"use client"
import { useState } from "react"

const ramalanList = [
  "🔮 Hari ini Lulu akan bilang 'terserah' tapi sebenarnya tidak terserah.",
  "🌤️ Ramalan menunjukkan Lulu akan protes suhu ruangan minimal 3 kali hari ini.",
  "🍟 Lulu hari ini: lapar tapi gak tau mau makan apa.",
  "📱 Alam semesta melihat Lulu buka HP, tutup, buka lagi, tapi tetap bingung mau ngapain.",
  "🪞 Hari ini Lulu akan ngaca, terus ngaca lagi, terus bilang 'ih biasa aja'. Bohong.",
  "🛏️ Ramalan berkata Lulu akan rebahan, pindah posisi, lalu bilang 'kok gak enak ya' 5 kali.",
  "🧃 Lulu hari ini haus, tapi minumnya nanti… nanti… nanti…",
  "🎧 Bintang-bintang melihat Lulu denger lagu, skip, balik lagi ke lagu pertama.",
  "🌬️ Angin berbisik: Lulu akan bilang 'panas' lalu 5 menit kemudian 'dingin'.",
  "🧠 Hari ini Lulu akan masuk ruangan… lalu lupa mau ngapain."
]


export default function Home() {
  const [ramalan, setRamalan] = useState("Klik tombol untuk melihat nasibmu hari ini 🔮")

  const generateRamalan = () => {
    const random = ramalanList[Math.floor(Math.random() * ramalanList.length)]
    setRamalan(random)
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">🔮 Ramalan Absurd Hari Ini</h1>

      <div className="bg-zinc-900 border border-purple-500 rounded-xl p-6 max-w-xl shadow-lg mb-6">
        <p className="text-lg">{ramalan}</p>
      </div>

      <button 
        onClick={generateRamalan}
        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
      >
        Ramalkan Lagi
      </button>
    </main>
  )
}
