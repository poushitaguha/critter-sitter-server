exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          role: 1,
          first_name: "Dudley",
          last_name: "Maggio",
          email: "Dudley5@gmail.com",
          phone_number: "416-299-4341",
          avatar: "https://randomuser.me/api/portraits/men/27.jpg",
          postal_code: "M4L 1V3",
          street_address: "500 Kingston Rd",
          city: "Toronto",
          bio: "When I go on vacation, I miss my animals more than my friends!"
        },
        {
          role: 2,
          first_name: "Lester",
          last_name: "Heathcote",
          email: "Lester35@yahoo.ca",
          phone_number: "416-021-1358",
          avatar: "https://randomuser.me/api/portraits/men/87.jpg",
          postal_code: "M5M 1W4",
          street_address: "315 St Germain Ave",
          city: "Toronto",
          bio: "I love all animals!"
        },
        {
          role: 2,
          first_name: "Lionel",
          last_name: "Oberbrunner",
          email: "Lionel.Oberbrunner3@yahoo.ca",
          phone_number: "647-689-1178",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          postal_code: "M4V 2Z2",
          street_address: "48 St Clair Ave W",
          city: "Toronto",
          bio: "When I go on vacation, I miss my animals more than my friends!"
        },
        {
          role: 1,
          first_name: "Jude",
          last_name: "Schmidt",
          email: "Jude63@hotmail.com",
          phone_number: "416-699-4610",
          avatar: "https://randomuser.me/api/portraits/men/66.jpg",
          postal_code: "M4L 1H8",
          street_address: "1974 Queen St E",
          city: "Toronto",
          bio: "What do dogs eat at the movies? Pup-eroni pizza and pup-corn!"
        },
        {
          role: 1,
          first_name: "Haley",
          last_name: "Witting",
          email: "Haley4@yahoo.ca",
          phone_number: "416-698-9608",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          postal_code: "M4E 3B4",
          street_address: "42 Balsam Ave",
          city: "Toronto",
          bio: "No matter how bad of a day you have, pets are there to greet you and make you feel better."
        },
        {
          role: 2,
          first_name: "Simeon",
          last_name: "Homenick",
          email: "Simeon_Homenick15@hotmail.com",
          phone_number: "416-699-3028",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          postal_code: "M4L 3T6",
          street_address: "258 Waverley Rd",
          city: "Toronto",
          bio: "I love animals because they're amazing!"
        },
        {
          role: 1,
          first_name: "Reid",
          last_name: "Huel",
          email: "Reid52@yahoo.ca",
          phone_number: "416-698-9098",
          avatar: "https://randomuser.me/api/portraits/men/90.jpg",
          postal_code: "M4C 3H9",
          street_address: "101 Hillingdon Ave",
          city: "Toronto",
          bio: "Until one has loved an animal, a part of one's soul remains unawakened."
        },
        {
          role: 1,
          first_name: "Zoe",
          last_name: "Satterfield",
          email: "Zoe50@hotmail.com",
          phone_number: "416-699-0791",
          avatar: "https://randomuser.me/api/portraits/women/69.jpg",
          postal_code: "M4E 2W4",
          street_address: "24 Hammersmith Ave",
          city: "Toronto",
          bio: "My cat loves to drive my car. It's a Furrari!"
        },
        {
          role: 3,
          first_name: "Darren",
          last_name: "Collins",
          email: "Darren.Collins87@gmail.com",
          phone_number: "416-698-5039",
          avatar: "https://randomuser.me/api/portraits/men/43.jpg",
          postal_code: "M4L 3R8",
          street_address: "102 Elmer Ave",
          city: "Toronto",
          bio: "Pigs are the best! They're playful, friendly, sensitive, and intelligent animals. And they will play ball with you!"
        },
        {
          role: 1,
          first_name: "Camren",
          last_name: "Zulauf",
          email: "Camren.Zulauf19@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/men/12.jpg",
          postal_code: "M5A 2X5",
          street_address: "304 Berkeley St",
          city: "Toronto",
          bio: "The truth I do not stretch or shove When I state that the dog is full of love. I’ve also found, by actual test, A wet dog is the lovingest."
        }
      ]);
    })
    .then(function () {
      // update user records with home locations
      return knex.raw(
        'UPDATE users AS u SET \
          home_coords = c.home_coords \
        FROM (VALUES \
            (ST_SetSRID(ST_MakePoint(-79.3049261, 43.6779947), 4326), 1), \
            (ST_SetSRID(ST_MakePoint(-79.4160545, 43.7295661), 4326), 2), \
            (ST_SetSRID(ST_MakePoint(-79.3983443, 43.6878955), 4326), 3), \
            (ST_SetSRID(ST_MakePoint(-79.3035411, 43.669918), 4326), 4), \
            (ST_SetSRID(ST_MakePoint(-79.2919107, 43.6711546), 4326), 5), \
            (ST_SetSRID(ST_MakePoint(-79.3052774, 43.6743661), 4326), 6), \
            (ST_SetSRID(ST_MakePoint(-79.3222937, 43.6817611), 4326), 7), \
            (ST_SetSRID(ST_MakePoint(-79.2958054, 43.6687056), 4326), 8), \
            (ST_SetSRID(ST_MakePoint(-79.3074703, 43.6728731), 4326), 9), \
            (ST_SetSRID(ST_MakePoint(-79.3702709, 43.6602683), 4326), 10) \
        ) as c(home_coords, id) \
        where c.id = u.id'
      )
    })

};
