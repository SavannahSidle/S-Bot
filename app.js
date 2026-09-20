const decisionInput = document.querySelector('#decision');
const results = document.querySelector('#results');
const comparison = document.querySelector('#comparison');
const error = document.querySelector('#error');

const badIdeas = [
  'Should I start another business this week?',
  'Should I buy cheap land with a deeply suspicious house on it?',
  'Should I keep every animal because each one is special?',
  'Should I reorganize the entire house tonight?',
  'Should I build another website before finishing the other ones?',
  'Should I learn a completely new skill at 1 a.m.?',
  'Should I turn my space obsession into an entire research project?',
  'Should I start another hobby that requires specialized equipment?',
  'Should I publicly fight this institution until somebody develops a conscience?'
];

const profiles = [
  {
    id: 'animal',
    match: /animal|wildlife|fauna|species|zoolog|herpet|gecko|lizard|skink|chameleon|frog|toad|newt|salamander|axolotl|caecilian|amphibian|snake|boa|python|reptile|turtle|tortoise|crocodil|alligator|pet|husbandry|enclosure|vivarium|terrarium|culture|feeder|beetle|isopod|springtail|arachnid|spider|tarantula|scorpion|insect|invertebrate|invert|bug|mantis|moth|butterfl|centipede|millipede|crustacean|cephalopod|octopus|rare species|elusive/i,
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
    id: 'space',
    match: /space|astronomy|planet|moon|mars|star|galaxy|universe|cosmos|alien|nasa|telescope|rocket/i,
    score: 83,
    verdict: 'Yes. Go investigate the enormous horrifying universe.',
    summary: 'Space is a legitimate interest with endless room for science, visual storytelling, research, and magnificently unsettling facts. Give the curiosity a destination before it consumes forty browser tabs.',
    timeline: [
      ['Tomorrow', 'You know six alarming things about a planet nobody else has heard of.'],
      ['One month', 'The rabbit hole becomes a coherent reading, art, or research project.'],
      ['One year', 'You have developed actual expertise instead of merely collecting cosmic dread.'],
      ['Five years', 'The universe remains indifferent, but your portfolio looks excellent.']
    ],
    chore: 'Choose one cosmic question.',
    choreCopy: 'Pick a planet, mission, phenomenon, interface problem, or scientific mystery. The entire universe is considered excessive scope.',
    failure: 'Infinite curiosity meets finite executive function.',
    failureCopy: 'You consume fascinating fragments forever without turning any of them into something you can keep or share.',
    step: 'Choose one space question and make one page about it.'
  },
  {
    id: 'justice',
    match: /justice|advocacy|petition|rights|discrimination|racism|indigenous|mi.?kmaq|disability|accessibility|institution|government|policy|protest|campaign|accountab/i,
    score: 78,
    verdict: 'Your anger has evidence. Give it a target and a paper trail.',
    summary: 'You care because something real is wrong. The strongest move converts outrage into a specific demand, documented evidence, and pressure aimed at someone with the power to act.',
    timeline: [
      ['Tomorrow', 'The issue is named clearly instead of living as radioactive fury.'],
      ['One month', 'Evidence, allies, and a concrete demand create traction.'],
      ['One year', 'The campaign has either moved policy or exposed exactly who blocked it.'],
      ['Five years', 'The record proves people warned them long before they pretended to discover the problem.']
    ],
    chore: 'Define the decision-maker and the demand.',
    choreCopy: 'Name who can change the outcome, what exact action is required, what evidence supports it, and what happens if they ignore it.',
    failure: 'You become the entire unpaid justice department.',
    failureCopy: 'Institutions survive by exhausting the person who cares most. Sustainable pressure needs boundaries, allies, and reusable evidence.',
    step: 'Write one sentence naming the harm, target, and demanded action.'
  },
  {
    id: 'hobby',
    match: /hobby|paint|painting|art|draw|drawing|dance|dancing|hip.?hop|music|concert|craft|colour|color|sew|knit|collect|garden|photography|read|reading/i,
    score: 76,
    verdict: 'Joy is allowed to exist without becoming a business plan.',
    summary: 'This hobby can earn its place by making life more alive. It does not require a brand identity, an inventory system, or a five-year monetization strategy.',
    timeline: [
      ['Tomorrow', 'You remember that being interested in things is actually delightful.'],
      ['One month', 'A light routine lets skill grow without turning joy into homework.'],
      ['One year', 'You have made, learned, or experienced something that belongs entirely to you.'],
      ['Five years', 'The hobby either deepens beautifully or leaves behind good memories instead of guilt.']
    ],
    chore: 'Protect a small amount of play time.',
    choreCopy: 'Decide the minimum space, cost, and frequency. Keep the setup easy enough that starting does not require a minor military operation.',
    failure: 'The hobby gets promoted into unpaid employment.',
    failureCopy: 'Tracking, buying, perfecting, and monetizing slowly murder the part that felt fun.',
    step: 'Do the hobby once with supplies you already have.'
  },
  {
    id: 'project',
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
    id: 'purchase',
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
    id: 'organize',
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
    id: 'general',
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

const toneScripts = {
  animal: {
    gentle: {
      scoreShift: 8,
      verdict: 'You have a huge heart. Let’s make sure it has enough hands.',
      summary: 'This could bring you real joy. A short care trial will show whether the daily reality fits your life as warmly as the idea does.',
      timeline: [
        ['Tomorrow', 'You feel excited, connected, and very ready to love this creature.'],
        ['One month', 'The routine becomes clearer and you learn which parts feel easy or heavy.'],
        ['One year', 'A sustainable system lets the joy stay larger than the work.'],
        ['Five years', 'A cared-for animal remains part of your life because the plan protected you both.']
      ],
      chore: 'Try the care routine before committing.',
      choreCopy: 'Write the weekly tasks and practise them using the animals and responsibilities already in your life.',
      failure: 'Your energy gets stretched too thin.',
      failureCopy: 'That would mean the timing or setup needs adjustment, rather than saying anything bad about how much you care.',
      step: 'Make a kind, realistic seven-day care plan.'
    },
    brutal: {
      scoreShift: -16,
      verdict: 'Put the enclosure down. You already operate a zoo held together by rage and extension cords.',
      summary: 'You saw one moist little face and immediately volunteered for years of poop, electricity bills, emergency feeders, and explaining why another plastic tub is in the kitchen. The animal is innocent. Your impulse control is the exotic species here.',
      timeline: [
        ['Tomorrow', 'You name it, photograph it, and invent a bloodline worthy of medieval royalty.'],
        ['One month', 'A feeder culture escapes. The house gains a new sovereign nation.'],
        ['One year', 'You whisper “I fucking hate fruit flies” while preparing fruit flies.'],
        ['Five years', 'The animal is thriving. You have become a haunted heating-and-misting technician.']
      ],
      chore: 'Count every existing animal task, coward.',
      choreCopy: 'Feeding, cleaning, cultures, veterinary care, humidity, power, travel coverage, and locating whatever tiny idiot vanished behind the cork bark.',
      failure: 'The dopamine dies. The feces achieve tenure.',
      failureCopy: 'Your exciting new companion becomes another recurring obligation staring through glass while you fantasize about living in an empty white room.',
      step: 'Survive seven days pretending you already own it.'
    }
  },
  space: {
    gentle: {
      scoreShift: 8,
      verdict: 'Your curiosity deserves somewhere beautiful to go.',
      summary: 'Space can become a calming interest, a creative project, or a serious area of knowledge. Choose one small mystery and let yourself enjoy discovering it.',
      timeline: [
        ['Tomorrow', 'You follow one fascinating question without needing to master everything.'],
        ['One month', 'Your favourite discoveries begin forming a meaningful collection.'],
        ['One year', 'Curiosity has grown into knowledge, art, research, or all three.'],
        ['Five years', 'The interest still expands with you because wonder has no expiry date.']
      ],
      chore: 'Give the curiosity one gentle boundary.',
      choreCopy: 'Choose one topic and one way to explore it, such as reading, drawing, building, or writing.',
      failure: 'The subject becomes too enormous to begin.',
      failureCopy: 'One small question creates a doorway into the universe without requiring you to swallow it whole.',
      step: 'Choose one cosmic mystery to explore for twenty minutes.'
    },
    brutal: {
      scoreShift: -5,
      verdict: 'Sure. Study the infinite void. It is somehow less chaotic than your project list.',
      summary: 'You looked upward and decided thirteen billion years of cosmic history needed your immediate personal supervision. NASA can stand down. Savannah has opened Wikipedia at 1:46 a.m.',
      timeline: [
        ['Tomorrow', 'You explain tidal locking to a family member who made the mistake of standing nearby.'],
        ['One month', 'A telescope appears. Ottawa clouds over permanently out of spite.'],
        ['One year', 'You possess terrifying knowledge about stellar death and no clean kitchen counter.'],
        ['Five years', 'The sun expands. Your original reading list remains 62 percent complete.']
      ],
      chore: 'Select one planet, you greedy little cosmologist.',
      choreCopy: 'The observable universe contains roughly two trillion galaxies. Your available evening contains three usable hours and one migraine.',
      failure: 'You research everything and produce fuck-all.',
      failureCopy: 'The browser becomes a digital planetarium where facts enter, orbit briefly, and disappear into a black hole labelled “I’ll organize this later.”',
      step: 'Make one finished thing about one space question.'
    }
  },
  justice: {
    gentle: {
      scoreShift: 8,
      verdict: 'This matters, and you deserve support while pursuing it.',
      summary: 'Your anger is carrying information about harm and responsibility. A focused goal, good records, and shared effort can protect your energy while strengthening the work.',
      timeline: [
        ['Tomorrow', 'The problem and desired change become easier to explain.'],
        ['One month', 'Evidence and allies make the effort stronger and less lonely.'],
        ['One year', 'Progress is visible, even if the institution moved painfully slowly.'],
        ['Five years', 'The record helps future people push farther than one person could alone.']
      ],
      chore: 'Choose the smallest meaningful outcome.',
      choreCopy: 'Identify the person with authority, the action you want, and the support that would keep this sustainable.',
      failure: 'The work consumes the person trying to help.',
      failureCopy: 'Rest, limits, and shared responsibility protect the work. You were never meant to carry an entire broken system alone.',
      step: 'Write the exact change you want in one sentence.'
    },
    brutal: {
      scoreShift: -3,
      verdict: 'The institution has deployed its strongest defence: hoping you get tired and go away.',
      summary: 'They buried the obvious human problem under forms, committees, vague concern, and one employee named Linda who keeps forwarding your email into the abyss. Rage is justified. Rage without a target becomes free central heating for bureaucracy.',
      timeline: [
        ['Tomorrow', 'A polished complaint enters the system. The system pretends it cannot read.'],
        ['One month', 'You have receipts, names, dates, and the patience of a recently awakened volcano.'],
        ['One year', 'Someone announces your demand as their exciting new initiative. Fascinating.'],
        ['Five years', 'The institution celebrates progress after being dragged toward it by the ankle.']
      ],
      chore: 'Build the file that ruins their convenient amnesia.',
      choreCopy: 'Dates, names, evidence, policy, harm, demand, deadline, escalation route. Make institutional denial require Olympic-level lying.',
      failure: 'You become an unpaid full-time employee of their moral failure.',
      failureCopy: 'The cause deserves strategy. Your nervous system does not owe a blood sacrifice to every administrator hiding behind procedure.',
      step: 'Name the accountable person and send one documented demand.'
    }
  },
  hobby: {
    gentle: {
      scoreShift: 12,
      verdict: 'Yes. You are allowed to do something because it feels good.',
      summary: 'A hobby can restore energy, curiosity, and identity. Keep the entry point easy and let enjoyment decide whether it grows.',
      timeline: [
        ['Tomorrow', 'You spend time doing something that feels like you.'],
        ['One month', 'A flexible rhythm makes the hobby easier to return to.'],
        ['One year', 'Skill grows naturally because the activity stayed welcoming.'],
        ['Five years', 'You keep what brought joy and release what no longer fits.']
      ],
      chore: 'Make starting almost effortless.',
      choreCopy: 'Use what you own, prepare one accessible spot, and choose a tiny session with no performance requirement.',
      failure: 'Pressure replaces play.',
      failureCopy: 'The hobby can remain meaningful even when it is inconsistent, imperfect, or completely private.',
      step: 'Spend twenty minutes doing it badly and happily.'
    },
    brutal: {
      scoreShift: -9,
      verdict: 'Enjoy the hobby. Do not immediately give it a logo, LLC, and climate-controlled supply room.',
      summary: 'You are permitted to paint one object without launching Savannah Studios, designing a product line, researching wholesale packaging, and resenting customers who do not yet exist.',
      timeline: [
        ['Tomorrow', 'You experience joy and immediately begin searching for professional equipment.'],
        ['One month', 'Supplies occupy a room. Finished pieces occupy one suspicious shelf corner.'],
        ['One year', 'The hobby waits patiently beneath seventeen systems for managing the hobby.'],
        ['Five years', 'You rediscover $900 of materials and announce, “Oh my God, I loved this.”']
      ],
      chore: 'Do the actual hobby before buying its ceremonial accessories.',
      choreCopy: 'If the activity requires reorganizing the basement, registering a domain, or watching forty-two reviews, you have wandered into side-quest hell.',
      failure: 'Consumerism eats the hobby and burps up storage problems.',
      failureCopy: 'Acquiring the identity of a person who does the thing becomes easier than doing the thing badly for twenty minutes.',
      step: 'Use existing supplies once before purchasing anything.'
    }
  },
  project: {
    gentle: {
      scoreShift: 10,
      verdict: 'This idea has real potential. Give it a small, finishable beginning.',
      summary: 'Your ideas are one of your strengths. A tiny first version can protect the excitement and help you discover whether this deserves deeper attention.',
      timeline: [
        ['Tomorrow', 'You capture the idea while the energy is fresh.'],
        ['One month', 'A focused prototype gives you something real to test and share.'],
        ['One year', 'The strongest parts grow while unnecessary features fall away.'],
        ['Five years', 'The finished work becomes evidence of your creativity and judgment.']
      ],
      chore: 'Choose one complete user experience.',
      choreCopy: 'Give one person one useful outcome. Save every additional idea somewhere safe for later.',
      failure: 'The scope grows faster than your available energy.',
      failureCopy: 'A smaller version can prevent overwhelm and create the satisfaction of actually finishing.',
      step: 'Describe the smallest lovable version in one sentence.'
    },
    brutal: {
      scoreShift: -13,
      verdict: 'Congratulations on founding another company with one employee, no budget, and the attention span of a raccoon in a jewellery store.',
      summary: 'You have once again mistaken receiving an idea for signing a legally binding contract with God. By breakfast, this will have branding, twelve features, a social mission, and absolutely no finished settings page.',
      timeline: [
        ['Tomorrow', 'Logo complete. Domain purchased. Core function remains a rumour.'],
        ['One month', 'You add a dashboard because apparently every thought needs analytics.'],
        ['One year', 'A beautiful prototype lies in GitHub like an elaborately decorated corpse.'],
        ['Five years', 'You call it “ahead of its time” because “abandoned on Tuesday” hurts.']
      ],
      chore: 'Build the one fucking thing it is supposed to do.',
      choreCopy: 'One user. One problem. One action. If you add subscriptions before that works, Future Savannah gets to throw your laptop into the Rideau Canal.',
      failure: 'Feature creep eats the body before it is cold.',
      failureCopy: 'You will lovingly polish seventeen side quests until the original purpose is found dead behind an accordion menu.',
      step: 'Delete the feature list. Ship one working interaction.'
    }
  },
  purchase: {
    gentle: {
      scoreShift: 5,
      verdict: 'It may be worth buying if the full cost still feels comfortable.',
      summary: 'You deserve useful and enjoyable things. Looking at the whole first-year cost will help you choose without turning excitement into later stress.',
      timeline: [
        ['Tomorrow', 'You enjoy researching and imagining how it could improve daily life.'],
        ['One month', 'The practical value becomes much clearer after the novelty settles.'],
        ['One year', 'A good purchase keeps earning its space and cost.'],
        ['Five years', 'The best choice is remembered for usefulness rather than financial pressure.']
      ],
      chore: 'Calculate the comfortable all-in price.',
      choreCopy: 'Include setup, maintenance, accessories, subscriptions, and what the money would otherwise support.',
      failure: 'The purchase creates more stress than ease.',
      failureCopy: 'Waiting or choosing a smaller option can protect the part of the idea that genuinely matters.',
      step: 'Write the first-year total and revisit it in 48 hours.'
    },
    brutal: {
      scoreShift: -18,
      verdict: 'The Buy button has discovered your exact medical vulnerability: wanting a new life delivered in a cardboard box.',
      summary: 'You are shopping for an alternate timeline where this object makes you organized, productive, rested, and mysteriously free of debt. Canada Post does not deliver personality transformations, babe.',
      timeline: [
        ['Tomorrow', 'Forty-seven comparison tabs. You now hold an unpaid doctorate in model numbers.'],
        ['One month', 'You love it, except for the better one released eleven minutes later.'],
        ['One year', 'The accessory drawer is worth more than a used Honda Civic.'],
        ['Five years', 'The object is obsolete. The payment history remains in the geological record.']
      ],
      chore: 'Look directly at your bank account without mood lighting.',
      choreCopy: 'Add taxes, fees, repairs, accessories, storage, subscriptions, and the financial corpse of whatever priority gets pushed aside.',
      failure: 'You buy the fantasy and receive the object.',
      failureCopy: 'It arrives with a charging cable instead of the competent woodland version of yourself shown in the advertisement.',
      step: 'Calculate the full cost, then close the tab for 48 hours.'
    }
  },
  organize: {
    gentle: {
      scoreShift: 11,
      verdict: 'A little progress could make your space feel much lighter.',
      summary: 'You do not need to solve the whole house. One completed area can reduce visual noise and give you a place to breathe.',
      timeline: [
        ['Tomorrow', 'One finished surface gives you a visible win.'],
        ['One month', 'Simple homes for frequently used things reduce daily friction.'],
        ['One year', 'Small resets prevent the space from becoming overwhelming again.'],
        ['Five years', 'Your home supports your brain because the systems stayed easy.']
      ],
      chore: 'Choose the smallest area that would bring relief.',
      choreCopy: 'Finish that one area completely, including removing trash and donations from the house.',
      failure: 'The task becomes too large to enter.',
      failureCopy: 'Keeping the boundary tiny protects your energy and makes completion much more likely.',
      step: 'Clear one surface, then give yourself permission to stop.'
    },
    brutal: {
      scoreShift: -10,
      verdict: 'You are one storage bin away from inventing a more organized form of the same bullshit.',
      summary: 'Your current strategy is to pull every possession into the open, become psychologically deceased at 14 percent completion, and leave Amanda navigating a domestic obstacle course until spring.',
      timeline: [
        ['Tomorrow', 'You create six labelled piles and lose the label maker inside one of them.'],
        ['One month', 'The donation bag has become a legally recognized piece of furniture.'],
        ['One year', 'A basket marked “deal with later” begins collecting pension.'],
        ['Five years', 'Archaeologists identify several distinct eras of charging cables.']
      ],
      chore: 'Remove actual objects from the actual house.',
      choreCopy: 'Moving crap between attractive containers is spatial money laundering. Trash leaves. Donations leave. The floor is not a transitional storage jurisdiction.',
      failure: 'You detonate the room and abandon the blast site.',
      failureCopy: 'Executive function leaves through a window while every object you have ever owned waits for individual emotional closure.',
      step: 'Fill one exit bag and put it directly outside.'
    }
  },
  general: {
    gentle: {
      scoreShift: 7,
      verdict: 'This is worth exploring in a way that keeps you safe and flexible.',
      summary: 'You can learn more without committing your future self to the entire idea today. A small experiment will give you clearer information.',
      timeline: [
        ['Tomorrow', 'You capture what feels exciting and meaningful.'],
        ['One month', 'A small trial reveals what the idea actually asks from you.'],
        ['One year', 'The useful parts remain and the unnecessary pressure falls away.'],
        ['Five years', 'You are glad you tested reality while protecting the dream.']
      ],
      chore: 'Find the smallest reversible experiment.',
      choreCopy: 'Choose something that teaches you more without demanding a major purchase, promise, or permanent change.',
      failure: 'The idea quietly becomes an obligation.',
      failureCopy: 'A defined test and stopping point can keep curiosity from turning into pressure.',
      step: 'Try the idea for twenty minutes and record how it feels.'
    },
    brutal: {
      scoreShift: -14,
      verdict: 'Future Savannah read the proposal and immediately requested a new identity.',
      summary: 'This plan appears to have been assembled from dopamine, delusion, and the firm belief that next Tuesday contains forty-three hours. It does not. Tuesday has already retained counsel.',
      timeline: [
        ['Tomorrow', 'Unreasonable confidence. Suspicious stationery. A fresh Notes document.'],
        ['One month', 'The boring part arrives and finds the building abandoned.'],
        ['One year', 'You rediscover it and say, “Oh fuck, I forgot about this.”'],
        ['Five years', 'It survives exclusively as a story beginning with “I was going to.”']
      ],
      chore: 'Name the recurring bullshit you are volunteering for.',
      choreCopy: 'Time, money, maintenance, admin, phone calls, storage, emotional labour, and whichever hideous task you are currently pretending will complete itself.',
      failure: 'The plan requires Future Savannah to be a different mammal.',
      failureCopy: 'She remains you, just older, more tired, and furious that you keep mailing chores forward like anthrax.',
      step: 'Do the ugliest twenty-minute part before making any commitment.'
    }
  }
};

const snippyAnswers = {
  animal: {
    gentle: 'Let’s make sure love has a care schedule.',
    honest: 'The animal is perfect. The chores are plotting.',
    brutal: 'Put the enclosure down, David Attenborough.'
  },
  space: {
    gentle: 'Follow the wonder. Pick one star first.',
    honest: 'The universe is huge. Your evening is not.',
    brutal: 'NASA can relax. You opened Wikipedia.'
  },
  justice: {
    gentle: 'Your anger is telling the truth. Protect your energy.',
    honest: 'Bring evidence, allies, and a deadline.',
    brutal: 'Bureaucracy has chosen violence by PDF again.'
  },
  hobby: {
    gentle: 'Yes. Joy does not need to earn rent.',
    honest: 'Do the hobby before building its filing system.',
    brutal: 'Buy nothing. Touch the supplies you already abandoned.'
  },
  project: {
    gentle: 'Start tiny. Your idea deserves to survive.',
    honest: 'One function first, empire later.',
    brutal: 'The GitHub graveyard demands another corpse.'
  },
  purchase: {
    gentle: 'Maybe. Let the full price answer too.',
    honest: 'You want the future identity bundled with it.',
    brutal: 'The Buy button found your medical weakness.'
  },
  organize: {
    gentle: 'One finished corner can still change the room.',
    honest: 'The entire house is not one task.',
    brutal: 'A storage bin cannot launder physical bullshit.'
  },
  general: {
    gentle: 'Try the smallest safe version.',
    honest: 'Interesting. Suspicious. Requires logistics.',
    brutal: 'Future Savannah has entered witness protection.'
  }
};

document.querySelector('#surprise').addEventListener('click', () => {
  decisionInput.value = badIdeas[Math.floor(Math.random() * badIdeas.length)];
  decisionInput.focus();
});

document.querySelector('#simulate').addEventListener('click', simulate);
document.querySelector('#compare').addEventListener('click', compareAll);
decisionInput.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') simulate();
});

