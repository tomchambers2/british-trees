export const TREES = [
  {
    id: "oak",
    commonName: "English Oak",
    latinName: "Quercus robur",
    family: "Fagaceae",
    fact: "Can live for over 1,000 years and supports more wildlife than any other native tree — over 280 insect species.",
    habitat: "Woodland, hedgerows, parkland",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat_03.jpg/800px-Cat_03.jpg", type: "leaf", caption: "Distinctive lobed leaves with short stalks" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Guestpark_Oak.jpg/800px-Guestpark_Oak.jpg", type: "tree", caption: "Broad spreading crown" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Acorn_quercus_robur.jpg/800px-Acorn_quercus_robur.jpg", type: "fruit", caption: "Acorns on long stalks (peduncles)" }
    ]
  },
  {
    id: "ash",
    commonName: "Common Ash",
    latinName: "Fraxinus excelsior",
    family: "Oleaceae",
    fact: "Last to come into leaf in spring and first to lose leaves in autumn. Its seeds are called 'keys' and spiral like helicopters.",
    habitat: "Woodland, hedgerows, stream banks",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Fraxinus_excelsior_-_leaf.JPG/800px-Fraxinus_excelsior_-_leaf.JPG", type: "leaf", caption: "Pinnate leaves with 3-6 pairs of leaflets" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ash_keys.jpg/800px-Ash_keys.jpg", type: "fruit", caption: "Winged seeds called 'keys' or samaras" }
    ]
  },
  {
    id: "beech",
    commonName: "Beech",
    latinName: "Fagus sylvatica",
    family: "Fagaceae",
    fact: "Known as the 'Queen of British trees'. Its dense canopy casts so much shade that little grows beneath it. Beech woodland floor is carpeted with copper leaves in autumn.",
    habitat: "Chalk and limestone woodlands",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fagus_sylvatica_leaf.jpg/800px-Fagus_sylvatica_leaf.jpg", type: "leaf", caption: "Oval leaves with wavy edges and silky hairs when young" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Fagus_sylvatica_bark.jpg/800px-Fagus_sylvatica_bark.jpg", type: "bark", caption: "Smooth silver-grey bark — very distinctive" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Beech_mast.jpg/800px-Beech_mast.jpg", type: "fruit", caption: "Triangular beechmast nuts in prickly cases" }
    ]
  },
  {
    id: "silver-birch",
    commonName: "Silver Birch",
    latinName: "Betula pendula",
    family: "Betulaceae",
    fact: "A pioneer species — one of the first trees to colonise bare ground. Its white peeling bark was used by Native Americans for canoes and baskets.",
    habitat: "Heathland, open woodland, moorland edges",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Betula_pendula_bark.jpg/800px-Betula_pendula_bark.jpg", type: "bark", caption: "Bright white papery bark with black diamond fissures" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Betula_pendula_leaf.jpg/800px-Betula_pendula_leaf.jpg", type: "leaf", caption: "Triangular toothed leaves on drooping branches" }
    ]
  },
  {
    id: "hazel",
    commonName: "Hazel",
    latinName: "Corylus avellana",
    family: "Betulaceae",
    fact: "One of Britain's most ancient trees. Hazel rods were traditionally used for water divining and its nuts are a vital food source for dormice and squirrels.",
    habitat: "Woodland understorey, hedgerows, scrub",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Corylus_avellana_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-199.jpg/800px-Corylus_avellana_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-199.jpg", type: "leaf", caption: "Round heart-shaped leaves, doubly toothed" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hazel_catkins.jpg/800px-Hazel_catkins.jpg", type: "flower", caption: "Yellow male catkins ('lamb's tails') in early spring" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Corylus_avellana_-_nuts.jpg/800px-Corylus_avellana_-_nuts.jpg", type: "fruit", caption: "Hazelnuts in leafy green husks" }
    ]
  },
  {
    id: "rowan",
    commonName: "Rowan",
    latinName: "Sorbus aucuparia",
    family: "Rosaceae",
    fact: "Also called Mountain Ash. Its bright red berries are loved by birds. In Celtic folklore it was planted near homes to ward off witches.",
    habitat: "Upland woodland, moorland, mountain slopes",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sorbus_aucuparia_-_berries.jpg/800px-Sorbus_aucuparia_-_berries.jpg", type: "fruit", caption: "Clusters of bright orange-red berries in autumn" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sorbus_aucuparia_leaf.jpg/800px-Sorbus_aucuparia_leaf.jpg", type: "leaf", caption: "Pinnate leaves with 5-8 pairs of serrated leaflets" }
    ]
  },
  {
    id: "holly",
    commonName: "Holly",
    latinName: "Ilex aquifolium",
    family: "Aquifoliaceae",
    fact: "One of very few native British trees to keep its leaves all year. The prickles on lower leaves deter browsing animals — leaves higher up have fewer spines.",
    habitat: "Woodland, hedgerows, coastal scrub",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ilex_aquifolium_-_leaf.jpg/800px-Ilex_aquifolium_-_leaf.jpg", type: "leaf", caption: "Glossy dark green leaves with spiny margins" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Holly_berries.jpg/800px-Holly_berries.jpg", type: "fruit", caption: "Bright red berries — only on female trees" }
    ]
  },
  {
    id: "elder",
    commonName: "Elder",
    latinName: "Sambucus nigra",
    family: "Adoxaceae",
    fact: "A tree of superstition — burning elder wood was said to bring the devil into the house. Its flowers make elderflower cordial, its berries elderberry wine.",
    habitat: "Woodland edges, hedgerows, waste ground",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sambucus_nigra_-_leaves.jpg/800px-Sambucus_nigra_-_leaves.jpg", type: "leaf", caption: "Pinnate leaves with 5-7 leaflets, strong smell when crushed" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Elderflower.jpg/800px-Elderflower.jpg", type: "flower", caption: "Flat-topped clusters of tiny cream flowers in June" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Sambucus_nigra_-_berries.jpg/800px-Sambucus_nigra_-_berries.jpg", type: "fruit", caption: "Drooping clusters of small black berries" }
    ]
  },
  {
    id: "hawthorn",
    commonName: "Hawthorn",
    latinName: "Crataegus monogyna",
    family: "Rosaceae",
    fact: "Also called May tree — its blossom marks the start of spring. It's the most common hedgerow tree in Britain and provides vital food and shelter for wildlife.",
    habitat: "Hedgerows, scrubland, woodland edges",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Crataegus_monogyna_-_hawthorn_leaves.jpg/800px-Crataegus_monogyna_-_hawthorn_leaves.jpg", type: "leaf", caption: "Deeply lobed leaves, very distinctive shape" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hawthorn_blossom.jpg/800px-Hawthorn_blossom.jpg", type: "flower", caption: "White blossom in May — very fragrant" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Crataegus_monogyna_berries.jpg/800px-Crataegus_monogyna_berries.jpg", type: "fruit", caption: "Deep red haws (berries) in autumn" }
    ]
  },
  {
    id: "blackthorn",
    commonName: "Blackthorn",
    latinName: "Prunus spinosa",
    family: "Rosaceae",
    fact: "Blackthorn flowers before its leaves appear — a blaze of white in bare hedgerows. Its fruits (sloes) are used to make sloe gin. Its vicious thorns can cause infections.",
    habitat: "Hedgerows, scrubland, woodland edges",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Prunus_spinosa_200405.jpg/800px-Prunus_spinosa_200405.jpg", type: "flower", caption: "White flowers appear before leaves — a key identifier" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Prunus_spinosa_fruits.jpg/800px-Prunus_spinosa_fruits.jpg", type: "fruit", caption: "Blue-black sloe berries with a frosty bloom" }
    ]
  },
  {
    id: "yew",
    commonName: "Yew",
    latinName: "Taxus baccata",
    family: "Taxaceae",
    fact: "Britain's longest-lived tree — some are over 5,000 years old. Almost every part is poisonous except the red fleshy aril. Found in churchyards across Britain.",
    habitat: "Chalk downland, limestone, old churchyards",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Taxus_baccata_-_leaves.jpg/800px-Taxus_baccata_-_leaves.jpg", type: "leaf", caption: "Dark green needles in two flat rows" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taxus_baccata_berries.jpg/800px-Taxus_baccata_berries.jpg", type: "fruit", caption: "Red berry-like arils (seed covering) — the only non-toxic part" }
    ]
  },
  {
    id: "scots-pine",
    commonName: "Scots Pine",
    latinName: "Pinus sylvestris",
    family: "Pinaceae",
    fact: "Britain's only native pine and one of only three native conifers. The Caledonian Forest once covered much of Scotland — only remnants survive in the Cairngorms.",
    habitat: "Highland forest, heathland, sandy soils",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Scots_Pine_Pinus_sylvestris_Bark_2000px.jpg/800px-Scots_Pine_Pinus_sylvestris_Bark_2000px.jpg", type: "bark", caption: "Distinctive orange-red bark on upper trunk" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pinus_sylvestris_cone.jpg/800px-Pinus_sylvestris_cone.jpg", type: "fruit", caption: "Small oval cones, 3-7cm long" }
    ]
  },
  {
    id: "alder",
    commonName: "Alder",
    latinName: "Alnus glutinosa",
    family: "Betulaceae",
    fact: "The only British deciduous tree that produces cones. Alder can fix nitrogen from the air, enriching the soil. Its wood doesn't rot underwater and was used to build Venice.",
    habitat: "Riverbanks, marshes, wet woodland",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Alnus_glutinosa_-_leaf.jpg/800px-Alnus_glutinosa_-_leaf.jpg", type: "leaf", caption: "Rounded leaves with a notched tip, sticky when young" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Alnus_glutinosa_-_cones.jpg/800px-Alnus_glutinosa_-_cones.jpg", type: "fruit", caption: "Small woody cones persist through winter" }
    ]
  },
  {
    id: "field-maple",
    commonName: "Field Maple",
    latinName: "Acer campestre",
    family: "Sapindaceae",
    fact: "Britain's only native maple. In autumn its leaves turn brilliant gold and orange. Its sap can be made into syrup like Canadian maple, though it's less sweet.",
    habitat: "Hedgerows, woodland edges, scrubland",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Acer_campestre_-_leaf.jpg/800px-Acer_campestre_-_leaf.jpg", type: "leaf", caption: "5-lobed leaves with rounded lobes — softer than sycamore" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Acer_campestre_-_fruits.jpg/800px-Acer_campestre_-_fruits.jpg", type: "fruit", caption: "Paired winged seeds (samaras) in a straight line" }
    ]
  },
  {
    id: "wild-cherry",
    commonName: "Wild Cherry",
    latinName: "Prunus avium",
    family: "Rosaceae",
    fact: "The ancestor of all cultivated cherries. Its wood is highly prized for furniture. In spring it's covered in white blossom — spectacular in woodland clearings.",
    habitat: "Woodland, hedgerows",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Prunus_avium_-_blossom.jpg/800px-Prunus_avium_-_blossom.jpg", type: "flower", caption: "White blossom in April, before leaves fully open" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Prunus_avium_-_bark.jpg/800px-Prunus_avium_-_bark.jpg", type: "bark", caption: "Distinctive shiny reddish-brown bark with horizontal lines" }
    ]
  },
  {
    id: "lime",
    commonName: "Small-leaved Lime",
    latinName: "Tilia cordata",
    family: "Malvaceae",
    fact: "Ancient woodland indicator — a true native unlike the common lime (which is a hybrid). Its flowers are intensely fragrant and beloved by bees. Linden tea is made from them.",
    habitat: "Ancient woodland, limestone cliffs",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tilia_cordata_-_leaf.jpg/800px-Tilia_cordata_-_leaf.jpg", type: "leaf", caption: "Heart-shaped leaves, smaller than common lime, bluish beneath" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tilia_cordata_-_fruits.jpg/800px-Tilia_cordata_-_fruits.jpg", type: "fruit", caption: "Round nutlets attached to a narrow wing bract" }
    ]
  },
  {
    id: "wych-elm",
    commonName: "Wych Elm",
    latinName: "Ulmus glabra",
    family: "Ulmaceae",
    fact: "Scotland's only native elm. Unlike English Elm it doesn't spread by suckers. Dutch elm disease has devastated elm populations since the 1970s.",
    habitat: "Upland woodland, stream sides, rocky slopes",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ulmus_glabra_-_leaf.jpg/800px-Ulmus_glabra_-_leaf.jpg", type: "leaf", caption: "Very large rough leaves, asymmetric base — like sandpaper" }
    ]
  },
  {
    id: "crab-apple",
    commonName: "Crab Apple",
    latinName: "Malus sylvestris",
    family: "Rosaceae",
    fact: "The wild ancestor of all cultivated apples. Its small tart fruits make excellent jelly. It's an important food source for many birds and mammals in autumn.",
    habitat: "Woodland edges, hedgerows, scrubland",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Malus_sylvestris_-_fruits.jpg/800px-Malus_sylvestris_-_fruits.jpg", type: "fruit", caption: "Small yellow-green apples (2-3cm) with a sharp taste" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Malus_sylvestris_blossom.jpg/800px-Malus_sylvestris_blossom.jpg", type: "flower", caption: "Pink-tinged white blossom in May" }
    ]
  },
  {
    id: "goat-willow",
    commonName: "Goat Willow",
    latinName: "Salix caprea",
    family: "Salicaceae",
    fact: "Also called pussy willow — its fluffy silver-grey catkins are one of the first signs of spring. A vital early nectar source for bees and butterflies.",
    habitat: "Woodland, hedgerows, damp ground",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Salix_caprea_-_catkins.jpg/800px-Salix_caprea_-_catkins.jpg", type: "flower", caption: "Fluffy silver catkins in early spring — 'pussy willow'" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Salix_caprea_-_leaf.jpg/800px-Salix_caprea_-_leaf.jpg", type: "leaf", caption: "Broad oval leaves, wrinkled surface, grey-woolly beneath" }
    ]
  },
  {
    id: "juniper",
    commonName: "Juniper",
    latinName: "Juniperus communis",
    family: "Cupressaceae",
    fact: "One of only three native British conifers and the most widely distributed conifer in the world. Its berries (actually cones) are used to flavour gin.",
    habitat: "Chalk downland, highland moorland, limestone",
    photos: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Juniperus_communis_-_needles.jpg/800px-Juniperus_communis_-_needles.jpg", type: "leaf", caption: "Sharp needle-like leaves in whorls of three" },
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Juniperus_communis_-_berries.jpg/800px-Juniperus_communis_-_berries.jpg", type: "fruit", caption: "Blue-black berry-like cones, take 2-3 years to ripen" }
    ]
  }
]
