import classes from "./page.module.css"
import { getMeal } from '/lib/mealsapi'
import { notFound } from "next/navigation"
import Image from "next/image"
export async function generateMetadata({ params }) {
    const meal = getMeal(params.mealSlug)
    if (meal) {
        return {
            title: meal.title,
            description: meal.summary
        }
    } else {
        return {
            title: "Page de recette inconnue",
            description: "L'URL mentionnée mène à une page inconnue"
        }
    }
}
export default async function MealsSlugDetail({ params }) {

    const { mealSlug } = await params
    const meal = await getMeal(mealSlug)
    if (!meal) {
        notFound()
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill priority />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        par <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main className={classes.main}>
                <h2>Instructions</h2>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    )
}
