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
import { MovablePulleyForces, SingleRopeTension } from '../../components/diagrams/diagrams'

export const movablePulley: Topic = {
  id: 'movable-pulley',
  chapterId: 'work-energy',
  title: 'Movable Pulley',
  tagline: 'Why effort = load ÷ 2 (derivation)',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'pulley',
  accent: '#f472b6',
  slides: [
    {
      navTitle: 'What is a Movable Pulley?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Pulley" title="MOVABLE PULLEY" part="PART 01" />
          <Hero eyebrow="WHAT IS A MOVABLE PULLEY?" compact>
            A pulley that is <Kw c="yellow">attached to the load</Kw> and moves up with it.
          </Hero>
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <MovablePulleyForces />
                <DiagramCaption>
                  <Kw c="cyan">2 sections pull up</Kw>
                  <Dot />
                  <Kw c="coral">load W down</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">TWO ROPE SECTIONS</Kw>}>
                  Both sections pull the pulley <b>up</b>, so together they share the load.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">HALF THE EFFORT</Kw>}>
                  A smaller effort lifts the load — but you pull <b>twice the rope</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>The top pulley is fixed — it only changes direction, not the effort</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Single Rope · T = E',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Build-Up" title="SINGLE ROPE · T = E" part="PART 02" />
          <Hero eyebrow="WHAT IS TENSION?" compact>
            Tension is the <Kw c="cyan">pulling force transmitted through a stretched rope</Kw>.
            When you pull a single rope with effort <Kw c="cyan">E</Kw>, its tension is <Kw c="cyan">T = E</Kw>.
          </Hero>
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <SingleRopeTension />
                <DiagramCaption>
                  <Kw c="cyan">one rope</Kw>
                  <Dot />
                  <Kw c="emerald">T = E</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">SAME TENSION</Kw>}>
                  An ideal rope has the <b>same tension</b> all along its length.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">EFFORT = TENSION</Kw>}>
                  The effort <b>E</b> you apply equals the rope tension <b>T</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>This single-rope fact is the key we'll use for the movable pulley</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Tension · 2T = W',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Step 1" title="TENSION · 2T = W" part="PART 03" />
          <Hero eyebrow="WHAT IS TENSION?" compact>
            Tension is the <Kw c="cyan">pulling force</Kw> in the rope — in an ideal rope it is the{' '}
            <b>same everywhere</b>. Both sections pull the movable pulley <b>up</b>.
          </Hero>
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <MovablePulleyForces />
                <DiagramCaption>
                  <Kw c="cyan">each section pulls up with T</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <WritePad label="Derive: 2T = W" minHeight={210} />
            </SplitAside>
          </SlideSplit>
          <Footnote>Up force = T + T = 2T · constant speed → 2T = W</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Effort = Tension · E = W/2',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Step 2" title="EFFORT = TENSION" part="PART 04" />
          <Hero eyebrow="EFFORT = TENSION" compact>
            You pull the free end with effort <Kw c="cyan">E</Kw>. Same tension everywhere, so{' '}
            <Kw c="cyan">T = E</Kw>. Put this into <Kw c="emerald">2T = W</Kw>.
          </Hero>
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <MovablePulleyForces />
                <DiagramCaption>
                  <Kw c="cyan">pull free end with E</Kw>
                  <Dot />
                  <Kw c="cyan">T = E</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <WritePad label="Derive: E = W/2" minHeight={210} />
            </SplitAside>
          </SlideSplit>
          <Footnote>2T = W and T = E → 2E = W → E = W/2 · ideal system</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use E = W ÷ 2." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Ideal movable pulley · MA = 2">
                E = <Fraction num="W" den="2" />
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Load (W)</Kw>} value="200 N" />
                <Divider />
                <RevealPad>
                  <Calculation>E = 200 ÷ 2</Calculation>
                  <Calculation>
                    = <Kw c="emerald">100 N</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution · ideal (frictionless) system</Footnote>
        </>
      ),
    },
  ],
}
