import type { Topic } from '../types'
import {
  Header,
  Hero,
  SectionHead,
  SlideSplit,
  SplitMain,
  SplitAside,
  WritePad,
  PracticeMarker,
  DiagramCard,
  DiagramCaption,
  Dot,
  TakeawayCard,
  Footnote,
  FormulaCard,
  Fraction,
  WorkedExample,
  GivenRow,
  Divider,
  Calculation,
  RevealPad,
  DefinitionStack,
  DefinitionCard,
  Kw,
} from '../../components/slide/primitives'
import { MovingBallKE, WindmillKE } from '../../components/diagrams/diagrams'

export const kineticEnergy: Topic = {
  id: 'kinetic-energy',
  chapterId: 'work-energy',
  title: 'Kinetic Energy',
  tagline: 'Energy of motion · KE = ½mv²',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'motion',
  accent: '#34d399',
  slides: [
    {
      navTitle: 'What is Kinetic Energy?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Work & Energy" title="KINETIC ENERGY" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <MovingBallKE />
                <DiagramCaption>
                  <Kw c="cyan">moving mass m</Kw>
                  <Dot />
                  <Kw c="yellow">speed v</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="ENERGY OF MOTION" compact>
                A moving object can do work — a moving ball knocks a wicket, wind turns a windmill.
                This energy of motion is its <Kw c="yellow">kinetic energy</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">EVERY MOVING OBJECT HAS IT</Kw>}>
                  A body in motion can push, break or move other things — so it <b>carries energy</b>.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">FASTER = MORE ENERGY</Kw>}>
                  The <b>faster</b> an object moves, the more work it can do.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Flowing water · blowing wind · a moving hammer — all have kinetic energy</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Formula',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Derivation" title="THE FORMULA" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <WritePad label="Derive: KE = ½ m v²" minHeight={260} />
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="KINETIC ENERGY" compact>
                An object of mass <i>m</i> moving at speed <i>v</i> has kinetic energy{' '}
                <Kw c="yellow" big>KE = ½ m v²</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">WORK BECOMES ENERGY</Kw>}>
                  It equals the <b>work done</b> to bring the object from rest up to speed <i>v</i>.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">MEASURED IN JOULES</Kw>}>
                  KE is energy, so its unit is the <b>joule (J)</b> — the same as work.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>From W = ½ m (v² − u²) with u = 0 → KE = ½ m v²</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Mass vs Speed',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · What It Depends On" title="MASS vs SPEED" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Speed is squared — it matters more">
                KE = <Fraction num="1" den="2" /> m v²
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="How KE Changes" />
              <TakeawayCard title="WHAT KE DEPENDS ON">
                <div>
                  <Kw c="cyan">Double the mass</Kw> → <b>2× the KE</b>
                </div>
                <div>
                  <Kw c="yellow">Double the speed</Kw> → <b>4× the KE</b> (v is squared!)
                </div>
                <div>
                  <Kw c="coral">Zero speed</Kw> → <b>KE = 0</b>
                </div>
              </TakeawayCard>
            </SplitAside>
          </SlideSplit>
          <Footnote>This is why a fast vehicle is so much harder to stop</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Energy At Work',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · In the Real World" title="ENERGY AT WORK" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <WindmillKE />
                <DiagramCaption>
                  <Kw c="cyan">wind</Kw>
                  <Dot />
                  <Kw c="emerald">spins the blades</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="MOTION THAT WORKS FOR US" compact>
                Because moving things carry energy, we put that <Kw c="yellow">motion to work</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">WIND & WATER</Kw>}>
                  Moving air turns a <b>windmill</b>; flowing water spins a <b>turbine</b> to make
                  electricity.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">A MOVING HAMMER</Kw>}>
                  A fast hammer drives a nail — its <b>kinetic energy</b> does the work.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>The object slows down as it gives its kinetic energy away</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use KE = ½ m v²." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Kinetic energy of a moving object">
                KE = <Fraction num="1" den="2" /> m v²
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Mass (m)</Kw>} value="2 kg" />
                <GivenRow label={<Kw c="cyan">Speed (v)</Kw>} value="4 m/s" />
                <Divider />
                <RevealPad>
                  <Calculation>KE = ½ × 2 × 4²</Calculation>
                  <Calculation>= 1 × 16</Calculation>
                  <Calculation>
                    = <Kw c="emerald">16 J</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution · the object carries 16 J of kinetic energy</Footnote>
        </>
      ),
    },
  ],
}
