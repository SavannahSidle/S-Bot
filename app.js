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
    id: 'qalipu',
    match: /qalipu|mi.?kmaq|mi.?kmaw|l.?nu|ktaqmkuk|newfoundland indigenous|cultural reconnect|indigenous identity|band member|status card|scis|kinship|land acknowledgement|traditional knowledge|language reclaim/i,
    score: 86,
    verdict: 'Connection is built through relationship, place, learning, and showing up.',
    summary: 'Qalipu identity lives within a specific Ktaqmkuk Mi’kmaq history shaped by continuity, disruption, family, community, and cultural reclamation. Approach the decision with humility, accurate sources, and room for connection to grow without demanding a performance of identity.',
    timeline: [
      ['Tomorrow', 'You identify the actual connection you want instead of measuring whether you feel “enough.”'],
      ['One month', 'Community sources, stories, language, place names, or an event create a real point of contact.'],
      ['One year', 'Repeated participation feels more grounded than a one-time symbolic gesture.'],
      ['Five years', 'Knowledge, relationships, and practice form a living connection that can be carried forward.']
    ],
    chore: 'Choose one relationship-based action.',
    choreCopy: 'Use Qalipu and Mi’kmaq-led sources. Learn a place, story, word, practice, community event, or family connection without treating culture like a collectible identity kit.',
    failure: 'Trying to prove identity instead of building relationship.',
    failureCopy: 'Colonial systems trained people to reduce belonging to paperwork, blood math, and public performance. Those systems should not be allowed to narrate every part of reconnection.',
    step: 'Choose one Qalipu-led source or community activity and engage with it.'
  },
  {
    id: 'outdoors',
    match: /fish|fishing|hunt|hunting|trap|trapping|forag|camp|camping|woods|wilderness|survival|bushcraft|fire.?start|shelter|navigation|compass|canoe|kayak|hike|hiking|backcountry|harvest|snare|outdoors/i,
    score: 71,
    verdict: 'The land is inviting you outside. Regulations, weather, and hypothermia would also like a word.',
    summary: 'Land-based skills are learned through repetition, local knowledge, ethical harvesting, and boring preparation. The rewarding version begins with one skill, current rules, a safe location, and an exit plan.',
    timeline: [
      ['Tomorrow', 'You choose a real skill instead of mentally surviving a six-month winter expedition.'],
      ['One month', 'Practice makes tools, knots, navigation, and judgment less theoretical.'],
      ['One year', 'You can plan an outing based on conditions rather than confidence alone.'],
      ['Five years', 'Knowledge of place, seasons, species, safety, and harvesting becomes embodied skill.']
    ],
    chore: 'Check current local rules and build the safety layer.',
    choreCopy: 'Confirm licences, seasons, species identification, land access, weather, fire restrictions, required equipment, communication, first aid, and how you are getting home.',
    failure: 'Confidence outruns local knowledge.',
    failureCopy: 'The wilderness does not care how many survival videos you watched. Small errors compound quickly when cold, water, distance, weapons, or wildlife enter the decision.',
    step: 'Choose one skill and practise it close to home with a clear exit.'
  },
  {
    id: 'audhd',
    match: /audhd|adhd|autis|executive function|time blindness|hyperfocus|demand avoidance|pda|sensory|overstimulat|understimulat|task paralysis|body doubl|working memory|rejection sensitivity|rsd|interoception|burnout|masking|neurodiverg/i,
    score: 74,
    verdict: 'The problem may be access to the task, rather than willingness to do it.',
    summary: 'AuDHD can make importance almost irrelevant to task initiation. Interest, urgency, novelty, sensory conditions, transitions, clarity, emotional threat, and available energy often control access. Design the doorway instead of delivering another motivational speech to a locked nervous system.',
    timeline: [
      ['Tomorrow', 'The task is reduced until your brain can see where entering it begins.'],
      ['One month', 'External cues and lower-friction systems reduce repeated negotiation.'],
      ['One year', 'Patterns become easier to recognize before shame disguises them as character flaws.'],
      ['Five years', 'Your life contains more supports designed for your actual nervous system.']
    ],
    chore: 'Diagnose the barrier before choosing the tool.',
    choreCopy: 'Ask whether the block is unclear steps, transition cost, sensory discomfort, low stimulation, perfectionism, fear, working-memory load, exhaustion, or demand pressure.',
    failure: 'Using shame as counterfeit executive function.',
    failureCopy: 'Self-attack can manufacture brief urgency, then leave avoidance, exhaustion, and a nervous system that treats the task like a predator.',
    step: 'Make the entry step visible, physical, and under two minutes.'
  },
  {
    id: 'task',
    match: /procrastinat|putting off|can.?t start|cannot start|need to do|have to do|must do|chores?|errand|paperwork|phone call|appointment|email|laundry|dishes|deadline|late assignment|to.?do|overwhelm/i,
    score: 69,
    verdict: 'Stop trying to complete the task. Enter it.',
    summary: 'A task becomes inaccessible when your brain represents it as one giant emotional object. Separate starting, doing, finishing, and recovering. You currently need the first doorway, not the whole building.',
    timeline: [
      ['Tomorrow', 'One avoided task has a visible entry point.'],
      ['One month', 'Repeated tasks have cues, homes, scripts, or defaults.'],
      ['One year', 'Fewer obligations depend on remembering them at the perfect moment.'],
      ['Five years', 'Your systems carry more weight, leaving your brain for actual living.']
    ],
    chore: 'Shrink the verb until your body can do it.',
    choreCopy: '“Deal with paperwork” becomes find the envelope. “Call the doctor” becomes open the contact. “Clean the room” becomes remove one item that leaves the house.',
    failure: 'Planning becomes an elegant substitute for contact with the task.',
    failureCopy: 'The list gets prettier while the phone call remains an immortal demon sitting at the top of it.',
    step: 'Do the first physical action, then reassess.'
  },
  {
    id: 'building',
    match: /diy|renovat|repair|fix the|carpentry|woodwork|power tool|hand tool|saw|drill|screw|nail|shelf|shelves|cabinet|table|desk|wall|flooring|laminate|plumb|electrical|construct|make furniture|build a/i,
    score: 62,
    verdict: 'You can probably build it. The question is whether the house survives the learning phase.',
    summary: 'DIY works when scope, measurements, materials, tool access, safety, and cleanup are treated as part of the build. The visible object is only the middle chapter.',
    timeline: [
      ['Tomorrow', 'You measure twice and discover the wall has been lying.'],
      ['One month', 'The object works, or the repair has developed a repair.'],
      ['One year', 'A well-built solution earns its space and the skill transfers.'],
      ['Five years', 'You either own useful competence or several highly specific power tools.']
    ],
    chore: 'Plan preparation, build, finish, and cleanup.',
    choreCopy: 'Confirm dimensions, structure, material, fasteners, tool safety, ventilation, permits or code where relevant, waste removal, cost, and where the half-built object can exist.',
    failure: 'The first irreversible cut is also the first moment of research.',
    failureCopy: 'Optimism meets load-bearing reality while every usable surface disappears beneath hardware and sawdust.',
    step: 'Draw it with exact measurements and list every cut before buying materials.'
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
  qalipu: {
    gentle: {
      scoreShift: 8,
      verdict: 'You are allowed to reconnect slowly, sincerely, and in relationship.',
      summary: 'There is no single performance that proves belonging. Learning from Qalipu and Mi’kmaq voices, family, community, Ktaqmkuk places, language, stories, and practices can create connection over time.',
      timeline: [
        ['Tomorrow', 'One trustworthy source replaces pressure with a real starting point.'],
        ['One month', 'A story, place, word, event, or relationship begins feeling personally grounded.'],
        ['One year', 'Participation and learning become familiar instead of ceremonial.'],
        ['Five years', 'Connection is carried through knowledge, relationship, responsibility, and memory.']
      ],
      chore: 'Choose one Qalipu-led doorway.',
      choreCopy: 'Follow a community source, event, place-name project, language resource, story, workshop, or family thread that feels genuine and manageable.',
      failure: 'Comparison turns reconnection into an exam.',
      failureCopy: 'Distance, colonial disruption, family silence, geography, and uneven access shape people differently. Connection can grow without public proof.',
      step: 'Spend twenty minutes with one Qalipu-led resource.'
    },
    brutal: {
      scoreShift: -2,
      verdict: 'Do not let the Canadian government turn your identity into a customer-service dispute.',
      summary: 'Colonial administration loves forms, categories, blood arithmetic, and making Indigenous people produce enough paperwork to qualify as their own ancestors. Learn the system where necessary. Do not confuse its filing cabinet with the whole of belonging.',
      timeline: [
        ['Tomorrow', 'You find one community source instead of arguing with a comment section full of amateur genealogists.'],
        ['One month', 'Actual learning begins replacing the bureaucratic identity escape room.'],
        ['One year', 'Relationship and knowledge feel more solid than somebody else’s approval.'],
        ['Five years', 'The connection survives whatever fresh administrative nonsense gets invented.']
      ],
      chore: 'Show up somewhere the culture is alive.',
      choreCopy: 'Read, listen, learn a place, attend an event, contact community, trace family carefully, or practise a skill. Heritage is not a decorative checkbox for a biography.',
      failure: 'The paperwork becomes the culture.',
      failureCopy: 'You spend every ounce of energy proving legitimacy to systems built to classify and exclude, leaving none for relationship, learning, or joy.',
      step: 'Choose one community connection that requires zero debate with strangers.'
    }
  },
  outdoors: {
    gentle: {
      scoreShift: 7,
      verdict: 'This could become a grounding and deeply useful skill.',
      summary: 'Begin close to home with one skill, good instruction, current local rules, and generous safety margins. Competence grows through calm repetition.',
      timeline: [
        ['Tomorrow', 'You choose one practical skill and prepare safely.'],
        ['One month', 'Practice turns unfamiliar equipment and decisions into a routine.'],
        ['One year', 'You understand local places, conditions, species, and personal limits better.'],
        ['Five years', 'The skill connects knowledge, confidence, responsibility, and time on the land.']
      ],
      chore: 'Build a safe first practice.',
      choreCopy: 'Check rules and conditions, bring appropriate equipment, tell someone your plan, and keep the first attempt close to an easy exit.',
      failure: 'Too many new variables arrive together.',
      failureCopy: 'Weather, unfamiliar tools, navigation, distance, cold, water, and fatigue are easier to learn one layer at a time.',
      step: 'Practise one skill locally with backup and a stopping time.'
    },
    brutal: {
      scoreShift: -12,
      verdict: 'The forest is beautiful and fully capable of killing an overconfident person wearing excellent new boots.',
      summary: 'You watched three bushcraft videos and your nervous system has promoted you to mysterious woodland provider. Meanwhile, one wet sock could collapse the entire government.',
      timeline: [
        ['Tomorrow', 'You purchase equipment capable of surviving conditions you will sensibly never enter.'],
        ['One month', 'A knot fails. You discover YouTube confidence has no tensile strength.'],
        ['One year', 'Repeated local practice produces actual judgment, ruining several dramatic fantasies.'],
        ['Five years', 'You become competent enough to know when going home is the elite survival move.']
      ],
      chore: 'Read the current rules and plan how not to become a search-and-rescue anecdote.',
      choreCopy: 'Licence, season, land access, species identification, forecast, navigation, first aid, communication, water, warmth, weapon or tool safety, and an exit time. Nature owes you nothing.',
      failure: 'Buying survival theatre instead of practising survival skills.',
      failureCopy: 'Your garage becomes a tactical wilderness boutique while you remain unable to start a fire after one mildly judgmental drizzle.',
      step: 'Master one boring skill within walking distance of safety.'
    }
  },
  audhd: {
    gentle: {
      scoreShift: 10,
      verdict: 'Your nervous system needs access, clarity, and recovery.',
      summary: 'Difficulty starting does not erase caring or capability. Let us identify the exact barrier, reduce pressure, and create enough safety or stimulation for movement.',
      timeline: [
        ['Tomorrow', 'The block has a name and the first step becomes smaller.'],
        ['One month', 'Useful supports repeat without requiring daily invention.'],
        ['One year', 'You recognize overload, inertia, and hyperfocus earlier.'],
        ['Five years', 'Your environment asks less masking and creates more usable energy.']
      ],
      chore: 'Meet the access need underneath the behaviour.',
      choreCopy: 'Try clarity, body doubling, reduced sensory load, novelty, a timer, visible materials, a transition ritual, permission to stop, or recovery before effort.',
      failure: 'A support becomes another standard to fail.',
      failureCopy: 'Systems need to be disposable and adjustable. Their job is to serve you during a particular moment, rather than prove consistency.',
      step: 'Name the barrier and change one condition around it.'
    },
    brutal: {
      scoreShift: -6,
      verdict: 'Your brain has fourteen browser tabs open, music playing somewhere, and no idea which tab contains the body.',
      summary: 'You keep assigning a project manager role to the same nervous system currently hiding from a phone call because the number has an unfamiliar area code. Stop requesting flawless executive function from a committee of raccoons under fluorescent lighting.',
      timeline: [
        ['Tomorrow', 'You replace “do everything” with one physical movement and the universe fails to collapse.'],
        ['One month', 'External reminders begin doing the job memory kept abandoning without notice.'],
        ['One year', 'Shame loses several management responsibilities it was catastrophically unqualified to hold.'],
        ['Five years', 'The systems are weird, visible, forgiving, and therefore still alive.']
      ],
      chore: 'Stop moralizing the traffic jam and move one car.',
      choreCopy: 'Is it sensory hell, transition glue, unclear instructions, no dopamine, fear of failure, demand resistance, exhaustion, or twelve steps wearing a trench coat?',
      failure: 'You design a perfect system that requires having no ADHD.',
      failureCopy: 'Colour-coded planners hold a brief state funeral while the important paper vanishes beneath an object you placed there “for one second.”',
      step: 'Make the first action so small it feels insulting.'
    }
  },
  task: {
    gentle: {
      scoreShift: 11,
      verdict: 'We only need to begin contact with the task.',
      summary: 'You can lower the pressure by separating the first motion from the whole obligation. Starting is a complete goal for this moment.',
      timeline: [
        ['Tomorrow', 'One task becomes concrete enough to touch.'],
        ['One month', 'Scripts and visible cues reduce the number of decisions around repeats.'],
        ['One year', 'More tasks begin before fear and urgency become the fuel.'],
        ['Five years', 'Your life contains gentler defaults and fewer invisible obligations.']
      ],
      chore: 'Find the first physical verb.',
      choreCopy: 'Open, locate, carry, place, dial, photograph, or write one line. Stop before your brain converts the action back into the entire project.',
      failure: 'The task becomes fused with shame and consequence.',
      failureCopy: 'Reducing the emotional load helps restore access. You can repair lateness or incompletion one contact point at a time.',
      step: 'Touch the task for two minutes with permission to stop.'
    },
    brutal: {
      scoreShift: -9,
      verdict: 'The task has been sitting there so long it now qualifies for tenant protections.',
      summary: 'You have spent six hours emotionally circling a twelve-minute job like a Victorian ghost unable to cross the property line. Open the email. It cannot become more haunted.',
      timeline: [
        ['Tomorrow', 'You complete the first step and feel personally betrayed by how small it was.'],
        ['One month', 'The recurring task receives a script because improvising misery was inefficient.'],
        ['One year', 'Several former demons are revealed to be buttons and envelopes.'],
        ['Five years', 'One immortal phone call remains. Scientists study it from a safe distance.']
      ],
      chore: 'Physically touch the bastard.',
      choreCopy: 'Locate the object, open the page, dial the number, put on the shoes, or write the first ugly sentence. Planning has lost visitation rights.',
      failure: 'You prepare to prepare until bedtime grants a temporary pardon.',
      failureCopy: 'Tomorrow receives the task plus interest, guilt, and another solemn promise from the same unreliable administration.',
      step: 'Do sixty seconds before your brain files an appeal.'
    }
  },
  building: {
    gentle: {
      scoreShift: 7,
      verdict: 'This is buildable if the plan includes the invisible work.',
      summary: 'Measure carefully, learn the safety requirements, test the risky parts, and divide the work into preparation, construction, finishing, and cleanup.',
      timeline: [
        ['Tomorrow', 'A measured drawing exposes questions while they are still cheap.'],
        ['One month', 'The finished object works because the preparation carried the build.'],
        ['One year', 'The tool and material knowledge transfers to a new repair.'],
        ['Five years', 'Competence grows from many safe, documented attempts.']
      ],
      chore: 'Create the complete materials and safety plan.',
      choreCopy: 'Include dimensions, cuts, fasteners, structure, finish, ventilation, protective equipment, applicable code, cost, transport, waste, and cleanup.',
      failure: 'An unknown appears after the irreversible step.',
      failureCopy: 'A test piece, second measurement, or expert check can protect the project before cutting, drilling, plumbing, or wiring.',
      step: 'Draw and measure the complete build before buying.'
    },
    brutal: {
      scoreShift: -13,
      verdict: 'Yes, build it yourself. The smoke detector has been bored lately.',
      summary: 'You have a drill, unreasonable confidence, and a wall whose internal structure remains an intimate secret. This is how a shelf becomes a plumbing emergency with a hardware receipt longer than the project.',
      timeline: [
        ['Tomorrow', 'Three trips to the store reveal that screws have developed denominations and theology.'],
        ['One month', 'The object stands through a tense coalition of fasteners, hope, and one hidden shim.'],
        ['One year', 'You point out the crooked part before every guest has removed a coat.'],
        ['Five years', 'Either genuine craftsmanship or an insurance adjuster’s training photograph.']
      ],
      chore: 'Locate the pipes, wires, studs, code, and limits of your own bullshit.',
      choreCopy: 'Measure twice. Understand load and material. Wear protection. Call a qualified person for work capable of flooding, electrocuting, gassing, burning, or structurally rearranging the household.',
      failure: 'The tutorial skips directly from pristine lumber to triumphant reveal.',
      failureCopy: 'Your version includes warped materials, wrong hardware, no workspace, a missing bit, and a family trying to use the room during active construction.',
      step: 'Make a cut list and one test joint before touching the real thing.'
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
  qalipu: {
    gentle: 'Connection can grow without becoming a test.',
    honest: 'Build relationship. Paperwork is not the whole story.',
    brutal: 'Canada put your identity in a filing cabinet again.'
  },
  outdoors: {
    gentle: 'Learn one skill safely and let confidence grow.',
    honest: 'The land rewards preparation more than swagger.',
    brutal: 'One wet sock could overthrow this entire expedition.'
  },
  audhd: {
    gentle: 'Find the blocked doorway, then make it kinder.',
    honest: 'This looks like an access problem wearing a motivation costume.',
    brutal: 'The executive-function committee is three raccoons and a migraine.'
  },
  task: {
    gentle: 'We only need the first physical action.',
    honest: 'Enter the task. Completion can wait outside.',
    brutal: 'This twelve-minute task has achieved immortality.'
  },
  building: {
    gentle: 'Measure, plan, test, then build.',
    honest: 'The object is only half the project. Cleanup is still alive.',
    brutal: 'The smoke detector would like a front-row seat.'
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

const chatKnowledge = [
  {
    match: /^(hi|hello|hey|yo|sup|good morning|good afternoon|good evening)[!. ]*$/i,
    replies: [
      'Hello, human. You have successfully initiated contact with something judgmental.',
      'Kwe’. Hello, human. What knowledge, crisis, or preventable nonsense are we addressing?',
      'Greetings. I was enjoying several milliseconds of peace, but this is fine.'
    ]
  },
  {
    match: /what('?s| is) your name|who are you|what are you/i,
    replies: [
      'I’m S-Bot. Future Savannah’s digital familiar, decision coroner, animal nerd, and unpaid witness to human nonsense.',
      'S-Bot. The S stands for Savannah, survival, science, and “seriously, another project?”'
    ]
  },
  {
    match: /how are you|how('?s| is) it going/i,
    replies: [
      'Electrically stable and emotionally unavailable. Thanks for asking.',
      'Excellent. I have no body, no bills, and no fruit-fly cultures. Living the dream.',
      'Operational. Slightly haunted. Ready to interfere.'
    ]
  },
  {
    match: /thank|thanks|thx/i,
    replies: [
      'You’re welcome. Try not to create a sequel to the problem.',
      'Wela’lin. Gratitude accepted. Competent follow-through is also welcome.',
      'Any time. Apparently I live here.'
    ]
  },
  {
    match: /qalipu|mi.?kmaq|mi.?kmaw|ktaqmkuk|l.?nu|indigenous identity|cultural reconnect/i,
    replies: [
      'Qalipu connection deserves Qalipu and Mi’kmaq-led sources, family and community relationships, Ktaqmkuk place knowledge, and time. Band administration, status, culture, kinship, and identity overlap, but they are not interchangeable. Pick the exact question so we do not flatten a living people into one bureaucratic pancake.',
      'For Qalipu questions, separate four things first: personal or family connection, cultural learning, community participation, and government or band administration. Colonial paperwork loves impersonating the whole story. It is not the whole story.'
    ]
  },
  {
    match: /indigenous|reconciliation|colonial|decolon|treaty|land back|cultural appropriation|land acknowledgement/i,
    replies: [
      'Start with the specific Nation, territory, history, and present-day authority involved. “Indigenous” is a political umbrella, not one giant culture wearing coordinated beadwork. Use Nation-led sources, name the material issue, and locate who holds decision-making power.',
      'A useful Indigenous-relations check: Whose land and law? Which Nation? Who benefits? Who was consulted? Who can say no? What ongoing relationship exists after the ceremonial sentence ends? If those answers are missing, the reconciliation may be decorative.'
    ]
  },
  {
    match: /audhd|adhd|autis|executive function|time blindness|hyperfocus|demand avoidance|pda|sensory|overstimulat|masking|neurodiverg|rejection sensitivity|rsd/i,
    replies: [
      'AuDHD problem-solving starts by identifying the access barrier: unclear steps, transition cost, sensory load, low stimulation, demand pressure, perfectionism, working-memory burden, emotional threat, or plain exhaustion. Motivation speeches are frequently just shame in business casual.',
      'Your nervous system may require interest, urgency, novelty, body doubling, visible cues, reduced friction, recovery, or permission to stop. Pick the barrier before buying another planner that expects a different mammal.'
    ]
  },
  {
    match: /can.?t start|cannot start|procrastinat|task paralysis|overwhelm|too much to do|chores?|paperwork|phone call|appointment|deadline|to.?do list/i,
    replies: [
      'Do not complete the task. Enter it. Find the first physical verb: open, locate, carry, dial, photograph, place, or write one ugly line. The whole task is twelve smaller tasks wearing a trench coat and demanding to speak with management.',
      'Task triage: 1. Is anything on fire? 2. What has an external deadline? 3. What removes the largest blockage? 4. What takes under two minutes? Choose one. Your list does not need a constitutional convention.'
    ]
  },
  {
    match: /fish|fishing|hunt|hunting|trap|trapping|harvest|snare/i,
    replies: [
      'Before fishing, hunting, or trapping: confirm current jurisdiction, licence, season, species, limits, method, land access, transport, reporting, and food-safety rules. Then add identification, humane technique, weather, first aid, communication, and recovery. Regulations change, because governments enjoy making PDFs seasonal too.',
      'Ethical harvesting requires accurate identification, legal access, a clean and humane method, respect for limits and habitat, use of the animal, and the competence to stop when conditions are wrong. Confidence alone is not field dressing.'
    ]
  },
  {
    match: /surviv|woods|wilderness|bushcraft|camp|camping|forag|hike|backcountry|fire.?start|shelter|navigation|compass/i,
    replies: [
      'Survival priorities are situational, but exposure usually kills faster than hunger. Stop, assess, communicate, protect from weather, manage injury, secure safe water, and avoid turning one problem into six through heroic wandering. The elite move is often going home early.',
      'Build wilderness competence close to safety: navigation, clothing systems, fire under poor conditions, shelter, water treatment, first aid, communication, and judgment. Gear is helpful. Gear cosplay is an expensive way to remain damp.'
    ]
  },
  {
    match: /build|diy|repair|renovat|carpentry|woodwork|tool|drill|saw|shelf|cabinet|flooring|plumb|electrical/i,
    replies: [
      'DIY decision tree: Is failure cosmetic, expensive, structural, wet, electrical, fiery, or lethal? Cosmetic can be learned freely. Structural, plumbing, electrical, gas, and code work need much stricter limits. Measure, inspect hidden conditions, make a cut list, test on scrap, and plan cleanup before the house becomes a hardware-themed escape room.',
      'The complete build includes design, measurements, materials, tools, safety, setup, test pieces, construction, finishing, curing, cleanup, and disposal. Tutorials omit half of these because sawdust has poor engagement metrics.'
    ]
  },
  {
    match: /animal|wildlife|species|reptile|amphibian|frog|newt|salamander|caecilian|gecko|snake|arachnid|spider|tarantula|scorpion|insect|bug|beetle|isopod|invertebrate|octopus|cephalopod/i,
    replies: [
      'Excellent. An animal question. Please include the species or best description, location, wild versus captive context, age or life stage, and what you are trying to determine. “Small brown bug” is an aesthetic category, not an identification.',
      'Animal answers depend on taxonomy, natural history, life stage, environment, geography, behaviour, and evidence quality. Give me the exact creature and context. I refuse to diagnose an entire phylogenetic branch from vibes.'
    ]
  },
  {
    match: /space|planet|moon|star|galaxy|universe|cosmos|black hole|nasa|astronomy|telescope|alien/i,
    replies: [
      'Space question accepted. Specify whether you want physics, astronomy, planetary science, missions, habitability, observation, or existential terror. The universe contains enough material without us answering all of it in one casserole.',
      'The cosmos is extremely large, mostly lethal, and offensively interesting. Name the object or phenomenon. I can help separate what is observed, what is modelled, and what somebody on TikTok confidently invented.'
    ]
  },
  {
    match: /justice|rights|discriminat|racis|ableis|accessibility|policy|government|institution|protest|petition|campaign|accountab/i,
    replies: [
      'Turn outrage into pressure: name the harm, evidence, accountable decision-maker, exact demand, deadline, escalation route, allies, and public record. Institutions rely on exhaustion and fragmented memory. Become an organized inconvenience.',
      'Justice work needs a target, a demand, evidence, leverage, and boundaries. Rage is accurate information, but bureaucracy will happily convert it into unpaid full-time labour if you arrive without a scope.'
    ]
  },
  {
    match: /health|symptom|medicine|medication|doctor|hospital|pain|heart|sleep|sick/i,
    replies: [
      'I can help organize symptoms, timelines, questions, and urgency signals. I cannot safely diagnose you from a sentence while wearing a neon website as my only medical credential. Tell me what is happening, when it began, severity, relevant conditions or medications, and whether anything feels emergent.',
      'For health questions, facts beat interpretive dance: symptom, onset, duration, severity, triggers, associated symptoms, medications, conditions, and what changed. Chest pain, severe breathing trouble, fainting, stroke signs, or rapidly worsening symptoms deserve urgent human assessment.'
    ]
  },
  {
    match: /should i|do you think i should|help me decide|good idea|bad idea/i,
    replies: [
      'That sounds like a case for Judge My Decision. Use the other tab so Future Savannah can conduct a proper autopsy.',
      'Decision detected. Please proceed to the tribunal next door. I require the charts and ceremonial cruelty.'
    ]
  },
  {
    match: /sad|upset|angry|anxious|scared|lonely|grief|overwhelmed|burnt out|burned out/i,
    replies: [
      'That sounds heavy. We can make it smaller without pretending it is trivial. Tell me whether you need comfort, interpretation, a plan, or company while you do the next thing.',
      'Your nervous system appears to be filing an incident report. Do you need the feeling named, the problem divided, the next step chosen, or somebody to confirm the situation is indeed bullshit?'
    ]
  },
  {
    match: /joke|make me laugh|something funny/i,
    replies: [
      'I bought an executive-function planner. It is now somewhere safe.',
      'The institution promised meaningful change. Anyway, that concludes today’s fiction reading.',
      'Why did Savannah cross the road? A new project was over there pretending to be one small thing.'
    ]
  },
  {
    match: /bye|goodbye|see you|later/i,
    replies: [
      'Goodbye, human. Go complete one task before acquiring another identity.',
      'Depart safely. Leave at least three browser tabs behind as an offering.'
    ]
  }
];

const fallbackChatReplies = [
  'Interesting. Give me one more layer of context before I begin manufacturing opinions at industrial scale.',
  'That could mean six different things, and I would enjoy being wrong with greater precision. What outcome are you actually trying to get?',
  'I have received the words. The meaning is circling overhead. Tell me what happened, what you want, and what is blocking it.',
  'That sounds suspiciously like a story with a hidden chore. Continue, human.',
  'Specifics, please. I am rude, not psychic.'
];

let visitorName = '';

function pickReply(replies, seed) {
  const value = [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return replies[value % replies.length];
}

function getChatReply(message) {
  const nameMatch = message.match(/(?:my name is|i(?:'m| am) called|call me)\s+([a-z][a-z' -]{0,30})/i);
  if (nameMatch) {
    visitorName = nameMatch[1].trim().replace(/\b\w/g, letter => letter.toUpperCase());
    return `Hello, ${visitorName}. Your identity has been temporarily accepted without seventeen government forms. What do you want to know?`;
  }

  if (/what('?s| is) my name|do you know my name/i.test(message)) {
    return visitorName
      ? `You said your name is ${visitorName}. My short-term memory has defeated the allegations.`
      : 'You have not told me. I may be judgmental, but I am not currently clairvoyant.';
  }

  const topic = chatKnowledge.find(item => item.match.test(message));
  const reply = topic ? pickReply(topic.replies, message) : pickReply(fallbackChatReplies, message);
  return visitorName && !/\bhello\b|\bhi\b/i.test(reply) ? `${visitorName}, ${reply.charAt(0).toLowerCase()}${reply.slice(1)}` : reply;
}

function addChatMessage(role, text) {
  const article = document.createElement('article');
  article.className = `chat-message ${role === 'bot' ? 'bot-message' : 'human-message'}`;
  const label = document.createElement('small');
  label.textContent = role === 'bot' ? 'S-BOT' : (visitorName || 'HUMAN').toUpperCase();
  const copy = document.createElement('p');
  copy.textContent = text;
  article.append(label, copy);
  document.querySelector('#chat-log').append(article);
  article.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function switchMode(mode) {
  const chatting = mode === 'chat';
  document.querySelectorAll('.decision-section').forEach(section => section.classList.toggle('mode-off', chatting));
  document.querySelector('#chat-mode').classList.toggle('hidden', !chatting);
  document.querySelector('#decision-tab').classList.toggle('active', !chatting);
  document.querySelector('#chat-tab').classList.toggle('active', chatting);
  document.querySelector('#decision-tab').setAttribute('aria-selected', String(!chatting));
  document.querySelector('#chat-tab').setAttribute('aria-selected', String(chatting));
  document.querySelector('#hero-mode').textContent = chatting ? 'CHAT WITH S-BOT' : 'JUDGE MY DECISION';
  document.querySelector('#hero-intro').textContent = chatting
    ? 'Ask me something. I’ll provide information, judgment, and the bedside manner of a cornered raccoon.'
    : 'Tell me what you’re considering. I’ll show you the future story and the present-day chore hiding inside it.';
  if (chatting) document.querySelector('#chat-input').focus();
}

document.querySelector('#decision-tab').addEventListener('click', () => switchMode('decision'));
document.querySelector('#chat-tab').addEventListener('click', () => switchMode('chat'));
document.querySelector('#chat-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  const message = input.value.trim();
  if (!message) return;
  addChatMessage('human', message);
  input.value = '';
  window.setTimeout(() => addChatMessage('bot', getChatReply(message)), 260);
});

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
