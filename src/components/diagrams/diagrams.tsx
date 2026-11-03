/* Reusable SVG diagrams. Each takes no props yet but is a component so it
   can later accept load/effort values and be reused across decks. */

export const PulleyIllustration = () => (
  <svg className="labeled-pulley" style={{ height: 150 }} viewBox="0 0 300 168" role="img" aria-label="A pulley: a grooved wheel on a support with a rope lifting a load">
    <line x1="30" y1="20" x2="270" y2="20" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
    <line x1="150" y1="20" x2="150" y2="34" stroke="#94a3b8" strokeWidth="4" />
    <circle cx="150" cy="52" r="18" fill="#0f172a" stroke="#facc15" strokeWidth="6" />
    <circle cx="150" cy="52" r="5" fill="#facc15" />
    <path d="M132 52 A18 18 0 0 1 168 52" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <line x1="132" y1="52" x2="132" y2="118" stroke="#e2e8f0" strokeWidth="4" />
    <line x1="168" y1="52" x2="168" y2="108" stroke="#e2e8f0" strokeWidth="4" />
    <rect x="108" y="118" width="48" height="38" rx="8" fill="#fb7185" />
    <text x="132" y="142" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="900">LOAD</text>
    <path d="M168 108 L168 140 M162 132 L168 142 L174 132" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="214" y="122" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900">PULL</text>
  </svg>
)

export const PulleyFixed = () => (
  <svg className="labeled-pulley" style={{ height: 200 }} viewBox="0 0 210 190" role="img" aria-label="A fixed pulley with a 100 N load and 100 N downward effort">
    <line x1="15" y1="20" x2="195" y2="20" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
    <line x1="125" y1="20" x2="125" y2="36" stroke="#94a3b8" strokeWidth="4" />
    <circle cx="125" cy="52" r="16" fill="#0f172a" stroke="#facc15" strokeWidth="5" />
    <circle cx="125" cy="52" r="4" fill="#facc15" />
    <path d="M109 52 A16 16 0 0 1 141 52" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <line x1="109" y1="52" x2="109" y2="118" stroke="#e2e8f0" strokeWidth="4" />
    <line x1="141" y1="52" x2="141" y2="118" stroke="#e2e8f0" strokeWidth="4" />
    <rect x="85" y="120" width="48" height="40" rx="8" fill="#fb7185" />
    <text x="109" y="145" textAnchor="middle" fill="#111827" fontSize="15" fontWeight="900">100 N</text>
    <text x="109" y="177" textAnchor="middle" fill="#fb7185" fontSize="12" fontWeight="900">LOAD</text>
    <path d="M141 120 L141 150 M135 142 L141 151 L147 142" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="175" y="130" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900">EFFORT</text>
    <text x="175" y="148" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">100 N</text>
  </svg>
)

export const PulleyMovableSystem = () => (
  <svg className="labeled-pulley" style={{ height: 215 }} viewBox="0 0 240 230" role="img" aria-label="A fixed pulley on top changes direction; a movable pulley holds the 100 N load lifted with 50 N effort">
    <line x1="20" y1="22" x2="220" y2="22" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
    <line x1="75" y1="22" x2="75" y2="30" stroke="#94a3b8" strokeWidth="4" />
    <line x1="130" y1="22" x2="130" y2="33" stroke="#94a3b8" strokeWidth="4" />
    <circle cx="130" cy="48" r="15" fill="#0f172a" stroke="#38bdf8" strokeWidth="5" />
    <circle cx="130" cy="48" r="4" fill="#38bdf8" />
    <circle cx="95" cy="140" r="20" fill="#0f172a" stroke="#facc15" strokeWidth="6" />
    <circle cx="95" cy="140" r="5" fill="#facc15" />
    <line x1="75" y1="30" x2="75" y2="140" stroke="#e2e8f0" strokeWidth="4" />
    <path d="M75 140 A20 20 0 0 0 115 140" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <line x1="115" y1="140" x2="115" y2="48" stroke="#e2e8f0" strokeWidth="4" />
    <path d="M115 48 A15 15 0 0 1 145 48" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <line x1="145" y1="48" x2="145" y2="148" stroke="#e2e8f0" strokeWidth="4" />
    <path d="M139 138 L145 152 L151 138" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="184" y="118" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900">EFFORT</text>
    <text x="184" y="136" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">50 N</text>
    <line x1="95" y1="160" x2="95" y2="168" stroke="#fb7185" strokeWidth="5" />
    <rect x="71" y="168" width="48" height="40" rx="8" fill="#fb7185" />
    <text x="95" y="193" textAnchor="middle" fill="#111827" fontSize="15" fontWeight="900">100 N</text>
    <text x="150" y="40" textAnchor="start" fill="#38bdf8" fontSize="10" fontWeight="900">FIXED</text>
    <text x="40" y="145" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="900">MOVABLE</text>
  </svg>
)

