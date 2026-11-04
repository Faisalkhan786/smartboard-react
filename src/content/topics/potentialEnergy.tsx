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
  WorkedExample,
  GivenRow,
  Divider,
  Calculation,
  RevealPad,
  DefinitionStack,
  DefinitionCard,
  Kw,
} from '../../components/slide/primitives'
import { RaisedMassPE, ElasticBowPE, PEtoKE } from '../../components/diagrams/diagrams'

export const potentialEnergy: Topic = {
  id: 'potential-energy',
  chapterId: 'work-energy',
  title: 'Potential Energy',
  tagline: 'Stored energy of position · PE = mgh',
  kicker: 'Class 9 Physics · Work & Energy',
  icon: 'gravity',
  accent: '#a78bfa',
  slides: [
    {
      navTitle: 'What is Potential Energy?',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Work & Energy" title="POTENTIAL ENERGY" part="PART 01" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <RaisedMassPE />
                <DiagramCaption>
                  <Kw c="cyan">lifted mass m</Kw>
                  <Dot />
                  <Kw c="yellow">height h</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="STORED ENERGY" compact>
                Lift an object up and it stores energy because of its <Kw c="yellow">position</Kw> —
                ready to do work when it falls. This is <Kw c="yellow">potential energy</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">WORK GETS STORED</Kw>}>
                  Lifting an object, you do <b>work against gravity</b> — that work is stored as PE.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">HIGHER = MORE PE</Kw>}>
                  The greater the <b>height</b>, the more potential energy it has.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Water in a dam · a book on a shelf · a raised hammer — all store PE</Footnote>
        </>
      ),
    },
    {
      navTitle: 'The Formula',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Derivation" title="THE FORMULA" part="PART 02" />
          <SlideSplit>
            <SplitMain>
              <WritePad label="Derive: PE = m g h" minHeight={260} />
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="GRAVITATIONAL PE" compact>
                An object of mass <i>m</i> raised to height <i>h</i> stores{' '}
                <Kw c="yellow" big>PE = m g h</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">WORK DONE LIFTING IT</Kw>}>
                  Equals the work to raise it: force <b>(m g)</b> × height <b>(h)</b> = <b>mgh</b>.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">MEASURED IN JOULES</Kw>}>
                  PE is energy, so its unit is the <b>joule (J)</b>.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>Work to lift = (m g) × h → stored as PE = m g h</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Two Kinds of PE',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Position or Shape" title="TWO KINDS OF PE" part="PART 03" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <ElasticBowPE />
                <DiagramCaption>
                  <Kw c="coral">stretched shape</Kw>
                  <Dot />
                  <Kw c="yellow">stores energy</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="POSITION OR SHAPE" compact>
                PE is stored either by an object's <Kw c="yellow">height</Kw> or by its{' '}
                <Kw c="yellow">changed shape</Kw>.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">GRAVITATIONAL PE</Kw>}>
                  Due to <b>height</b> above the ground — e.g. water in a dam. <b>(PE = mgh)</b>
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">ELASTIC PE</Kw>}>
                  Due to a <b>stretched or compressed</b> shape — e.g. a drawn bow, a wound spring.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>PE is measured from a chosen reference level (usually the ground)</Footnote>
        </>
      ),
    },
    {
      navTitle: 'Stored → Released',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · PE → KE" title="STORED → RELEASED" part="PART 04" />
          <SlideSplit>
            <SplitMain>
              <DiagramCard>
                <PEtoKE />
                <DiagramCaption>
                  <Kw c="cyan">PE at the top</Kw>
                  <Dot />
                  <Kw c="emerald">KE at the bottom</Kw>
                </DiagramCaption>
              </DiagramCard>
            </SplitMain>
            <SplitAside>
              <Hero eyebrow="READY TO WORK" compact>
                Let it go and the stored PE turns into <Kw c="yellow">kinetic energy</Kw> — motion
                that does work.
              </Hero>
              <DefinitionStack>
                <DefinitionCard index="1" variant="effort" title={<Kw c="cyan">DAM & BOW</Kw>}>
                  Falling dam water spins a <b>turbine</b>; a released bow sends the <b>arrow</b> flying.
                </DefinitionCard>
                <DefinitionCard index="2" variant="load" title={<Kw c="coral">A FALLING HAMMER</Kw>}>
                  A raised hammer's PE → KE → drives the nail.
                </DefinitionCard>
              </DefinitionStack>
            </SplitAside>
          </SlideSplit>
          <Footnote>This PE ↔ KE exchange leads to the next idea: conservation of energy</Footnote>
        </>
      ),
    },
    {
      navTitle: '— Practice Time —',
      render: () => (
        <PracticeMarker sub="Concept done — now let's use PE = m g h." />
      ),
    },
    {
      navTitle: 'Numerical',
      render: () => (
        <>
          <Header kicker="Class 9 Physics · Solve It" title="NUMERICAL" part="PART 05" />
          <SlideSplit>
            <SplitMain>
              <FormulaCard note="Gravitational potential energy">PE = m g h</FormulaCard>
            </SplitMain>
            <SplitAside>
              <SectionHead num="01" title="Try It" />
              <WorkedExample>
                <GivenRow label={<Kw c="coral">Mass (m)</Kw>} value="2 kg" />
                <GivenRow label={<Kw c="cyan">Height (h)</Kw>} value="5 m" />
                <Divider />
                <RevealPad>
                  <Calculation>PE = 2 × 10 × 5</Calculation>
                  <Calculation>
                    = <Kw c="emerald">100 J</Kw>
                  </Calculation>
                </RevealPad>
              </WorkedExample>
            </SplitAside>
          </SlideSplit>
          <Footnote>Tap ✨ Reveal / Hide Solution · take g = 10 m/s² for simple numbers</Footnote>
        </>
      ),
    },
  ],
}
