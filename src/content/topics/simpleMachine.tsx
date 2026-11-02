import type { Topic } from '../types'
import {
  Header,
  Hero,
  SectionHead,
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
  DefinitionStack,
  DefinitionCard,
  CompareGrid,
  CompareCard,
  CompareArrow,
  Kw,
} from '../../components/slide/primitives'
import { DirectLift, FixedMovable, LabeledMovablePulley } from '../../components/diagrams/diagrams'

export const simpleMachine: Topic = {
  id: 'simple-machine',
  chapterId: 'work-energy',
  title: 'Simple Machines',
  tagline: 'Load, effort & mechanical advantage',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'gear',
  accent: '#38bdf8',
  slides: [
    {
      navTitle: 'Why a Machine?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Work & Energy" title="SIMPLE MACHINES" part="PART 01" />
          <Hero eyebrow="WHY USE A MACHINE?">
            A machine can make a task <Kw c="emerald">easier</Kw> by changing the size or direction
            of the force.
          </Hero>
          <SectionHead num="01" title="One Pulley System · Two Ways to Lift" />
          <CompareGrid>
            <CompareCard
              label="DIRECT LIFT"
              force={<Kw c="coral">100 N</Kw>}
              forceSub="upward effort"
            >
              <DirectLift />
            </CompareCard>
            <CompareArrow />
            <CompareCard
              label="FIXED + MOVABLE"
              force={<Kw c="cyan">50 N</Kw>}
              forceSub="downward effort"
            >
              <FixedMovable />
            </CompareCard>
          </CompareGrid>
          <TakeawayCard title="SAME 100 N LOAD">
            With an ideal movable pulley, <Kw c="cyan">less force</Kw> lifts the load — but you pull{' '}
            <Kw c="yellow">more rope</Kw>.
          </TakeawayCard>
          <Footnote>Ideal example · ignore friction · two rope sections support the load</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Load & Effort',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Core Terms" title="LOAD & EFFORT" part="PART 02" />
          <Hero eyebrow="LET'S READ THE PULLEY" compact>
            The load is what we lift. Effort is the force we apply.
          </Hero>
          <SectionHead num="01" title="Find Them in the Same Example" />
          <DiagramCard>
            <LabeledMovablePulley />
            <DiagramCaption>
              <Kw c="coral">Load = 100 N</Kw>
              <Dot />
              <Kw c="cyan">Effort = 50 N</Kw>
            </DiagramCaption>
          </DiagramCard>
          <DefinitionStack>
            <DefinitionCard
              index="1"
              variant="load"
              title={<Kw c="coral">LOAD (L)</Kw>}
              unit={
                <>
                  Force unit <b>Newton (N)</b>
                </>
              }
            >
              The weight or resistance the machine has to move.
            </DefinitionCard>
            <DefinitionCard
              index="2"
              variant="effort"
              title={<Kw c="cyan">EFFORT (E)</Kw>}
              unit={
                <>
                  Force unit <b>Newton (N)</b>
                </>
              }
            >
              The force applied to make the machine work.
            </DefinitionCard>
          </DefinitionStack>
          <Footnote>Load and effort are both forces, so both are measured in newtons.</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Mechanical Advantage',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Formula" title="MECHANICAL ADVANTAGE" part="PART 03" />
          <Hero eyebrow="HOW MUCH DOES THE MACHINE HELP?" compact>
            Mechanical Advantage compares the load with the effort.
          </Hero>
          <FormulaCard note="Newton ÷ Newton = no unit">
            MA = <Fraction num="Load (L)" den="Effort (E)" />
          </FormulaCard>
          <SectionHead num="01" title="Use Our Pulley Example" />
          <WorkedExample>
            <GivenRow label={<Kw c="coral">Load (L)</Kw>} value="100 N" />
            <GivenRow label={<Kw c="cyan">Effort (E)</Kw>} value="50 N" />
            <Divider />
            <Calculation>
              MA = 100 ÷ 50 = <Kw c="emerald">2</Kw>
            </Calculation>
          </WorkedExample>
          <TakeawayCard title="WHAT DOES MA = 2 TELL US?" variant="ma">
            The load is <Kw c="coral">2 times</Kw> the effort: an ideal pulley lifts{' '}
            <Kw c="coral">100 N</Kw> with <Kw c="cyan">50 N</Kw>.
          </TakeawayCard>
          <Footnote>Ideal pulley example · real machines have friction, so actual MA may be lower.</Footnote>
        </>
      ),
    },
  ],
}
