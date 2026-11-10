import type { Topic } from '../types'
import {
  Header,
  Hero,
  WritePad,
  SlideSplit,
  SplitMain,
  SplitAside,
  DiagramCard,
  DiagramCaption,
  Dot,
  Footnote,
  FormulaCard,
  DefinitionStack,
  DefinitionCard,
  PracticeMarker,
  SectionHead,
  WorkedExample,
  GivenRow,
  Divider,
  RevealPad,
  Calculation,
  Kw,
} from '../../components/slide/primitives'
import { HeightDistanceDiagram } from '../../components/diagrams/diagrams'

export const heightAndDistance: Topic = {
  id: 'height-and-distance',
  chapterId: 'height-and-distance',
  title: 'Height and Distance',
  tagline: 'Angles of elevation, depression & right-triangle problems',
  kicker: 'Class 9 Math · Height and Distance',
  icon: 'incline',
  accent: '#a78bfa',
  slides: [
    {
      navTitle: 'The Basic Idea',
      render: () => (
        <>
          <Header kicker="Class 9 Math · Trigonometry" title="HEIGHT & DISTANCE" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <HeightDistanceDiagram />
                <DiagramCaption>
                  <Kw c="yellow">h = height</Kw>
                  <Dot />
                  <Kw c="emerald">d = horizontal distance</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="HOW CAN WE MEASURE THE UNREACHABLE?" compact>
                We can find the <Kw c="yellow">height</Kw> of a tower or tree without climbing it:
                measure how far away we stand and the <Kw c="coral">angle</Kw> at which we look up.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="load" title={<Kw c="cyan">RIGHT TRIANGLE</Kw>}>
                  The height, horizontal distance and line of sight form a right-angled triangle.
                </DefinitionCard>
                <DefinitionCard index="2" variant="effort" title={<Kw c="emerald">ANGLE + DISTANCE</Kw>}>
                  These measurements let us calculate the unknown side.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Model shown: level ground, with the observer's eye height ignored.</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Elevation and Depression',
      render: () => (
        <>
          <Header kicker="Class 9 Math · Angles" title="LOOKING UP OR DOWN" part="PART 02" />
          <WritePad label="Explanation — write here" minHeight={240} />
          <DefinitionStack>
            <DefinitionCard index="↑" variant="effort" title={<Kw c="cyan">ANGLE OF ELEVATION</Kw>}>
              The angle measured <b>upward</b> from the horizontal when looking at an object above us.
            </DefinitionCard>
            <DefinitionCard index="↓" variant="load" title={<Kw c="coral">ANGLE OF DEPRESSION</Kw>}>
              The angle measured <b>downward</b> from the horizontal when looking at an object below us.
            </DefinitionCard>
          </DefinitionStack>
          <Footnote>When horizontal lines are parallel, the angle of depression equals the corresponding angle of elevation.</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Tangent Relation',
      render: () => (
        <>
          <Header kicker="Class 9 Math · Right Triangles" title="CONNECT THE SIDES" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <HeightDistanceDiagram />
                <DiagramCaption>
                  <Kw c="coral">θ = angle of elevation</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="USE THE TANGENT RATIO" compact>
                For angle <Kw c="coral">θ</Kw>, tangent compares the side opposite the angle with the
                side next to it.
              </Hero>
              <FormulaCard label="HEIGHT AND HORIZONTAL DISTANCE">
                tan θ = <Kw c="yellow">h</Kw> ÷ <Kw c="emerald">d</Kw>
              </FormulaCard>
            </SplitAside>
          </SlideSplit>
          <Footnote>Here h is the vertical height and d is the horizontal distance from the object's base.</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Worked Example · 45°',
      render: () => (
        <>
          <Header kicker="Class 9 Math · Worked Example" title="FIND THE TREE'S HEIGHT" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard label="RELATION">
                tan θ = <Kw c="yellow">h</Kw> ÷ <Kw c="emerald">d</Kw>
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="A 45° View" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Angle (θ)</Kw>} value="45°" />
                <GivenRow label={<Kw c="emerald">Distance (d)</Kw>} value="12 m" />
                <GivenRow label={<Kw c="yellow">Height (h)</Kw>} value="?" />
                <Divider />
                <RevealPad>
                  <Calculation>tan 45° = h ÷ 12</Calculation>
                  <Calculation>1 = h ÷ 12</Calculation>
                  <Calculation>h = <Kw c="yellow">12 m</Kw></Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Assume level ground and ignore the observer's eye height.</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Use tan θ = height ÷ horizontal distance to solve the next problem." />
      ),
    },
    {
      navTitle: 'Your Turn · 30°',
      render: () => (
        <>
          <Header kicker="Class 9 Math · Solve It" title="YOUR TURN" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard label="USE THIS VALUE">
                tan 30° = <Kw c="yellow">1</Kw> ÷ <Kw c="emerald">√3</Kw>
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="02" title="Find the Height" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Angle (θ)</Kw>} value="30°" />
                <GivenRow label={<Kw c="emerald">Distance (d)</Kw>} value="10√3 m" />
                <GivenRow label={<Kw c="yellow">Height (h)</Kw>} value="?" />
                <Divider />
                <RevealPad>
                  <Calculation>tan 30° = h ÷ 10√3</Calculation>
                  <Calculation>1 ÷ √3 = h ÷ 10√3</Calculation>
                  <Calculation>h = <Kw c="yellow">10 m</Kw></Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap Reveal Solution to check your working.</Footnote>
        </>
      ),
    },
  ],
}
