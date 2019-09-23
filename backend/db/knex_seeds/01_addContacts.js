exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('contacts').del(),
    knex.raw('ALTER SEQUENCE contacts_id_seq RESTART WITH 1'),
    knex('contacts').then(function() {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          first_name: 'April',
          last_name: 'Marquez',
          job_title: 'Assistant Manager',
          address: '3617 Acton Avenue, Toronto, ON M3H 4J1',
          phone_number: '416-379-1144',
          email: 'april@email.com',
          profile_picture: null,
        },
        {
          first_name: 'Betty',
          last_name: 'Wilber',
          job_title: 'Marketing Strategist',
          address: '1786 Brant Ave, Gift Lake, AB T1T 1T1',
          phone_number: '305-667-2459',
          email: 'betty@email.com',
          profile_picture: null,
        },
        {
          first_name: 'Connor',
          last_name: 'Jones',
          job_title: 'Photographer',
          address: '2824 Highland Drive, Milwaukee, WI 53202',
          phone_number: '920-646-8927',
          email: 'connor@email.com',
          profile_picture: null,
        },
        {
          first_name: 'Kelly',
          last_name: 'Samaniego',
          job_title: 'Recruiter',
          address: '1491 Hardy Street, Kelowna, BC V1Y 8H2',
          phone_number: '250-808-9499',
          email: 'kelly@email.com',
          profile_picture: null,
        },
        {
          first_name: 'Lea',
          last_name: 'Tirado Paez',
          job_title: 'Financial Manager',
          address: '198 5th Avenue, Brownvale, AB T0H 0L',
          phone_number: '780-597-3964',
          email: 'lea@email.com',
          profile_picture: null,
        },
        {
          first_name: 'Marcus',
          last_name: 'Banks',
          job_title: 'Travel Clerk',
          address: '650 Maria St, Burlington, ON L7R 2G6',
          phone_number: '905-333-3066',
          email: 'marcus@email.com',
          profile_picture: null,
        },
      ]);
    }),
  ]);
};