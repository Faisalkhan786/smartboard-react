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
  ClassGrid,
  ClassCard,
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
import { Lever, LeverClassDiagram } from '../../components/diagrams/diagrams'

export const lever: Topic = {
  id: 'lever',
  chapterId: 'work-energy',
  title: 'Lever',
  tagline: 'Fulcrum, moments & three classes',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'lever',
  accent: '#a78bfa',
  slides: [
    {
      navTitle: 'What is a Lever?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Simple Machines" title="LEVER" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <Lever />
                <DiagramCaption>
                  <Kw c="coral">Load arm</Kw>
                  <Dot />
                  <Kw c="yellow">Fulcrum</Kw>
                  <Dot />
                  <Kw c="cyan">Effort arm</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHAT IS A LEVER?" compact>
                A <Kw c="yellow">rigid bar</Kw> that turns about a fixed point — the{' '}
                <Kw c="yellow">fulcrum</Kw>. We apply <Kw c="cyan">effort</Kw> to move a{' '}
                <Kw c="coral">load</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">EFFORT ARM</Kw>}>
                  Distance from the <b>fulcrum</b> to the <b>effort</b>.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">LOAD ARM</Kw>}>
                  Distance from the <b>fulcrum</b> to the <b>load</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Three parts — fulcrum, effort, load · examples: seesaw · scissors · crowbar</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Law of the Lever',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Principle of Moments" title="LAW OF THE LEVER" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <Lever />
                <DiagramCaption>
                  <Kw c="coral">Load × Load arm</Kw>
                  <Dot />
                  <Kw c="cyan">Effort × Effort arm</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="WHEN THE LEVER BALANCES" compact>
                The turning effects are equal: <Kw c="coral">moment of load</Kw> ={' '}
                <Kw c="cyan">moment of effort</Kw>.
              </Hero>
              <WritePad label="Derivation" className="lever-derivation-pad" />
            </SplitAside>
          </SlideSplit>
          <Footnote>Moment = force × distance from the fulcrum · ideal (frictionless) lever</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Three Classes of Levers',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Lever" title="THREE CLASSES" part="PART 03" />
          <Hero eyebrow="SORTED BY WHAT SITS IN THE MIDDLE" compact>
            Levers are grouped by the order of <Kw c="yellow">fulcrum</Kw>,{' '}
            <Kw c="coral">load</Kw> and <Kw c="cyan">effort</Kw>.
          </Hero>
          <ClassGrid>
            <ClassCard
              diagram={<LeverClassDiagram kind={1} />}
              index="1"
              title={<Kw c="cyan">CLASS 1</Kw>}
              example={<>MA &gt; 1, = 1 or &lt; 1 · seesaw · scissors · crowbar</>}
            >
              <b>Fulcrum</b> in the middle — between effort and load.
            </ClassCard>
            <ClassCard
              diagram={<LeverClassDiagram kind={2} />}
              index="2"
              title={<Kw c="coral">CLASS 2</Kw>}
              example={<>MA always &gt; 1 · wheelbarrow · nutcracker</>}
            >
              <b>Load</b> in the middle — between fulcrum and effort.
            </ClassCard>
            <ClassCard
              diagram={<LeverClassDiagram kind={3} />}
              index="3"
              title={<Kw c="emerald">CLASS 3</Kw>}
              example={<>MA always &lt; 1 (gains speed) · tongs · forearm</>}
            >
              <b>Effort</b> in the middle — between fulcrum and load.
            </ClassCard>
          </ClassGrid>
          <Footnote>Class 2 always makes work easier · Class 3 trades force for speed &amp; reach</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use the law of the lever." />
      ),
    },
    {
      navTitle: 'Formula & Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="MA & NUMERICAL" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Also, Effort = Load × Load arm ÷ Effort arm">
                MA = <Fraction num="Effort arm" den="Load arm" />
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It · Crowbar" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Load (L)</Kw>} value="200 N" />
                <GivenRow label={<Kw c="coral">Load arm</Kw>} value="0.5 m" />
                <GivenRow label={<Kw c="cyan">Effort arm</Kw>} value="2 m" />
                <Divider />
                <RevealPad>
                  <Calculation>
                    MA = 2 ÷ 0.5 = <Kw c="emerald">4</Kw>
                  </Calculation>
                  <Calculation>
                    Effort = 200 × 0.5 ÷ 2 = <Kw c="cyan">50 N</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution to show the answer · ideal (frictionless) lever</Footnote>
        </>
      ),
    },
  ],
}
