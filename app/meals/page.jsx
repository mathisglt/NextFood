import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from "/components/meals/meals-grid";
import LoadingPageMeals from './loadingMeals';
import { getMeals } from "/lib/mealsapi"
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export const metadata = {
    title: 'Meals',
    description: 'Browse meals shared by the community.',
};

export default function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Des plats délicieux, créés <span className={classes.highlight}>par vous</span>
                </h1>
                <p>
                    Choisissez votre recette préférée et cuisinez-la vous-même. C&apos;est simple et amusant.
                </p>
                <p className={classes.cta}><Link href='/meals/share'>Partagez la vôtre</Link></p>
            </header>

            <main className={classes.main}>
                <Suspense fallback={<LoadingPageMeals />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}