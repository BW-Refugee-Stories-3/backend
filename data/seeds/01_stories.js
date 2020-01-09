
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {name: "Doaa", location: "Egypt", date: "3/5/2010", textbody: `Doaa is a 19-year-old aspiring student who was forced by the war to live a grinding existence with her family in exile.

        Without a work permit in Egypt, Doaa struggled through day shifts for low wages. As the months passed, she was getting more and more scared. One day, a motorcycle gang tried to kidnap her on the street. The war in Syria that drove her family away was in its fourth year. And the people who once welcomed them in Egypt had become weary of them.
        
        Despite all this, Doaa still had hope, because she was in love with another refugee, called Bassem. He promised to take her to safety in Europe where they would marry and build a new life. Doaa knew the risks. It was August 2014, and more than 2,000 migrants and refugees had already died crossing the Mediterranean that year. She didn’t know how to swim, but for the second time in her life, she felt she had no choice but to flee.
        
        So Bassem paid his life savings to smugglers, $2,500 each, to get them onto an old fishing boat. It was so packed with people that Doaa’s knees were bent to her chest.
        
        After two days at sea she started to get worried, and on the third day she told Bassem: “We will never reach the shore. We will all sink.”
        
        On day four, another boat approached the vessel. It was rusty and when the passengers were ordered to get on, they refused. The smugglers left angrily, and then returned to ram a hole in the side of the hull. “Let the fish eat your flesh,” they shouted, and then they laughed. Within minutes, the boat capsized and sank, with 300 people trapped below deck.
        
        “The sea went black,” said Doaa. “I heard people screaming, and water crashing. I felt like I was going to drown.” She watched the propeller cut a child to pieces. Miraculously, Bassem found a water ring. He held Doaa’s hand and treaded water. There were corpses everywhere. The 100 survivors came together in small groups and prayed for rescue.
        
        But as day turned to night and to day again, many lost hope. Doaa watched as men took off their life vests and drowned. Sensing his end was near, a Palestinian approached with his nine-month-old granddaughter, Malek. “Please take the baby,” he said. “I am very tired.” Then he gave up and let the sea take his life.`},
      {name: "Um Nawwaf", location: "Syria", date:"8/10/2013", textbody: `Um Nawwaf will never forget the day three years ago, when the shells were raining down on the family’s home in Ghouta, Syria. “My daughter was looking for a place to hide, but she fell on a rock and hit her head and since then, she has been suffering from epilepsy. That was the final straw – we simply had to move.”

      Fearful for her children, she fled to Jordan, while her husband stayed in Syria. She now lives alone with her five children in a small apartment in Mafraq Governorate.
      
      Um Nawwaf describes how hard it is to be a refugee: “I can barely afford to put a roof over my head. My son Nawwaf had to drop out of school and find a job to help me with the expenses.”
      
      Barely holding back her tears, she says: “My heart breaks every time he leaves for work. He’s only 13 years old.”
      
      For the past two years, Um Nawwaf has been receiving support from the International Committee of the Red Cross through its cash assistance programme, which is run in cooperation with the Jordan Red Crescent Society. “The money helps us pay the rent, fuel and electricity bills, in addition to buying food and other essential items. It makes our lives bearable.”
      
      Most of the Syrian refugees living in host communities in Jordan depend on aid provided by humanitarian agencies. With the protracted nature of the conflict, many of them have exhausted their savings and other assets. With the arrival of winter, the pressures of daily life can only increase.
      
      Some 3,000 Syrian families, the majority of whom are households headed by women, have been benefiting from the programme, through which they receive monthly cash installments – the amount depends on the size of the household – paid via a local bank.
      
      On average, the amount is $100 per household and is intended to cover various daily expenditures. In addition, over the four months of winter, the supported households receive four installments, each worth $150, to cover heating-related expenditure.
      
      For the Syrian refugees living in Jordan, life is a daily struggle. Humanitarian assistance makes their lives a little easier, but life is a constant mix of fear, anxiety and hope for a better future.`}
      
      ]);
    });
};
