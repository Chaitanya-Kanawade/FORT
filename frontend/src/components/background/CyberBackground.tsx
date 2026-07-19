export default function CyberBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 -z-50 bg-[#09090B]" />

      {/* Cyan Glow */}
      <div className="fixed left-[-250px] top-[-250px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] -z-40" />

      <div className="fixed right-[-250px] bottom-[-250px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px] -z-40" />

      {/* Grid */}
      <div
        className="
        fixed
        inset-0
        -z-30
        opacity-80
        bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:25px_25px]
      "
      />
    </>
  );
}