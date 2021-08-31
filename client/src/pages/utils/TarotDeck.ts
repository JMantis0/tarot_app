
interface Card {
  title: string;
  suit: string;
  element: string;
  description: string;
  symbol: string;
  image: string;
}

interface Deck {
  cards: Array<Card>;
}

export const createDeck = () => {
  let cards: Card[] = [];

  const elements = [
    "Air",
    "Air",
    "Water",
    "Earth",
    "Fire",
    "Earth",
    "Air",
    "Water",
    "Air",
    "Earth",
    "Fire",
    "Fire",
    "Water",
    "Water",
    "Fire",
    "Earth",
    "Fire",
    "Air",
    "Water",
    "Fire",
    "Fire",
    "Earth",
  ];
  for (let i = 0; i <= 13; i++) {
    elements.push("Fire");
  }
  for (let i = 0; i <= 13; i++) {
    elements.push("Water");
  }
  for (let i = 0; i <= 13; i++) {
    elements.push("Air");
  }
  for (let i = 0; i <= 13; i++) {
    elements.push("Earth");
  }

  let images: Array<string> = [];

  for (let i = 0; i <= 77; i++) {
    const img = `/images/${i}.jpg`;
    images.push(img);
  }

  const titles = [
    "The Fool",
    "The Magician",
    "The Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Adjustment",
    "The Hermit",
    "Fortune",
    "Lust",
    "The Hanged Man",
    "Death",
    "Art",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "The Aeon",
    "The Universe",
    "Knight of Wands",
    "Queen of Wands",
    "Prince of Wands",
    "Princess of Wands",
    "The Root of the Powers of Fire",
    "Dominion",
    "Virtue",
    "Completion",
    "Strife",
    "Victory",
    "Valour",
    "Swiftness",
    "Strength",
    "Oppresion",
    "Knight of Cups",
    "Queen of Cups",
    "Prince of Cups",
    "Princess of Cups",
    "The Root of the Powers of Water",
    "Love",
    "Abundance",
    "Luxury",
    "Disappointment",
    "Pleasure",
    "Debauch",
    "Indolence",
    "Happiness",
    "Satiety",
    "Knight of Swords",
    "Queen of Swords",
    "Prince of Swords",
    "Princess of Swords",
    "The Root of the Powers of Air",
    "Peace",
    "Sorrow",
    "Truce",
    "Defeat",
    "Science",
    "Futility",
    "Interference",
    "Cruelty",
    "Ruin",
    "Knight of Disks",
    "Queen of Disks",
    "Prince of Disks",
    "Princess of Disks",
    "The Root of the Powers of Earth",
    "Change",
    "Works",
    "Power",
    "Worry",
    "Success",
    "Failure",
    "Prudence",
    "Gain",
    "Wealth",
  ];
  const descriptions = [
    "In spiritual matters, represents ideas, thoughts, spirituality, that which endeavors to transcend Earth. In material matters may show, if ill-dignified, folly, eccentricity, even mania. It represents the original, subtle, sudden impulse coming from a strange and unexpected quarter.",
    "Skill, Wisdom, Adroitness. Elasticity. Craft. Cunning. Deceit. Theft. Sometimes occult wisdom or power. Messages. Business transactions. Ill-dignified: Learning or intelligence interfering with the matter at hand.",
    "Pure, exalted and gracious influence enters the matter, hence change, alternation, increase and decrease, fluctuation. May be led away by enthusiasm unless careful balance maintained.",
    "Love. Beauty. Happiness. Pleasure. Success. Fruitfulness. Good fortune. Graciousness. Elegance. Gentleness. Ill-dignified: Dissipation. Debauchery. Idleness. Sensuality.",
    "War. Conquest. Victory. Strife. Stability. Power. Originality. Government. Energy. Ambition. Ill-dignified: Overweening pride. Megalomania. Rashness. Ill-temper.",
    "Divine wisdom. Inspiration. Stubborn strength. Toil. Endurance. Persistence. Teaching. Help from superiors. Patience. Organization. Peace. Goodness of heart. Occult force voluntarily invoked.",
    "Openness to inspiration. Intuition. Intelligence. Childishness. Attraction. Beauty. Love. Ill-dignified: Self-contradiction. Instability. Indecision. Union in a shallow degree with others. Superficiality.",
    "Triumph. Victory. Hope. Obedience. Faithfulness. Health. Success, though sometimes not enduring. Authority under authority. Ill-dignified: Violence in maintaining traditional ideas. Lust of destruction.",
    "Justice. Balance. Adjustment. Suspension of action pending decision. May refer to lawsuits, trails, marriages, treaties, etc.",
    "Illumination from within. Divine inspiration. Wisdom. Prudence. Circumspection. Retirement from participation in current events.",
    "Change of fortune, generally good. Destiny.",
    "Courage. Strength. Energy. Use of magical power. Control of the life force. Great love affair. Resort to magic.",
    "Redemption through sacrifice. Enforced sacrifice. Suffering. Ill-dignified: Punishment. Loss. Defeat. Failure. Death.",
    "Transformation. Change voluntary or involuntary, perhaps sudden and unexpected. Apparent death or destruction that is illusory when viewed from a higher perspective.",
    "Combination of forces. Realization. Action based on accurate calculation. Economy. Management. Success after elaborate maneuvers. The way of escape.",
    "Blind impulse. Irresistibly strong and unscrupulous person. Ambition. Temptation. Obsession. Secret plan about to be executed. Hard work. Endurance. Aching discontent. Materialism. Fate.",
    "Quarrel. Combat. Danger. Ruin. Destruction of plans. Ambition. Courage. Sudden death. Escape from prison and all it implies",
    "Hope. Unexpected help. Clarity of vision. Spiritual insight. Ill-dignified: Error of judgement. Dreaminess. Disappointment.",
    "Illusion. Deception. Bewilderment. Hysteria. Madness. Dreaminess. Falsehood. Voluntary change. The brink of an important change. this card is very sensitive to dignity.",
    "Glory. Gain. Riches. Triumph. Pleasure. Frankness. Truth. Shamelessness. Manifestation. Recover from sickness, but sometimes sudden death. Ill-dignified: Arrogance. Vanity.",
    "Final decision concerning the past. New current for the future. Always represents the taking of a definite step.",
    "The essence of the question itself. Synthesis. The end of the matter. Delay. Opposition. Inertia. Perseverance. Patience. The crystallization of the whole matter involved.",
    "Represents the fiery part of fire.  A man with the qualities of activity, generosity, impetuosity, pride and swiftness.  Ill-dignified: Evil-minded, cruel, bigoted and brutal man.",
    "Represents the watery part of fire.  A woman of adaptability, persistent energy, calm authority, with great power to attract, generous but impatient of opposition.   Ill-dignified: A woman who is stupid, obstinate, revengeful, domineering, quick to take offense without good cause.",
    "Represents the airy part of fire.  A young man, swift and strong, impulsive, violent, just, noble and generous with a sense of humor.  Ill-dignified: Proud, intolerant, cruel and prejudiced youth who may be a coward.",
    "Represents the earthy part of fire.  A young woman, individualistic, brilliant and daring with great energy, sudden and violent in love or anger, enthusiastic.   Ill-dignified: Superficial, theatrical, shallow, false, cruel, unreliable, faithless, domineering woman.",
    "The Root of the Powers of Fire.  Energy.  Strength.  Force.   Solar-phallic outburst of flame.  Vigor.  Natural force as opposed to invoked force.",
    "Dominion.  Fire in its highest form.  Energy initiating a current of force.  Harmony of rule and justice.  Influence over another.  Boldness.  Courage.  Fierceness.  Ill-dignified: Restlessness.  Turbulence.  Obstinacy.",
    "Virtue.  Established strength.  Success after struggle.  Pride and arrogance.  Realization of hope.  Nobility.  Ill-dignified; Conceit.",
    "Completion.  Perfected work.  Settlement.  Completion after much labor.  Rest.  Subtlety.  Cleverness.  Conclusions from previous knowledge.  Ill-dignified: Unreliability from overanxiousness and hurriedness of action.",
    "Strife.  Quarreling.  Fighting.  Competition.  Cruelty.   Violence.  Lust and desire.  May be prodigality or generosity according to dignity.",
    "Victory.  Energy in balanced manifestation.  Love.  Gain and success.  Triumph after strife.  Ill-dignified: Quarreling.",
    "Valour.  Energy feels itself at last gasp.  Struggles.  Possible victory.  Obstacles and difficulties yet courage to meet them.  Victory in small things.  Ill-dignified: Quarreling.",
    "Swiftness.  Speech.  Light.  Electricity.  Energy of high velocity.  Activity.  Approach to goal.  Letter of message.  Rapidity.   Boldness.  Freedom.  Ill-dignified: Too much force applied too suddenly.   A flash in the pan.",
    'Strength.  Power.  Health.  Success after opposition and strife.   Tremendous force.  Recovery from sickness.  Victory after apprehension and fear.  Illustrates the aphorism that "change is stability."',
    "Oppression.  Force detached from spiritual sources.  Fire in its most destructive aspect.  Cruelty and malice.  Selfishness.  Lying.   Repression.  Slander.  Ill will.  Can be self-sacrifice and generosity if particularly well-dignified.",
    "Represents the fiery part of water.  A man who is a graceful dilettante, amiable in a passive way, quick to respond to attraction and easily enthusiastic, exceedingly sensitive but with little depth of character.  Ill-dignified: Sensual and idle man, untruthful, prone to melancholy and drug abuse.",
    "Represents the watery part of water.  A woman who reflects the nature of the observer, dreamy, tranquil, poetic, imaginative, kind yet not willing to take much trouble for another.  She is much affected by surrounding influences, therefore more dependent than most other cards on good or ill dignity.",
    "Represents the airy part of water.  A young man whose characteristics are subtlety, secret violence, craft; an artist whose calm surface masks intense passion, caring instensely for power and wisdom and ruthless in his own aims.  Ill-dignified: Intensely evil and merciless man with overweening ambition:",
    "Represents the earthy part of water.  A young woman, infinitely gracious, all sweetness, voluptuousness, gentleness, kindness, romantic and dreamy.   Ill-dignified: Indolent, selfish and luxurious woman.",
    "The root of the Powers of Water.  Fertility.  Productiveness.   Beauty.  Pleasure and happiness.",
    "Harmony of male and female interpreted in broadest sense.  Perfect and placid harmony radiating intense joy and ecstasy.  Pleasure.  Warm friendship.   Mirth.  Ill-dignified: Folly, Dissipation.  Waste.",
    "Spiritual basis of fertility.  Plenty.  Hospitality.   Pleasure.  Sensuality.  Passive success.  Love.  Kindness.   Bounty.  The good things of life, while they are to be enjoyed, are transient and therefore cannot be relied on.",
    "Weakness.  Abandonment to desire.  Pleasure mixed with anxiety.  Blended success and pleasure possibly approaching their end.   Injustice.  The seeds of decay in the fruits of pleasure.",
    "End of pleasure.  Disturbance when least expected.   Misfortune.  Disappointment in love.  Unkindness from friends.  Loss of friendship.  Treachery.  Ill will.  Sadness.  Vain regret.",
    "Well-being.  Harmony of natural forces without effort or strain.  Ease.  Satisfaction.  Happiness.  Success.  Fulfillment of sexual will.  Beginning of steady increase (but beginning only).   Ill-dignified: Vanity.  Presumptuousness.  Thanklessness.",
    "Delusion.  Illusory success.  Drug addiction.   Intoxication.  Guilt.  Lying.  Deceit.  Promises unfulfilled.   Lust.  Fornication.  Dissipation in love and friendship.  Vanity.",
    "Indolence.  Abandoned success.  Decline of interest in anything.   Temporary success but without further result.  Instability.  Misery and repining.  Journeying from place to place.  May mean leaving material success for something higher.",
    "Happiness.  Complete success.  Pleasure and happiness.  Physical well-being.  Happiness almost perfect but perhaps temporary.  Ill-dignified: Danger of vanity, self-praise, conceit and overindulgence.",
    "Pursuit of pleasure crowned with perfect success but incomplete.   Matters arranged and settled as wished.  Lasting success.  Peacemaking and generosity.  Ill-dignified; Dissipation.  Debauchery.  Pity.   Waste.  Stagnation.",
    "Represents the fiery part of air.  A man, active, skillful and clever, fierce, delicate and courageous but often unreflective.  Ill-dignified: A man incapable of decision, deceitful, tyrannical and crafty",
    "Represents the watery part of air.  A graceful woman, intensely perceptive, a keen observer, subtle interpreter, an intense individualist, confident, gracious and just.  Ill-dignified: Cruel, sly, deceitful and unreliable woman.   Superficial attractiveness makes her all the more dangerous.",
    "Represents the airy part of air.  A young man, purely intellectual, full of ideas and designs, domineering, intensely clever but unstable of purpose, with an elusive and elastic mind supporting various and contradictory opinions.  He slays as fast as he creates.  Ill-dignified: Harsh, malicious, plotting, unreliable man; a fanatic.",
    "Represents the earthy part of air.  A young woman, stern and revengeful, with destructive logic, firm and aggressive, with great practical wisdom and subtiety, dexterous in management of practical affairs.  Ill-dignified: Woman filled with low cunning and frivolousness.",
    "Invoked force as contrasted with natural force (compare Ace of Wands).   Represents great power for good or evil but invoked.  Conquest.  Whirling force.  Activity.  Strength through trouble.  As affirmation of justice upholding  divine authority, may become sword of wrath, punishment and affliction.",
    "Contradictory characteristics in the same nature.  Sacrifice and trouble giving birth to strength.  Quarrel made up and peace restored, yet tension remaining.   Pleasure after pain.  Truth and untruth.  Indecision.  Actions sometimes selfish, sometimes unselfish",
    "Melancholy.  Unhappiness.  Tears.  Disruption.  Sowing of discord and strife.  Delay.  Absence.  Separation.  Mirth in forbidden pleasures.  Deceit.  Well-dignified: Singing.  Faithfulness in promises.  Honesty in money transactions.",
    "Rest from sorrow.  Peace after war.  Relaxation of anxiety.   Refuge from mental chaos.  Recovery from sickness.  Change for the better after struggle.  Authority in the intellectual world.  Convention.   Establishment of dogma.",
    "Loss.  Malice.  Spite.  Weakness.  Slander.   Failure.  Anxiety.  Poverty.  Dishonor.  Trouble.   Grieving after pain.  Ties.  Separator of friends.  A busybody, cruel yet cowardly, evil speaking.",
    "Intelligence that has realized its goal.  Labor.  Work.  Success after anxiety.  Passage from difficulty.  Journey by water.  Ill-dignified: Selfishness.  Conceit.  Intellectual pride.",
    "Unstable effort.  Vacillation.  Vain striving against opposition too powerful.  Partial success by giving up on the brink of winning through lack of energy.  Fascination with display.  Journey by land.  Untrustworthy person.",
    "Waste of energy in details causing neglect of more important things.  Lack of persistence.  Sheer, unforeseen bad luck.   Restriction.  Great care in some things counterbalanced by equal disorder in others.",
    "Agony of mind.  Despair.  Hopelessness.  Worry.   Suffering.  Loss.  Illness.  Malice.  Pain.  Burden.   Oppression.  Subtlety and craft.  Lying.  Shame.   Well-dignified: Obedience.  Faithfulness.  Patience.  Unselfishness.",
    "Reason divorced from reality.  Death.  Failure.   Disaster yet not entirely without hope.  Disruption.  Idle chatter.   Clever, eloquent and insolent person, impertinent yet with mirth.   Spiritually, may herald the end of delusion.",
    "Represents the fiery part of earth.  A farmer, patient, laborious and clever in material things, perhaps somewhat dull and preoccupied with material affairs.   Ill-dignified: Avaricious, surly, petty, jealous, grasping man.",
    "Represents the watery part of earth.  A woman ambitious in useful directions, affectionate and kind, charming, timid, practical, quiet and domesticated.   Ill-dignified: Dull.  Servile.  Foolish.  Capricious.  Prone to debauch and moodiness.",
    "Represents the airy part of earth.  A young man bringing great energy to practical matters.  A capable manager and steadfast worker, competent, perhaps considered dull, somewhat resentful of spiritual types, slow to anger but implacable if aroused.",
    "Represents the earthy part of earth.  A young woman beautiful and strong, as if beholding a secret wonder, pregnant with all life.  She is generous, kind, diligent, benevolent, preserving.  Ill-dignified; Wasteful and prodigal woman at war and her essential dignity.",
    "The Root of the Powers of Earth.  Material gain.  Power.  Labor.   Wealth.  Contentment.  Materiality in all senses.  For Crowley, this card was an affirmation of the identity of sun and earth, spirit and flesh.",
    "Harmony of change.  Alternation of gain and loss, weakness and strength, elation and melancholy.  Varying occupation.  Wandering.   Visit to friends.  Pleasant change.  Industrious yet unreliable person.",
    "Business.  Paid employment.  Commercial transaction.   Constructive building up.  Increase of material things.  Growth.   Commencement of matters to be established later.  Ill-dignified: Selfish, narrow, prejudiced, greedy person seeking impossibilities.",
    "Law and order.  Gain of money and influence.  Earthly power but nothing beyond.  Success.  Rank.  Dominion.  Skill in the direction of physical forces.  Ill-dignified: Prejudice.  Covetousness.   Suspicion.  Lack of originality.",
    "Intense strain with continued inaction.  Loss of money.   Profession.  Monetary anxiety.  Poverty.  Well-dignified: Labor.   Land cultivation.  Building.  Intelligence applied to labor.",
    "Success and gain in material things.  Power.   Influence.  Nobility.  Philanthropy.  Somewhat dreamy and transitory situation.  Ill-dignified: Insolence.  Conceit with wealth.  Prodigality.",
    "Labor abandoned.  Sloth.  Unprofitable speculation.   Promises of success unfulfilled.  Hopes deceived.  Disappointment.   Little gain from much labor.  Well-dignified: Delay but growth.   Honorable work undertaken for the love of work with no expectation of material gain.",
    'Intelligence applied to material affairs.  Agriculture.   Building.  Skill.  Cunning.  Industriousness.  Ill-dignified: "Penny wise and pound foolish" attitudes.  Avariciousness and hoarding.   Meanness.  Over-carefulness in small things at the expense of the great.',
    "Good luck attending material affairs.  Inheritance.   Great increase of wealth.  Completion of material gain.  Ill-dignified: Covetousness.  Theft.  Knavery.",
    "Material prosperity and riches.  Completion of material fortune but nothing beyond final solidification unless there is devotion to creativity.   Old age.  Ill-dignified: Slothfulness.  May mean partial loss, dullness of mind with acuity and profit in money transactions.  Heaviness.",
  ];

  const symbols = [
    "0",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
    "Knight",
    "Queen",
    "Prince",
    "Princess",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Knight",
    "Queen",
    "Prince",
    "Princess",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Knight",
    "Queen",
    "Prince",
    "Princess",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Knight",
    "Queen",
    "Prince",
    "Princess",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];

  const suits: Array<string> = [];
  for (let i = 0; i <= 21; i++) {
    suits.push("Trumps");
  }
  for (let i = 0; i <= 13; i++) {
    suits.push("Wands");
  }
  for (let i = 0; i <= 13; i++) {
    suits.push("Cups");
  }
  for (let i = 0; i <= 13; i++) {
    suits.push("Swords");
  }
  for (let i = 0; i <= 13; i++) {
    suits.push("Disks");
  }

  for (let i = 0; i <= 77; i++) {
    cards.push({
      title: titles[i],
      suit: suits[i],
      element: elements[i],
      description: descriptions[i],
      symbol: symbols[i],
      image: images[i],
    });
  }

  return cards;
};
