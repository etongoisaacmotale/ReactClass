import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultHome from './assets/Components/default/DefaultHome';
import Home from './assets/Components/home/Home';
import Header from './assets/Components/header/Header';
import Cards from './assets/Components/cards/Cards';
import Table from './assets/Components/table/Table';
import Footer from './assets/Components/footer/Footer';
import NotFound from './assets/Components/error/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTitle: ''
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(newTitle) {
    this.setState({ homeTitle: newTitle });
  }

  getCardData() {
    const price = ['$0/mo', '$15/mo', '$29/mo'];
    const features = [
      ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      ['20 users included', '10 GB of storage', 'Priority email support', 'Help center access'],
      ['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access']
    ];
    const button = ['Sign In', 'Get started', 'Contact Us'];

    return ['Free', 'Pro', 'Enterprise'].map((type, index) => ({
      plan: type,
      price: price[index],
      features: features[index].join('\n'),
      buttonText: button[index]
    }));
  }

  render() {
    const cardData = this.getCardData();
  
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
  
          <Routes>
            <Route path="/" element={<DefaultHome />} />
            <Route
              path="/home"
              element={
                <>
                  <Home price={this.state.homeTitle} />
                  <div className="row">
                    {cardData.map((card, index) => (
                      <div className="col-md-4" key={index}>
                        <Cards
                          plan={card.plan}
                          price={card.price}
                          features={card.features}
                          buttonText={card.buttonText}
                          onCardClick={this.handleCardClick}
                        />
                      </div>
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/plans" element={<Cplan />} />
            <Route path="/table" element={<Table />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
  
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;


