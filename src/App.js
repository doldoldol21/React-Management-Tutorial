//import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import { Component } from 'react';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '박철수',
  'birthday': '930421',
  'gender': '남자',
  'job': '프로그래머'
  },
  {'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김영희',
  'birthday': '891005',
  'gender': '여자',
  'job': '은행원'
  }
  ]

class App extends Component{
  render() {
    return (
      <div>
      { customers.map(c => { return ( <Customer key={c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender ={c.gender} job = {c.job} /> ) }) }
      </div>
    );
  }
}


export default App;
