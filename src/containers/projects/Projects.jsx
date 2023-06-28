import React from 'react';
import './projects.css';
import { Project } from '../../components/exports';

const Projects = () => {
  return (
    <div className='main__projects section__padding' id='projects'>
      <h2>Projects</h2>
      <div className='main__projects-container'>
        <Project
          img='img/tindog.PNG'
          title='TinDog'
          text='This page is trying to simulate something like tinder but for dogs. here you can find animations, and some components from bootstrap. I copied this page from a course that i made some time ago.'
          technologies={['HTML', 'CSS', 'Bootstrap']}
        />
        <Project
          img='img/Simongame.PNG'
          title='Simon Game'
          text='This project is a challenge of a course that i made were they want you to do a game of memory called Simon game. Here you have to touch the corresponding button. To know which button you have to touch next, you will see and hear a button that you will have to memorize and add to the rest of the buttons that the game have been telling you.'
          technologies={['HTML', 'CSS', 'Javascript', 'JQuery']}
        />
        <Project
          img='img/fakebank.PNG'
          title='Fake Bank'
          text="In this one, you will find a page that wants you to put an user and a pin. When you put them (i'll provide you with the accounts), you will find that you can ask for loans, transfer money to other account and let you delete de account."
          technologies={['HTML', 'CSS', 'Javascript']}
        />
        <Project
          img='img/forkify-app.PNG'
          title='Forkify App'
          text='In this project you will find a page that I made following a course of Jonas Schmedtmann. It includes an API that he made himself and I used it to make this page to search for recipes.'
          technologies={['HTML', 'CSS', 'Javascript', 'API']}
        />
      </div>
    </div>
  );
};

export default Projects;