export const DirectLift = () => (
  <svg className="compare-svg" viewBox="0 0 180 190" role="img" aria-label="Lifting a load directly">
    <line x1="34" y1="25" x2="146" y2="25" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
    <line x1="90" y1="28" x2="90" y2="118" stroke="#38bdf8" strokeWidth="5" />
    <path d="M80 105 L90 119 L100 105" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="58" y="124" width="64" height="48" rx="9" fill="#fb7185" />
    <text x="90" y="154" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="900">LOAD</text>
  </svg>
)

export const FixedMovable = () => (
  <svg className="compare-svg" viewBox="0 0 180 190" role="img" aria-label="A fixed pulley redirects the rope around a movable pulley on the load">
    <line x1="26" y1="25" x2="154" y2="25" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
    <line x1="112" y1="25" x2="112" y2="36" stroke="#94a3b8" strokeWidth="4" />
    <circle cx="112" cy="49" r="13" fill="#0f172a" stroke="#38bdf8" strokeWidth="4" />
    <circle cx="112" cy="49" r="3" fill="#38bdf8" />
    <circle cx="77" cy="108" r="25" fill="#0f172a" stroke="#facc15" strokeWidth="5" />
    <circle cx="77" cy="108" r="5" fill="#facc15" />
    <path d="M52 25 L52 108 C52 122 63 133 77 133 C91 133 102 122 102 108 L100 49 C102 41 106 36 112 36 C118 36 122 41 124 49 L124 82" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M124 77 L124 91 M118 84 L124 92 L130 84" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="77" y1="133" x2="77" y2="140" stroke="#fb7185" strokeWidth="4" />
    <rect x="49" y="140" width="56" height="38" rx="8" fill="#fb7185" />
    <text x="77" y="164" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="900">LOAD</text>
  </svg>
)

export const InclinedPlane = () => (
  <svg className="labeled-pulley" style={{ height: 180 }} viewBox="0 0 320 210" role="img" aria-label="An inclined plane: a load pushed up a ramp of slope length l and height h">
    {/* ground */}
    <line x1="20" y1="180" x2="306" y2="180" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {/* ramp */}
    <path d="M44 180 L284 180 L284 74 Z" fill="rgba(56,189,248,0.06)" stroke="#475569" strokeWidth="2.5" strokeLinejoin="round" />
    {/* slope highlight (length l) */}
    <line x1="44" y1="180" x2="284" y2="74" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
    {/* load box sitting on the slope */}
    <g transform="rotate(-23.8 140 137)">
      <rect x="120" y="120" width="40" height="34" rx="5" fill="#fb7185" />
      <text x="140" y="142" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="900">LOAD</text>
    </g>
    {/* effort — pushing up the slope */}
    <path d="M86 146 L125 129 M117.9 137.6 L125 129 L113.8 128.4" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="66" y="140" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="900">EFFORT</text>
    {/* height h (right side) */}
    <line x1="300" y1="74" x2="300" y2="180" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="295" y1="74" x2="305" y2="74" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="295" y1="180" x2="305" y2="180" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <text x="312" y="132" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="900">h</text>
    {/* length l label on slope */}
    <text x="210" y="100" textAnchor="middle" fill="#facc15" fontSize="15" fontWeight="900">l</text>
  </svg>
)

