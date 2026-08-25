/* ============================================================
   src/components/graphics/Elevation.tsx  —  FILE 5c / 12
   New file. Tracker cross-section: pier, torque tube pivot,
   actuator arm and the 2-modules-in-portrait arrangement.
   ============================================================ */

export default function Elevation() {
  return (
    <svg
      viewBox="0 0 520 250"
      className="block w-full"
      role="img"
      aria-label="Tracker elevation showing pier, torque tube and actuator"
    >
      <defs>
        <linearGradient id="el-pv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#123A72" />
          <stop offset="1" stopColor="#0B1E3A" />
        </linearGradient>
      </defs>

      <line x1="20" y1="212" x2="500" y2="212" stroke="#2E6BC4" strokeOpacity=".28" />

      <g transform="rotate(-30 260 122)">
        <rect
          x="98"
          y="108"
          width="324"
          height="28"
          fill="url(#el-pv)"
          stroke="#3C86E8"
          strokeOpacity=".6"
        />
        <line x1="98" y1="122" x2="422" y2="122" stroke="#67ADF5" strokeOpacity=".45" />
        <line x1="138.5" y1="108" x2="138.5" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
        <line x1="179.0" y1="108" x2="179.0" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
        <line x1="219.5" y1="108" x2="219.5" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
        <line x1="260.0" y1="108" x2="260.0" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
        <line x1="300.5" y1="108" x2="300.5" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
        <line x1="341.0" y1="108" x2="341.0" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
        <line x1="381.5" y1="108" x2="381.5" y2="136" stroke="#4E9BF0" strokeOpacity=".25" />
      </g>

      <circle cx="260" cy="122" r="7" fill="none" stroke="#7FC0FF" strokeWidth="2" />
      <line x1="260" y1="129" x2="260" y2="212" stroke="#5EA4EE" strokeOpacity=".5" strokeWidth="3" />
      <line x1="260" y1="164" x2="320" y2="194" stroke="#7FC0FF" strokeOpacity=".55" strokeWidth="4" />
      <circle cx="320" cy="194" r="4" fill="#1479FF" />

      <g fill="#8A96A8" fontFamily="Archivo, sans-serif" fontSize="10.5" letterSpacing="1.6">
        <text x="332" y="198">ACTUATOR</text>
        <text x="272" y="208">PIER</text>
        <text x="240" y="118">TORQUE TUBE</text>
        <text x="118" y="46">2 MODULES IN PORTRAIT</text>
      </g>
    </svg>
  );
}
