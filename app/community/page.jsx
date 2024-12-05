import Image from 'next/image';

import mealIcon from '/assets/icons/meal.png';
import communityIcon from '/assets/icons/community.png';
import eventsIcon from '/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Une passion commune : <span className={classes.highlight}>la cuisine</span>
        </h1>
        <p>Rejoignez notre communauté et partagez vos recettes préférées !</p>
      </header>
      <main className={classes.main}>
        <h2>Avantages de la communauté</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Un délicieux repas" />
            <p>Partagez et découvrez des recettes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Un groupe de personnes qui cuisinent" />
            <p>Rencontrez de nouveaux amis et des passionnés</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Un groupe de personnes lors d'un événement culinaire"
            />
            <p>Participez à des événements exclusifs</p>
          </li>
        </ul>
      </main>
    </>
  );
}