export const Lever = () => (
  <svg className="labeled-pulley" style={{ height: 185 }} viewBox="0 0 330 195" role="img" aria-label="A lever: a rigid bar on a fulcrum, load on one side, effort on the other">
    {/* beam */}
    <line x1="40" y1="95" x2="292" y2="95" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
    {/* fulcrum */}
    <path d="M120 95 L104 130 L136 130 Z" fill="#0f172a" stroke="#facc15" strokeWidth="4" strokeLinejoin="round" />
    <text x="120" y="147" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="900">FULCRUM</text>
    {/* load hanging on the short side */}
    <line x1="48" y1="95" x2="48" y2="112" stroke="#e2e8f0" strokeWidth="3" />
    <rect x="26" y="112" width="44" height="30" rx="6" fill="#fb7185" />
    <text x="48" y="132" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="900">LOAD</text>
    {/* effort pushing down on the long side */}
    <path d="M285 58 L285 90 M278 81 L285 91 L292 81" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="285" y="48" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900">EFFORT</text>
    {/* arm measurements */}
    <line x1="48" y1="162" x2="48" y2="170" stroke="#475569" strokeWidth="2" />
    <line x1="120" y1="162" x2="120" y2="170" stroke="#475569" strokeWidth="2" />
    <line x1="285" y1="162" x2="285" y2="170" stroke="#475569" strokeWidth="2" />
    <line x1="48" y1="166" x2="120" y2="166" stroke="#fb7185" strokeWidth="2.5" />
    <line x1="120" y1="166" x2="285" y2="166" stroke="#38bdf8" strokeWidth="2.5" />
    <text x="84" y="185" textAnchor="middle" fill="#fb7185" fontSize="10.5" fontWeight="900">LOAD ARM</text>
    <text x="202" y="185" textAnchor="middle" fill="#38bdf8" fontSize="10.5" fontWeight="900">EFFORT ARM</text>
  </svg>
)

/** A single rope over a fixed pulley — shows tension equals effort: T = E. */
export const SingleRopeTension = () => (
  <svg className="labeled-pulley" style={{ height: 200 }} viewBox="0 0 210 205" role="img" aria-label="A single rope over a fixed pulley: the tension equals the effort, T = E">
    {/* ceiling */}
    <line x1="25" y1="24" x2="185" y2="24" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
    {/* fixed pulley */}
    <line x1="105" y1="24" x2="105" y2="38" stroke="#94a3b8" strokeWidth="4" />
    <circle cx="105" cy="54" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="5" />
    <circle cx="105" cy="54" r="4" fill="#38bdf8" />
    {/* rope over the pulley */}
    <path d="M89 54 L89 118" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <path d="M89 54 A16 16 0 0 1 121 54" fill="none" stroke="#e2e8f0" strokeWidth="4" />
    <path d="M121 54 L121 150" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    {/* load on the left */}
    <rect x="65" y="118" width="48" height="40" rx="8" fill="#fb7185" />
    <text x="89" y="143" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="900">LOAD</text>
    {/* tension — same on both sides of the rope */}
    <path d="M89 108 L89 84 M84 91 L89 82 L94 91" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="74" y="100" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">T</text>
    <path d="M121 102 L121 84 M116 91 L121 82 L126 91" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="136" y="96" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">T</text>
    {/* effort — pull down on the free end (E = T) */}
    <path d="M121 122 L121 150 M116 142 L121 152 L126 142" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="139" y="140" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">E</text>
  </svg>
)

