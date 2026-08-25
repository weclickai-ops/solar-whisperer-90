/* ============================================================
   src/components/graphics/HeroArray.tsx  —  FILE 5a / 12
   New file. Static vector drawing of five tracker rows in
   perspective. Replaces the animated hero.

   Geometry is real: torque tube along the lower edge of each
   row, three piers per row, centre seam splitting the two
   module rows (2P), 14 cell divisions per panel.
   ============================================================ */

export default function HeroArray() {
  return (
    <svg
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      role="img"
      aria-label="Rows of single-axis solar trackers at low sun"
    >
      <defs>
        <linearGradient id="ga-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#070C16" />
          <stop offset="1" stopColor="#040609" />
        </linearGradient>
        <radialGradient id="ga-sun">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".16" stopColor="#BFE2FF" stopOpacity=".85" />
          <stop offset=".45" stopColor="#1479FF" stopOpacity=".36" />
          <stop offset="1" stopColor="#1479FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ga-pv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0D2547" />
          <stop offset=".55" stopColor="#15417E" />
          <stop offset="1" stopColor="#0B1D38" />
        </linearGradient>
        <linearGradient id="ga-hz" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0A1E3C" stopOpacity="0" />
          <stop offset=".55" stopColor="#12457F" stopOpacity=".55" />
          <stop offset="1" stopColor="#0A1E3C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="900" height="600" fill="url(#ga-sky)" />
      <circle cx="690" cy="215" r="300" fill="url(#ga-sun)" />
      <rect x="0" y="272" width="900" height="34" fill="url(#ga-hz)" />
      <circle cx="690" cy="215" r="13" fill="#ffffff" />

      <g stroke="#2E6BC4" strokeOpacity=".1">
        <line x1="0" y1="330" x2="900" y2="330" />
        <line x1="0" y1="400" x2="900" y2="400" />
        <line x1="0" y1="480" x2="900" y2="480" />
      </g>

      <g opacity={1.0}>
        <polygon points="118.0,500.0 638.0,422.0 608.0,388.0 88.0,466.0" fill="url(#ga-pv)" stroke="#3C86E8" strokeOpacity=".55" />
        <line x1="155.1" y1="494.4" x2="125.1" y2="460.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="192.3" y1="488.9" x2="162.3" y2="454.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="229.4" y1="483.3" x2="199.4" y2="449.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="266.6" y1="477.7" x2="236.6" y2="443.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="303.7" y1="472.1" x2="273.7" y2="438.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="340.9" y1="466.6" x2="310.9" y2="432.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="378.0" y1="461.0" x2="348.0" y2="427.0" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="415.1" y1="455.4" x2="385.1" y2="421.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="452.3" y1="449.9" x2="422.3" y2="415.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="489.4" y1="444.3" x2="459.4" y2="410.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="526.6" y1="438.7" x2="496.6" y2="404.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="563.7" y1="433.1" x2="533.7" y2="399.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="600.9" y1="427.6" x2="570.9" y2="393.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="103.0" y1="483.0" x2="623.0" y2="405.0" stroke="#67ADF5" strokeOpacity=".4" />
        <line x1="118.0" y1="500.0" x2="638.0" y2="422.0" stroke="#7FC0FF" strokeOpacity=".5" strokeWidth="2" />
        <line x1="180.4" y1="490.6" x2="180.4" y2="530.6" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="378.0" y1="461.0" x2="378.0" y2="501.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="575.6" y1="431.4" x2="575.6" y2="471.4" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
      </g>
      <g opacity={0.85}>
        <polygon points="196.0,444.0 654.0,376.0 628.0,346.0 170.0,414.0" fill="url(#ga-pv)" stroke="#3C86E8" strokeOpacity=".55" />
        <line x1="228.7" y1="439.1" x2="202.7" y2="409.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="261.4" y1="434.3" x2="235.4" y2="404.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="294.1" y1="429.4" x2="268.1" y2="399.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="326.9" y1="424.6" x2="300.9" y2="394.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="359.6" y1="419.7" x2="333.6" y2="389.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="392.3" y1="414.9" x2="366.3" y2="384.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="425.0" y1="410.0" x2="399.0" y2="380.0" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="457.7" y1="405.1" x2="431.7" y2="375.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="490.4" y1="400.3" x2="464.4" y2="370.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="523.1" y1="395.4" x2="497.1" y2="365.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="555.9" y1="390.6" x2="529.9" y2="360.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="588.6" y1="385.7" x2="562.6" y2="355.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="621.3" y1="380.9" x2="595.3" y2="350.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="183.0" y1="429.0" x2="641.0" y2="361.0" stroke="#67ADF5" strokeOpacity=".4" />
        <line x1="196.0" y1="444.0" x2="654.0" y2="376.0" stroke="#7FC0FF" strokeOpacity=".5" strokeWidth="2" />
        <line x1="251.0" y1="435.8" x2="251.0" y2="469.8" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="425.0" y1="410.0" x2="425.0" y2="444.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="599.0" y1="384.2" x2="599.0" y2="418.2" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
      </g>
      <g opacity={0.7}>
        <polygon points="274.0,388.0 670.0,330.0 648.0,304.0 252.0,362.0" fill="url(#ga-pv)" stroke="#3C86E8" strokeOpacity=".55" />
        <line x1="302.3" y1="383.9" x2="280.3" y2="357.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="330.6" y1="379.7" x2="308.6" y2="353.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="358.9" y1="375.6" x2="336.9" y2="349.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="387.1" y1="371.4" x2="365.1" y2="345.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="415.4" y1="367.3" x2="393.4" y2="341.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="443.7" y1="363.1" x2="421.7" y2="337.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="472.0" y1="359.0" x2="450.0" y2="333.0" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="500.3" y1="354.9" x2="478.3" y2="328.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="528.6" y1="350.7" x2="506.6" y2="324.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="556.9" y1="346.6" x2="534.9" y2="320.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="585.1" y1="342.4" x2="563.1" y2="316.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="613.4" y1="338.3" x2="591.4" y2="312.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="641.7" y1="334.1" x2="619.7" y2="308.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="263.0" y1="375.0" x2="659.0" y2="317.0" stroke="#67ADF5" strokeOpacity=".4" />
        <line x1="274.0" y1="388.0" x2="670.0" y2="330.0" stroke="#7FC0FF" strokeOpacity=".5" strokeWidth="2" />
        <line x1="321.5" y1="381.0" x2="321.5" y2="409.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="472.0" y1="359.0" x2="472.0" y2="387.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="622.5" y1="337.0" x2="622.5" y2="365.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
      </g>
      <g opacity={0.55}>
        <polygon points="352.0,332.0 686.0,284.0 668.0,262.0 334.0,310.0" fill="url(#ga-pv)" stroke="#3C86E8" strokeOpacity=".55" />
        <line x1="375.9" y1="328.6" x2="357.9" y2="306.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="399.7" y1="325.1" x2="381.7" y2="303.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="423.6" y1="321.7" x2="405.6" y2="299.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="447.4" y1="318.3" x2="429.4" y2="296.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="471.3" y1="314.9" x2="453.3" y2="292.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="495.1" y1="311.4" x2="477.1" y2="289.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="519.0" y1="308.0" x2="501.0" y2="286.0" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="542.9" y1="304.6" x2="524.9" y2="282.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="566.7" y1="301.1" x2="548.7" y2="279.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="590.6" y1="297.7" x2="572.6" y2="275.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="614.4" y1="294.3" x2="596.4" y2="272.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="638.3" y1="290.9" x2="620.3" y2="268.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="662.1" y1="287.4" x2="644.1" y2="265.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="343.0" y1="321.0" x2="677.0" y2="273.0" stroke="#67ADF5" strokeOpacity=".4" />
        <line x1="352.0" y1="332.0" x2="686.0" y2="284.0" stroke="#7FC0FF" strokeOpacity=".5" strokeWidth="2" />
        <line x1="392.1" y1="326.2" x2="392.1" y2="348.2" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="519.0" y1="308.0" x2="519.0" y2="330.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="645.9" y1="289.8" x2="645.9" y2="311.8" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
      </g>
      <g opacity={0.4}>
        <polygon points="430.0,276.0 702.0,238.0 688.0,220.0 416.0,258.0" fill="url(#ga-pv)" stroke="#3C86E8" strokeOpacity=".55" />
        <line x1="449.4" y1="273.3" x2="435.4" y2="255.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="468.9" y1="270.6" x2="454.9" y2="252.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="488.3" y1="267.9" x2="474.3" y2="249.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="507.7" y1="265.1" x2="493.7" y2="247.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="527.1" y1="262.4" x2="513.1" y2="244.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="546.6" y1="259.7" x2="532.6" y2="241.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="566.0" y1="257.0" x2="552.0" y2="239.0" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="585.4" y1="254.3" x2="571.4" y2="236.3" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="604.9" y1="251.6" x2="590.9" y2="233.6" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="624.3" y1="248.9" x2="610.3" y2="230.9" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="643.7" y1="246.1" x2="629.7" y2="228.1" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="663.1" y1="243.4" x2="649.1" y2="225.4" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="682.6" y1="240.7" x2="668.6" y2="222.7" stroke="#4E9BF0" strokeOpacity=".2" strokeWidth=".7" />
        <line x1="423.0" y1="267.0" x2="695.0" y2="229.0" stroke="#67ADF5" strokeOpacity=".4" />
        <line x1="430.0" y1="276.0" x2="702.0" y2="238.0" stroke="#7FC0FF" strokeOpacity=".5" strokeWidth="2" />
        <line x1="462.6" y1="271.4" x2="462.6" y2="287.4" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="566.0" y1="257.0" x2="566.0" y2="273.0" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
        <line x1="669.4" y1="242.6" x2="669.4" y2="258.6" stroke="#5EA4EE" strokeOpacity=".38" strokeWidth="1.6" />
      </g>
    </svg>
  );
}
