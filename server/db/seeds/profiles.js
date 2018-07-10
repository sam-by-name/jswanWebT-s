exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(() => {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: '10000', user_id: '1', name: 'sam', age: 29, sauce: 'Guacamole', mantra: 'Live Life, Love Life, make lemonade', favAnimal: 'Dogs', pets: 'none', children: 'none', hobbies: 'Driving, computers, building and fixing', codePhrase: 'if (you === me)  { return infinite love } else {return infinite love anyway }', favColor: 'lilac', favMovie: 'Holy Grail', favMusic: 'Mood dependent', profPic: 'https://avatars2.githubusercontent.com/u/36747880?s=400&u=f78304a2069ee6d14abdd9fee8a562bc83c6f238&v=4', bannerImg: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thewallpapers.org%2Fphoto%2F36328%2Fblue-fractals.jpg&f=1', backgroundImg: ''}
      ])
    })
}