/** Force analysis of a movable pulley — two rope sections (each tension T) hold
 *  the load W; the free end runs over a fixed pulley where effort E is applied. */
export const MovablePulleyForces = () => (
  <svg className="labeled-pulley" style={{ height: 225 }} viewBox="0 0 260 245" role="img" aria-label="Movable pulley force analysis: two rope sections each with tension T hold load W, effort E at the free end">
    {/* ceiling */}
    <line x1="34" y1="26" x2="226" y2="26" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
    {/* fixed pulley */}
    <line x1="165" y1="26" x2="165" y2="40" stroke="#94a3b8" strokeWidth="4" />
    <circle cx="165" cy="56" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="5" />
    <circle cx="165" cy="56" r="4" fill="#38bdf8" />
    <text x="165" y="90" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="800">FIXED</text>
    {/* movable pulley */}
    <circle cx="118" cy="160" r="24" fill="#0f172a" stroke="#facc15" strokeWidth="7" />
    <circle cx="118" cy="160" r="6" fill="#facc15" />
    <text x="118" y="127" textAnchor="middle" fill="#facc15" fontSize="9" fontWeight="800">MOVABLE</text>
    {/* rope: anchor → down → under movable → up → over fixed → down to effort */}
    <path d="M94 26 L94 160" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <path d="M94 160 A24 24 0 0 0 142 160" fill="none" stroke="#e2e8f0" strokeWidth="4" />
    <path d="M142 160 L149 56" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <path d="M149 56 A16 16 0 0 1 181 56" fill="none" stroke="#e2e8f0" strokeWidth="4" />
    <path d="M181 56 L181 172" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    {/* tension arrows (up) on the two sections holding the movable pulley */}
    <path d="M94 114 L94 88 M89 95 L94 85 L99 95" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="80" y="106" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="900">T</text>
    <path d="M146 118 L148 94 M143 101 L148 92 L153 101" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="162" y="112" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="900">T</text>
    {/* effort arrow (down) on the free end */}
    <path d="M181 124 L181 160 M176 152 L181 162 L186 152" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="199" y="118" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">E</text>
    {/* load */}
    <line x1="118" y1="184" x2="118" y2="192" stroke="#fb7185" strokeWidth="5" />
    <rect x="90" y="192" width="56" height="42" rx="8" fill="#fb7185" />
    <text x="118" y="219" textAnchor="middle" fill="#111827" fontSize="17" fontWeight="900">W</text>
  </svg>
)

/** Schematic for each lever class — shows the order of Fulcrum, Load, Effort. */
export const LeverClassDiagram = ({ kind }: { kind: 1 | 2 | 3 }) => {
  const LEFT = 40
  const MID = 100
  const RIGHT = 160
  let fulcrumX = MID
  let loadX = LEFT
  let effortX = RIGHT
  if (kind === 2) {
    fulcrumX = LEFT
    loadX = MID
    effortX = RIGHT
  }
  if (kind === 3) {
    fulcrumX = LEFT
    effortX = MID
    loadX = RIGHT
  }
  const effortUp = kind !== 1 // wheelbarrow / forearm: effort is applied upward

  const force = (x: number, color: string, label: string, up: boolean) => (
    <g>
      <path
        d={
          up
            ? `M${x} 40 L${x} 20 M${x - 5} 27 L${x} 19 L${x + 5} 27`
            : `M${x} 17 L${x} 40 M${x - 5} 32 L${x} 40 L${x + 5} 32`
        }
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x={x} y="12" textAnchor="middle" fill={color} fontSize="13" fontWeight="900">
        {label}
      </text>
    </g>
  )

  return (
    <svg className="class-svg" viewBox="0 0 200 82" role="img" aria-label={`Class ${kind} lever`}>
      <line x1="22" y1="43" x2="178" y2="43" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
      <path
        d={`M${fulcrumX} 43 L${fulcrumX - 13} 62 L${fulcrumX + 13} 62 Z`}
        fill="#0f172a"
        stroke="#facc15"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text x={fulcrumX} y="76" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="900">F</text>
      {force(loadX, '#fb7185', 'L', false)}
      {force(effortX, '#38bdf8', 'E', effortUp)}
    </svg>
  )
}

