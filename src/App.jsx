export default function XStyleProfile() {
  const posts = [
    {
      id: 1,
      text: "กำลังศึกษาด้านโลจิสติกส์และซัพพลายเชน พร้อมพัฒนาทักษะด้านการจัดการระบบขนส่งและคลังสินค้า 🚚",
      time: "2h",
      likes: 142,
      comments: 18,
      reposts: 7,
    },
    {
      id: 2,
      text: "สนใจด้าน Route Optimization, Warehouse Management และการพัฒนา Supply Chain ให้มีประสิทธิภาพมากขึ้น",
      time: "6h",
      likes: 96,
      comments: 11,
      reposts: 5,
    },
  ];

  const skills = [
    "Warehouse Management",
    "Route Optimization",
    "Microsoft Excel",
    "Supply Chain Management",
    "Inventory Control",
    "Logistics Planning",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-2xl border-x border-neutral-800 min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-neutral-800 p-4 z-10">
          <h1 className="text-xl font-bold">Phongsakorn Ano</h1>
          <p className="text-sm text-neutral-400">
            Faculty of Business Administration • Logistics and Supply Chain
          </p>
        </div>

        {/* Cover */}
        <div className="relative">
          <img
            src="/ltm-cover.png"
            alt="cover"
            className="h-52 w-full object-cover"
          />

          <img
            src="/profile.jpg"
            alt="profile"
            className="w-36 h-36 rounded-full border-4 border-black absolute -bottom-16 left-5 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-5 border-b border-neutral-800 pb-5">
          <div className="flex justify-end">
            <button className="border border-neutral-600 px-5 py-2 rounded-full font-semibold hover:bg-neutral-900 transition">
              Portfolio
            </button>
          </div>

          <div className="mt-2">
            <h2 className="text-3xl font-bold">Phongsakorn Ano</h2>
            <p className="text-neutral-400">@phongsakorn</p>
          </div>

          <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-neutral-200">
            <p>
              🎓 รหัสนักศึกษา: 6650100781
            </p>
            <p>
              🏫 คณะบริหารธุรกิจ สาขาการจัดการโลจิสติกส์และซัพพลายเชน
            </p>
            <p>
              🚚 สนใจด้าน Supply Chain, Warehouse และระบบขนส่ง
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Experience</h3>

            <div className="space-y-3">
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
                <h4 className="font-semibold">DHL eCommerce</h4>
                <p className="text-neutral-400 text-sm mt-1">
                  Internship • Logistics Operations
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
                <h4 className="font-semibold">Jastel</h4>
                <p className="text-neutral-400 text-sm mt-1">
                  Supply Chain & Transport Coordination
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>

            <div className="space-y-2 text-neutral-300">
              <p>📧 your-email@gmail.com</p>
              <p>🔗 LinkedIn: linkedin.com/in/phongsakorn</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-4 border-b border-neutral-800 text-center">
          {['Posts', 'Skills', 'Experience', 'Contact'].map((tab) => (
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
                  src="/profile.jpg"
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold">Phongsakorn Ano</h3>
                    <span className="text-neutral-400">@phongsakorn</span>
                    <span className="text-neutral-500">· {post.time}</span>
                  </div>

                  <p className="mt-2 leading-relaxed text-neutral-100">
                    {post.text}
                  </p>

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
