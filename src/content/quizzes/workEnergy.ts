import type { Quiz } from './types'

/**
 * Class 9 · Work & Energy — practice MCQs.
 * This is data, not code: add a question by appending to `questions`.
 */
export const workEnergyQuiz: Quiz = {
  id: 'work-energy-mcq',
  chapterId: 'work-energy',
  title: 'Work & Energy — Practice',
  questions: [
    {
      q: 'What is the SI unit of work?',
      options: ['Joule', 'Newton', 'Watt', 'Pascal'],
      answer: 0,
      explanation: 'Work = force × displacement = newton × metre = joule (J).',
    },
    {
      q: 'A coolie carries a load on his head and walks on a level road. The work done by him on the load is:',
      options: ['Maximum', 'Zero', 'Negative', 'Infinite'],
      answer: 1,
      explanation:
        'The force on the load is vertical (upward) while the displacement is horizontal. Force ⟂ displacement, so W = 0.',
    },
    {
      q: 'The SI unit of power is:',
      options: ['Joule', 'Watt', 'Newton', 'Joule-second'],
      answer: 1,
      explanation: 'Power = work ÷ time = joule ÷ second = watt (W). 1 W = 1 J/s.',
    },
    {
      q: 'The kinetic energy of a body of mass m moving with velocity v is:',
      options: ['mv', '½mv²', 'mgh', '½mv'],
      answer: 1,
      explanation: 'Kinetic energy KE = ½mv² — it depends on mass and the square of speed.',
    },
    {
      q: 'If the velocity of a body is doubled, its kinetic energy becomes:',
      options: ['Double', 'Three times', 'Four times', 'Unchanged'],
      answer: 2,
      explanation: 'KE ∝ v². Doubling v (×2) makes KE ×2² = 4 times.',
    },
    {
      q: 'The potential energy of an object of mass m raised to a height h is:',
      options: ['mgh', '½mv²', 'mg/h', 'mh'],
      answer: 0,
      explanation: 'Gravitational potential energy PE = mgh (m = mass, g = gravity, h = height).',
    },
    {
      q: 'The work-energy theorem states that the work done by the net force on a body equals its:',
      options: [
        'Change in potential energy',
        'Change in kinetic energy',
        'Total mechanical energy',
        'Momentum',
      ],
      answer: 1,
      explanation: 'Work done by the net force = change in kinetic energy (W = ΔKE).',
    },
    {
      q: 'A single fixed pulley has a mechanical advantage of:',
      options: ['1', '2', '½', '0'],
      answer: 0,
      explanation:
        'A fixed pulley only changes the direction of the effort; effort = load, so MA = 1.',
    },
    {
      q: 'Using a single movable pulley, the effort needed to lift a load is about:',
      options: ['Equal to the load', 'Twice the load', 'Half the load', 'Four times the load'],
      answer: 2,
      explanation:
        'A movable pulley gives MA = 2, so effort = load ÷ 2 (but you must pull twice the length of rope).',
    },
    {
      q: 'For a freely falling body, as it falls the energy conversion that takes place is:',
      options: [
        'Kinetic → potential',
        'Potential → kinetic',
        'Heat → kinetic',
        'No conversion',
      ],
      answer: 1,
      explanation:
        'As height decreases, PE decreases and KE increases — potential energy converts to kinetic energy.',
    },
    {
      q: '1 kilowatt-hour (kWh) is equal to:',
      options: ['1000 J', '3600 J', '3.6 × 10⁶ J', '36 × 10⁶ J'],
      answer: 2,
      explanation: '1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. This is the commercial unit of energy.',
    },
    {
      q: 'A machine does 1000 J of work in 5 seconds. Its power is:',
      options: ['200 W', '5000 W', '1005 W', '500 W'],
      answer: 0,
      explanation: 'Power = work ÷ time = 1000 J ÷ 5 s = 200 W.',
    },
  ],
}