export const LabeledMovablePulley = () => (
  <svg className="labeled-pulley" style={{ height: 250 }} viewBox="0 0 430 310" role="img" aria-label="Movable pulley with 100 N load and 50 N effort">
    <line x1="45" y1="28" x2="385" y2="28" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
    <line x1="285" y1="28" x2="285" y2="44" stroke="#94a3b8" strokeWidth="6" />
    <circle cx="285" cy="63" r="19" fill="#0f172a" stroke="#38bdf8" strokeWidth="6" />
    <circle cx="285" cy="63" r="5" fill="#38bdf8" />
    <circle cx="164" cy="165" r="48" fill="#0f172a" stroke="#facc15" strokeWidth="8" />
    <circle cx="164" cy="165" r="9" fill="#facc15" />
    <path d="M116 28 L116 165 C116 191 137 213 164 213 C191 213 212 191 212 165 L267 63 C271 52 277 44 285 44 C293 44 299 52 303 63 L303 111" fill="none" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="164" y1="213" x2="164" y2="235" stroke="#fb7185" strokeWidth="7" />
    <rect x="118" y="236" width="92" height="58" rx="12" fill="#fb7185" />
    <text x="164" y="271" textAnchor="middle" fill="#111827" fontSize="19" fontWeight="900">100 N</text>
    <path d="M303 101 L303 127 M294 117 L303 128 L312 117" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <text x="360" y="79" textAnchor="middle" fill="#38bdf8" fontSize="17" fontWeight="900">EFFORT (E)</text>
    <text x="360" y="106" textAnchor="middle" fill="#38bdf8" fontSize="20" fontWeight="900">50 N</text>
    <text x="164" y="304" textAnchor="middle" fill="#fb7185" fontSize="16" fontWeight="900">LOAD (L) = 100 N</text>
  </svg>
)

/* ---------------- Work-Energy Theorem ---------------- */

/** Hook for the work-energy theorem (NCERT Fig. 7.8): a moving cricket ball
 *  hits the wickets and knocks a bail off — it carries the energy the throw
 *  gave it. */
