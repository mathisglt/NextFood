"use client"
import classes from './page.module.css';
import ImagePicker from "/components/meals/image-picker"
import { useActionState } from 'react'
import { shareMeal } from "/lib/addMealShare"
import MealsFormSubmit from '/components/meals/loading-button';
export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null })
  return (
    <>
      <header className={classes.header}>
        <h1>
          Partagez votre <span className={classes.highlight}>plat préféré</span>
        </h1>
        <p>Ou tout autre plat qui mérite d&apos;être partagé !</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Votre nom</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Votre email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Titre</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Résumé court</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Votre image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
