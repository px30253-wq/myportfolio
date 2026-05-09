export default function XStyleProfile() {
  const posts = [
    {
      id: 1,
      text: "กำลังพัฒนา Portfolio และเรียนรู้การทำเว็บไซต์ 🚀",
      time: "2h",
      likes: 120,
      comments: 24,
      reposts: 10,
    },
    {
      id: 2,
      text: "นี่คือตัวอย่างหน้าโปรไฟล์สไตล์ X.com ที่สร้างด้วย React + Tailwind",
      time: "5h",
      likes: 88,
      comments: 12,
      reposts: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-2xl border-x border-neutral-800 min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-neutral-800 p-4 z-10">
          <h1 className="text-xl font-bold">Pongsakorn</h1>
          <p className="text-sm text-neutral-400">2 posts</p>
        </div>

        {/* Cover */}
        <div className="relative">
          <div className="h-52 bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
            alt="profile"
            className="w-36 h-36 rounded-full border-4 border-black absolute -bottom-16 left-5 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-5 border-b border-neutral-800 pb-5">
          <div className="flex justify-end">
            <button className="border border-neutral-600 px-5 py-2 rounded-full font-semibold hover:bg-neutral-900 transition">
              Edit profile
            </button>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl font-bold">Pongsakorn U.</h2>
            <p className="text-neutral-400">@pongsakorn</p>
          </div>

          <p className="mt-4 text-base leading-relaxed">
            Frontend Developer • UI Designer • Student
            <br />
            สนใจ Web Development และ AI
          </p>

          <div className="flex gap-5 mt-4 text-neutral-400 text-sm">
            <span>
              <strong className="text-white">120</strong> Following
            </span>
            <span>
              <strong className="text-white">4.2K</strong> Followers
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-4 border-b border-neutral-800 text-center">
          {['Posts', 'Replies', 'Media', 'Likes'].map((tab) => (
            <button
              key={tab}
              className="py-4 hover:bg-neutral-900 transition font-medium"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              className="border-b border-neutral-800 p-5 hover:bg-neutral-950 transition"
            >
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Pongsakorn U.</h3>
                    <span className="text-neutral-400">@pongsakorn</span>
                    <span className="text-neutral-500">· {post.time}</span>
                  </div>

                  <p className="mt-2 leading-relaxed">{post.text}</p>

                  <div className="flex justify-between mt-4 text-neutral-400 max-w-md text-sm">
                    <span>💬 {post.comments}</span>
                    <span>🔁 {post.reposts}</span>
                    <span>❤️ {post.likes}</span>
                    <span>📤</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
