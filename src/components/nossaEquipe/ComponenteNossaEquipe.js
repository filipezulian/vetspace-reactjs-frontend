import React from 'react'
import styles from "./nossaEquipe.module.css"


const ComponenteNossaEquipe = () => {
  const photos = ["bombadao.png", "buldogFrances.png", "corgi.png", "principe.png", "lizzard.png", "snake.png"]
  const randomPhoto = photos[Math.floor(Math.random() * 6)]

  return (
    <div className={styles.cardEquipe}>
      <img src={`./funcPhotos/${randomPhoto}`} height="100px" width="100px"></img>
      <span className={styles.conteudoText}>Filipe Zulian</span>
      <div className={styles.infos}>
        <span className={styles.titulo}>Dia de Plantão: </span>
        <span className={styles.conteudoText}>Sempre ;) </span>
      </div>
      <div className={styles.infos}>
        <span className={styles.titulo}>Especialização: </span>
        <span className={styles.conteudoText}>Cirurgião</span>
      </div>
      <div className={styles.infos}>
        <span className={styles.titulo}>Email: </span>
        <span className={styles.conteudoText}>filipe@email.com</span>
      </div>
      <div>
        <span className={styles.conteudoText}>Dono</span>
      </div>
    </div>
  )
}

export default ComponenteNossaEquipe