export const CricketBallWicket = () => (
  <svg className="labeled-pulley" style={{ height: 170 }} viewBox="0 0 300 180" role="img" aria-label="A moving cricket ball hits the wickets and knocks a bail off">
    {/* ground */}
    <line x1="18" y1="152" x2="282" y2="152" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {/* wickets — three stumps */}
    <line x1="232" y1="90" x2="232" y2="152" stroke="#e2b366" strokeWidth="6" strokeLinecap="round" />
    <line x1="248" y1="90" x2="248" y2="152" stroke="#e2b366" strokeWidth="6" strokeLinecap="round" />
    <line x1="264" y1="90" x2="264" y2="152" stroke="#e2b366" strokeWidth="6" strokeLinecap="round" />
    {/* a bail knocked flying off */}
    <line x1="266" y1="80" x2="286" y2="66" stroke="#e2b366" strokeWidth="5" strokeLinecap="round" />
    <path d="M276 58 l3 -5 M286 60 l5 -2" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
    {/* speed streaks behind the ball */}
    <line x1="30" y1="104" x2="52" y2="104" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="116" x2="50" y2="116" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="128" x2="52" y2="128" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
    {/* cricket ball */}
    <circle cx="74" cy="116" r="17" fill="#fb7185" stroke="#be123c" strokeWidth="2.5" />
    <path d="M64 108 A17 17 0 0 1 64 124" fill="none" stroke="#fee2e2" strokeWidth="2" />
    {/* motion arrow: ball → wickets */}
    <path d="M96 112 L214 98 M205 92 L215 98 L206 105" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Core work-energy picture (NCERT Fig. 7.11 style): a constant force F acts on
 *  a mass m over a displacement s, raising its speed from u to v. */
export const WorkEnergyMotion = () => (
  <svg className="labeled-pulley" style={{ height: 180 }} viewBox="0 0 330 205" role="img" aria-label="A constant force F pushes a mass m over a displacement s, raising its speed from u to v">
    {/* ground */}
    <line x1="18" y1="172" x2="312" y2="172" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {/* BEFORE — mass at speed u */}
    <rect x="40" y="124" width="48" height="48" rx="8" fill="#fb7185" />
    <text x="64" y="154" textAnchor="middle" fill="#111827" fontSize="15" fontWeight="900">m</text>
    <path d="M92 106 L120 106 M113 101 L120 106 L113 111" fill="none" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="104" y="97" textAnchor="middle" fill="#facc15" fontSize="14" fontWeight="900">u</text>
    {/* constant force F in the direction of motion */}
    <path d="M118 148 L174 148 M166 142 L175 148 L166 154" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="146" y="139" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">F</text>
    {/* AFTER — same mass at the larger speed v */}
    <rect x="232" y="124" width="48" height="48" rx="8" fill="#fb7185" />
    <text x="256" y="154" textAnchor="middle" fill="#111827" fontSize="15" fontWeight="900">m</text>
    <path d="M248 106 L300 106 M292 100 L301 106 L292 112" fill="none" stroke="#facc15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="274" y="97" textAnchor="middle" fill="#facc15" fontSize="14" fontWeight="900">v</text>
    {/* displacement s */}
    <line x1="64" y1="190" x2="256" y2="190" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="64" y1="184" x2="64" y2="196" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="256" y1="184" x2="256" y2="196" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <text x="160" y="186" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="900">s</text>
  </svg>
)

/** Energy transfer in a carrom shot (NCERT Example 7.3): the moving striker does
 *  positive work on the white coin, which in turn drives the black coin. */
export const CarromShot = () => (
  <svg className="labeled-pulley" style={{ height: 150 }} viewBox="0 0 300 150" role="img" aria-label="A carrom striker hits the white coin which hits the black coin toward the pocket">
    {/* striker */}
    <circle cx="48" cy="70" r="20" fill="#0f172a" stroke="#38bdf8" strokeWidth="4" />
    <circle cx="48" cy="70" r="5" fill="#38bdf8" />
    <text x="48" y="112" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="900">STRIKER</text>
    {/* striker → white */}
    <path d="M72 70 L104 70 M97 65 L105 70 L97 75" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* white coin */}
    <circle cx="132" cy="70" r="17" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
    <text x="132" y="110" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="900">WHITE</text>
    {/* white → black */}
    <path d="M153 70 L185 70 M178 65 L186 70 L178 75" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* black coin */}
    <circle cx="213" cy="70" r="17" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
    <text x="213" y="110" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="900">BLACK</text>
    {/* black → pocket */}
    <path d="M234 70 L262 70 M255 65 L263 70 L255 75" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* pocket */}
    <circle cx="282" cy="70" r="12" fill="#0b1220" stroke="#475569" strokeWidth="2.5" />
  </svg>
)

/* ---------------- Work (done by a constant force) ---------------- */

/** A constant force F pushes a box through a displacement s (NCERT Fig. 7.3). */
export const WorkPushBox = () => (
  <svg className="labeled-pulley" style={{ height: 175 }} viewBox="0 0 300 195" role="img" aria-label="A force F pushes a box through a displacement s">
    {/* ground */}
    <line x1="16" y1="166" x2="284" y2="166" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {/* start position (solid box) */}
    <rect x="52" y="114" width="50" height="50" rx="8" fill="#fb7185" />
    {/* final position (dashed outline) */}
    <rect x="206" y="114" width="50" height="50" rx="8" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="6 5" />
    {/* applied force F */}
    <path d="M22 139 L50 139 M43 134 L51 139 L43 144" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="34" y="128" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="900">F</text>
    {/* displacement s */}
    <line x1="77" y1="182" x2="231" y2="182" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="77" y1="176" x2="77" y2="188" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="231" y1="176" x2="231" y2="188" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <text x="154" y="178" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="900">s</text>
  </svg>
)

