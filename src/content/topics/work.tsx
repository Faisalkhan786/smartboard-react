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
  WorkPushBox,
  ZeroWorkWall,
  PositiveNegativeWork,
} from '../../components/diagrams/diagrams'

export const work: Topic = {
  id: 'work',
  chapterId: 'work-energy',
  title: 'Work',
  tagline: 'Force × displacement · W = F × s',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'force',
  accent: '#818cf8',
  slides: [
    {
      navTitle: 'What is Work?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Work & Energy" title="WORK" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <WorkPushBox />
                <DiagramCaption>
                  <Kw c="cyan">force F</Kw>
                  <Dot />
                  <Kw c="emerald">displacement s</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHAT IS WORK?" compact>
                Work is done when a <Kw c="cyan">force</Kw> moves an object through a{' '}
                <Kw c="emerald">displacement</Kw> in its own direction.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">TWO THINGS NEEDED</Kw>}>
                  A <b>force</b> must act, and the object must <b>move</b> — both are required.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="yellow">W = F × s</Kw>}>
                  Work = force × displacement in the direction of the force.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Lifting a bag · pushing a cart · climbing stairs — all involve work</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Joule',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Unit" title="THE JOULE" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <WritePad label="Derive: 1 J = 1 N × 1 m" minHeight={260} />
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="SI UNIT OF WORK" compact>
                The unit of work is the <Kw c="yellow" big>joule (J)</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">ONE JOULE</Kw>}>
                  1 J of work is done when <b>1 N</b> moves an object <b>1 m</b> in the force's
                  direction.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">WORK HAS NO DIRECTION</Kw>}>
                  Work is just a <b>number</b> with a <b>+ or − sign</b> — it is not a vector.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Same unit as energy · 1 J = 1 kg·m² / s²</Footnote>
        </>
      ),
    },
    {
      navTitle: 'When is Work Zero?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Special Case" title="WHEN IS WORK ZERO?" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <ZeroWorkWall />
                <DiagramCaption>
                  <Kw c="cyan">you push</Kw>
                  <Dot />
                  <Kw c="coral">wall doesn't move</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="FORCE, BUT NO WORK" compact>
                You can push a wall till you're tired — but if it doesn't move,{' '}
                <Kw c="coral">no work is done</Kw> on it.
              </Hero>
              <TakeawayCard title="WORK IS ZERO WHEN…">
                <div>
                  <Kw c="cyan">No force</Kw> → F = 0
                </div>
                <div>
                  <Kw c="coral">No displacement</Kw> → s = 0 (pushing a wall)
                </div>
                <div>
                  <Kw c="yellow">Force ⊥ motion</Kw> → carrying a box while walking
                </div>
              </TakeawayCard>
            </SplitAside>
          </SlideSplit>
          <Footnote>You feel tired because your muscles use energy — but scientifically, W = 0</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Positive & Negative',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Sign of Work" title="POSITIVE & NEGATIVE" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <PositiveNegativeWork />
                <DiagramCaption>
                  <Kw c="coral">up → −W</Kw>
                  <Dot />
                  <Kw c="emerald">down → +W</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHAT THE SIGN MEANS" compact>
                The <Kw c="yellow">+ or − sign</Kw> only tells you whether the force{' '}
                <b>helped</b> the motion or <b>opposed</b> it — it's still just a number.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="emerald">POSITIVE WORK</Kw>}>
                  Force and displacement in the <b>same direction</b> — e.g. pushing a wheelchair
                  forward.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">NEGATIVE WORK</Kw>}>
                  Force <b>opposite</b> to displacement — e.g. a goalkeeper stopping a moving ball.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Throw a ball up — going up, gravity does −ve work; coming down, +ve work. Same force, opposite signs — because the displacement reversed.</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use W = F × s." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Force in the direction of displacement">
                W = F × s
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It" />
              <WorkedExample>
                <GivenRow label={<Kw c="cyan">Force (F)</Kw>} value="50 N" />
                <GivenRow label={<Kw c="emerald">Displacement (s)</Kw>} value="3 m" />
                <Divider />
                <RevealPad>
                  <Calculation>W = 50 × 3</Calculation>
                  <Calculation>
                    = <Kw c="emerald">150 J</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution · force and motion in the same direction</Footnote>
        </>
      ),
    },
  ],
}
