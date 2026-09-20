const decisionInput = document.querySelector('#decision');
const results = document.querySelector('#results');
const error = document.querySelector('#error');

const badIdeas = [
  'Should I start another business this week?',
  'Should I buy cheap land with a deeply suspicious house on it?',
  'Should I keep every animal because each one is special?',
  'Should I reorganize the entire house tonight?',
  'Should I build another website before finishing the other ones?',
  'Should I learn a completely new skill at 1 a.m.?'
];

const profiles = [
  {
    match: /animal|gecko|frog|newt|snake|reptile|pet|culture|beetle|isopod/i,
    score: 37,
    verdict: 'You love the creature. You do not love its seventeen recurring chores.',
    summary: 'Future Savannah reports that the animal remains adorable. Its enclosure has become a tiny biological corporation with you as the unpaid night custodian.',
    timeline: [
      ['Tomorrow', 'Pure delight. Photos are taken. A name with lore is assigned.'],
      ['One month', 'Supplies have multiplied through a process science cannot explain.'],
      ['One year', 'You resent one specific maintenance task with biblical intensity.'],
      ['Five years', 'Either a beloved permanent resident or an elaborate hostage situation.']
    ],
    chore: 'Write its complete weekly care list first.',
    choreCopy: 'Include feeding, cleaning, cultures, veterinary care, supply runs, and what happens during illness or travel.',
    failure: 'The novelty leaves. The poop remains.',
    failureCopy: 'The plan dies when daily maintenance competes with existing animals, work, family, and your remaining mortal life.',
    step: 'Make a seven-day care checklist before acquiring anything.'
  },
  {
    match: /business|website|app|project|game|build|create|write|book|study|paper/i,
    score: 72,
    verdict: 'Annoyingly, this one might actually be good.',
    summary: 'The idea has legs. Future Savannah is requesting a tiny version before Present Savannah accidentally constructs an empire, payment system, merch line, and tragic origin story.',
    timeline: [
      ['Tomorrow', 'The name, logo, domain, and emotional mythology are complete.'],
      ['One month', 'The prototype works. Three unrelated features have appeared.'],
      ['One year', 'It is either a portfolio jewel or a gorgeous abandoned city.'],
      ['Five years', 'Someone calls you an overnight success. You become briefly homicidal.']
    ],
    chore: 'Define the embarrassingly small version.',
    choreCopy: 'One user, one problem, one complete action. Everything else goes into the future-creep cemetery.',
    failure: 'Expansion before completion.',
    failureCopy: 'The project gets buried under features, polish, and five better ideas conceived while fixing one button.',
    step: 'Write one sentence describing the smallest usable version.'
  },
  {
    match: /buy|land|house|car|mac|laptop|headphone|order|purchase|sale/i,
    score: 48,
    verdict: 'The object is calling to you. Unfortunately, so is the invoice.',
    summary: 'Future Savannah confirms the purchase is exciting. Future Bank Account has declined to comment and was last seen walking into the sea.',
    timeline: [
      ['Tomorrow', 'Research tabs reproduce until the browser becomes structurally unsound.'],
      ['One month', 'Either delighted with the purchase or stalking a slightly better version.'],
      ['One year', 'The useful object survives. The fantasy attached to it has quietly died.'],
      ['Five years', 'You remember the monthly cost. You do not remember the dopamine.']
    ],
    chore: 'Price the whole decision.',
    choreCopy: 'Count fees, maintenance, storage, setup, repairs, subscriptions, and the other thing you must sacrifice.',
    failure: 'Buying the future identity bundled with it.',
    failureCopy: 'The purchase cannot personally transform you into an organized woodland homeowner with twelve functioning hobbies.',
    step: 'Write the all-in first-year cost and wait 48 hours.'
  },
  {
    match: /organize|clean|declutter|donate|room|closet|basement|move/i,
    score: 64,
    verdict: 'Yes, but the entire house is not one task.',
    summary: 'Future Savannah lives in less chaos, but only because one tiny physical zone was finished before opening twelve archaeological digs.',
    timeline: [
      ['Tomorrow', 'One cleared surface creates a suspicious amount of peace.'],
      ['One month', 'The system survives if putting things away takes under thirty seconds.'],
      ['One year', 'Half the categories are obsolete. This is normal and rude.'],
      ['Five years', 'You own fewer things. Somehow, cables still breed.']
    ],
    chore: 'Choose one visible square metre.',
    choreCopy: 'Finish it completely. Trash leaves. Donations leave. Items receive actual homes, not temporary diplomatic immunity.',
    failure: 'Making a larger mess to organize the first mess.',
    failureCopy: 'Everything gets pulled out, your energy dies, and the room becomes a crime scene with baskets.',
    step: 'Fill one trash bag or clear one surface, then stop.'
  },
  {
    match: /.*/,
    score: 58,
    verdict: 'Possible. Suspicious. Requires one boring act of reality.',
    summary: 'Future Savannah says the idea could work, provided Present Savannah stops treating logistics as a hateful little epilogue.',
    timeline: [
      ['Tomorrow', 'The idea is shiny, emotionally compelling, and basically perfect.'],
      ['One month', 'The first repetitive task appears wearing a tiny executioner hood.'],
      ['One year', 'What survived became real. Everything else became lore.'],
      ['Five years', 'You are grateful you started small, or furious that you did not.']
    ],
    chore: 'Identify the recurring cost in time and energy.',
    choreCopy: 'Every future story comes with a present-day chore. Name it before it begins feeding on the calendar.',
    failure: 'Relying on Future Savannah to become a different species.',
    failureCopy: 'She has the same nervous system, the same twenty-four hours, and probably several new tabs open.',
    step: 'Test the idea for twenty minutes without buying anything.'
  }
];

