import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from "/components/meals/meals-grid";
import LoadingPageMeals from './loadingMeals';
import {getMeals } from "/lib/mealsapi"
import { Suspense } from 'react';

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>
}

export const metadata = {
    title: 'Meals',
    description: 'Browse meals shared by the community.',
  };

export default  function MealsPage(){

    return(
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favorite recipe and cook it yourself. It is easy and fun.
            </p>
            <p className={classes.cta}><Link href='/meals/share'>Share yours</Link></p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<LoadingPageMeals />}>
                <Meals/>
            </Suspense>
        </main>
        </>
    )
}