"use client";
export default function Error({ error }) {
    return (
        <main className="error">
            <h1>Erreur :</h1>
            <p>Erreur lors de la récupération des données des recettes, veuillez réessayer !</p>
        </main>
    )
}
