import Link from 'next/link';
import ImageSlideshow from "/components/images/images-slideshow";
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow></ImageSlideshow>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextFood pour les passionnés de cuisine de demain</h1>
            <p>Goûtez et partagez des plats du monde entier.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Rejoignez la communauté</Link>
            <Link href="/meals">Explorez les recettes</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Comment ça fonctionne</h2>
          <p>
            NextFood est une plateforme où les passionnés de cuisine peuvent partager leurs recettes préférées avec le monde entier. C&apos;est un endroit pour découvrir de nouveaux plats et pour se connecter avec d&apos;autres amoureux de la cuisine.
          </p>
          <p>
            NextFood est un endroit pour découvrir de nouveaux plats et pour se connecter avec d&apos;autres amoureux de la cuisine.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Pourquoi NextFood ?</h2>
          <p>
            NextFood est une plateforme où les passionnés de cuisine peuvent partager leurs recettes préférées avec le monde entier. C&apos;est un endroit pour découvrir de nouveaux plats et pour se connecter avec d&apos;autres amoureux de la cuisine.
          </p>
          <p>
            NextFood est un endroit pour découvrir de nouveaux plats et pour se connecter avec d&apos;autres amoureux de la cuisine.
          </p>
        </section>
      </main>
    </>
  );
}