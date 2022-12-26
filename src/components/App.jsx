import React from 'react';
import { List } from './List/List';
import Picture from '../images/picture.png'
import Line from '../images/Line.png'
import Portray from '../images/Boy.png'
import css from '../styles/app.module.css';
import Logo from '../images/Logo.png'


export class App extends React.Component {
  state={
    followers: 100500
   }

   onButtonClick =() => {
    if (this.state.followers===100500) { this.setState({ 
      followers: this.state.followers + 1
    })
  } else {
    this.setState({ 
      followers: this.state.followers - 1
  })}
  }

  addItem() {
    let items = JSON.parse(localStorage.getItem('BtnActive'))
    items.push()
    localStorage.setItem('BtnActive', JSON.stringify(items))
  }
  
  render() {
  return (
    <section className={css.wrapper}>
    <div className={css.card}>
      <img src={Logo} alt="Logo" className={css.logo} />
      <img src={Picture} alt="Background" className={css.picture}/>
      <img src={Line} alt="" className={css.line} />
      <img src={Portray} alt="" className={css.portray}/>
<List followers={this.state.followers}/>
{this.state.followers===100500 ? <button type="button" className={css.button} onClick={this.onButtonClick}> Follow </button> : <button type="button" className={css.btn__active} onClick={this.onButtonClick}> Following </button> }
</div>  
</section>  
  );

}
};
