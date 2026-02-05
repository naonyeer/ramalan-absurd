"use client"
import { useState } from "react"

const ramalanList = [
  "⚠️ Hari ini kamu akan melihat motor Supra lewat 3 kali. Itu pertanda rezeki tertunda.",
  "💸 Dompetmu aman… kecuali kamu buka Shopee malam ini.",
  "🍜 Mie instan akan menyelamatkan harimu.",
  "📱 Notifikasi yang kamu tunggu tidak akan datang. Sabar ya.",
  "🐈 Kucing yang kamu lihat hari ini membawa aura keberuntungan.",
  "☕ Kopi pertama hari ini menentukan nasib cintamu.",
  "🚿 Ide terbaikmu akan muncul saat lagi mandi.",
  "🛵 Orang yang pakai jaket hijau hari ini adalah NPC penting dalam hidupmu.",
  "🌧️ Hujan akan turun… atau tidak. Tapi perasaanmu tetap mendung.",
  "📦 Paketmu akan datang saat kamu lagi di kamar mandi."
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
