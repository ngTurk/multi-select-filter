"use client";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-screen">
      <h1>Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
      >
        Sayfayı Yenile!
      </button>
    </div>
  );
}