const toneChanges = {
  gentle: {
    suffix: ' You are allowed to try it without promising your entire bloodline to it.',
    scoreShift: 6
  },
  honest: { suffix: '', scoreShift: 0 },
  brutal: {
    suffix: ' If this requires a personality transplant, the project is already deceased.',
    scoreShift: -7
  }
};

document.querySelector('#surprise').addEventListener('click', () => {
  decisionInput.value = badIdeas[Math.floor(Math.random() * badIdeas.length)];
  decisionInput.focus();
});

document.querySelector('#simulate').addEventListener('click', simulate);
decisionInput.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') simulate();
});

function simulate() {
  const decision = decisionInput.value.trim();
  if (!decision) {
    error.textContent = 'I cannot judge an empty void. Give me the questionable decision.';
    decisionInput.focus();
    return;
  }
  error.textContent = '';
  const profile = profiles.find(item => item.match.test(decision));
  const honesty = document.querySelector('input[name="honesty"]:checked').value;
  const tone = toneChanges[honesty];
  const wobble = [...decision].reduce((total, char) => total + char.charCodeAt(0), 0) % 9 - 4;
  const score = Math.max(4, Math.min(96, profile.score + tone.scoreShift + wobble));

  document.querySelector('#verdict').textContent = profile.verdict;
  document.querySelector('#verdict-copy').textContent = profile.summary + tone.suffix;
  document.querySelector('#score').textContent = `${score}%`;
  document.querySelector('#chore').textContent = profile.chore;
  document.querySelector('#chore-copy').textContent = profile.choreCopy;
  document.querySelector('#failure').textContent = profile.failure;
  document.querySelector('#failure-copy').textContent = profile.failureCopy;
  document.querySelector('#next-step').textContent = profile.step;
  document.querySelector('#timeline').innerHTML = profile.timeline
    .map(([time, copy]) => `<article><small>${time.toUpperCase()}</small><p>${copy}</p></article>`)
    .join('');

  results.classList.remove('hidden');
  requestAnimationFrame(() => { document.querySelector('#meter-fill').style.width = `${score}%`; });
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelector('#copy-step').addEventListener('click', async event => {
  const text = document.querySelector('#next-step').textContent;
  await navigator.clipboard.writeText(text);
  event.currentTarget.textContent = 'Copied. Dammit.';
  setTimeout(() => { event.currentTarget.textContent = 'Copy tiny step'; }, 1600);
});
