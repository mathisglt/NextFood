import classes from "./page.module.css"
import {getMeal} from '/lib/mealsapi'
import {notFound} from "next/navigation"
import Image from "next/image"

export default async function MealsSlugDetail({ params }) {
    
    const {mealSlug} = await params
    const meal  = await getMeal(mealSlug)
    if (!meal) {
        notFound()
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        <a href={`mailto:${meal.creator_email}`}>{meal.creaton}</a>
                    </p>
                    <p className={classes.summary}>
                        <a href={`mailto:${meal.summary}`}>Summary</a>
                    </p>
                </div>

            </header>
            <main>
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