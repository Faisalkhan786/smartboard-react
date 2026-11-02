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
  PulleyIllustration,
  PulleyFixed,
  PulleyMovableSystem,
} from '../../components/diagrams/diagrams'

export const pulley: Topic = {
  id: 'pulley',
  chapterId: 'work-energy',
  title: 'Pulley',
  tagline: 'Fixed & movable pulleys, MA & numericals',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'pulley',
  accent: '#facc15',
  slides: [
    {
      navTitle: 'What is a Pulley?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Simple Machines" title="PULLEY" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard style={{ padding: '8px 12px' }}>
                <PulleyIllustration />
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHAT IS A PULLEY?" compact>
                A <Kw c="yellow">wheel with a grooved rim</Kw> and a rope over it — used to lift
                loads more easily.
              </Hero>
              <SectionHead num="01" title="Two Jobs of a Pulley" />
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">CHANGES DIRECTION OF FORCE</Kw>}>
                  Pull <b>down</b> to move a load <b>up</b> — it changes the <b>direction</b> of the
                  force to a convenient one.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">REDUCES THE EFFORT</Kw>}>
                  The right setup <b>reduces the effort</b> — a <b>smaller force</b> can lift a{' '}
                  <b>bigger load</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Everyday examples: flagpole · water well · crane · gym machines</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Fixed Pulley',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Pulley" title="FIXED PULLEY" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <PulleyFixed />
                <DiagramCaption>
                  <Kw c="emerald">MA = 1</Kw>
                  <Dot />
                  <Kw c="cyan">Effort = Load</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="FIXED TO A SUPPORT" compact>
                It only changes the <Kw c="cyan">direction</Kw> of the force — not its size.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">EFFORT STAYS THE SAME</Kw>}>
                  The <b>amount of effort does not decrease</b> — it stays equal to the load.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">ONLY MORE CONVENIENT</Kw>}>
                  Only the <b>way</b> of applying force changes — pulling <b>downward</b> lets you use
                  your own <Kw c="yellow" big>body weight</Kw>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Ideal case · ignore friction</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Movable Pulley',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Pulley" title="MOVABLE PULLEY" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <PulleyMovableSystem />
                <DiagramCaption>
                  <Kw c="emerald">MA = 2</Kw>
                  <Dot />
                  <Kw c="cyan">Effort = Load ÷ 2</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="ATTACHED TO THE LOAD" compact>
                Two rope sections share the weight, so the <Kw c="cyan">effort is halved</Kw>.
              </Hero>
              <TakeawayCard title="THE TRADE-OFF" variant="ma">
                You lift with <Kw c="cyan">half the force</Kw>, but you must pull{' '}
                <Kw c="yellow">twice the length</Kw> of rope.
              </TakeawayCard>
            </SplitAside>
          </SlideSplit>
          <Footnote>
            Top pulley is <b>fixed</b> (changes direction) · the <b>movable</b> pulley halves the
            effort
          </Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's find the effort using MA." />
      ),
    },
    {
      navTitle: 'Formula & Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="MA & NUMERICAL" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="No unit · Also, Effort = Load ÷ MA">
                MA = <Fraction num="Load (L)" den="Effort (E)" />
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It · Movable Pulley" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Load (L)</Kw>} value="200 N" />
                <GivenRow label={<Kw c="cyan">Pulley</Kw>} value="Movable · MA = 2" />
                <Divider />
                <RevealPad>
                  <Calculation>Effort = 200 ÷ 2</Calculation>
                  <Calculation>
                    = <Kw c="emerald">100 N</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution to show the answer · ideal pulley</Footnote>
        </>
      ),
    },
  ],
}
