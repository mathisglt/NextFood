const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
   {
     title: 'Burger au fromage juteux',
     slug: 'burger-au-fromage-juteux',
     image: '/images/burger.jpg',
     summary:
       'Un burger succulent avec un steak haché juteux et du fromage fondu, servi dans un pain moelleux.',
     instructions: `
       1. Préparer le steak haché :
          Mélangez 200g de viande hachée avec du sel et du poivre. Formez un steak.
 
       2. Cuire le steak :
          Chauffez une poêle avec un peu d’huile. Faites cuire le steak pendant 2-3 minutes de chaque côté, jusqu'à ce qu'il soit doré.
 
       3. Assembler le burger :
          Faites griller les moitiés du pain à burger. Placez de la laitue et de la tomate sur la moitié inférieure. Ajoutez le steak cuit et une tranche de fromage.
 
       4. Servir :
          Complétez l'assemblage avec le dessus du pain et servez chaud.
     `,
     creator: 'John Doe',
     creator_email: 'johndoe@example.com',
   },
   {
     title: 'Curry épicé',
     slug: 'curry-epice',
     image: '/images/curry.jpg',
     summary:
       'Un curry riche et épicé, infusé d’épices exotiques et de lait de coco crémeux.',
     instructions: `
       1. Couper les légumes :
          Coupez vos légumes au choix en morceaux de taille bouchée.
 
       2. Faire sauter les légumes :
          Dans une poêle avec de l’huile, faites sauter les légumes jusqu’à ce qu’ils commencent à ramollir.
 
       3. Ajouter la pâte de curry :
          Incorporez 2 cuillères à soupe de pâte de curry et faites cuire encore une minute.
 
       4. Laisser mijoter avec le lait de coco :
          Versez 500ml de lait de coco et laissez mijoter. Laissez cuire pendant environ 15 minutes.
 
       5. Servir :
          Dégustez ce curry crémeux avec du riz ou du pain.
     `,
     creator: 'Max Schwarz',
     creator_email: 'max@example.com',
   },
   {
     title: 'Raviolis faits maison',
     slug: 'raviolis-faits-maison',
     image: '/images/dumplings.jpg',
     summary:
       'Des raviolis tendres remplis de viande savoureuse et de légumes, cuits à la vapeur à la perfection.',
     instructions: `
       1. Préparer la farce :
          Mélangez de la viande hachée, des légumes râpés et des épices.
 
       2. Remplir les raviolis :
          Placez une cuillère de farce au centre de chaque pâte à ravioli. Humidifiez les bords et pliez pour sceller.
 
       3. Cuire à la vapeur :
          Disposez les raviolis dans un panier vapeur. Faites cuire pendant environ 10 minutes.
 
       4. Servir :
          Dégustez ces raviolis chauds, avec une sauce de votre choix.
     `,
     creator: 'Emily Chen',
     creator_email: 'emilychen@example.com',
   },
   {
     title: 'Mac n Cheese classique',
     slug: 'mac-n-cheese-classique',
     image: '/images/macncheese.jpg',
     summary:
       "Des macaronis crémeux et au fromage, un classique réconfortant toujours apprécié.",
     instructions: `
       1. Cuire les macaronis :
          Faites bouillir les macaronis selon les instructions de l’emballage jusqu’à ce qu'ils soient al dente.
 
       2. Préparer la sauce au fromage :
          Dans une casserole, faites fondre du beurre, ajoutez de la farine, puis versez progressivement du lait jusqu’à ce que la sauce épaississe. Incorporez le fromage râpé jusqu’à ce qu’il soit fondu.
 
       3. Mélanger :
          Mélangez la sauce au fromage avec les macaronis égouttés.
 
       4. Cuire au four :
          Transférez dans un plat allant au four, recouvrez de chapelure et faites cuire jusqu’à ce que ce soit doré.
 
       5. Servir :
          Servez chaud, garni de persil si désiré.
     `,
     creator: 'Laura Smith',
     creator_email: 'laurasmith@example.com',
   },
   {
     title: 'Pizza authentique',
     slug: 'pizza-authentique',
     image: '/images/pizza.jpg',
     summary:
       'Pizza lancée à la main avec une sauce tomate acidulée, des garnitures fraîches et du fromage fondu.',
     instructions: `
       1. Préparer la pâte :
          Pétrissez la pâte à pizza et laissez-la lever jusqu’à ce qu’elle double de volume.
 
       2. Façonner et ajouter les garnitures :
          Étalez la pâte, étalez la sauce tomate et ajoutez vos garnitures et du fromage.
 
       3. Cuire la pizza :
          Faites cuire dans un four préchauffé à 220°C pendant environ 15-20 minutes.
 
       4. Servir :
          Coupez en tranches et dégustez avec un peu de basilic frais.
     `,
     creator: 'Mario Rossi',
     creator_email: 'mariorossi@example.com',
   },
   {
     title: 'Schnitzel viennois',
     slug: 'schnitzel-viennois',
     image: '/images/schnitzel.jpg',
     summary:
       'Escalope de veau panée, dorée et croustillante, un classique autrichien.',
     instructions: `
       1. Préparer le veau :
          Aplatissez les escalopes de veau pour qu'elles aient une épaisseur uniforme.
 
       2. Paner le veau :
          Enrobez chaque escalope de farine, trempez dans des œufs battus, puis dans de la chapelure.
 
       3. Frire le schnitzel :
          Faites chauffer de l'huile dans une poêle et faites frire chaque schnitzel jusqu’à ce qu’il soit doré des deux côtés.
 
       4. Servir :
          Servez chaud avec une tranche de citron et une salade de pommes de terre ou des légumes verts.
     `,
     creator: 'Franz Huber',
     creator_email: 'franzhuber@example.com',
   },
   {
     title: 'Salade de tomates fraîches',
     slug: 'salade-de-tomates-fraiches',
     image: '/images/tomato-salad.jpg',
     summary:
       'Une salade légère et rafraîchissante avec des tomates mûres, du basilic frais et une vinaigrette acidulée.',
     instructions: `
       1. Préparer les tomates :
          Coupez des tomates fraîches et disposez-les sur une assiette.
     
       2. Ajouter les herbes et l'assaisonnement :
          Saupoudrez de basilic haché, de sel et de poivre sur les tomates.
     
       3. Assaisonner la salade :
          Arrosez d’huile d’olive et de vinaigre balsamique.
     
       4. Servir :
          Dégustez cette salade simple et savoureuse en accompagnement ou en plat léger.
     `,
     creator: 'Sophia Green',
     creator_email: 'sophiagreen@example.com',
   },
 ];
 

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