/** A person pushes a wall — force acts but there is no displacement, so no
 *  work is done (NCERT Fig. 7.5). */
export const ZeroWorkWall = () => (
  <svg className="labeled-pulley" style={{ height: 170 }} viewBox="0 0 280 180" role="img" aria-label="A person pushes a wall but it does not move, so no work is done">
    {/* ground */}
    <line x1="16" y1="158" x2="264" y2="158" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {/* wall */}
    <rect x="236" y="38" width="14" height="120" fill="#475569" />
    <path d="M236 54 h14 M236 74 h14 M236 94 h14 M236 114 h14 M236 134 h14" stroke="#334155" strokeWidth="2" />
    {/* person (stick figure) leaning into the wall */}
    <g stroke="#cbd5e1" strokeWidth="4.5" strokeLinecap="round" fill="none">
      <circle cx="150" cy="82" r="12" />
      <path d="M118 122 L150 98" />
      <path d="M150 98 L206 104" />
      <path d="M118 122 L96 158" />
      <path d="M118 122 L138 158" />
    </g>
    {/* force pushing into the wall */}
    <path d="M206 104 L232 104 M224 99 L233 104 L224 109" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="190" y="92" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="900">F</text>
    {/* s = 0 */}
    <text x="214" y="176" textAnchor="middle" fill="#f87171" fontSize="13" fontWeight="900">s = 0</text>
  </svg>
)

/** Positive vs negative work shown with a football — force along the motion
 *  (+W) or opposing the motion (−W). */
export const PositiveNegativeWork = () => (
  <svg className="labeled-pulley" style={{ height: 180 }} viewBox="0 0 300 190" role="img" aria-label="A ball thrown up. Going up, displacement opposes gravity so work is negative. Coming down, displacement is along gravity so work is positive. Gravity is the same force throughout.">
    {/* ground */}
    <line x1="24" y1="176" x2="276" y2="176" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
    {/* trajectory arc */}
    <path d="M60 174 Q 150 14 240 174" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="5 6" />
    {/* apex ball (v = 0) */}
    <circle cx="150" cy="30" r="9" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
    <text x="150" y="19" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="800">v = 0</text>

    {/* ===== GOING UP (left) → −W ===== */}
    <circle cx="104" cy="104" r="14" fill="#e2e8f0" stroke="#64748b" strokeWidth="2.5" />
    {/* displacement up (yellow) */}
    <path d="M82 128 L82 80 M76 88 L82 79 L88 88" fill="none" stroke="#facc15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="82" y="72" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="900">s</text>
    {/* gravity down (cyan) */}
    <path d="M126 82 L126 126 M120 118 L126 127 L132 118" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="126" y="74" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900">g</text>
    <text x="104" y="156" textAnchor="middle" fill="#fb7185" fontSize="17" fontWeight="900">−W</text>

    {/* ===== COMING DOWN (right) → +W ===== */}
    <circle cx="196" cy="104" r="14" fill="#e2e8f0" stroke="#64748b" strokeWidth="2.5" />
    {/* displacement down (yellow) */}
    <path d="M218 80 L218 128 M212 120 L218 129 L224 120" fill="none" stroke="#facc15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="218" y="72" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="900">s</text>
    {/* gravity down (cyan) */}
    <path d="M174 82 L174 126 M168 118 L174 127 L180 118" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="174" y="74" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="900">g</text>
    <text x="196" y="156" textAnchor="middle" fill="#34d399" fontSize="17" fontWeight="900">+W</text>
  </svg>
)