function simulate() {
  const decision = decisionInput.value.trim();
  if (!validateDecision(decision)) return;
  error.textContent = '';
  const honesty = document.querySelector('input[name="honesty"]:checked').value;
  const { profile, tone, score } = judge(decision, honesty);

  document.querySelector('#snip').textContent = snippyAnswers[profile.id][honesty];
  document.querySelector('#verdict').textContent = tone.verdict;
  document.querySelector('#verdict-copy').textContent = tone.summary;
  document.querySelector('#score').textContent = `${score}%`;
  document.querySelector('#chore').textContent = tone.chore;
  document.querySelector('#chore-copy').textContent = tone.choreCopy;
  document.querySelector('#failure').textContent = tone.failure;
  document.querySelector('#failure-copy').textContent = tone.failureCopy;
  document.querySelector('#next-step').textContent = tone.step;
  document.querySelector('#timeline').innerHTML = tone.timeline
    .map(([time, copy]) => `<article><small>${time.toUpperCase()}</small><p>${copy}</p></article>`)
    .join('');

  comparison.classList.add('hidden');
  results.classList.remove('hidden');
  requestAnimationFrame(() => { document.querySelector('#meter-fill').style.width = `${score}%`; });
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateDecision(decision) {
  if (decision) return true;
  error.textContent = 'I cannot judge an empty void. Give me the questionable decision.';
  decisionInput.focus();
  return false;
}

function judge(decision, honesty) {
  const profile = profiles.find(item => item.match.test(decision));
  const tone = honesty === 'honest' ? profile : toneScripts[profile.id][honesty];
  const scoreShift = honesty === 'honest' ? 0 : tone.scoreShift;
  const wobble = [...decision].reduce((total, char) => total + char.charCodeAt(0), 0) % 9 - 4;
  const score = Math.max(4, Math.min(96, profile.score + scoreShift + wobble));
  return { profile, tone, score };
}

function compareAll() {
  const decision = decisionInput.value.trim();
  if (!validateDecision(decision)) return;
  error.textContent = '';
  const labels = {
    gentle: 'GENTLE SUPPORT',
    honest: 'SAVANNAH HONEST',
    brutal: 'BRUTAL: NO SURVIVORS'
  };

  document.querySelector('#comparison-grid').innerHTML = ['gentle', 'honest', 'brutal']
    .map(honesty => {
      const { profile, tone, score } = judge(decision, honesty);
      return `
        <article class="mode-card ${honesty}">
          <p class="mode-name">${labels[honesty]}</p>
          <p class="mode-snip">${snippyAnswers[profile.id][honesty]}</p>
          <h3>${tone.verdict}</h3>
          <p class="mode-summary">${tone.summary}</p>
          <div class="mode-score"><span>Worth the chaos?</span><strong>${score}%</strong></div>
          <div class="mode-detail"><small>PRESENT-DAY CHORE</small><p>${tone.chore}</p></div>
          <div class="mode-detail"><small>LIKELY POINT OF DEATH</small><p>${tone.failure}</p></div>
          <div class="mode-detail"><small>TINY NEXT STEP</small><p class="mode-step">${tone.step}</p></div>
        </article>`;
    })
    .join('');

  results.classList.add('hidden');
  comparison.classList.remove('hidden');
  comparison.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelector('#copy-step').addEventListener('click', async event => {
  const text = document.querySelector('#next-step').textContent;
  await navigator.clipboard.writeText(text);
  event.currentTarget.textContent = 'Copied. Dammit.';
  setTimeout(() => { event.currentTarget.textContent = 'Copy tiny step'; }, 1600);
});
