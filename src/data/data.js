const lists = {
  animals: [
    {
      name: "lion",
      pic: "https://nationaltoday.com/wp-content/uploads/2021/10/World-Lion-Day.jpg",
    },
    {
      name: "cheetah",
      pic: "https://images.theconversation.com/files/152362/original/image-20170111-6447-606129.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    },
    {
      name: "leopard",
      pic: "https://cdn.pixabay.com/photo/2019/03/27/11/28/leopard-4084772_960_720.jpg",
    },
    {
      name: "tiger",
      pic: "https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg",
    },
    {
      name: "giraffe",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/1200px-Giraffe_standing.jpg",
    },
    {
      name: "zebra",
      pic: "https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802_1280.jpg",
    },
    {
      name: "rhino",
      pic: "https://www.animalspot.net/wp-content/uploads/2022/03/Rhino.jpg",
    },
    {
      name: "hippo",
      pic: "https://i.guim.co.uk/img/media/504c47664f4a8e9540c9d600f891fb802ca26ba0/0_623_5184_3110/master/5184.jpg?width=1200&quality=85&auto=format&fit=max&s=7675db4f5e680a382e41f8362a69f49f",
    },
    {
      name: "stag",
      pic: "https://www.realtree.com/sites/default/files/content/images/open-graph/2021/imagebygiedriius-shutterstock-redstag.jpg",
    },
    {
      name: "deer",
      pic: "https://i.pinimg.com/originals/3b/67/fa/3b67fa4de5ec447d2098501b48415932.jpg",
    },
    {
      name: "fox",
      pic: "https://cdn.britannica.com/95/206395-050-02B81B30/Red-fox-Vulpes-vulpes.jpg",
    },
    {
      name: "wolf",
      pic: "https://scitechdaily.com/images/Gray-Wolf-scaled.jpg",
    },
    {
      name: "dog",
      pic: "https://5percangol.hu/images/banner/iStock-1031307536.jpg",
    },
    {
      name: "mole",
      pic: "https://housemanservices.com/wp-content/uploads/2019/10/A-Mole-is-an-Insectivore-NOT-a-Rodent.jpeg",
    },
    {
      name: "squirell",
      pic: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg",
    },
    {
      name: "badger",
      pic: "https://i.guim.co.uk/img/media/398868d7fb0a5eb03a8dfd59691979cd8f1ed4c9/0_227_2634_1581/master/2634.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=60d270fa979b941a6747bc4d80af4d04",
    },
    {
      name: "elephant",
      pic: "https://upload.wikimedia.org/wikipedia/commons/9/98/Elephas_maximus_%28Bandipur%29.jpg",
    },
    {
      name: "bear",
      pic: "https://www.thoughtco.com/thmb/yYKAcOWJraMq8udYTEzxO_I56nI=/3437x2578/smart/filters:no_upscale()/getty-brown-bear-56afcf215f9b58b7d01d5195.jpg",
    },
    {
      name: "panda",
      pic: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    },
    {
      name: "horse",
      pic: "https://702967.smushcdn.com/1195915/wp-content/uploads/2021/05/woodrow-rearing-square.jpg?lossy=1&strip=1&webp=1",
    },
    {
      name: "beawer",
      pic: "https://cdn.vox-cdn.com/thumbor/Rtw2EB-d56Jq95wESvPvLXffdhk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23892559/GettyImages_1160279312.jpg",
    },
    {
      name: "shark",
      pic: "https://i.natgeofe.com/n/9de7a624-35b6-4601-b25e-3f70aa0fc8a5/01-og-sharks-you-never-heard-of-nationalgeographic_2641251_4x3.jpg",
    },
    {
      name: "whale",
      pic: "https://divemagazine.com/wp-content/uploads/shutterstock_777856891.jpeg",
    },
    {
      name: "dolphin",
      pic: "https://www.americanoceans.org/wp-content/uploads/2022/03/What-Are-The-Different-Types-of-Dolphins.jpg",
    },
    {
      name: "orca",
      pic: "https://images.newscientist.com/wp-content/uploads/2020/12/11153312/orca-killer-whale-a2c8ec_web.jpg",
    },
    {
      name: "crocodile",
      pic: "https://i.natgeofe.com/n/12ceea3c-bb84-4ea9-b0aa-5c39d6ba46d8/01-nile-crocodile-florida.jpg",
    },
    {
      name: "mouse",
      pic: "https://images.newscientist.com/wp-content/uploads/2022/08/05110332/SEI_117845485.jpg",
    },
    {
      name: "snake",
      pic: "https://www.hnp.hu/uploads/files/termeszetvedelem/natura2000/fajt%C3%A1r/Keresztes%20vipera_Gel%C3%A9nes_2018.05.23_IMG_4610-3_Habarics%20B%C3%A9la.jpg",
    },
    { name: "snail", pic: "https://cdn.hswstatic.com/gif/snail-shell.jpg" },
    {
      name: "butterfly",
      pic: "https://www.iucn.org/sites/default/files/2022-07/3_monarch-butterfly_-joe-schelling_compressed-for-web.jpg",
    },
    {
      name: "ladybird",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Seven-spot_ladybird_2.jpg/1280px-Seven-spot_ladybird_2.jpg",
    },
    {
      name: "stag beetle",
      pic: "https://i0.wp.com/www.questfornectar.com/wp-content/uploads/2019/06/Untitled-design-5.png?fit=1080%2C1080",
    },
    {
      name: "frog",
      pic: "https://www.aquariumofpacific.org/images/made_new/images-exhibits-Magnificent_Tree_Frog_900_600_q85.jpg",
    },
    {
      name: "turtle",
      pic: "https://patch.com/img/cdn20/users/22994611/20220630/012342/styles/patch_image/public/box-turtle-pb-002___30132141100.jpg",
    },
    {
      name: "bison",
      pic: "https://media.wired.com/photos/60c3b3bf2d6c8f62d5fc4e2e/125:94/w_2019,h_1518,c_limit/Science-Bison-Ecosystem-1149637216.jpg",
    },
    {
      name: "hedgehog",
      pic: "https://img.freepik.com/free-photo/cute-baby-hedgehog-closeup-wood-with-black-background_488145-1557.jpg?w=2000",
    },
    {
      name: "gorilla",
      pic: "https://cdn.pixabay.com/photo/2021/06/13/13/48/gorilla-6333406_640.jpg",
    },
    {
      name: "kangaroo",
      pic: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2021-04/kangaroos-536082.jpg?h=e899893f&itok=6S6Ze0Km",
    },
    {
      name: "koala",
      pic: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg",
    },
    {
      name: "chimpanzee",
      pic: "https://janegoodall.ca/wp-content/uploads/2022/02/AP0454-09-Kabi-scaled-e1645026014525.jpg",
    },
    {
      name: "lynx",
      pic: "https://www.euronatur.org/fileadmin/_processed_/b/a/csm_Luchs_sitzt_auf_Fels-Christof_Wermter__f42473f156.jpg",
    },
    {
      name: "polar bear",
      pic: "https://static01.nyt.com/images/2022/04/22/arts/polar1/merlin_205535493_b0ddb701-76e0-4db4-8ef1-d30a9536ed14-superJumbo.jpg",
    },
    {
      name: "seal",
      pic: "https://images.unsplash.com/photo-1565413294262-fa587c396965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhbHN8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "boar",
      pic: "https://rewildingbritain.imgix.net/images/boar1_sh.jpg?auto=format&crop=focalpoint&domain=rewildingbritain.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1125&ixlib=php-3.3.1&q=82&usm=20&w=2000",
    },
    {
      name: "bat",
      pic: "https://www.news-medical.net/images/news/ImageForNews_703995_16444090644658724.jpg",
    },
    {
      name: "sheep",
      pic: "https://static.wikia.nocookie.net/animals/images/b/ba/Sheep.jpg/revision/latest?cb=20190209033122",
    },
    {
      name: "goat",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Domestic_goat_feeding_on_capeweed.jpg/1200px-Domestic_goat_feeding_on_capeweed.jpg",
    },
    {
      name: "bull",
      pic: "https://tenistur.com/wp-content/uploads/2020/06/image.png",
    },
    {
      name: "lizard",
      pic: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Lacerta_vivipara_1_%28Marek_Szczepanek%29.jpg",
    },
    {
      name: "chameleon",
      pic: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Indian_chameleon_From_Kanakpura%2C_Karnataka.jpg",
    },
  ],
  cars: [],
  birds: [
    { name: "széncinke", pic: "" },
    { name: "harkály", pic: "" },
    { name: "csuszka", pic: "" },
    { name: "vörösbegy", pic: "" },
    { name: "tengelic", pic: "" },
    { name: "pinty", pic: "" },
    { name: "tőkés réce", pic: "" },
    { name: "szürkegém", pic: "" },
    { name: "kócsag", pic: "" },
    { name: "kormorán", pic: "" },
    { name: "gólya", pic: "" },
    { name: "kékcinke", pic: "" },
    { name: "őszapó", pic: "" },
    { name: "énekes rigó", pic: "" },
    { name: "veréb", pic: "" },
    { name: "fecske", pic: "" },
    { name: "sárgarigó", pic: "" },
    { name: "szajkó", pic: "" },
    { name: "szarka", pic: "" },
    { name: "varjú", pic: "" },
    { name: "egerészölyv", pic: "" },
    { name: "parlagi sas", pic: "" },
    { name: "hattyú", pic: "" },
    { name: "nagy bukó", pic: "" },
    { name: "vörös vércse", pic: "" },
    { name: "szalakóta", pic: "" },
    { name: "gyurgyalag", pic: "" },
    { name: "jégmadár", pic: "" },
    { name: "barázdabillegető", pic: "" },
    { name: "rozsdafarkú", pic: "" },
    { name: "feketerigó", pic: "" },
    { name: "fekete gólya", pic: "" },
    { name: "zöld küllő", pic: "" },
    { name: "fácán", pic: "" },
    { name: "fülesbagoly", pic: "" },
    { name: "kuvik", pic: "" },
    { name: "gyöngybagoly", pic: "" },
    { name: "sólyom", pic: "" },
    { name: "keselyű", pic: "" },
    { name: "dankasirály", pic: "" },
    { name: "ezüstsirály", pic: "" },
    { name: "póling", pic: "" },
    { name: "lile", pic: "" },
  ],
  flags: [
    { name: "HU", pic: "" },
    { name: "SK", pic: "" },
    { name: "DE", pic: "" },
    { name: "FR", pic: "" },
    { name: "IT", pic: "" },
    { name: "GB", pic: "" },
    { name: "USA", pic: "" },
    { name: "CAN", pic: "" },
    { name: "RO", pic: "" },
    { name: "PL", pic: "" },
    { name: "UA", pic: "" },
    { name: "SP", pic: "" },
    { name: "POR", pic: "" },
  ],
  transportation: [
    { name: "ship", pic: "" },
    { name: "plane", pic: "" },
    { name: "canoe", pic: "" },
    { name: "kayak", pic: "" },
    { name: "sail boat", pic: "" },
    { name: "car", pic: "" },
    { name: "bus", pic: "" },
    { name: "train", pic: "" },
    { name: "tram", pic: "" },
    { name: "truck", pic: "" },
    { name: "motorboat", pic: "" },
    { name: "jet ski", pic: "" },
    { name: "ferry", pic: "" },
    { name: "helicopter", pic: "" },
  ],
  cartoon: [
    { name: "mazsola", pic: "" },
    { name: "tádé", pic: "" },
    { name: "manócska", pic: "" },
    { name: "rumcájsz", pic: "" },
    { name: "törpapa", pic: "" },
    { name: "hókuszpók", pic: "" },
    { name: "vilkó", pic: "" },
    { name: "lile", pic: "" },
    { name: "sulyom", pic: "" },
    { name: "táltos", pic: "" },
    { name: "pallasz", pic: "" },
    { name: "babaróka", pic: "" },
    { name: "simba", pic: "" },
    { name: "timon&pumba", pic: "" },
    { name: "rafiki", pic: "" },
    { name: "zazu", pic: "" },
    { name: "mcqueen", pic: "" },
    { name: "mátyás", pic: "" },
    { name: "frakk", pic: "" },
    { name: "maugli", pic: "" },
    { name: "bagira", pic: "" },
    { name: "balu", pic: "" },
  ],
  myths: [
    {
      name: "pegasus",
      pic: "https://www.altomdata.dk/wp-content/uploads/2021/07/Pegasus-hesten_Web.jpg",
    },
    {
      name: "minotaur",
      pic: "https://images.squarespace-cdn.com/content/v1/529e6f58e4b0f61963b40f53/1516967465635-62G0KG5UV7O2M3BNB5W7/min.png?format=1000w",
    },
    {
      name: "centaur",
      pic: "https://www.worldanvil.com/media/cache/cover/uploads/images/be7a7a872c0dd71cc4307f3aa05e7028.jpg",
    },
    {
      name: "medusa",
      pic: "https://miro.medium.com/max/620/0*zNiaGBEpcOQSBRRY.jpg",
    },
    {
      name: "giant",
      pic: "https://static.wikia.nocookie.net/harrypotter/images/4/4f/PottermoreGiantClutchingDeerConceptArt_-_cropped.png/revision/latest/top-crop/width/360/height/360?cb=20151216132944",
    },
    {
      name: "cyclops",
      pic: "https://static.wikia.nocookie.net/villains/images/3/3f/CyclopsNew.jpg/revision/latest?cb=20201114191137",
    },
    {
      name: "dragon",
      pic: "https://static.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg/revision/latest/scale-to-width-down/1200?cb=20160809235604",
    },
    {
      name: "hydra",
      pic: "http://images2.wikia.nocookie.net/__cb20130808000956/powerlisting/images/6/60/Hydra2.jpg",
    },
    {
      name: "cerberos",
      pic: "https://i1.sndcdn.com/artworks-alOkhAoOQIC0hBtb-yyYYpw-t500x500.jpg",
    },
    {
      name: "unicorn",
      pic: "https://static.posters.cz/image/750/plakatok/anne-stokes-forest-unicorn-i103392.jpg",
    },
    {
      name: "werewolf",
      pic: "https://static.wikia.nocookie.net/mythology/images/4/4b/Werewolf-2.jpg/revision/latest?cb=20201105081036",
    },
    {
      name: "vampire",
      pic: "https://img.freepik.com/premium-vector/dracula-art_43623-421.jpg?w=2000",
    },
    {
      name: "witch",
      pic: "https://cdn.pixabay.com/photo/2013/07/13/01/12/witch-155291__480.png",
    },
    {
      name: "wizard",
      pic: "https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png",
    },
    {
      name: "angel",
      pic: "https://thumbs.dreamstime.com/b/archangel-michael-armor-flaming-sword-shield-flying-feathered-wings-hell-d-render-painting-150709934.jpg",
    },
    {
      name: "gryphon",
      pic: "https://i.pinimg.com/736x/4c/84/d0/4c84d030633a02f4e4ffc0df4202905d--griffons-fantasy.jpg",
    },
    {
      name: "sphynx",
      pic: "https://static.wikia.nocookie.net/the-demonic-paradise/images/2/2b/Serra_Sphinx_640.jpg/revision/latest?cb=20161201080025",
    },
    {
      name: "salamander",
      pic: "https://static.wikia.nocookie.net/mythology/images/0/0b/Salamander.jpg/revision/latest/top-crop/width/360/height/450?cb=20180403152030",
    },
    {
      name: "faun",
      pic: "https://alchetron.com/cdn/faun-32f38958-7dce-4395-8450-d3df1364050-resize-750.jpeg",
    },
    {
      name: "harpy",
      pic: "https://i.pinimg.com/originals/6f/46/e2/6f46e242927a223cda71af0a7542d299.jpg",
    },
    {
      name: "phoenix",
      pic: "https://i.pinimg.com/736x/ce/0a/23/ce0a2348535173e7dd7b3ea7282337a2--phoenix-mythology-mythology-tattoos.jpg",
    },
    {
      name: "manticore",
      pic: "https://i.pinimg.com/736x/51/60/a0/5160a041a72785dcb92a618cb83d5718.jpg",
    },
    {
      name: "chymera",
      pic: "https://qph.cf2.quoracdn.net/main-qimg-b5207f0d91f9624fe6f29e671d005db0-pjlq",
    },
    {
      name: "ent",
      pic: "https://static.wikia.nocookie.net/storm-field/images/7/73/Ent_new_design.jpg/revision/latest?cb=20180309012337",
    },
    {
      name: "mermaid",
      pic: "https://www.storynory.com/wp-content/uploads/2021/09/unwilling-mermaid-coverartx05.jpg",
    },
    {
      name: "elf",
      pic: "https://static.wikia.nocookie.net/gods_and_demons/images/1/19/6fa3d1a5ac0b8a4d60ce605cb72d748d.jpg/revision/latest/top-crop/width/360/height/450?cb=20200731205044",
    },
    {
      name: "dwarf",
      pic: "https://i.pinimg.com/originals/5c/f5/5d/5cf55d26ee2aaab17264986db92c659f.jpg",
    },
    {
      name: "hobbit",
      pic: "https://wikifoundryimages.s3.amazonaws.com/YiyA30DQmOBzLkmXx3XYKw204215",
    },
    {
      name: "goblin",
      pic: "https://cdn.create.vista.com/api/media/small/374720208/stock-photo-digital-painting-goblin-character-holding",
    },
    { name: "troll", pic: "https://i.imgur.com/BpZTpAg.jpeg" },
    {
      name: "orc",
      pic: "https://static.wikia.nocookie.net/totalwar-ar/images/1/1f/Orc.jpeg/revision/latest/scale-to-width-down/814?cb=20180616162738",
    },
    {
      name: "fairy",
      pic: "http://images6.fanpop.com/image/photos/43900000/Fairy-fairies-43955452-1000-1000.jpg",
    },
    {
      name: "jinn",
      pic: "https://i.pinimg.com/originals/a6/20/5a/a6205a523156cf6d77a22e591b739e3f.png",
    },
    {
      name: "leprechaun",
      pic: "https://i.pinimg.com/originals/ac/97/02/ac9702e7ebf32b53abfd0ba3cf8202d5.png",
    },
    {
      name: "yeti",
      pic: "https://img.freepik.com/free-vector/hand-drawn-yeti-abominable-snowman-illustration_52683-57875.jpg?w=2000",
    },
    {
      name: "jackalope",
      pic: "https://64.media.tumblr.com/7beaa9559818b68f68802e66efa6cc68/d74ad61dad0d1fb9-ca/s1280x1920/2e8b3776b4f0ed477a77651e326ab2d72f38c7b3.jpg",
    },
  ],
};

export default lists;
