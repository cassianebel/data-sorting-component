import './App.css'
import List from './components/List'
import Button from './components/Button'
import { useState } from 'react';

const items = [
  {
    id: 'html',
    title: 'HTML',
    description: 'At its core, HTML is composed of text-based elements that represent various types of content, such as text, images, links, forms, and multimedia. These elements can be arranged and formatted using...',
    progress: 'completed',
    color: '#6EB1E4'
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'CSS is a style sheet language use to control the presentation and layout of HTML documents. It works in conjunction with HTML to define how web pages are displayed on screens, including aspects such as layout...',
    progress: 'completed',
    color: '#E4AE6E'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'JavaScript is a versatile programming language used primarily for enhancing interactivity and functionality on websites, enabling dynamic content, user interface enhancements, and interaction with...',
    progress: 'completed',
    color: '#BEE46E'
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Python is a high-level, versatile programming language known for its simplicity and readability, used extensively in web development, data analysis, artificial intelligence, scientific computing, and more...',
    progress: 'not started',
    color: '#CC6EE4'
  },
  {
    id: 'react',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces, widely used for creating interactive and dynamic web applications with reusable component, efficient rendering, and a virtual DOM for optimizing...',
    progress: 'in progress',
    color: '#6EE4E4'
  },
  {
    id: 'vue',
    title: 'Vue',
    description: 'Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications, known for its simplicity, and ease of integration, offering reactive data binding...',
    progress: 'not started',
    color: '#936EE4'
  },
  {
    id: 'angular',
    title: 'Angular',
    description: 'Angular is a TypeScript-based framework for building dynamic web application, providing tools for building scalable and maintainable single-page applications (SPAs) with features such as data binding...',
    progress: 'not started',
    color: '#E46E9C'
  },
  {
    id: 'npm',
    title: 'NPM',
    description: 'NPM, or Node Package Manager, is a package manager for JavaScript used to discover, share, and install reusable code packages, facilitating the development of JavaScript applications and managing...',
    progress: 'in progress',
    color: '#6EE479'
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? items
    : items.filter(item =>
        item.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
      <header>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input id="search" type="text" placeholder="Search" onChange={handleChange} />
        </div>
        <div>
          <Button 
            icon="fa-solid fa-table-cells-large" 
            label="card view" 
            active=""
            onClick={(e) => {
              e.target.parentElement.classList.add('active');
              document.getElementById('list-view').classList.remove('active');
              document.getElementById('list').classList.add('card');
              document.getElementById('list').classList.remove('list')
            }} />
          <Button 
            icon="fa-solid fa-table-list" 
            label="list view" 
            active="active"
            onClick={(e) => {
              e.target.parentElement.classList.add('active');
              document.getElementById('card-view').classList.remove('active');
              document.getElementById('list').classList.add('list');
              document.getElementById('list').classList.remove('card')
              }} />
        </div>
      </header>
      <main>
        <List items={results}/>
      </main>
    </>
    
  )
}
