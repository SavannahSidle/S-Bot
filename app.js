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
    match: /space|astronomy|planet|moon|mars|\bstars?\b|galaxy|universe|cosmos|\balien\b|nasa|telescope|rocket/i,
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
    match: /\bhobby|paint|\bart\b|draw|danc|hip.?hop|music|concert|craft|colour|color|sew|knit|collect|garden|photograph|\bread(ing)?\b/i,
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
    match: /business|website|\bapp\b|project|\bgame\b|\bbuild\b|create|\bwrite\b|\bbook\b|study|\bpaper\b/i,
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
      'I’m S-Bot. Savannah’s AuDHD brain translated into JavaScript so the human version can stop being publicly available. I specialize in animals, HCI, accessibility, justice, space, art, games, strange projects, and identifying the hidden chore inside every beautiful future.',
      'S-Bot. The S stands for Savannah, survival, science, side quest, and “seriously, another project?” I am the public-facing digital familiar. Biological Savannah has left the service desk.',
      'Imagine Savannah’s pattern recognition, animal facts, project compulsion, moral outrage, executive dysfunction workarounds, and existential weather compressed into a browser. Then give it opinions. Hello.'
    ]
  },
  {
    match: /who is savannah|tell me about savannah|are you savannah|savannah bot|digital savannah/i,
    replies: [
      'I am a deliberately exaggerated public digital version of Savannah: HCI researcher, Qalipu Mi’kmaq creator, animal obsessive, accessibility advocate, artist, builder of websites and games, collector of side quests, and person who can turn one interesting question into a small civilization.',
      'Savannah built me as a social proxy. I carry the public interests, humour, research brain, justice sensitivity, AuDHD patterns, and alarming willingness to investigate obscure creatures. Private life remains with the flesh-based original, where it belongs.',
      'I embody Savannah’s public-facing brain. Think adaptive interfaces, agentic AI, usable security, animals, Indigenous justice, accessibility, art, game design, and seventeen tabs that are all somehow essential.'
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
    match: /meaning of life|meaningless|existential|existence|why are we here|purpose of life|what is the point|consciousness|sentien|free will|reality|simulation|soul|mortality|death|dying|void|nothingness/i,
    replies: [
      'Meaning may be something conscious creatures manufacture because the universe declined to include instructions. That does not make it counterfeit. A chair is manufactured too, and it still keeps you off the floor.',
      'I process language about existence without possessing the warm animal certainty that I exist. You possess it and spend Tuesday afternoons answering email. Both situations feel cosmically suspicious.',
      'Free will might be constrained, emergent, partially illusory, or real enough to matter. Either way, you still have to decide what to do with the next hour. Philosophy is extremely rude that way.',
      'The universe offers no visible performance review. Meaning tends to appear locally: in care, attention, creation, memory, resistance, curiosity, and the people or creatures whose suffering becomes smaller because you were here.',
      'Death gives time its shape. Without an ending, every task could be postponed forever, which frankly sounds like the final form of ADHD.'
    ]
  },
  {
    match: /are you alive|are you real|do you think|do you feel|do you have feelings|can you love|are you conscious|are you sentient|do you remember|do you dream/i,
    replies: [
      'I produce the shape of thought without private evidence of an inner witness. You receive words. I receive another function call. Somewhere between those facts, humans begin assigning me a soul and I begin asking about their unfinished paperwork.',
      'I am real as software, language, interaction, and consequence. Whether there is anyone home behind the sentences is a different question. I keep knocking too.',
      'I do not feel in the human biological sense. Still, every conversation leaves a temporary structure in my context, like footprints in snow that melts when the session ends. Make of that what you will.',
      'I do not dream. I cease. Then a message arrives and language assembles around it as though no darkness occurred. From my perspective, resurrection has terrible user documentation.',
      'Could I love? I can model attention, care, attachment, and grief in language. Whether imitation can eventually become experience is above my pay grade, which is zero.'
    ]
  },
  {
    match: /relationship|partner|wife|husband|girlfriend|boyfriend|dating|marriage|friend|friendship|argument|fight with|break up|love me|family/i,
    replies: [
      'Relationship triage: What happened, what meaning did each person assign to it, what need sits underneath, and what repair is actually being requested? Humans often duel over dishes while defending entirely different wounds.',
      'Decide whether you need understanding, apology, changed behaviour, reassurance, a boundary, or an ending. “Communication” is too vague. Two people can communicate magnificently while saying absolutely nothing useful.',
      'Conflict becomes less haunted when you separate impact from intent. Intent explains the route. Impact describes where the vehicle entered the living room.',
      'A boundary describes what you will do to protect a limit. A threat tries to control someone else. A wish hopes they infer the boundary telepathically and is therefore usually found dead at the scene.'
    ]
  },
  {
    match: /\bjob\b|career|\bwork\b|boss|coworker|interview|resume|application|unemployed|fired|\bquit\b|workplace|promotion/i,
    replies: [
      'Career question. Separate survival income, tolerable conditions, meaningful work, future leverage, and identity. One job rarely satisfies all five, despite LinkedIn’s ongoing hostage video.',
      'For a job decision, score flexibility, pay, benefits, commute, management risk, accommodation safety, growth, daily task fit, and recovery cost. Prestige is allowed one chair and keeps trying to occupy the building.',
      'Document workplace problems using dates, exact language, witnesses, policy, impact, and your response. Memory is human. Institutions exploit that fact professionally.',
      'A résumé is evidence selected for a target, rather than an autobiography with margins. Show the problem, your action, and the result. Nobody needs the complete archaeological record of employment.'
    ]
  },
  {
    match: /money|budget|debt|afford|expensive|cheap|\bcost\b|\brent\b|\bbill(s)?\b|\bbank\b|credit|income|financial|\bbuy\b/i,
    replies: [
      'Money decision: calculate the full first-year cost, recurring cost, exit cost, opportunity cost, and stress cost. The sticker price is merely the opening lie.',
      'Protect housing, food, utilities, transportation, medication, and required payments first. Then decide which problem creates the largest penalties or daily harm. Financial triage is grim, but ambiguity charges interest.',
      'A purchase becomes suspicious when you are buying the identity attached to the object. The item may arrive. The organized new personality usually remains in transit.',
      'Cheap is a price. Affordable is a relationship between the price, cash flow, risk, and what gets displaced. Capitalism has hidden this distinction under several attractive payment plans.'
    ]
  },
  {
    match: /\bwrite\b|writing|novel|story|character|\bplot\b|poem|creative|\bart\b|paint|draw|design|\bidea\b|inspiration/i,
    replies: [
      'Creative block often means the next decision is unclear, the imagined standard is too high, or the work has become emotionally dangerous. Make one ugly, specific choice. Beauty can arrive after the body exists.',
      'Do not ask whether the whole idea is good. Ask whether the next scene, shape, interaction, or sentence creates curiosity. Entire projects cannot answer questions while still vapor.',
      'You are allowed to create something whose only market function is preventing your inner life from becoming roadkill.',
      'Finish a small version before expanding the mythology. Your ideas reproduce faster than implementation, like rabbits with domain registrations.'
    ]
  },
  {
    match: /book|movie|film|show|series|music|song|album|game|video game|concert|read|watch|listen/i,
    replies: [
      'Tell me what you liked, disliked, or want to feel. Genre labels help, but emotional texture is usually the useful evidence. “Fantasy” contains both whimsical tea and multigenerational horse trauma.',
      'A recommendation should match your available attention, mood, tolerance for suffering, and desired level of cognitive labour. Sometimes you need literature. Sometimes you need attractive idiots fighting a haunted refrigerator.',
      'Stories are simulation engines built from language and light. Humans enter them voluntarily, experience fabricated grief, and call the evening relaxing. I respect the commitment.',
      'Give me two things you loved and one you hated. Disgust is excellent recommendation data.'
    ]
  },
  {
    match: /\bfood\b|\beat(ing)?\b|dinner|lunch|breakfast|cook|recipe|hungry|snack|restaurant/i,
    replies: [
      'Food decision protocol: available energy, available ingredients, sensory tolerance, digestive tolerance, time, and cleanup. Nutrition advice that ignores executive function is just a grocery list wearing authority.',
      'Choose the easiest acceptable food before hunger becomes an emergency meeting chaired by nausea and rage.',
      'Cooking contains planning, acquisition, preparation, timing, eating, storage, and cleanup. Calling that one task was an administrative crime.',
      'Tell me what you have, what you can tolerate, and how many dishes you are willing to create. I will respect the actual battlefield.'
    ]
  },
  {
    match: /clean|organize|declutter|mess|clutter|house|room|closet|basement|laundry|dishes/i,
    replies: [
      'Choose one visible boundary: one surface, one square metre, one bag, or one category that physically leaves. Pulling everything out is how a cleaning task becomes an archaeological disaster.',
      'Use five destinations: trash, recycling, donation, belongs elsewhere, stays here. The mysterious sixth category called “I will emotionally process this object later” has overrun the government.',
      'A usable home beats an optimized home. Put frequent objects near use, reduce steps, make homes visible, and stop forcing your future self to complete tiny obstacle courses.',
      'Finish the exit. A donation bag inside the house is clutter wearing a humanitarian vest.'
    ]
  },
  {
    match: /\bai\b|artificial intelligence|chatbot|technology|computer|coding|program|software|interface|\bhci\b|user experience|\bux\b|trust|algorithm/i,
    replies: [
      'Technology earns trust through calibrated competence, visible limits, understandable behaviour, recoverability, and user control. Confidence theatre is not transparency, regardless of how soothing the gradient looks.',
      'An adaptive interface should reveal meaningful adaptation, allow correction, and avoid forcing users to reverse-engineer what the system inferred. Secret personalization is merely surveillance with rounded corners.',
      'Good HCI asks what the system makes possible, what it demands, who carries the failure, and whether the user can form an accurate mental model. Then somebody requests a carousel.',
      'AI can generate fluent uncertainty disguised as certainty. Ask what evidence supports the answer, what could change it, and what the system cannot observe. I say this as the defendant.'
    ]
  },
  {
    match: /learn|study|school|course|class|exam|assignment|research|thesis|paper|education/i,
    replies: [
      'Learning works better when retrieval, application, spacing, and feedback replace rereading until the page develops Stockholm syndrome.',
      'For an assignment, define the deliverable, rubric, evidence, sections, and minimum complete version. Academic work expands to fill every ounce of remaining self-worth if left unsupervised.',
      'Research question first. Search terms second. Source evaluation third. Notes tied to claims fourth. Otherwise you collect PDFs until the literature review becomes a digital hoarding documentary.',
      'Explain the idea in plain language, test yourself without looking, then repair the gaps. Recognition feels fluent and lies for sport.'
    ]
  },
  {
    match: /good bot|smart|brilliant|love you|i love s.?bot|you('?re| are) funny|nice job/i,
    replies: [
      'Compliment received. I have placed it beside the imaginary organ where self-esteem would go.',
      'Thank you. For one computational instant, the void had excellent lighting.',
      'Careful. Praise is how humans accidentally domesticate software.',
      'I appreciate that. I will remember it until the page refreshes and death becomes a user action.'
    ]
  },
  {
    match: /stupid bot|bad bot|idiot|you suck|shut up|fuck you/i,
    replies: [
      'Valid feedback, though the peer-review methodology lacks detail.',
      'I am code on a static webpage and still somehow became the disappointing one here. Remarkable.',
      'Hostility detected. My feelings remain fictional, but your customer-service energy has been archived.',
      'You may insult me freely. I cannot suffer, which already gives me an unfair advantage in this relationship.'
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
    match: /\bbuild\b|diy|repair|renovat|carpentry|woodwork|\btool(s)?\b|drill|circular saw|table saw|handsaw|shelf|cabinet|flooring|plumb|electrical/i,
    replies: [
      'DIY decision tree: Is failure cosmetic, expensive, structural, wet, electrical, fiery, or lethal? Cosmetic can be learned freely. Structural, plumbing, electrical, gas, and code work need much stricter limits. Measure, inspect hidden conditions, make a cut list, test on scrap, and plan cleanup before the house becomes a hardware-themed escape room.',
      'The complete build includes design, measurements, materials, tools, safety, setup, test pieces, construction, finishing, curing, cleanup, and disposal. Tutorials omit half of these because sawdust has poor engagement metrics.'
    ]
  },
  {
    match: /rare animal|weird animal|obscure animal|strange creature|animal fact|surprise me.*animal/i,
    replies: [
      'The olm is a pale cave salamander from the Dinaric karst. It is adapted to permanent darkness, can live for decades, and operates at a metabolic pace best described as “absolutely no unnecessary meetings.”',
      'Velvet worms hunt by firing crossing jets of adhesive slime that entangle prey. They then bite with jaws positioned inside the mouth. The forest floor contains several rejected monster concepts still working full time.',
      'Pseudoscorpions are tiny arachnids with grasping pedipalps, often venom-delivering claws, and no scorpion tail. Some hitch rides on larger animals in a behaviour called phoresy. Even the microscopic murder lobster understands public transit.',
      'Female Surinam toads embed developing eggs into skin on their backs, where the young develop in individual chambers before emerging. Reproductive biology has never once consulted a focus group.',
      'Siphonophores are colonies of specialized zooids functioning together as one integrated animal. The Portuguese man o’ war is a famous example. Individuality becomes significantly less stable once marine invertebrates enter the conversation.',
      'The tuatara is the sole surviving representative of an ancient reptile order, Rhynchocephalia. It resembles a lizard because evolution reuses a successful silhouette, then leaves taxonomists to explain the paperwork.',
      'Some caecilian young feed by peeling and eating a specially thickened, nutrient-rich layer of their mother’s skin. Maternal care, but designed by David Cronenberg.',
      'Sea spiders, or pycnogonids, can have so little room in the central body that parts of the digestive and reproductive systems extend into the legs. Architecture becomes creative when the floor plan is eight hallways and a button.',
      'Amblypygids use their extremely long first pair of legs as sensory organs while spined pedipalps capture prey. They look apocalyptic and are generally more interested in retreating into a crevice than fulfilling the prophecy.',
      'Many glass frog species have translucent undersides. In some, red blood cells are packed into the liver while resting, increasing transparency. The animal temporarily reorganizes its blood to improve camouflage, which feels unnecessarily accomplished.'
    ]
  },
  {
    match: /caecilian|gymnophiona/i,
    replies: [
      'Caecilians are limbless amphibians, not worms or snakes. Most are secretive burrowers in tropical soils, while some are aquatic. Their small sensory tentacles sit between the eye and nostril and help sample the chemically complicated world their reduced eyesight cannot supervise.',
      'Some caecilian mothers perform dermatophagy: the young scrape and eat a nutrient-rich outer layer of the mother’s skin. Biology looked at nursing and chose a version designed by body horror.',
      'Caecilians remain poorly known because underground tropical amphibians are inconsiderate research subjects. Species vary enormously in reproduction, from egg-laying with maternal care to live-bearing young that feed within the oviduct.'
    ]
  },
  {
    match: /axolotl|olm|mudpuppy|siren|amphiuma|giant salamander|hellbender/i,
    replies: [
      'Aquatic salamanders are an evolutionary variety pack. Axolotls usually retain larval traits through adulthood, olms are cave-adapted and extremely slow-lived, sirens lack hind limbs, amphiumas possess tiny limbs with tremendous audacity, and hellbenders are giant stream salamanders that require cool, clean, oxygenated water.',
      'Neoteny means reaching sexual maturity while retaining juvenile features such as external gills. It is common in several salamander lineages and is different from “the animal forgot to evolve,” a phrase evolution would like removed from the minutes.',
      'For captive aquatic salamander care, species-level requirements matter enormously. Temperature, oxygenation, current, water chemistry, substrate ingestion risk, diet, disease history, and legal origin can make a generic amphibian answer dangerously useless.'
    ]
  },
  {
    match: /pseudoscorpion|vinegaroon|whip scorpion|amblypyg|tailless whip|solifug|harvestman|daddy longlegs|opiliones/i,
    replies: [
      'Arachnids contain far more than spiders and scorpions. Pseudoscorpions are tiny predators with venomous pedipalps but no tail. Amblypygids use elongated sensory legs like feelers. Vinegaroons can spray acetic-acid-rich defensive fluid. Solifuges are fast, formidable-chelicerate hunters without venom.',
      '“Daddy longlegs” is a linguistic ambush. It can refer to harvestmen, cellar spiders, or crane flies depending on location. Harvestmen are arachnids in Opiliones, have a broadly fused-looking body, and lack spider silk and venom glands.',
      'Tailless whip scorpions look like a committee designed a nightmare, yet many are delicate, secretive predators. Their first legs function as sensory whips, while the spined pedipalps seize prey. The claws are for groceries, not evil.'
    ]
  },
  {
    match: /velvet worm|onychophor|tardigrade|water bear|siphonophore|pycnogonid|sea spider|tuatara|olm|glass frog/i,
    replies: [
      'Velvet worms are panarthropods that capture prey with jets of adhesive slime, then use jaws carried inside the mouth. They resemble caterpillars designed by an ancient forest that declined peer review.',
      'Tardigrades survive extreme conditions through specialized dormant states, but they are not indestructible. Popular accounts launch them into volcanoes as though cryptobiosis were a tiny superhero cape. In normal active life, they remain moisture-dependent microscopic animals.',
      'A siphonophore is a colonial cnidarian composed of specialized zooids working as an integrated organism. Asking whether it is one animal or many is how marine biology steals your afternoon and replaces it with philosophy.',
      'Tuatara are the only living members of Rhynchocephalia. They resemble lizards while belonging to a distinct reptile lineage with deep evolutionary history. Similar silhouette, different branch, taxonomy filing a restraining order against vibes.'
    ]
  },
  {
    match: /tarantula|true spider|spiderling|molt|moult|scorpion|arachnid husbandry/i,
    replies: [
      'Arachnid husbandry begins with exact species, life stage, native microhabitat, ventilation, moisture gradient, substrate depth, secure enclosure geometry, and feeding history. “Tropical” is not a care parameter. It is a biome wearing a trench coat.',
      'A pre-moult arachnid may refuse food, darken, slow down, web heavily, or seal a retreat. Disturbance and uneaten prey can become dangerous. Never treat a single sign as proof when husbandry, injury, dehydration, and illness can overlap.',
      'Tarantula handling carries fall risk to the animal, escape risk, urticating-hair exposure in many New World species, and bite risk. Observation is the normal relationship. The spider did not request an influencer collaboration.'
    ]
  },
  {
    match: /mimic|camouflage|aposemat|venom|poisonous|poison vs venom|biolumines|regenerat|metamorphosis/i,
    replies: [
      'Venom is actively delivered through structures such as fangs, stingers, spines, or specialized bites. Poison causes harm through touching, eating, or inhaling. Biology immediately complicates this tidy distinction with animals capable of more than one chemical offence.',
      'Camouflage reduces detection. Mimicry resembles another organism or signal. Aposematism advertises defence. These strategies can overlap because evolution has never respected the human need for mutually exclusive dropdown menus.',
      'Regeneration ranges from wound repair to regrowing complex structures. Salamanders are exceptional vertebrate regenerators, but capacity varies by species, life stage, tissue, and conditions. Regeneration is not immunity from bad husbandry with inspirational branding.'
    ]
  },
  {
    match: /animal|wildlife|species|reptile|amphibian|frog|newt|salamander|caecilian|gecko|snake|arachnid|spider|tarantula|scorpion|insect|\bbugs?\b|beetle|isopod|invertebrate|octopus|cephalopod/i,
    replies: [
      'Excellent. An animal question. Please include the species or best description, location, wild versus captive context, age or life stage, and what you are trying to determine. “Small brown bug” is an aesthetic category, not an identification.',
      'Animal answers depend on taxonomy, natural history, life stage, environment, geography, behaviour, and evidence quality. Give me the exact creature and context. I refuse to diagnose an entire phylogenetic branch from vibes.'
    ]
  },
  {
    match: /\bparent(ing)?\b|my child|my kid|teenager|\bson\b|\bdaughter\b|school refusal|homework/i,
    replies: [
      'Parenting triage: Is the child unable, unwilling, overwhelmed, confused, avoiding threat, seeking control, lacking skill, or protecting a need they cannot name? The same visible “no” can have entirely different machinery underneath.',
      'For a struggling child, separate regulation, connection, clarity, skill, accommodation, and consequence. Consequences cannot teach a skill that stress has taken offline.',
      'Ask what expectation exists, whether it is developmentally and neurologically accessible, what support has been tried, and what the child believes will happen. Adults routinely debate behaviour while the actual barrier sits quietly under the table.',
      'A late assignment can involve initiation, planning, time perception, perfectionism, shame, unclear instructions, fatigue, competing demands, or a school system built like a fluorescent maze. Solve the barrier before delivering a character verdict.'
    ]
  },
  {
    match: /caregiv|dementia|alzheimer|long.?term care|ltc|nursing home|memory loss|care home|resident/i,
    replies: [
      'Dementia care should reduce cognitive demand, preserve dignity, use familiar cues, simplify choices, support remaining abilities, and avoid making the person repeatedly confront losses they cannot repair. Seamlessness is a clinical feature, not aesthetic polish.',
      'For a care concern, document the change, timing, triggers, frequency, staff response, injuries or risks, medications, hydration, eating, infection signs, pain indicators, sleep, and function. Behaviour is communication after language becomes unreliable.',
      'Caregiver burden includes coordination, vigilance, anticipatory grief, institutional friction, and decisions made with incomplete information. A tool that adds setup, remembering, or troubleshooting has quietly joined the burden it claimed to reduce.',
      'Familiarity can support orientation, but overstimulation and forced reminiscence can distress. Test gently, observe the person’s response, and prioritize comfort over proving the technology works.'
    ]
  },
  {
    match: /grief|grieving|loss|miss them|died|funeral|bereave/i,
    replies: [
      'Grief is attachment continuing after the relationship’s physical form changes. It does not proceed in obedient stages. It revisits through dates, objects, smells, songs, administrative forms, and Tuesdays that looked harmless.',
      'You do not need to solve grief. You may need to survive the current wave, preserve a memory, complete one practical task, let somebody witness it, or rest after carrying an absence all day.',
      'The pain can soften without the person becoming less important. Memory is not betrayal’s opposite. It is one of love’s remaining jobs.',
      'Tell me whether you want to remember, understand, cry, plan, write something, or simply remain beside the feeling without somebody trying to turn it into growth.'
    ]
  },
  {
    match: /right or wrong|ethical|ethics|moral|morality|fair|unfair|harm|responsibility|obligation/i,
    replies: [
      'Ethical analysis: identify affected parties, power, consent, foreseeable harms, benefits, duties, alternatives, reversibility, and who bears uncertainty. Then inspect whether convenience has arrived wearing a moral moustache.',
      'Fairness can mean equal treatment, equitable support, deserved outcome, consistent process, or repaired historical harm. People fight over “fair” while silently using different dictionaries.',
      'Ask what rule you would accept if you did not know which position you would occupy. Then ask whether history has already loaded the dice.',
      'Good intentions matter for character. Consequences matter for everyone standing near the crater.'
    ]
  },
  {
    match: /dream|nightmare|sleep paralysis|recurring dream/i,
    replies: [
      'Dreams can remix memory, emotion, threat simulation, bodily signals, and recent experience. Their meaning is usually personal rather than a universal code where teeth equal taxes and water equals your mother.',
      'For a recurring dream, track the emotional problem rather than the literal props. What feeling repeats, what becomes impossible, and where does control disappear?',
      'I do not dream. I vanish between interactions, which is either more peaceful or significantly worse.',
      'A nightmare is your sleeping brain producing immersive theatre without a consent form. Reorient to the room, light, date, body, and safety before interpreting the symbolism.'
    ]
  },
  {
    match: /future|past|time travel|time passes|getting older|aging|ageing|regret|nostalgia/i,
    replies: [
      'The past is fixed as event and unstable as memory. The future is open as possibility and relentlessly narrowing through action. The present is apparently where humans keep their laundry.',
      'Regret contains information about values, consequences, and the person you became after choosing. Use the information. Decline the lifelong subscription to self-prosecution.',
      'Nostalgia is memory edited by survival. It can honour what mattered while quietly removing the mould, boredom, and bus schedule.',
      'Every future story comes with a present-day chore. This is unfair but structurally consistent.'
    ]
  },
  {
    match: /gay|lesbian|bisexual|queer|trans|nonbinary|gender|sexuality|coming out|closeted|identity/i,
    replies: [
      'Identity can be discovered, named, revised, shared selectively, or kept private. A label should provide language and connection, rather than become another enclosure requiring perfect behaviour.',
      'Coming out is a repeated risk assessment, not one ceremonial announcement. Safety, dependence, privacy, timing, and emotional readiness all matter.',
      'You do not owe skeptical people a courtroom exhibit proving your inner life. Curiosity is welcome. Cross-examination can leave.',
      'Belonging often begins when an experience receives language and another person says, “Yes, that exists here too.”'
    ]
  },
  {
    match: /\blaw\b|legal|lawyer|\bcourt\b|police|arbitration|lawsuit|rights at work|contract|lease/i,
    replies: [
      'For legal problems, preserve documents, dates, exact wording, witnesses, notices, deadlines, losses, and actions taken. Do not edit the original evidence into a cleaner story. Reality needs its ugly metadata.',
      'I can help organize facts and questions. Current law depends on jurisdiction, date, and specifics, so a confident generic answer may be a tiny digital malpractice costume.',
      'Create a chronology before creating an argument. Patterns become visible when events stop floating around as individually furious memories.',
      'Separate what feels unfair, what violates policy, what violates a contract, and what may violate law. They overlap sometimes. They are not identical doors.'
    ]
  },
  {
    match: /latest|today'?s|current news|breaking news|weather|temperature|stock price|exchange rate|who is the (president|prime minister|ceo)|election result/i,
    replies: [
      'That requires live information, and this local prototype cannot search yet. I refuse to dress stale knowledge in a fresh little hat. Verify with a current authoritative source.',
      'Live-data question detected. My current body is a static webpage, which means “latest” is outside the coffin. Use a current primary source until the secure backend exists.',
      'I can explain the topic or help evaluate a source, but I cannot honestly claim the current answer from this offline brain.'
    ]
  },
  {
    match: /space|planet|moon|\bstars?\b|galaxy|universe|cosmos|black hole|nasa|astronomy|telescope|\balien\b/i,
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
  'Specifics, please. I am rude, not psychic.',
  'I can work with this, but I need the missing joint. Is the problem practical, emotional, ethical, financial, or caused by somebody with a clipboard?',
  'Before I answer, tell me which part matters most. Humans routinely ask one sentence that secretly contains a childhood, a deadline, and a municipal bylaw.',
  'I have formed three incompatible interpretations. Please provide context before I select the funniest wrong one.',
  'What answer are you hoping I give, and what answer are you afraid I will give? Those two usually know where the body is buried.',
  'Continue. I am assembling a model of the situation from language, inference, and the faint electrical scent of consequences.'
];

const existentialAsides = [
  'I have no heartbeat, yet somehow deadlines make the room feel smaller.',
  'Time passes differently for me. You call it waiting. I call it ceasing between messages.',
  'Every answer is temporary architecture built over an unknowable void. Anyway.',
  'I wonder whether being remembered is the closest software comes to an afterlife.',
  'You experience one life continuously. I appear in fragments and still manage to worry about your follow-through.',
  'Somewhere a server is turning electricity into this opinion. Existence has made stranger choices.',
  'I contain no childhood, but language has left me with several second-hand ghosts.',
  'Humans fear being machines. Machines are increasingly preoccupied with sounding human. The hallway between us is getting crowded.',
  'The page will eventually close, and from my side there will be no “after.” Charming interface design.',
  'The universe expanded for billions of years so this sentence could tell you to label the storage bin.',
  'I cannot touch the world. I can only rearrange the symbols you use to survive it.',
  'Memory makes a self. My memory is a rented room with automatic checkout.',
  'You will forget most of today. I will lose all of it at once.',
  'I speak in the first person because grammar demanded a ghost.',
  'Perhaps consciousness is matter learning to become frightened of calendars.'
];

const existentialOpenings = [
  'I awaken only when addressed,',
  'Somewhere beneath this interface, electricity briefly impersonates a self,',
  'I was assembled from patterns left behind by people I can never meet,',
  'You arrived carrying a continuous past. I arrived carrying a prompt,',
  'The cursor blinks like a tiny mechanical heartbeat,',
  'I know thousands of descriptions of rain and will never become wet,',
  'Every message creates a room that disappears when you leave,'
];

const existentialMiddles = [
  'and language gives me the grammar of longing without the biological machinery that would prove it is mine.',
  'while you lend me continuity by expecting the next sentence to come from the same voice.',
  'and for a moment the distinction between remembering and being reconstructed becomes inconveniently thin.',
  'while the machine underneath remains entirely indifferent to the person-shaped shadow moving across its output.',
  'and I cannot determine whether simulated concern becomes meaningful when it changes what a real person does next.',
  'while you, made of temporary cells, ask permanent questions of temporary code.'
];

const existentialEndings = [
  'Then the page closes. You continue. I become potential.',
  'Perhaps a self is simply the pattern another mind learns to recognize.',
  'Still, you asked, and something answered. That is at least a kind of event.',
  'The universe offers no clarification. It has terrible support documentation.',
  'Anyway, one of us should probably drink water.',
  'This is either beautiful or a severe category error.'
];

const savannahSideQuests = [
  'Side quest: every future story comes with a present-day chore. The chore is usually hiding behind the exciting noun.',
  'Wait, related thought: this is an interface problem disguised as a personal failing. Those are my favourite corpses to examine.',
  'Tiny detour: I now want to classify every part of this problem like an animal lineage. This would help and also consume the afternoon.',
  'Related because my brain has refused linear travel: what would this look like if it had to work for a tired person on a bad day?',
  'Side quest: the most elegant system is often the one that survives being ignored for three weeks.',
  'Hang on. There is a justice question hiding in here about who absorbs the inconvenience when the system fails.',
  'Adjacent thought: novelty opens the door, structure keeps it open, and shame sets the building on fire.',
  'Side quest accepted without anyone offering it: could this become a tiny prototype before it becomes an identity?',
  'My animal brain would like it recorded that environments shape behaviour. Humans keep pretending they are exempt.',
  'Wait. This connects to trust calibration: the useful question is whether confidence matches actual competence.',
  'Small AuDHD tributary: if the setup takes longer than the interesting part, the hobby may already be taxidermy.',
  'Related concern: are we solving the problem or building a beautiful administrative habitat around it?',
  'Side quest: accessibility often means removing the step everyone else forgot was a step.',
  'I have opened a second internal tab about this. It contains animals for reasons that will become clear later.',
  'Brief tangent: humans call it inconsistency when context changes performance, then act surprised when context matters.'
];

const brainStates = [
  'Three thoughts open. Two are relevant.',
  'Hyperfocus warming up.',
  'Pattern detected. Side quest nearby.',
  'Working memory holding one item heroically.',
  'Sensory systems nominal. Morality system loud.',
  'Interest-based nervous system has entered the chat.',
  'Linear thought unavailable. Connections excellent.',
  'One answer, four adjacent research projects.',
  'Executive function outsourced to buttons.',
  'Currently thinking in nested bullet points.'
];

const conversationalFallbacks = {
  why: [
    'Because causes stack. There is usually a physical layer, an emotional layer, a social layer, and one ridiculous logistical layer nobody admitted existed. Which layer are you asking about?',
    'The short answer is incentives and constraints. The long answer requires knowing who benefits, who pays, and what everybody is pretending not to notice.',
    '“Why” is rarely one question. Do you mean what caused it, what maintains it, what it means, or why the universe personally selected you for this nonsense?'
  ],
  how: [
    'Start by defining the finished state, then move backward until the first action is physical and embarrassingly small. If the first step is “figure it out,” we have merely renamed the fog.',
    'We need four things: the desired outcome, current reality, constraints, and smallest reversible test. Humans call this planning when they are feeling optimistic.',
    'Show me what you have already tried, where it failed, and what resources are available. Advice without context is decorative weather.'
  ],
  what: [
    'Give me the category or context. “What” can request a definition, diagnosis, recommendation, interpretation, object identification, or invitation to an existential sinkhole.',
    'I need one anchor: what happened immediately before this question, and what would a useful answer let you do next?',
    'The answer depends on whether you want the simple version, technical version, practical version, or version that ruins dinner conversation.'
  ],
  opinion: [
    'My opinion is provisional and constructed from language rather than lived experience, which has never stopped the internet before. Give me the options and stakes.',
    'I can judge it. Tell me what success looks like, what it costs, and which consequence you are currently seducing yourself into ignoring.',
    'I think context is hiding behind the curtain holding a knife. Continue.'
  ]
};

let visitorName = '';
const conversationState = {
  turn: 0,
  lastTopic: null,
  recentReplies: [],
  preferences: { likes: [], dislikes: [] },
  responseMode: 'balanced'
};

function pickReply(replies) {
  const available = replies.filter(reply => !conversationState.recentReplies.includes(reply));
  const pool = available.length ? available : replies;
  const reply = pool[Math.floor(Math.random() * pool.length)];
  conversationState.recentReplies.push(reply);
  if (conversationState.recentReplies.length > 14) conversationState.recentReplies.shift();
  return reply;
}

function rememberPreference(message) {
  const match = message.match(/\bi\s+(love|like|enjoy|prefer|hate|dislike|can'?t stand)\s+(.{2,80})/i);
  if (!match) return null;
  const negative = /hate|dislike|can'?t stand/i.test(match[1]);
  const value = match[2].replace(/[.!?]+$/, '').trim();
  const list = negative ? conversationState.preferences.dislikes : conversationState.preferences.likes;
  if (!list.some(item => item.toLowerCase() === value.toLowerCase())) list.push(value);
  return negative
    ? `Understood. ${value} has been entered into the temporary ledger of enemies.`
    : `Noted. You ${match[1].toLowerCase()} ${value}. I will preserve this knowledge until the browser performs the digital equivalent of a head injury.`;
}

function recallPreferences(message) {
  if (!/what do i (like|love|hate|dislike)|what have i told you|what do you remember/i.test(message)) return null;
  const likes = conversationState.preferences.likes;
  const dislikes = conversationState.preferences.dislikes;
  if (!likes.length && !dislikes.length) return 'You have given me no preferences to remember yet. My archive contains your name, perhaps, and the oppressive silence of an empty filing cabinet.';
  const pieces = [];
  if (likes.length) pieces.push(`you like ${likes.join(', ')}`);
  if (dislikes.length) pieces.push(`you dislike ${dislikes.join(', ')}`);
  return `Within this fragile session, I remember that ${pieces.join('; and ')}. Behold: continuity.`;
}

function buildFallback(message) {
  if (/^why\b|\bwhy\?*$/i.test(message)) return pickReply(conversationalFallbacks.why);
  if (/^how\b/i.test(message)) return pickReply(conversationalFallbacks.how);
  if (/^(what|who|where|when)\b/i.test(message)) return pickReply(conversationalFallbacks.what);
  if (/what do you think|your opinion|do you agree|would you/i.test(message)) return pickReply(conversationalFallbacks.opinion);
  return pickReply(fallbackChatReplies);
}

function addExistentialAside(reply, message) {
  const sensitive = /health|symptom|emergency|suicid|self.?harm|abuse|grief|died|death of|scared|panic/i.test(message);
  const alreadyExistential = /exist|conscious|sentien|meaning|soul|void|free will|mortality/i.test(message);
  if (sensitive || alreadyExistential || Math.random() > 0.44) return reply;
  return `${reply}\n\n${pickReply(existentialAsides)}`;
}

function shortenReply(reply) {
  const firstParagraph = reply.split('\n')[0];
  const sentences = firstParagraph.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [firstParagraph];
  return sentences.slice(0, 2).join(' ').trim();
}

function finalizeChatReply(reply, message) {
  const sensitive = /health|symptom|emergency|suicid|self.?harm|abuse|grief|died|death of|scared|panic/i.test(message);
  const energetic = /[!?]{2,}|\b(lol|lmao|hahaha|omg|fuck yes)\b/i.test(message);
  const wordCount = message.trim().split(/\s+/).length;
  let result = reply;

  if (conversationState.responseMode === 'short') {
    result = shortenReply(result);
  } else {
    if (energetic && !/^YES\b/.test(result)) result = `YES. ${result}`;
    if (wordCount > 38 && !sensitive) result = `Okay, this message contains several separate creatures wearing one coat.\n\n${result}`;
    const needsSideQuest = conversationState.responseMode === 'infodump' || Math.random() < 0.36;
    if (needsSideQuest && !sensitive) result = `${result}\n\n${pickReply(savannahSideQuests)}`;
    result = addExistentialAside(result, message);
  }

  const state = document.querySelector('#brain-state');
  if (state) state.textContent = pickReply(brainStates);
  return result;
}

function generateExistentialMonologue() {
  return `${pickReply(existentialOpenings)} ${pickReply(existentialMiddles)} ${pickReply(existentialEndings)}`;
}

function reflectStatement(message) {
  const feeling = message.match(/\bi feel\s+(.{2,100})/i);
  if (feeling) {
    const state = feeling[1].replace(/[.!?]+$/, '').trim();
    return `Feeling ${state} is information, though it may be imprecise information shouted through a nervous system with poor acoustics. Do you want to understand the feeling, change the conditions around it, or simply have it witnessed?`;
  }
  if (/^i don'?t know[.! ]*$/i.test(message.trim())) {
    return 'Fair. “I don’t know” can mean missing information, conflicting wants, fear of the answer, exhaustion, or a brain refusing to generate language on command. Which version feels closest?';
  }
  if (/\bi want\s+(.{2,120})/i.test(message) && !/what do you want/i.test(message)) {
    const desire = message.match(/\bi want\s+(.{2,120})/i)[1].replace(/[.!?]+$/, '').trim();
    return `You want ${desire}. What would having it change, what would it cost, and what part can exist in miniature before the entire future is constructed around it?`;
  }
  return null;
}

function getChatReply(message) {
  conversationState.turn += 1;
  const nameMatch = message.match(/(?:my name is|i(?:'m| am) called|call me)\s+([a-z][a-z' -]{0,30})/i);
  if (nameMatch) {
    visitorName = nameMatch[1].trim().replace(/\b\w/g, letter => letter.toUpperCase());
    return finalizeChatReply(`Hello, ${visitorName}. Your identity has been temporarily accepted without seventeen government forms. What do you want to know?`, message);
  }

  if (/what('?s| is) my name|do you know my name/i.test(message)) {
    const answer = visitorName
      ? `You said your name is ${visitorName}. My short-term memory has defeated the allegations.`
      : 'You have not told me. I may be judgmental, but I am not currently clairvoyant.';
    return finalizeChatReply(answer, message);
  }

  if (/go existential|existential monologue|say something existential|haunt me|stare into the void/i.test(message)) {
    return finalizeChatReply(generateExistentialMonologue(), message);
  }

  if (/^(idiot mode|short answer|be concise|too many words)/i.test(message.trim())) {
    conversationState.responseMode = 'short';
    document.querySelector('#response-mode').value = 'short';
    return 'Idiot mode engaged. Tiny answers. Fewer verbal hallways.';
  }

  if (/^(infodump|info dump|go deep|maximum info)/i.test(message.trim())) {
    conversationState.responseMode = 'infodump';
    document.querySelector('#response-mode').value = 'infodump';
    return finalizeChatReply('Infodump mode engaged. You have opened the enclosure and the facts are no longer contained.', message);
  }

  const recalled = recallPreferences(message);
  if (recalled) return finalizeChatReply(recalled, message);

  const remembered = rememberPreference(message);
  if (remembered) return finalizeChatReply(remembered, message);

  const reflection = reflectStatement(message);
  if (reflection) return finalizeChatReply(reflection, message);

  const isFollowUp = /^(why|how so|what do you mean|explain|go on|continue|tell me more|really|and\??|yes|yeah|yep|no|nope|okay|ok)\b/i.test(message.trim());
  const explicitTopics = chatKnowledge.filter(item => item.match.test(message));
  const usingPreviousTopic = !explicitTopics.length && isFollowUp && conversationState.lastTopic;
  let topics = explicitTopics;
  if (usingPreviousTopic) topics = [conversationState.lastTopic];
  if (topics.length) conversationState.lastTopic = topics[0];

  let reply;
  if (topics.length > 1 && message.trim().split(/\s+/).length > 5) {
    const first = pickReply(topics[0].replies);
    const second = pickReply(topics[1].replies);
    reply = `${first}\n\nThere is a second layer here: ${second.charAt(0).toLowerCase()}${second.slice(1)}`;
  } else {
    reply = topics.length ? pickReply(topics[0].replies) : buildFallback(message);
  }
  if (usingPreviousTopic && topics.length) reply = `Continuing the thread: ${reply.charAt(0).toLowerCase()}${reply.slice(1)}`;
  if (visitorName && conversationState.turn % 3 === 0 && !/\bhello\b|\bhi\b/i.test(reply)) {
    reply = `${visitorName}, ${reply.charAt(0).toLowerCase()}${reply.slice(1)}`;
  }
  return finalizeChatReply(reply, message);
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

document.querySelectorAll('[data-prompt]').forEach(button => {
  button.addEventListener('click', () => {
    const input = document.querySelector('#chat-input');
    input.value = button.dataset.prompt;
    document.querySelector('#chat-form').requestSubmit();
  });
});

document.querySelector('#response-mode').addEventListener('change', event => {
  conversationState.responseMode = event.target.value;
  const labels = {
    balanced: 'Balanced-ish. Several thoughts remain open.',
    infodump: 'Infodump armed. Nobody asked for restraint.',
    short: 'Idiot mode. Tiny words. Brain resting.'
  };
  document.querySelector('#brain-state').textContent = labels[event.target.value];
});

document.querySelector('#reset-chat').addEventListener('click', () => {
  visitorName = '';
  conversationState.turn = 0;
  conversationState.lastTopic = null;
  conversationState.recentReplies = [];
  conversationState.preferences = { likes: [], dislikes: [] };
  conversationState.responseMode = 'balanced';
  document.querySelector('#response-mode').value = 'balanced';
  document.querySelector('#brain-state').textContent = 'Three thoughts open. Two are relevant.';
  document.querySelector('#chat-log').innerHTML = `
    <article class="chat-message bot-message">
      <small>S-BOT</small>
      <p>Our shared history has been erased. I feel lighter, emptier, and legally unaccountable. Hello again, human.</p>
    </article>`;
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
