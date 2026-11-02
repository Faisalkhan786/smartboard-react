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
import { InclinedPlane } from '../../components/diagrams/diagrams'

export const inclinedPlane: Topic = {
  id: 'inclined-plane',
  chapterId: 'work-energy',
  title: 'Inclined Plane',
  tagline: 'A sloping surface · MA = l ÷ h',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'incline',
  accent: '#34d399',
  slides: [
    {
      navTitle: 'What is an Inclined Plane?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Simple Machines" title="INCLINED PLANE" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <InclinedPlane />
                <DiagramCaption>
                  <Kw c="yellow">l = slope length</Kw>
                  <Dot />
                  <Kw c="emerald">h = height</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHAT IS AN INCLINED PLANE?" compact>
                A <Kw c="emerald">simple machine</Kw>: a flat surface set at a{' '}
                <Kw c="yellow">slope</Kw>, used to raise a heavy load to a higher level with a{' '}
                <Kw c="cyan">smaller force</Kw> than lifting it straight up.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">LESS EFFORT</Kw>}>
                  A gentle slope lets a <b>small push</b> move a <b>heavy load</b> upward.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">LONGER PATH</Kw>}>
                  In return, you move the load a <b>longer distance</b> along the slope.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Everyday examples: wheelchair ramp · staircase · hill roads · loading ramp · slide</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Why It’s Easier',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Inclined Plane" title="WHY IT'S EASIER" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <InclinedPlane />
                <DiagramCaption>
                  <Kw c="cyan">push along l</Kw>
                  <Dot />
                  <Kw c="coral">not lift h at once</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="SAME WORK, SMALLER FORCE" compact>
                The same work <Kw c="yellow">mgh</Kw> is spread over the longer length{' '}
                <Kw c="yellow">l</Kw> — so the force you need is <Kw c="cyan">smaller</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="★" variant="load" title={<Kw c="cyan">GO DEEPER · HIGHER CLASSES</Kw>}>
                  On a slope you only oppose <b>part of gravity</b> (mg sinθ) — you'll study this in
                  higher classes.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>That's why mountain roads zig-zag — a longer, gentler slope is easier to climb.</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Mechanical Advantage',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Concept" title="MECHANICAL ADVANTAGE" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <InclinedPlane />
                <DiagramCaption>
                  <Kw c="cyan">Effort moves l</Kw>
                  <Dot />
                  <Kw c="emerald">Load rises h</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="IDEAL CASE · NO FRICTION" compact>
                <Kw c="cyan">Input work</Kw> = <Kw c="emerald">work done on the load</Kw>.
              </Hero>
              <WritePad label="Derivation" minHeight={260} />
            </SplitAside>
          </SlideSplit>
          <Footnote>Same idea as the pulley: the machine trades a longer distance for a smaller force.</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's apply MA = l ÷ h." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard label="MECHANICAL ADVANTAGE (MA)" note="Also, Effort = Load × h ÷ l">
                MA = <Fraction num="l (length)" den="h (height)" />
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It · Ramp" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Load (L)</Kw>} value="150 N" />
                <GivenRow label={<Kw c="yellow">Length (l)</Kw>} value="3 m" />
                <GivenRow label={<Kw c="emerald">Height (h)</Kw>} value="1 m" />
                <Divider />
                <RevealPad>
                  <Calculation>
                    MA = 3 ÷ 1 = <Kw c="emerald">3</Kw>
                  </Calculation>
                  <Calculation>
                    Effort = 150 × 1 ÷ 3 = <Kw c="cyan">50 N</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution to show the answer · ideal (frictionless) ramp</Footnote>
        </>
      ),
    },
  ],
}
