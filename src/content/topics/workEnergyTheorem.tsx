import type { Topic } from '../types'
import {
  Header,
  Hero,
  SectionHead,
  SlideSplit,
  SplitMain,
  SplitAside,
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
import {
  CricketBallWicket,
  WorkEnergyMotion,
  CarromShot,
} from '../../components/diagrams/diagrams'

export const workEnergyTheorem: Topic = {
  id: 'work-energy-theorem',
  chapterId: 'work-energy',
  title: 'Work-Energy Theorem',
  tagline: 'Work done = change in energy',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'bolt',
  accent: '#f97316',
  slides: [
    {
      navTitle: 'Where Energy Comes From',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Work & Energy" title="WORK-ENERGY THEOREM" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <CricketBallWicket />
                <DiagramCaption>
                  <Kw c="coral">moving ball</Kw>
                  <Dot />
                  <Kw c="yellow">knocks the wicket</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHERE DOES THE ENERGY COME FROM?" compact>
                A fielder throws a ball and it knocks the wicket down. The ball could do this because
                it had <Kw c="yellow">energy</Kw> — the capacity to do work.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">WORK GIVES ENERGY</Kw>}>
                  The ball gained energy from the <b>work done by the fielder</b> in throwing it.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">ENERGY DOES WORK</Kw>}>
                  The moving ball then <b>transfers its energy</b> to the wickets, making them move.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>More everyday cases: a falling flowerpot · a hammer driving a nail</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Theorem',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · The Rule" title="THE THEOREM" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <WorkEnergyMotion />
                <DiagramCaption>
                  <Kw c="cyan">force F</Kw>
                  <Dot />
                  <Kw c="yellow">speed u → v</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WORK-ENERGY THEOREM" compact>
                Work done on an object appears as a{' '}
                <Kw c="yellow" big>change in its energy</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">WORK = CHANGE IN ENERGY</Kw>}>
                  Do <b>positive work</b> on an object and it <b>gains energy</b>; its motion changes.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">ALWAYS HOLDS</Kw>}>
                  True for a <b>system of objects</b> too — and even when the force is <b>not constant</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>SI unit of energy = joule (J) · the same unit as work</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Energy Transfer',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Example 7.3" title="ENERGY TRANSFER" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <CarromShot />
                <DiagramCaption>
                  <Kw c="cyan">striker</Kw>
                  <Dot />
                  <Kw c="emerald">white</Kw>
                  <Dot />
                  <Kw c="coral">black</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="COLLISIONS PASS ENERGY ON" compact>
                In a carrom shot, energy moves from one coin to the next — each time, through{' '}
                <Kw c="cyan">work</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">STRIKER DOES POSITIVE WORK</Kw>}>
                  The moving striker pushes the white coin forward, so it <b>gains energy</b>.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">AND GETS NEGATIVE WORK BACK</Kw>}>
                  By Newton's 3rd law the white coin pushes <b>back</b> on the striker — against its motion — so the striker <b>slows down</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Striker → white coin → black coin · energy is passed along the line</Footnote>
        </>
      ),
    },
    {
      navTitle: 'In Numbers',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · For a Moving Object" title="IN NUMBERS" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Work done = change in kinetic energy (KEf − KEi)">
                W = <Fraction num="1" den="2" /> m (v² − u²)
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="The Three Cases" />
              <TakeawayCard title="WORK CHANGES THE SPEED">
                <div>
                  <Kw c="emerald">+ve work</Kw> → speed up → <b>KE increases</b>
                </div>
                <div>
                  <Kw c="coral">−ve work</Kw> → slow down → <b>KE decreases</b>
                </div>
                <div>
                  <Kw c="cyan">zero work</Kw> → speed same → <b>KE constant</b>
                </div>
              </TakeawayCard>
            </SplitAside>
          </SlideSplit>
          <Footnote>A moving object's energy is its kinetic energy (KE) · full derivation in the Kinetic Energy deck</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use W = ½ m (v² − u²)." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Net work = gain in kinetic energy">
                W = <Fraction num="1" den="2" /> m (v² − u²)
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Mass (m)</Kw>} value="2 kg" />
                <GivenRow label={<Kw c="cyan">Speed</Kw>} value="3 → 5 m/s" />
                <Divider />
                <RevealPad>
                  <Calculation>W = ½ × 2 × (5² − 3²)</Calculation>
                  <Calculation>= 1 × (25 − 9)</Calculation>
                  <Calculation>
                    = <Kw c="emerald">16 J</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution · the object gains 16 J of kinetic energy</Footnote>
        </>
      ),
    },
  ],
}
