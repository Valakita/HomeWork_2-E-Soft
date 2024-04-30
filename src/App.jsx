import { MyProfile } from './components/MyProfile'
import Gosling from './assets/images/gosling.jpg'
import { MyCompetence } from './components/MyCompetence'
import { NeccesaryCompetence } from './components/NeccesaryCompetence'
import "./App.css"

function App() {
  const myCompetences = [
    {name: "С#", description: "Имею небольшие знания этого языка" },
    {name: "С++", description: "Что-то понимаю"},
    {name: "Чуть-чуть веб", description: "Могу сделать домик"},
    {name: "Python", description: "Бее"},
  ];

  const nessCompetences = [
    {name: "Typescript"},
    {name: "NodeJs"}, 
    {name: "JavaScript"}, 
    {name: "React"}, 
    {name: "Docker"}, 
    {name: "PostgreeSQL"}, 
    {name: "Тестирование"}, 
    {name: "Умение рабоатать с git"}, 
    {name: "Умение делать разметку"}, 
    {name: "Умение работать в команде"},     
  ];

  const myCompetence = myCompetences.map(competence => (
    <MyCompetence nameCompetence={competence.name} description={competence.description} />
  ))
 
  const nessCompetence = nessCompetences.map(competence => (
    <NeccesaryCompetence neccCompetence={competence.name}/>
  ))
  return (
    <>
     <MyProfile 
        photo = {Gosling}
        FIO = "Лымарев Никита Витальевич"
     />
     <p>Мои компетенции</p>
     <div className='block-my-comp'>
     {myCompetence}
     </div>
     <p>Компетенции, которые я хочу изучить</p>
     <div className='block-necc-comp'>
     {nessCompetence}
     </div>
    
    </>
  )
}

export default App
