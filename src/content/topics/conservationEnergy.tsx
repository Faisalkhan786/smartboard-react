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
  WorkedExample,
  GivenRow,
  Divider,
  Calculation,
  RevealPad,
  DefinitionStack,
  DefinitionCard,
  Kw,
} from '../../components/slide/primitives'
import { FreeFallEnergy, PendulumSwing } from '../../components/diagrams/diagrams'

export const conservationEnergy: Topic = {
  id: 'conservation-energy',
  chapterId: 'work-energy',
  title: 'Conservation of Energy',
  tagline: 'KE + PE stays constant',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'bolt',
  accent: '#2dd4bf',
  slides: [
    {
      navTitle: 'The Big Idea',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Work & Energy" title="CONSERVATION OF ENERGY" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <FreeFallEnergy />
                <DiagramCaption>
                  <Kw c="coral">PE falls</Kw>
                  <Dot />
                  <Kw c="emerald">KE rises</Kw>
                  <Dot />
                  <Kw c="yellow">total same</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="ENERGY IS NEVER LOST" compact>
                As a ball falls, its PE keeps changing into KE — but their{' '}
                <Kw c="yellow">sum stays exactly the same</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">ONE BECOMES THE OTHER</Kw>}>
                  Potential energy is <b>converted</b> into kinetic energy as the object speeds up.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">THE TOTAL IS FIXED</Kw>}>
                  At every point, <b>KE + PE</b> adds up to the same value.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>True when there is no friction or air resistance to carry energy away</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Law',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · The Rule" title="THE LAW" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Total mechanical energy stays constant">
                KE + PE = constant
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="LAW OF CONSERVATION OF ENERGY" compact>
                Energy can neither be <Kw c="coral">created</Kw> nor <Kw c="coral">destroyed</Kw> —
                only <Kw c="yellow">changed from one form to another</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">TOTAL MECHANICAL ENERGY</Kw>}>
                  The sum <b>KE + PE</b> is called the total mechanical energy.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">BEFORE = AFTER</Kw>}>
                  The total energy before and after any change stays the <b>same</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>One of the most important laws in all of physics</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Free Fall: The Numbers',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · A Falling Object" title="FREE FALL" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="At every height, the total is the same">
                KE + PE = m g h
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="The Three Stages" />
              <TakeawayCard title="FALLING FROM HEIGHT h">
                <div>
                  <Kw c="coral">At the top</Kw> → KE = 0, PE = <b>mgh</b>
                </div>
                <div>
                  <Kw c="yellow">Halfway down</Kw> → KE + PE = <b>mgh</b>
                </div>
                <div>
                  <Kw c="emerald">Just before ground</Kw> → PE = 0, KE = <b>mgh</b>
                </div>
              </TakeawayCard>
            </SplitAside>
          </SlideSplit>
          <Footnote>All the potential energy has become kinetic energy by the bottom</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Pendulum',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · A Swing of Energy" title="THE PENDULUM" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <PendulumSwing />
                <DiagramCaption>
                  <Kw c="coral">ends: max PE</Kw>
                  <Dot />
                  <Kw c="emerald">middle: max KE</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="PE AND KE TRADE PLACES" compact>
                A swinging pendulum keeps turning PE into KE and back again —{' '}
                <Kw c="yellow">the total never changes</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">AT THE ENDS</Kw>}>
                  The bob is highest and momentarily still — <b>maximum PE</b>, zero KE.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">AT THE MIDDLE</Kw>}>
                  The bob is lowest and fastest — <b>maximum KE</b>, least PE.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Friction slowly drains the energy, which is why a real pendulum stops</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use KE + PE = constant." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="All the PE becomes KE: ½ m v² = m g h">
                v = √(2 g h)
              </FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Drop height (h)</Kw>} value="5 m" />
                <GivenRow label={<Kw c="cyan">g</Kw>} value="10 m/s²" />
                <Divider />
                <RevealPad>
                  <Calculation>½mv² = mgh → v² = 2gh</Calculation>
                  <Calculation>v² = 2 × 10 × 5 = 100</Calculation>
                  <Calculation>
                    v = <Kw c="emerald">10 m/s</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution · mass cancels — every object reaches the same speed</Footnote>
        </>
      ),
    },
  ],
}
