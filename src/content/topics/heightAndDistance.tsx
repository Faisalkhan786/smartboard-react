import type { Topic } from '../types'
import {
  Header,
  Hero,
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
import {
  ElevationDepressionDiagram,
  HeightDistanceDiagram,
  BrokenTreeQuestionDiagram,
  TreeHeightDiagram,
} from '../../components/diagrams/diagrams'

const DIAGRAM_CARD_STYLE = {
  height: 240,
  flex: '0 0 240px',
  boxSizing: 'border-box' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
}

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
              <DiagramCard style={DIAGRAM_CARD_STYLE}>
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
          <SlideSplit>
            <SplitMain>
              <DiagramCard style={DIAGRAM_CARD_STYLE}>
                <ElevationDepressionDiagram />
                <DiagramCaption>
                  <Kw c="cyan">Both angles are measured from the horizontal</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <DefinitionStack>
                <DefinitionCard index="↑" variant="effort" title={<Kw c="cyan">ANGLE OF ELEVATION</Kw>}>
                  The angle measured <b>upward</b> from the horizontal when looking at an object above us.
                </DefinitionCard>
                <DefinitionCard index="↓" variant="load" title={<Kw c="coral">ANGLE OF DEPRESSION</Kw>}>
                  The angle measured <b>downward</b> from the horizontal when looking at an object below us.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
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
              <DiagramCard style={DIAGRAM_CARD_STYLE}>
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
      navTitle: 'Broken Tree · Will It Touch the Car?',
      hidden: true,
      render: () => (
        <>
          <Header kicker="Class 9 Math · Apply It" title="WILL IT TOUCH THE CAR?" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard style={DIAGRAM_CARD_STYLE}>
                <BrokenTreeQuestionDiagram />
                <DiagramCaption>
                  <Kw c="yellow">Tree shown upright · break point marked</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="THINK ABOUT THE FALL" compact>
                A tree is <Kw c="yellow">25 m</Kw> tall. It breaks <Kw c="coral">8 m</Kw> above the
                ground. The broken part makes an angle of approximately <Kw c="cyan">28.1°</Kw> with
                the ground. A car is parked <Kw c="emerald">15 m</Kw> from the tree's base. Will the
                broken part touch the car?
              </Hero>
            </SplitAside>
          </SlideSplit>
          <Footnote>Assume the tree falls toward the car. The diagram does not show the broken part fallen.</Footnote>
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
              <DiagramCard style={DIAGRAM_CARD_STYLE}>
                <TreeHeightDiagram />
                <DiagramCaption>
                  <Kw c="cyan">tan 45° = height (h) ÷ distance (d)</Kw>
                </DiagramCaption>
              </DiagramCard>
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
