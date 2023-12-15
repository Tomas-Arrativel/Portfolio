import React from 'react';
import './projects.css';
import { Project } from '../../components/exports';

const Projects = () => {
  return (
    <div className='main__projects section__padding' id='projects'>
      <h2 className='title'>Projects</h2>
      <div className='main__projects-container'>
        <Project
          img='img/Simongame.PNG'
          title='Simon Game'
          text='This project is a challenge of a course that i made were they want you to do a game of memory called Simon game. Here you have to touch the corresponding button. To know which button you have to touch next, you will see and hear a button that you will have to memorize and add to the rest of the buttons that the game have been telling you.'
          technologies={['HTML', 'CSS', 'Javascript', 'JQuery']}
          link='https://simon-game-tomas.netlify.app/'
          srcLink='https://github.com/Tomas-Arrativel/Web-development/tree/main/Simon%20Game%20Challenge%20Starting%20Files'
        />
        <Project
          img='img/mxarg.PNG'
          title='MX-Arg'
          text='This is a page that simulates a rental webpage of tracks and bikes for motocross based in Argentina.'
          technologies={['HTML', 'CSS', 'Javascript', 'ReactJs']}
          link='https://mxarg.vercel.app/'
          srcLink='https://github.com/Tomas-Arrativel/portfolio-pages/tree/main/MX-Arg'
        />
        <Project
          img='img/paletteheaven.PNG'
          title='Palette Heaven'
          text="This is a personal project that I created for selling websites to house-painting companies. Here, you can explore various features, including a form that sends me an email with the user's input, animated dropdown menus, and much more."
          technologies={['HTML', 'CSS', 'TypeScript', 'ReactJs']}
          link='https://palette-heaven.vercel.app/'
          srcLink='https://github.com/Tomas-Arrativel/PaletteHaven'
        />
        <Project
          img='img/forkify-app.PNG'
          title='Forkify App'
          text='In this project you will find a page that I made following a course of Jonas Schmedtmann. It includes an API that he made himself and I used it to make this page to search for recipes.'
          technologies={['HTML', 'CSS', 'Javascript', 'API']}
          link='https://forkify-tomas-arrativel.netlify.app/'
          srcLink='https://github.com/Tomas-Arrativel/Forkify-App'
        />
      </div>
    </div>
  );
};

export default Projects;
